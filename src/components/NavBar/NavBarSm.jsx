// React Router Dom Imports.
import { useNavigate, Link } from "react-router-dom"
// Components Imports.
import Profile from "./Profile"
import Notification from "./Notification"
import Logo from "../Logo"
// Icons Imports.
import {
	YoutubeIC,
	FacebookIC,
	InstagramIC,
	LinkedinIC,
	TwitterIC,
	WhatsappIC,
	ArrowRightIC,
	CloseIC,
	MenuIC,
	RoundedProfileIC,
} from "../../data/icons.data"
// Data Imports.
import { links, socialLinks } from "../../data"
import { useState } from "react"

export default function NavBarSmall({
	currUser,
	menuState,
	setMenuState,
	scrolling,
}) {
	const getLinks = () => {
		return Object.entries(links).map(([label, link]) => {
			if (typeof link?.subLinks === "undefined")
				return (
					<Link
						to={link}
						key={label}
						onClick={() => setMenuState(false)}
						className="relative after:absolute after:-bottom-[.2rem] after:left-0 after:content-[''] after:w-0 after:h-[.2rem] after:bg-secondary after:hover:w-full after:transition-all after:duration-300 text-gray hover:text-primary font-bold pb-1 border-b-[3px] border-gray/25">
						{label}
					</Link>
				)
			else
				return (
					<li className="dropdown">
						<Link
							tabindex="0"
							to={link.link}
							className="relative after:absolute after:-bottom-[.2rem] after:left-0 after:content-[''] after:w-0 after:h-[.2rem] after:bg-secondary after:hover:w-full after:transition-all after:duration-300 text-gray hover:text-primary font-bold pb-1 border-b-[3px] border-gray/25 flex justify-between ml-[-1rem] text-base">
							{label}
							<ArrowRightIC />
						</Link>
						<ul
							tabindex="0"
							className="bg-light w-72 text-base space-y-2 py-6 px-4 rounded-md">
							{Object.entries(link.subLinks).map(([subLabel, subLink]) => (
								<Link
									to={subLink}
									key={subLabel}
									onClick={() => setMenuState(false)}
									className="relative after:absolute after:-bottom-[.2rem] after:left-0 after:content-[''] after:w-0 after:h-[.2rem] after:bg-secondary after:hover:w-full after:transition-all after:duration-300 text-gray hover:text-primary font-bold pb-1 border-b-[3px] border-gray/25">
									{subLabel}
								</Link>
							))}
						</ul>
					</li>
				)
		})
	}
	// Social Media Icons
	const getIcons = () => {
		const icons = {
			facebook: <FacebookIC className="nav-bar-icons-sm bg-facebook" />,
			youtube: <YoutubeIC className="nav-bar-icons-sm bg-youtube" />,
			twitter: <TwitterIC className="nav-bar-icons-sm bg-twitter" />,
			instagram: <InstagramIC className="nav-bar-icons-sm bg-instagram" />,
			linkedin: <LinkedinIC className="nav-bar-icons-sm bg-linkedin" />,
			whatsapp: <WhatsappIC className="nav-bar-icons-sm bg-whatsapp" />,
		}
		return Object.entries(socialLinks).map(([label, link], id) => {
			return (
				link && (
					<Link key={id} to={link} className="">
						{icons[label]}
					</Link>
				)
			)
		})
	}
	return (
		<nav
			className={`lg:hidden sticky top-0 w-full min-h-[80px] transition-all duration-500 bg-light text-gray shadow-lg z-20`}>
			<div className="flex items-center justify-between px-4 py-4">
				{/* Toggle menu */}
				<div className="dropdown">
					<label tabindex="0" className="btn btn-ghost btn-circle">
						<MenuIC className="text-3xl" />
					</label>
					<ul
						tabindex="0"
						className="menu menu-compact dropdown-content shadow-md bg-light rounded-md w-52 text-base flex flex-col space-y-2 py-6 px-4">
						{getLinks()}
					</ul>
				</div>
				{/* Logo */}
				<Logo />
				<div className="flex items-center gap-x-6 text-xl">
					{currUser ? (
						<>
							<Notification />
							<Profile />
						</>
					) : (
						<Link
							to="login"
							className="text-accent font-semibold border-[3px] border-accent rounded py-2 px-4 shadow-md hover:bg-accent hover:text-light hover:shadow-accent transition-all duration-300 flex gap-x-3 text-base items-center">
							<RoundedProfileIC className="text-3xl" />
							Se Connecter
						</Link>
					)}
				</div>
			</div>
		</nav>
	)
}
