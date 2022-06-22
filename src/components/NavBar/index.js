// React Imports.
import { useState } from "react"
// Components Imports.
import Alert from "./Alert"
// Hooks Imports.
import useUserData from "../../hooks/useUserData"
// Components Imports.
import NavBarLg from "./NavBarLg"
import NavBarSm from "./NavBarSm"

export default function NavBar() {
	const { currUser } = useUserData()
	// Set Nav Width According to Scroll State.
	const [scrolling, setScrolling] = useState(false)
	// Toggle Nav Menu.
	const [menuState, setMenuState] = useState(false)
	// Trigger Nav Bar to be sticky.
	window.addEventListener("scroll", (e) => {
		if (window.scrollY > 0) setScrolling(true)
		else setScrolling(false)
	})

	const values = {
		currUser,
		menuState,
		setMenuState,
		scrolling,
	}
	return (
		<div className={scrolling ? "sticky top-0 z-20" : ""}>
			<NavBarLg {...values} />
			<NavBarSm {...values} />
			<Alert />
		</div>
	)
}
