// React Imports.
import { createContext, useContext, useState, useEffect } from "react"

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
	const [alert, setAlert] = useState(null)

	useEffect(() => {
		const unsubscribe = setTimeout(() => {
			setAlert(null)
		}, 8000)
		return () => clearTimeout(unsubscribe)
	}, [alert])

	const value = {
		alert,
		setAlert,
	}
	return (
		<notificationContext.Provider value={value}>
			{children}
		</notificationContext.Provider>
	)
}
