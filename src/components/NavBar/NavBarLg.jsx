// React Router Dom Imports.
import { Link } from "react-router-dom"
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
	ArrowDownIC,
	LocationArrowIC,
	RoundedProfileIC,
	NotificationIC,
} from "../../data/icons.data"

// Data Imports.
import { links, socialLinks, info } from "../../data"

export default function NavBarFull({ currUser, scrolling }) {
	// Nav Links.
	const getLinks = (label, link, id) => {
		// Only one Link.
		if (typeof link?.subLinks === "undefined")
			return (
				<Link
					key={id}
					to={link}
					className='relative font-bold text-primary after:absolute after:-bottom-[.2rem] after:left-0 after:h-[.29rem] after:w-0 after:bg-secondary after:transition-all after:duration-300 after:content-[""] hover:text-accent after:hover:w-full'>
					{label}
				</Link>
			)
		// Link Contain more Links.
		else
			return (
				<li
					key={id}
					className="group relative cursor-pointer font-bold text-primary hover:text-accent">
					<Link to={link.link} className="flex items-center">
						{label}
						<ArrowDownIC className="-mr-2 text-2xl opacity-75" />
					</Link>
					<ul className="invisible absolute z-20 flex w-[22rem] flex-col space-y-4 rounded bg-light py-8 px-6 text-base shadow-lg group-hover:visible">
						{Object.entries(link.subLinks).map(([subLabel, subLink]) => (
							<Link
								key={subLabel}
								to={subLink}
								className="text-md relative border-b-[3px] border-gray/25 pb-2 font-bold text-gray after:absolute after:-bottom-[.2rem] after:left-0 after:h-[.2rem] after:w-0 after:bg-secondary after:transition-all after:duration-300 after:content-[''] hover:text-primary after:hover:w-full">
								{subLabel}
							</Link>
						))}
					</ul>
				</li>
			)
	}
	// Social Media Icons
	const getIcons = () => {
		const icons = {
			facebook: <FacebookIC className="nav-bar-icon group-hover:bg-facebook" />,
			youtube: <YoutubeIC className="nav-bar-icon group-hover:bg-youtube" />,
			twitter: <TwitterIC className="nav-bar-icon group-hover:bg-twitter" />,
			instagram: (
				<InstagramIC className="nav-bar-icon group-hover:bg-instagram" />
			),
			linkedin: <LinkedinIC className="nav-bar-icon group-hover:bg-linkedin" />,
			whatsapp: <WhatsappIC className="nav-bar-icon group-hover:bg-whatsapp" />,
		}
		return Object.entries(socialLinks).map(([label, link], id) => {
			return (
				link && (
					<a
						key={id}
						href={link}
						target="__blanc__"
						className="group flex h-full w-14 cursor-pointer items-center gap-x-2 bg-light transition-all duration-500 hover:w-40 [&>svg]:bg-primary [&>svg]:text-light">
						{icons[label]}
						<h5 className="hidden font-semibold capitalize text-dark group-hover:block">
							{label}
						</h5>
					</a>
				)
			)
		})
	}

	return (
		<nav
			className={`${
				scrolling
					? "transitions sticky top-0 z-20 hidden h-[80px] w-full flex-col items-center justify-center bg-light shadow-lg duration-200 lg:flex"
					: "transitions hidden h-[160px] w-full flex-col items-center justify-center bg-light duration-200 lg:flex"
			}`}>
			{!scrolling && (
				<div className="flex w-full items-center bg-primary">
					{/* Top */}
					<div className="flex h-[40px] w-full max-w-[2500px] items-center justify-around px-6 text-light">
						{/* Social Media Icons */}
						<ul className="flex h-full items-center justify-center gap-x-4 bg-primary">
							{getIcons()}
						</ul>
						{/* Address */}
						<a
							href={`mailto:${info.address[0]}`}
							className="link flex items-center text-light">
							<LocationArrowIC className="text-2xl" />
							{info.address}
						</a>
					</div>
				</div>
			)}
			{/* bottom */}
			<div className="flex h-[75%] w-full max-w-[1920px] items-center justify-between px-8">
				<ul className="flex h-full w-full items-center justify-between text-gray">
					{/* Logo */}
					<Logo />
					{/* NavLinks */}
					<div className="flex gap-x-6 text-lg">
						{Object.entries(links).map(([label, link], id) =>
							getLinks(label, link, id)
						)}
					</div>
					<div className="flex items-center gap-x-6">
						{currUser ? (
							<>
								<Notification />
								<Profile />
							</>
						) : (
							<Link
								to="login"
								className="btn flex gap-x-3 rounded border-[3px] border-accent text-accent shadow-md transition-all duration-300 hover:border-accent hover:bg-accent hover:text-light hover:shadow-accent">
								<RoundedProfileIC className="text-2xl" />
								Se Connecter
							</Link>
						)}
					</div>
				</ul>
			</div>
		</nav>
	)
}
