// React Imports.
import { useState, useEffect } from "react"
// FireBase Imports.
import { updateDoc, setDoc, doc, getDoc, arrayUnion } from "firebase/firestore"
import { updateProfile } from "firebase/auth"
import { ref, getDownloadURL, uploadString } from "firebase/storage"
import { db, storage } from "../firebase"
// Context Imports.
import { useAlert } from "../contexts/AlertContext"
import { useAuth } from "../contexts/AuthContext"
// Hooks Imports.
import {
	optimizeProfileImg,
	getRandomAvatar,
	getRandomString,
} from "../util/image"

export default function useUserData() {
	const { setAlert } = useAlert()
	const { currUser } = useAuth()

	const createNewUser = (uid = currUser.uid) =>
		setDoc(doc(db, "users", uid), {
			fullName: "",
			phone: "",
			region: "",
			city: "",
			zip: "",
			address1: "",
			address2: "",
		})

	const UpdateUserInfo = (info) =>
		updateDoc(doc(db, "users", currUser.uid), info)

	const getUserInfo = async () => getDoc(doc(db, "users", currUser.uid))

	const getNotifications = async () =>
		getDoc(doc(db, "notifications", currUser.uid))

	const setNewNotification = async (notification, uid = currUser.uid) => {
		const payload = new Object()
		payload[getRandomString(16)] = notification
		setDoc(doc(db, "notifications", uid), payload, { merge: true })
	}

	const updateProfilePhoto = (file) => {
		if (!file) return
		// Uses the User Id, Every time user update the Image it get overwritten.
		const fileRef = ref(storage, `photo-url/${currUser.uid}`)
		optimizeProfileImg(file).then((dataURL) => {
			// Use UploadString Method because the image is represented as a string.
			uploadString(fileRef, dataURL, "data_url")
				.then(
					(snapshot) =>
						console.log(snapshot.bytesTransferred / snapshot.totalBytes) * 100
				)
				// Update PhotoURL.
				.then(() =>
					getDownloadURL(fileRef).then((url) =>
						updateProfile(currUser, {
							photoURL: url,
						}).then(() => {
							setAlert(["success", "Photo has been updated successfully!"])
						})
					)
				)
		})
	}

	const updateRandomAvatar = () =>
		getRandomAvatar().then((url) =>
			updateProfile(currUser, { photoURL: url }).then(() =>
				setAlert(["success", "Profile Image has been updated successfully!"])
			)
		)

	return {
		currUser,
		createNewUser,
		getUserInfo,
		UpdateUserInfo,
		getNotifications,
		setNewNotification,
		updateProfilePhoto,
		updateRandomAvatar,
	}
}
