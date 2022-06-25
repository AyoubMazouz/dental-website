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
	// Toggle Profile Menu.
	const [menuState, setMenuState] = useState(false)
	// Contexts.
	const { logOut, currUser } = useAuth()
	const { setAlert } = useAlert()
	const navigate = useNavigate()
	// Log Out.
	const handleLogOut = async () => {
		logOut()
			.then(() => {
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
		<div className="dropdown dropdown-end">
			<label tabindex="0" className="btn btn-circle">
				{/* Profile Avatar */}
				<img
					id="profile-avatar"
					src={currUser.photoURL}
					alt={currUser.displayName}
					className="h-[3.1rem] w-[3.1rem] rounded-full cursor-pointer select-none border-[3px] border-gray/25"></img>
			</label>
			<ul
				tabindex="0"
				className="menu dropdown-content px-4 py-6 bg-light rounded-md border-[1px] border-gray/25 shadow-md text-base w-[18rem]">
				<div className="border-gray/25 flex">
					{/* Profile Avatar */}
					<img
						id="profile-avatar"
						src={currUser.photoURL}
						alt={currUser.displayName}
						className="h-[4rem] w-[4rem] rounded-full cursor-pointer border-[3px] border-gray/25 select-none"></img>
					<div className="p-2 font-semibold">
						{/* Email */}
						<h5 className="text-ellipsis overflow-hidden w-[11rem] text-[.8rem]">
							{currUser.email}
						</h5>
						{/* UserName */}
						<h5>{currUser.displayName}</h5>
					</div>
				</div>
				<Link
					to="/edit-personal-info"
					className="link border-b-[3px] border-gray/20 pb-4 mt-2">
					Manager votre compte
				</Link>
				{/* Log Out */}
				<li
					onClick={handleLogOut}
					className='relative after:absolute after:-bottom-[.2rem] after:left-0 after:content-[""] after:w-0 after:h-[.2rem] after:bg-secondary after:hover:w-full after:transition-all after:duration-300 text-gray hover:text-primary font-bold pb-1 text-lg border-b-[3px] border-gray border-opacity-20 pt-2 cursor-pointer'>
					Log Out
				</li>
			</ul>
		</div>
	)
}
