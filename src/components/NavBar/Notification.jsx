// React Imports.
import { useEffect, useState } from "react"
// React Router Dom Imports.
import { Link } from "react-router-dom"
// Context Imports.
import { useAuth } from "../../contexts/AuthContext"
// Hooks Imports.
import useUserData from "../../hooks/useUserData"
// Icons Imports.
import { NotificationIC, NotificationBoxIC } from "../../data/icons.data"

export default function Notification() {
	// Contexts.
	const { currentUser } = useAuth()
	const { getNotifications } = useUserData(currentUser)
	// Hooks.
	const [notifications, setNotifications] = useState({})

	useEffect(() => {
		getNotifications(setNotifications)
		console.log(notifications)
	}, [])

	return (
		<div className="dropdown dropdown-end z-20">
			<label
				tabindex="0"
				className="btn btn-ghost btn-circle text-3xl text-gray">
				<NotificationIC />
			</label>
			<ul
				tabindex="0"
				className="menu dropdown-content shadow-md rounded-md bg-light w-96 pb-4 ">
				<h4 className="mb-4 text-lg font-semibold px-2">Notifications</h4>
				{Object.keys(notifications).length > 0 ? (
					Object.values(notifications).map((notification) => (
						<Link
							to={notification.link}
							className="border-t-[3px] border-b-[3px] border-gray/25 hover:bg-bluish-gray text-base p-2">
							<div className="font-semibold py-1">{notification.title}</div>
							<div>{notification.content}</div>
							<div className="text-sm text-right">{notification.date}</div>
						</Link>
					))
				) : (
					<div className="grid place-items-center opacity-75 py-6">
						<NotificationBoxIC className="text-8xl -rotate-45" />
						<h4>You have 0 notifications</h4>
					</div>
				)}
			</ul>
		</div>
	)
}
