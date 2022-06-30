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
} from "firebase/auth"
import {
	updateDoc,
	setDoc,
	doc,
	getDoc,
	deleteDoc,
	deleteField,
	serverTimestamp,
	onSnapshot,
} from "firebase/firestore"
import { db, storage } from "../firebase"

const AuthContext = createContext()

export function useAuth() {
	return useContext(AuthContext)
}

export function AuthProvider({ children }) {
	const [loading, setLoading] = useState(true)
	const [currUser, setCurrUser] = useState()
	const [document, setDocument] = useState()
	const [id, setId] = useState()
	const [displayName, setDisplayName] = useState()
	const [email, setEmail] = useState()
	const [avatar, setAvatar] = useState()
	const [info, setInfo] = useState()

	const signUp = (email, password) =>
		createUserWithEmailAndPassword(auth, email, password)

	const logIn = (email, password) =>
		signInWithEmailAndPassword(auth, email, password)

	const logOut = () => signOut(auth)

	const resetPassword = (email) => sendPasswordResetEmail(auth, email)

	const updateEmail = (email) => currUser.updateEmail(auth, email)

	const updatePassword = (password) => currUser.updatePassword(auth, password)

	const updateProfile = (user, data) => _updateProfile(user, data)

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user) => {
			setCurrUser(user)
			setLoading(false)
		})

		return () => unsubscribe()
	}, [])

	const value = {
		currUser,
		logIn,
		signUp,
		logOut,
		resetPassword,
		updateEmail,
		updatePassword,
		updateProfile,
		// States.
		setInfo,
		info,
		setAvatar,
		avatar,
		setEmail,
		email,
		setDisplayName,
		displayName,
		setId,
		id,
		setDocument,
		document,
	}

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	)
}
