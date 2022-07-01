// React Imports.
import { Outlet } from "react-router-dom"
// Contexts Imports.
import { useAuth } from "../contexts/AuthContext"
// Pages Imports.
import LogIn from "../pages/auth/LogIn"

export default function PrivateRoute() {
	const { currUser } = useAuth()
	return currUser ? <Outlet /> : <LogIn />
}
