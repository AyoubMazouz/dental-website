// FireBase Imports.
import { updateDoc, setDoc, doc, getDoc, arrayUnion } from 'firebase/firestore'
import { db } from '../firebase'

export default function useUserData(user) {

    const getData = () => getDoc(doc(db, 'users', user.uid))

    const createNewUser = (payload={
            fullName: '',
            phone: '',
            region: '',
            city: '',
            zip: '',
            address1: '',
            address2: '',
        }) => setDoc(doc(db, 'users', user.uid), { info: payload, notification: [] })

    const UpdateUserInfo = info => {
        updateDoc(doc(db, 'users', user.uid), {  info  } )
    }

    const getUserInfo = async setFormValues => {
        const response = await getData()
        const data = response.data()
        setFormValues(data.info)
    }

    const getNotifications = async setNotifications => {
        const response = await getData()
        const data = response.data()
        setNotifications(data.notifications)
    }

    const setNewNotification = notification => {
        return updateDoc(doc(db, 'users', user.uid), { notifications: arrayUnion(notification) })
    }

    const getCartItems = setItems => {
        if (!localStorage.getItem('cartItems')) return
        setItems(JSON.parse(localStorage.getItem('cartItems')))
    }
    

    return { 
        getData,
        createNewUser,
        getUserInfo, 
        UpdateUserInfo,
        getNotifications,
        setNewNotification,
        getCartItems,
    }
}
