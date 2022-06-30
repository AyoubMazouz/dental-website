// React Imports.
import { useEffect, useState } from "react"
// FireBase Imports.
import {
	updateDoc,
	setDoc,
	doc,
	getDoc,
	serverTimestamp,
} from "firebase/firestore"
import { ref, getDownloadURL, uploadString } from "firebase/storage"
import { db, storage } from "../firebase"
// Context Imports.
import { useAuth } from "../contexts/AuthContext"
// Hooks Imports.
import { optimizeProfileImg, getRandomAvatar } from "../util/image"

export default function useUserData() {
	const { currUser } = useAuth()
	const [document, setDocument] = useState()
	const [id, setId] = useState()
	const [displayName, setDisplayName] = useState()
	const [email, setEmail] = useState()
	const [avatar, setAvatar] = useState()
	const [info, setInfo] = useState()

	useEffect(() => {
		if (currUser) updateAuthStates()
	}, [currUser])

	const updateAuthStates = async () => {
		if (!currUser) return
		const snapshot = await getDoc(doc(db, "users", currUser.uid))
		if (snapshot.exists()) {
			const data = snapshot.data()
			setDocument(data)
			setId(data.id)
			setDisplayName(data.displayName)
			setEmail(data.email)
			setAvatar(data.avatar)
			setInfo(data.info)
		}
	}

	const createNewUser = async (id, displayName, email, imageURL) => {
		let avatar = imageURL
		if (!imageURL) {
			avatar = await getRandomAvatar()
		}
		await setDoc(doc(db, "users", id), {
			id,
			displayName,
			email,
			avatar,
			createdAt: serverTimestamp(),
		})
		updateAuthStates()
	}

	const updateInfo = (info) =>
		updateDoc(doc(db, "users", currUser.uid), { info })

	const updateProfilePhoto = async (file) => {
		if (!file) return
		// Uses the User Id, Every time user update the Image it get overwritten.
		const fileRef = ref(storage, `photo-url/${currUser.uid}`)
		const dataURL = await optimizeProfileImg(file)
		// Use UploadString Method because the image is represented as a string.
		uploadString(fileRef, dataURL, "data_url")
			.then((snapshot) => console.log(snapshot))
			// Update PhotoURL.
			.then(async () => {
				const ImageURL = await getDownloadURL(fileRef)
				await updateDoc(doc(db, "users", currUser.uid), { avatar: ImageURL })
				updateAuthStates()
			})
	}

	const updateRandomAvatar = async () => {
		const ImageURL = await getRandomAvatar()
		await updateDoc(doc(db, "users", currUser.uid), { avatar: ImageURL })
		updateAuthStates()
	}
	return {
		// Methods
		updateInfo,
		createNewUser,
		updateProfilePhoto,
		updateRandomAvatar,
		// Stats.
		displayName,
		document,
		avatar,
		email,
		info,
		id,
	}
}
