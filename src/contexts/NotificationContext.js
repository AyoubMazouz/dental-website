// React Imports.
import { createContext, useContext, useState, useEffect } from "react"
// Contexts Imports.
import { useAuth } from "./AuthContext"
// Hooks Imports.
import { getRandomString } from "../util/image"
// FireBase Imports.
import {
	updateDoc,
	setDoc,
	doc,
	deleteDoc,
	deleteField,
	serverTimestamp,
	onSnapshot,
} from "firebase/firestore"
import { db } from "../firebase"
import useUserData from "../hooks/useUserData"

const notificationContext = createContext()

export function useNotification() {
	return useContext(notificationContext)
}

// # Notification Schema:
// notifications {
//		...users,
//		currUser: {
//			...notifications,
//			id (random 16 char string): {
//				type: "danger", : string
//				content: {}, : object
//				new: "true", : bool
//				createdAt: Timestamp
//			}
// 		}
// 	}

export function NotificationProvider({ children }) {
	const [notifications, setNotifications] = useState(null)
	const [alert, setAlert] = useState(null)
	const { id } = useUserData()

	useEffect(() => {
		if (!id) return
		// Listen for changes in real time,
		// Sort by Timestamp,
		// Replace Timestamp with a String representation, return null if Timestamp doesn't exist yet.
		// Return null if there is no notifications.
		const unsubscribe = onSnapshot(doc(db, "notifications", id), (snapshot) => {
			if (snapshot.exists() && Object.keys(snapshot.data()).length > 0) {
				const result = Object.fromEntries(
					Object.entries(snapshot.data())
						.sort((a, b) =>
							a[1].createdAt?.valueOf() < b[1].createdAt?.valueOf() ? 1 : -1
						)
						.map(([id, value]) => {
							// convert Timestamp to Javascript date Object.
							const timestamp = value?.createdAt?.toDate()
							// If Timestamp doesn't exist return null to not display it.
							if (!timestamp) return [id, { ...value, createdAt: null }]
							const time = timestamp.toLocaleTimeString("fr-FR")
							const date = ` - ${timestamp.getMonth()}/${timestamp.getDate()}`
							value.createdAt = time + date
							return [id, value]
						})
				)
				setNotifications(result)
			} else setNotifications(null)
		})
		return () => unsubscribe()
	}, [id])

	const newNotification = (notification) => {
		const payload = new Object()
		notification.createdAt = serverTimestamp()
		notification.read = true
		// Random string serve as a unique key.
		payload[getRandomString(16)] = notification

		return setDoc(doc(db, "notifications", id), payload, {
			merge: true,
		})
	}

	const deleteNotification = (notificationId) =>
		updateDoc(doc(db, "notifications", id), {
			[notificationId]: deleteField(),
		})

	const deleteNotifications = () => deleteDoc(doc(db, "notifications", id))

	useEffect(() => {
		const unsubscribe = setTimeout(() => {
			setAlert(null)
		}, 8000)
		return () => clearTimeout(unsubscribe)
	}, [alert])

	const value = {
		alert,
		setAlert,
		notifications,
		newNotification,
		deleteNotification,
		deleteNotifications,
	}
	return (
		<notificationContext.Provider value={value}>
			{children}
		</notificationContext.Provider>
	)
}
