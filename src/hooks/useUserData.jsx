// FireBase Imports.
import {
	updateDoc,
	setDoc,
	doc,
	getDoc,
	deleteDoc,
	deleteField,
	serverTimestamp,
	onSnapshot,
} from "firebase/firestore"
import { updateProfile } from "firebase/auth"
import { ref, getDownloadURL, uploadString } from "firebase/storage"
import { db, storage } from "../firebase"
// Context Imports.
import { useAlert } from "../contexts/AlertContext"
import { useAuth } from "../contexts/AuthContext"
// Hooks Imports.
import {
	optimizeProfileImg,
	getRandomAvatar,
	getRandomString,
} from "../util/image"
import { useEffect } from "react"

export default function useUserData() {
	const { setAlert } = useAlert()
	const { currUser, setInfo, setAvatar, setEmail, setDisplayName, setId } =
		useAuth()

	useEffect(() => {
		if (currUser) updateAuthStates()
	}, [currUser])

	const updateAuthStates = () => {
		if (currUser)
			getDoc(doc(db, "users", currUser.uid)).then((snapshot) => {
				if (snapshot.exists()) {
					const data = snapshot.data()
					setId(data.id)
					setDisplayName(data.displayName)
					setEmail(data.email)
					setAvatar(data.avatar)
					setInfo(data.info)
				}
			})
	}

	const createNewUser = (id, displayName, email) =>
		getRandomAvatar().then((ImageURL) =>
			setDoc(doc(db, "users", id), {
				id,
				displayName,
				email,
				avatar: ImageURL,
			}).then(() => updateAuthStates())
		)

	const updateInfo = (info) =>
		new Promise((resolve, reject) => {
			updateDoc(doc(db, "users", currUser.uid), { info })
				.then(() => resolve())
				.catch((error) => reject(error))
		})

	const updateProfilePhoto = async (file) => {
		if (!file) return
		// Uses the User Id, Every time user update the Image it get overwritten.
		const fileRef = ref(storage, `photo-url/${currUser.uid}`)
		const dataURL = await optimizeProfileImg(file)
		// Use UploadString Method because the image is represented as a string.
		uploadString(fileRef, dataURL, "data_url")
			.then((snapshot) => console.log(snapshot))
			// Update PhotoURL.
			.then(async () => {
				const ImageURL = await getDownloadURL(fileRef)
				await updateDoc(doc(db, "users", currUser.uid), { avatar: ImageURL })
				updateAuthStates()
			})
	}

	const updateRandomAvatar = () =>
		new Promise((resolve) => {
			getRandomAvatar()
				.then((ImageURL) =>
					updateDoc(doc(db, "users", currUser.uid), { avatar: ImageURL }).then(
						() => updateAuthStates()
					)
				)
				.then(() => resolve())
		})

	// # Notification:
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
	const getNotifications = (callback) =>
		// Listen for changes in real time,
		// Sort by Timestamp,
		// Replace Timestamp with a String representation, return null if Timestamp doesn't exist yet.
		// Return null if there is no notifications.
		onSnapshot(doc(db, "notifications", currUser.uid), (snapshot) => {
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
				callback(result)
			} else callback(null)
		})

	const setNewNotification = (notification) => {
		const payload = new Object()
		notification.createdAt = serverTimestamp()
		notification.read = true
		// Random string serve as a unique key.
		payload[getRandomString(16)] = notification

		return setDoc(doc(db, "notifications", currUser.uid), payload, {
			merge: true,
		})
	}

	const deleteNotification = (id) =>
		updateDoc(doc(db, "notifications", currUser.uid), {
			[id]: deleteField(),
		})

	const deleteNotifications = () =>
		deleteDoc(doc(db, "notifications", currUser.uid))

	return {
		createNewUser,
		updateInfo,
		updateProfilePhoto,
		updateRandomAvatar,
		getNotifications,
		setNewNotification,
		deleteNotification,
		deleteNotifications,
	}
}
