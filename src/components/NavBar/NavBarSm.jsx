// React Router Dom Imports.
import { Link } from "react-router-dom"
// Components Imports.
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
	MenuIC,
} from "../../data/icons.data"
// Data Imports.
import { links, socialLinks } from "../../data/links.data"

export default function NavBarSmall({ setMenuState, scrolling }) {
	const getLinks = () => {
		return Object.entries(links).map(([label, link]) => {
			if (typeof link?.subLinks === "undefined")
				return (
					<Link
						to={link}
						key={label}
						onClick={() => setMenuState(false)}
						className="relative border-b-[3px] border-gray/25 pb-1 font-bold text-gray after:absolute after:-bottom-[.2rem] after:left-0 after:h-[.2rem] after:w-0 after:bg-secondary after:transition-all after:duration-300 after:content-[''] hover:text-primary after:hover:w-full">
						{label}
					</Link>
				)
			else
				return (
					<li className="dropdown">
						<Link
							tabindex="0"
							to={link.link}
							className="relative ml-[-1rem] flex justify-between border-b-[3px] border-gray/25 pb-1 text-base font-bold text-gray after:absolute after:-bottom-[.2rem] after:left-0 after:h-[.2rem] after:w-0 after:bg-secondary after:transition-all after:duration-300 after:content-[''] hover:text-primary after:hover:w-full">
							{label}
							<ArrowRightIC />
						</Link>
						<ul
							tabindex="0"
							className="w-72 space-y-2 rounded-md bg-light py-6 px-4 text-base">
							{Object.entries(link.subLinks).map(([subLabel, subLink]) => (
								<Link
									to={subLink}
									key={subLabel}
									onClick={() => setMenuState(false)}
									className="relative border-b-[3px] border-gray/25 pb-1 font-bold text-gray after:absolute after:-bottom-[.2rem] after:left-0 after:h-[.2rem] after:w-0 after:bg-secondary after:transition-all after:duration-300 after:content-[''] hover:text-primary after:hover:w-full">
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
			className={`sticky top-0 z-20 min-h-[80px] w-full bg-light text-gray shadow-lg transition-all duration-500 lg:hidden`}>
			<div className="flex items-center justify-between px-4 py-4">
				{/* Toggle menu */}
				<div className="dropdown">
					<label tabindex="0" className="btn btn-ghost btn-circle">
						<MenuIC className="text-3xl" />
					</label>
					<ul
						tabindex="0"
						className="dropdown-content menu menu-compact flex w-52 flex-col space-y-2 rounded-md bg-light py-6 px-4 text-base shadow-md">
						{getLinks()}
					</ul>
				</div>
				{/* Logo */}
				<Logo />
			</div>
		</nav>
	)
}
