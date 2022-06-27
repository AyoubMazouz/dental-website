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
	TrashIC,
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

	const deleteNotification = (id) => id

	return (
		<div className="dropdown-end dropdown z-20">
			<label
				tabindex="0"
				className="btn btn-ghost btn-circle text-3xl text-gray">
				<NotificationIC />
			</label>
			<ul
				tabindex="0"
				className="dropdown-content menu w-[30rem] overflow-hidden rounded-md bg-light shadow-lg">
				<div className="mb-4 flex justify-between px-2">
					<h4 className="text-lg font-semibold">Notifications</h4>
					<div className="link flex items-center gap-x-1 text-base">
						clearAll <TrashIC className="cursor-pointer text-2xl" />
					</div>
				</div>
				{Object.keys(notifications || {}).length > 0 ? (
					Object.entries(notifications).map(([id, notification]) => (
						<Notify {...{ id, deleteNotification, ...notification }} />
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

export function Notify({ id, type, content, title, date, deleteNotification }) {
	const icons = {
		success: <SuccessIC className="text-3xl" />,
		danger: <DangerIC className="text-3xl" />,
		warning: <WarningIC className="text-3xl" />,
		info: <InfoIC className="text-3xl" />,
	}
	if (["success", "info", "warning", "danger"].includes(type))
		return (
			<div
				className={`relative flex w-full items-center gap-x-2 bg-${type} py-4 pl-2 pr-10 font-semibold text-${type}-dark`}>
				<div>{icons[type]}</div>
				<div className="text-base">{content}</div>
				<div className="absolute bottom-1 right-4 text-xs">{date}</div>
				<TrashIC
					className=" absolute top-2 right-4 cursor-pointer text-2xl"
					onClick={() => deleteNotification(id)}
				/>
			</div>
		)
}
