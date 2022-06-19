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

export default function NavBarSmall({
	currentUser,
	menuState,
	setMenuState,
	scrolling,
}) {
	const navigate = useNavigate()
	// Nav Links.
	const getLinks = () => {
		return Object.entries(links).map(([label, link], id) => {
			return (
				<li
					key={id}
					onClick={() => {
						setMenuState(false)
						navigate(link)
					}}
					className='relative after:absolute after:-bottom-[.2rem] after:left-0 after:content-[""] after:w-0 after:h-[.2rem] after:bg-secondary after:hover:w-full after:transition-all after:duration-300 hover:text-primary text-2xl font-semibold cursor-pointer'>
					{label}
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
			className={`text-dark relative lg:hidden flex items-center justify-center transition-all duration-500 bg-light px-2 sm:px-4 md:px-8 max-w-[1920px] ${
				menuState ? "h-[100vh]" : "h-[70px]"
			} ${scrolling ? "sticky top-0 z-20" : ""}`}>
			<div className="absolute top-0 w-full flex items-center justify-between px-4 py-4">
				{/* Toggle button */}
				{/* Open */}
				<MenuIC
					onClick={() => setMenuState((prev) => !prev)}
					className={
						menuState
							? "hidden"
							: "text-4xl text-slate-700 hover:text-sky-500 trans cursor-pointer"
					}
				/>
				{/* Closed */}
				<CloseIC
					onClick={() => setMenuState((prev) => !prev)}
					className={
						menuState
							? "text-4xl text-slate-700 hover:text-sky-500 trans cursor-pointer hover:rotate-180"
							: "hidden"
					}
				/>
				{/* Logo */}
				<Logo />
				{!menuState && (
					<div className="flex items-center gap-x-6 text-xl">
						{currentUser ? (
							<>
								<Link to="/cart">
									<CartIC className="cursor-pointer text-2xl text-primary hover:text-light-blue transition-colors duration-300" />
								</Link>
								<Notification />
								<Profile />
							</>
						) : (
							<Link
								to="login"
								className="text-light-blue font-semibold border-[3px] border-light-blue rounded py-2 px-4 shadow-md hover:bg-light-blue hover:text-white hover:shadow-light-blue transition-all duration-300 flex gap-x-3 text-base">
								<RoundedProfileIC className="text-2xl" />
								Se Connecter
							</Link>
						)}
					</div>
				)}
			</div>
			{menuState && (
				<ul className="text-center py-8 mt-12">
					{/* Links */}
					<ul className="w-full flex flex-col items-center gap-y-3">
						{getLinks()}
					</ul>
					{/* Call to Action */}
					{/* Social media Icons */}
					<ul className="flex items-center justify-center flex-wrap mt-12 gap-2">
						{getIcons()}
					</ul>
				</ul>
			)}
		</nav>
	)
}
