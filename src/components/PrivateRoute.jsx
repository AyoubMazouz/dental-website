// React Imports.
import { Navigate, Outlet, useLocation } from "react-router-dom"
// Contexts Imports.
import { useAuth } from "../contexts/AuthContext"
// Pages Imports.
import LogIn from "../pages/auth/LogIn"

// Protected Routes from unAuthenticated Users & Hide Routes after Authenticating.

export default function PrivateRoute() {
	const { currUser } = useAuth()
	const location = useLocation()
	const hiddenRoutesAfterAuth = ["/add-personal-info"]
	if (currUser) {
		if (hiddenRoutesAfterAuth.includes(location.pathname)) {
			return <Navigate to="/" />
		} else return <Outlet />
	} else return <LogIn />
}
