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
	CartIC,
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
			if (link?.subLinks) {
				return (
					<details className="w-full py-2 hover:bg-accent hover:text-light text-xl font-semibold cursor-pointer flex select-none">
						<summary>{label}</summary>
						{Object.entries(link.subLinks).map(([subLabel, subLink]) => (
							<Link
								to={subLink}
								onClick={() => setMenuState(false)}
								className="hover:bg-light hover:text-accent py-1 text-lg">
								{subLabel}
							</Link>
						))}
					</details>
				)
			}

			return (
				<Link
					to={link}
					key={label}
					onClick={() => setMenuState(false)}
					className="w-full py-2 hover:bg-accent hover:text-light text-xl font-semibold cursor-pointer select-none">
					{label}
				</Link>
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
			className={`lg:hidden sticky top-0 w-full min-h-[80px] transition-all duration-500 bg-light overflow-hidden shadow-lg`}>
			<div className="flex items-center justify-between px-4 py-4">
				{/* Toggle button */}
				{menuState ? (
					<CloseIC
						onClick={() => setMenuState((prev) => !prev)}
						className="text-4xl text-slate-700 hover:text-sky-500 cursor-pointer"
					/>
				) : (
					<MenuIC
						onClick={() => setMenuState((prev) => !prev)}
						className="text-4xl text-slate-700 hover:text-sky-500 cursor-pointer"
					/>
				)}
				{/* Logo */}
				<Logo />
				<div className="flex items-center gap-x-6 text-xl">
					{!menuState &&
						(currUser ? (
							<>
								{/* <Notification /> */}
								<Profile />
							</>
						) : (
							<Link
								to="login"
								className="text-accent font-semibold border-[3px] border-accent rounded py-2 px-4 shadow-md hover:bg-accent hover:text-light hover:shadow-accent transition-all duration-300 flex gap-x-3 text-base">
								<RoundedProfileIC className="text-2xl" />
								Se Connecter
							</Link>
						))}
				</div>
			</div>
			{menuState && (
				<ul className="text-center w-full rounded-lg  border-b-2 border-light-gray/25 py-4">
					{/* Links */}
					<ul className="w-full flex flex-col text-light-gray">{getLinks()}</ul>
					{/* Call to Action */}
					{/* Social media Icons */}
					<ul className="flex items-center justify-center flex-wrap mt-6 gap-2">
						{getIcons()}
					</ul>
				</ul>
			)}
		</nav>
	)
}
