// React Imports.
import { createContext, useContext, useState, useEffect } from "react"
// Firebase Imports.
import { auth } from "../firebase"
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	sendPasswordResetEmail,
	updateProfile as _updateProfile,
} from 'firebase/auth'


const AuthContext = createContext()

export function useAuth() {
	return useContext(AuthContext)
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState()
	const [loading, setLoading] = useState(true)

	const signUp = (email, password) => createUserWithEmailAndPassword(auth, email, password)

	const logIn = (email, password) => signInWithEmailAndPassword(auth, email, password)

	const logOut = () => signOut(auth)

	const resetPassword = (email) => sendPasswordResetEmail(auth, email)

	const updateEmail = (email) => currentUser.updateEmail(auth, email)

	const updatePassword = (password) => currentUser.updatePassword(auth, password)

	const updateProfile = (user, data) => _updateProfile(user, data)

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			setCurrentUser(user)
			setLoading(false)
		})

		return unsubscribe
	}, [])

	const value = {
		currentUser,
		logIn,
		signUp,
		logOut,
		resetPassword,
		updateEmail,
		updatePassword,
		updateProfile,
	}

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	)
}