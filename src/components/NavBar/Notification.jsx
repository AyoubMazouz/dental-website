// React Imports.
import { useEffect, useState } from "react"
// React Router Dom Imports.
import { Link } from "react-router-dom"
// Context Imports.
import { useAuth } from "../../contexts/AuthContext"
// Hooks Imports.
import useUserData from "../../hooks/useUserData"
// Icons Imports.
import {
	NotificationIC,
	NotificationBoxIC,
	SuccessIC,
	DangerIC,
	InfoIC,
	WarningIC,
} from "../../data/icons.data"

export default function Notification() {
	// Contexts.
	const { currentUser } = useAuth()
	const { getNotifications } = useUserData(currentUser)
	// Hooks.
	const [notifications, setNotifications] = useState(null)

	useEffect(() => {
		getNotifications()
			.then((response) => response.data())
			.then((data) => setNotifications(data))
	}, [])

	return (
		<div className="dropdown-end dropdown z-20">
			<label
				tabindex="0"
				className="btn btn-ghost btn-circle text-3xl text-gray">
				<NotificationIC />
			</label>
			<ul
				tabindex="0"
				className="dropdown-content menu w-96 rounded-md bg-light pb-4 shadow-md ">
				<h4 className="mb-4 px-2 text-lg font-semibold">Notifications</h4>
				{Object.keys(notifications || {}).length > 0 ? (
					Object.entries(notifications).map(([id, notification]) => (
						<Notify {...{ id, ...notification }} />
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

export function Notify({ id, type, content, title, date }) {
	if (type === "info")
		return (
			<div className="relative flex w-full bg-info py-2 px-2 text-info-dark">
				<InfoIC className="text-3xl" />
				<div>{content}</div>
				<div>{date}</div>
			</div>
		)
}
