// React Imports.
import { useState } from "react"
// React Router Dom Imports.
import { useNavigate, Link } from "react-router-dom"
// Context Imports.
import { useAuth } from "../../contexts/AuthContext"
import { useAlert } from "../../contexts/AlertContext"
// Hooks Imports.
import useUserData from "../../hooks/useUserData"
import { useEffect } from "react"

export default function Profile() {
	// Contexts.
	const { logOut, currUser } = useAuth()
	const { setAlert } = useAlert()
	const navigate = useNavigate()
	const { setNewNotification } = useUserData()
	// Log Out.
	const handleLogOut = async () => {
		logOut()
			.then(() => {
				setNewNotification({
					type: "warning",
					title: `Goodbye`,
					content: `Goodbye ${currUser.displayName} we hope you come back to DentalCare`,
					link: "",
					date: "",
				})
				navigate("/login")
				setAlert(["info", "Logged Out"])
			})
			.catch((error) => {
				setAlert(["warning", error.message])
			})
	}

	const [_, setTemp] = useState(0)
	useEffect(() => {
		setTemp((prev) => prev + 1)
	}, [currUser.displayName, currUser.userEmail, currUser.photoURL])

	return (
		<div className="dropdown-end dropdown">
			<label tabindex="0" className="btn btn-circle">
				{/* Profile Avatar */}
				<img
					id="profile-avatar"
					src={currUser.photoURL}
					alt={currUser.displayName}
					className="h-[3.1rem] w-[3.1rem] cursor-pointer select-none rounded-full border-[3px] border-gray/25"></img>
			</label>
			<ul
				tabindex="0"
				className="dropdown-content menu w-[18rem] rounded-md border-[1px] border-gray/25 bg-light px-4 py-6 text-base shadow-md">
				<div className="flex border-gray/25">
					{/* Profile Avatar */}
					<img
						id="profile-avatar"
						src={currUser.photoURL}
						alt={currUser.displayName}
						className="h-[4rem] w-[4rem] cursor-pointer select-none rounded-full border-[3px] border-gray/25"></img>
					<div className="p-2 font-semibold">
						{/* Email */}
						<h5 className="w-[11rem] overflow-hidden text-ellipsis text-[.8rem]">
							{currUser.email}
						</h5>
						{/* UserName */}
						<h5>{currUser.displayName}</h5>
					</div>
				</div>
				<Link
					to="/edit-personal-info"
					className="link mt-2 border-b-[3px] border-gray/20 pb-4">
					Manager votre compte
				</Link>
				{/* Log Out */}
				<li
					onClick={handleLogOut}
					className='relative cursor-pointer border-b-[3px] border-gray border-opacity-20 pb-1 pt-2 text-lg font-bold text-gray after:absolute after:-bottom-[.2rem] after:left-0 after:h-[.2rem] after:w-0 after:bg-secondary after:transition-all after:duration-300 after:content-[""] hover:text-primary after:hover:w-full'>
					Log Out
				</li>
			</ul>
		</div>
	)
}
