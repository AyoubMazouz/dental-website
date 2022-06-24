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
	// Close Profile Menu if you Click Anywhere on the Screen.
	window.addEventListener("click", (e) => {
		if (["profile", "profile-avatar"].includes(e.target.id)) {
			setMenuState((prev) => !prev)
		} else if (
			menuState &&
			!["profile", "profile-avatar"].includes(e.target.id)
		) {
			setMenuState(false)
		}
	})
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
		// Profile
		<div id="profile" className="h-[3.1rem] w-[3.1rem] relative">
			{/* Profile Avatar */}
			<img
				id="profile-avatar"
				src={currUser.photoURL}
				alt={currUser.displayName}
				className="h-[3.1rem] w-[3.1rem] rounded-full cursor-pointer select-none border-[3px] border-gray/25"></img>
			{menuState && (
				<ul className="absolute z-50 top-[110%] right-0 w-[20rem] px-4 py-6 bg-light rounded-lg border-[1px] border-gray/25 flex flex-col shadow-md">
					<li className="flex gap-4 border-gray/25">
						{/* Profile Avatar */}
						<img
							id="profile-avatar"
							src={currUser.photoURL}
							alt={currUser.displayName}
							className="h-[4rem] w-[4rem] rounded-full cursor-pointer border-[3px] border-gray/25 select-none"></img>
						<div className="p-2 font-semibold">
							{/* Email */}
							<h5 className="text-ellipsis overflow-hidden w-[12rem] text-[.8rem]">
								{currUser.email}
							</h5>
							{/* UserName */}
							<h5>{currUser.displayName}</h5>
						</div>
					</li>
					<Link
						to="/edit-personal-info"
						className="link text-base border-b-[3px] border-gray/20 pb-4 mt-2">
						Manager votre compte
					</Link>
					{/* Log Out */}
					<li
						onClick={handleLogOut}
						className='relative after:absolute after:-bottom-[.2rem] after:left-0 after:content-[""] after:w-0 after:h-[.2rem] after:bg-secondary after:hover:w-full after:transition-all after:duration-300 text-gray hover:text-primary font-bold pb-2 text-lg border-b-[3px] border-gray border-opacity-20 p-2 cursor-pointer'>
						Log Out
					</li>
				</ul>
			)}
		</div>
	)
}
