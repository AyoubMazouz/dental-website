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
import useEditImg from "../hooks/useEditImg"

export default function useUserData() {
	const { setAlert } = useAlert()
	const { currUser } = useAuth()
	const { optimizeProfileImg, getRandomAvatar } = useEditImg()

	const getData = () => getDoc(doc(db, "users", currUser.uid))

	const createNewUser = () => {
		setDoc(doc(db, "users", currUser.uid), {
			info: {
				fullName: "",
				phone: "",
				region: "",
				city: "",
				zip: "",
				address1: "",
				address2: "",
			},
			notification: [],
		})
	}

	const UpdateUserInfo = (info) =>
		updateDoc(doc(db, "users", currUser.uid), { info })

	const getUserInfo = async (setFormValues) => {
		const response = await getData()
		const data = response.data()
		setFormValues(data.info)
	}

	const getNotifications = async (setNotifications) => {
		const response = await getData()
		const data = response.data()
		setNotifications(data.notifications)
	}

	const setNewNotification = (notification) => {
		return updateDoc(doc(db, "users", currUser.uid), {
			notifications: arrayUnion(notification),
		})
	}

	const getCartItems = (setItems) => {
		if (!localStorage.getItem("cartItems")) return
		setItems(JSON.parse(localStorage.getItem("cartItems")))
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
		getData,
		createNewUser,
		getUserInfo,
		UpdateUserInfo,
		getNotifications,
		setNewNotification,
		getCartItems,
		updateProfilePhoto,
		updateRandomAvatar,
	}
}
