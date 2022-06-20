// FireBase Imports.
import { updateDoc, setDoc, doc, getDoc, arrayUnion } from "firebase/firestore"
import { updateProfile } from "firebase/auth"
import { ref, getDownloadURL, uploadString } from "firebase/storage"
import { db, storage } from "../firebase"
// Context Imports.
import { useAlert } from "../contexts/AlertContext"

export default function useUserData(user) {
	const { setAlert } = useAlert()

	const getData = () => getDoc(doc(db, "users", user.uid))

	const createNewUser = (uid) => {
		setDoc(doc(db, "users", uid), {
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
		updateDoc(doc(db, "users", user.uid), { info })

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
		return updateDoc(doc(db, "users", user.uid), {
			notifications: arrayUnion(notification),
		})
	}

	const getCartItems = (setItems) => {
		if (!localStorage.getItem("cartItems")) return
		setItems(JSON.parse(localStorage.getItem("cartItems")))
	}

	const updateProfilePhoto = (file) => {
		if (!file) return

		// Desired Image Size.
		const SIZE = 256

		const reader = new FileReader()

		reader.onload = (e) => {
			const img = new Image()
			// Set
			img.src = e.target.result

			img.onload = () => {
				// Dynamically Creating Canvas.
				const canvas = document.createElement("canvas")
				canvas.width = SIZE
				canvas.height = (SIZE * (img.height / img.width)) | 0
				const ctx = canvas.getContext("2d")
				// Drawing the resized Image to the Canvas.
				ctx.drawImage(img, 0, 0, canvas.width, canvas.height)

				// Image Reference.
				// Uses the User Id, Every time user update the Image it get overwritten.
				const fileRef = ref(storage, `photo-url/${user.uid}`)
				// DataURL of the Resized Image
				const dataURL = canvas.toDataURL("image/jpeg")
				// Use UploadString Method because the image is represented as a string.
				uploadString(fileRef, dataURL, "data_url")
					.then(
						(snapshot) =>
							console.log(snapshot.bytesTransferred / snapshot.totalBytes) * 100
					)
					// Update PhotoURL.
					.then(() =>
						getDownloadURL(fileRef).then((url) =>
							updateProfile(user, {
								photoURL: url,
							}).then(() =>
								setAlert(["success", "Photo has been updated successfully!"])
							)
						)
					)
			}
		}
		// Read File.
		reader.readAsDataURL(file)
	}

	return {
		getData,
		createNewUser,
		getUserInfo,
		UpdateUserInfo,
		getNotifications,
		setNewNotification,
		getCartItems,
		updateProfilePhoto,
	}
}
