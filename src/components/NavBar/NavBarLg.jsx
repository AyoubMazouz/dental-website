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
	PhoneIC,
	RoundedProfileIC,
	CartIC,
} from "../../data/icons.data"

// Data Imports.
import { links, socialLinks, info } from "../../data"

export default function NavBarFull({ currUser, scrolling }) {
	// Nav Links.
	const getLinks = (label, link, id) => {
		// Only one Link.
		if (typeof link.subLinks === "undefined")
			return (
				<Link
					key={id}
					to={link}
					className='relative after:absolute after:-bottom-[.2rem] after:left-0 after:content-[""] after:w-0 after:h-[.29rem] after:bg-secondary after:hover:w-full after:transition-all after:duration-300 text-primary hover:text-accent font-bold'>
					{label}
				</Link>
			)
		// Link Contain more Links.
		else
			return (
				<li
					key={id}
					className="group relative cursor-pointer text-primary hover:text-accent font-bold">
					<Link to={link.link} className="flex items-center">
						{label}
						<ArrowDownIC className="opacity-75 text-2xl -mr-2" />
					</Link>
					<ul className="absolute text-base w-[22rem] z-20 flex flex-col space-y-4 py-8 px-6 bg-light rounded shadow-lg invisible group-hover:visible">
						{Object.entries(link.subLinks).map(([label, link], id) => (
							<Link
								key={id}
								to={link}
								className='relative after:absolute after:-bottom-[.2rem] after:left-0 after:content-[""] after:w-0 after:h-[.2rem] after:bg-secondary after:hover:w-full after:transition-all after:duration-300 text-gray hover:text-primary font-bold pb-2 text-lg border-b-[3px] border-gray border-opacity-20'>
								{label}
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
						className="h-full gap-2 flex items-center w-12 hover:w-36 transition-all duration-500 cursor-pointer bg-light group [&>svg]:bg-primary [&>svg]:text-light">
						{icons[label]}
						<h5 className="hidden group-hover:block text-dark font-semibold capitalize">
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
					? "w-full sticky top-0 z-20 h-[80px] hidden lg:flex flex-col justify-center items-center bg-light shadow-lg transitions duration-200"
					: "w-full h-[160px] hidden lg:flex flex-col justify-center items-center transitions duration-200 bg-light"
			}`}>
			{!scrolling && (
				<div className="w-full bg-primary flex items-center">
					{/* Top */}
					<div className="w-full h-[40px] max-w-[2500px] px-6 flex justify-around items-center text-light">
						{/* Social Media Icons */}
						<ul className="flex items-center justify-center h-full bg-primary">
							{getIcons()}
						</ul>
						{/* Address */}
						<a
							href={`mailto:${info.address[0]}`}
							className="link text-light flex items-center">
							<LocationArrowIC className="text-2xl" />
							{info.address}
						</a>
					</div>
				</div>
			)}
			{/* bottom */}
			<div className="w-full max-w-[1920px] h-[75%] px-8 flex justify-between items-center">
				<ul className="h-full w-full flex justify-between items-center text-xl">
					{/* Logo */}
					<div className="h-full flex items-center">
						<Logo />
					</div>
					{/* NavLinks */}
					<div className="gap-x-[2rem] flex">
						{Object.entries(links).map(([label, link], id) =>
							getLinks(label, link, id)
						)}
					</div>
					<div className="flex items-center gap-x-6 text-xl">
						{currUser ? (
							<>
								<Link to="/cart">
									<CartIC className="cursor-pointer text-2xl text-primary hover:text-accent transition-colors duration-300" />
								</Link>
								{/* <Notification /> */}
								<Profile />
							</>
						) : (
							<Link
								to="login"
								className="text-accent font-semibold border-[3px] border-accent rounded py-2 px-4 shadow-md hover:bg-accent hover:text-light hover:shadow-accent transition-all duration-300 flex gap-x-3">
								<RoundedProfileIC className="text-3xl" />
								Se Connecter
							</Link>
						)}
					</div>
				</ul>
			</div>
		</nav>
	)
}
