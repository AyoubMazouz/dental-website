// React Imports.
import { Outlet } from 'react-router-dom'
// Contexts Imports.
import { useAuth } from '../contexts/AuthContext'
// Pages Imports.
import LogIn from '../pages/LogIn'


export default function PrivateRoute() {
    const { currentUser } = useAuth()
    return currentUser ? <Outlet /> : <LogIn />
}