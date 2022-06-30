// React Imports.
import { useState } from "react"
// React Router Dom Imports.
import { useNavigate, Link } from "react-router-dom"
// Context Imports.
import { useAuth } from "../../contexts/AuthContext"
import { useNotification } from "../../contexts/NotificationContext"
// Hooks Imports.
import useUserData from "../../hooks/useUserData"
import { useEffect } from "react"

export default function Profile() {
	// Contexts.
	const { logOut } = useAuth()
	const { displayName, email, avatar } = useUserData()

	const { setAlert } = useNotification()
	const navigate = useNavigate()
	const { setNewNotification } = useNotification()
	// Log Out.
	const handleLogOut = async () => {
		try {
			await logOut()
			await setNewNotification({
				type: "warning",
				title: `Goodbye`,
				content: `Goodbye ${displayName} we hope you come back to DentalCare`,
				link: "",
			})
			navigate("/login")
			setAlert(["info", "Logged Out"])
		} catch (error) {
			setAlert(["warning", error.message])
		}
	}

	const [_, setTemp] = useState(0)
	useEffect(() => {
		setTemp((prev) => prev + 1)
	}, [displayName, email, avatar])

	return (
		<div className="dropdown-end dropdown">
			<label
				tabindex="0"
				className="btn btn-circle h-16 w-16 border-2 border-gray/25">
				{/* Profile Avatar */}
				<img
					id="profile-avatar"
					src={avatar}
					alt={displayName}
					className="cursor-pointer select-none rounded-full object-cover"></img>
			</label>
			<ul
				tabindex="0"
				className="w-62 dropdown-content menu rounded-md border-[1px] border-gray/25 bg-light px-4 py-6 text-base shadow-md">
				<div className="flex border-gray/25">
					{/* Profile Avatar */}
					<img
						id="profile-avatar"
						src={avatar}
						alt={displayName}
						className="h-[4rem] w-[4rem] cursor-pointer select-none rounded-full border-[3px] border-gray/25"></img>
					<div className="p-2 font-semibold">
						{/* Email */}
						<h5 className="w-[11rem] overflow-hidden text-ellipsis text-[.8rem]">
							{email}
						</h5>
						{/* UserName */}
						<h5>{displayName}</h5>
					</div>
				</div>
				<Link
					to="/edit-personal-info"
					className="link mt-2 border-b-[3px] border-gray/20 pb-4">
					Manager votre compte
				</Link>
				{/* Log Out */}
				<li
					onClick={() => {
						handleLogOut()
						navigate("/")
					}}
					className='relative cursor-pointer border-b-[3px] border-gray border-opacity-20 pb-1 pt-2 text-lg font-bold text-gray after:absolute after:-bottom-[.2rem] after:left-0 after:h-[.2rem] after:w-0 after:bg-secondary after:transition-all after:duration-300 after:content-[""] hover:text-primary after:hover:w-full'>
					Log Out
				</li>
			</ul>
		</div>
	)
}
