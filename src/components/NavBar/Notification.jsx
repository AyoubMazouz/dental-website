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
				className="dropdown-content menu w-96 rounded-md bg-light pb-4 shadow-md ">
				<h4 className="mb-4 px-2 text-lg font-semibold">Notifications</h4>
				{Object.keys(notifications).length > 0 ? (
					Object.values(notifications).map((notification) => (
						<Link
							to={notification.link}
							className="border-t-[3px] border-b-[3px] border-gray/25 p-2 text-base hover:bg-bluish-gray">
							<div className="py-1 font-semibold">{notification.title}</div>
							<div>{notification.content}</div>
							<div className="text-right text-sm">{notification.date}</div>
						</Link>
					))
				) : (
					<div className="grid place-items-center py-6 opacity-75">
						<NotificationBoxIC className="-rotate-45 text-8xl" />
						<h4>You have 0 notifications</h4>
					</div>
				)}
			</ul>
		</div>
	)
}
