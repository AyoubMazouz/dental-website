// FireBase Imports.
import { updateDoc, setDoc, doc, getDoc, arrayUnion } from "firebase/firestore"
import { updateProfile } from "firebase/auth"
import { uploadBytes, ref, getDownloadURL } from "firebase/storage"
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
		let [progress, error] = [null, null]

		const fileRef = ref(storage, `photo-url/${user.uid}`)

		uploadBytes(fileRef, file)
			.then(
				(snapshot) =>
					(progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100)
			)
			.then(() =>
				getDownloadURL(fileRef).then((url) =>
					updateProfile(user, {
						photoURL: url,
					}).then(() =>
						setAlert(["info", "Photo has been updated successfully!"])
					)
				)
			)

		return { progress, error }
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
