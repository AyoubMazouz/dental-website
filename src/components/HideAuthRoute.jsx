// React Imports.
import { Navigate, Outlet, useLocation } from "react-router-dom"
// Contexts Imports.
import { useAuth } from "../contexts/AuthContext"
// Pages Imports.
import LogIn from "../pages/auth/LogIn"

// This components hides Login & SignUp Routes When User is Authenticated.

export default function HideAuthRoute() {
	const { currUser } = useAuth()
	const location = useLocation()
	const hiddenRoutesAfterAuth = ["/login", "/signup"]
	if (currUser) {
		if (hiddenRoutesAfterAuth.includes(location.pathname)) {
			return <Navigate to="/" />
		} else return <Outlet />
	} else return <LogIn />
}
