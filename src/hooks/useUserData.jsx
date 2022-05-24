// FireBase Imports.
import { updateDoc, setDoc, doc, getDoc, arrayUnion } from 'firebase/firestore'
import { db } from '../firebase'

export default function useUserData(user) {

    const getData = () => getDoc(doc(db, 'users', user.uid))

    const createNewUserDefault = (payload={
        info: {
            fullName: '',
            phone: '',
            region: '',
            city: '',
            zip: '',
            address1: '',
            address2: '',
        },
        notifications: []
    }) => setDoc(doc(db, 'users', user.uid), payload)

    const UpdateUserInfo = info => updateDoc(doc(db, 'users', user.uid), { info } )

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

    const setNotifications = notification => {
        return updateDoc(doc(db, 'users', user.uid), { notifications: arrayUnion(notification) })
    }
    

    return { 
        getData,
        createNewUserDefault,
        getUserInfo, 
        UpdateUserInfo,
        getNotifications,
        setNotifications,
    }
}
