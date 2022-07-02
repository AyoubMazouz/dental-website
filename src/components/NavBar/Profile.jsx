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
	const { newNotification } = useNotification()

	const LogOut = async () => {
		try {
			await logOut()
			await newNotification({
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
				className="btn btn-circle h-12 w-12 border-2 border-gray/25">
				{/* Profile Avatar */}
				<img
					id="profile-avatar"
					src={avatar}
					alt={displayName}
					className="cursor-pointer select-none rounded-full object-cover"></img>
			</label>
			<ul
				tabindex="0"
				className="dropdown-content menu w-80 rounded-md border-[1px] border-gray/25 bg-light px-4 py-6 shadow-md">
				<div className="flex border-gray/25">
					{/* Profile Avatar */}

					<img
						id="profile-avatar"
						src={avatar}
						alt={displayName}
						onClick={() => navigate("/edit-personal-info")}
						className="border-[3px]border-gray/25 h-16 w-16 cursor-pointer select-none rounded-full"
					/>
					<div className="p-2 font-semibold">
						{/* Email */}
						<h5 className="w-56 overflow-hidden text-ellipsis text-[.8rem]">
							{email}
						</h5>
						{/* UserName */}
						<h5 className="w-56 overflow-hidden text-ellipsis text-[.8rem]">
							{displayName}
						</h5>
					</div>
				</div>
				<Link
					to="/edit-personal-info"
					className="link mt-2 border-b-[3px] border-gray/20 pb-4">
					Manager votre compte
				</Link>
				{/* Log Out */}
				<li
					onClick={LogOut}
					className='relative cursor-pointer border-b-[3px] border-gray border-opacity-20 pb-1 pt-2  font-bold text-gray after:absolute after:-bottom-[.2rem] after:left-0 after:h-[.2rem] after:w-0 after:bg-secondary after:transition-all after:duration-300 after:content-[""] hover:text-primary after:hover:w-full'>
					Log Out
				</li>
			</ul>
		</div>
	)
}
