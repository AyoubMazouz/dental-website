// FireBase Imports.
import { updateDoc, setDoc, doc, getDoc } from 'firebase/firestore'
import { db } from '../firebase'

export default function useUserInfo(user) {

    const createNewUser = (payload={ fullName: '', phone: '', address1: '', address2: '', region: '', city: '', zip: '' }) => {
        setDoc(doc(db, 'users', user.uid), payload)
    }

    const UpdateUserInfo = (payload={ fullName: '', phone: '', address1: '', address2: '', region: '', city: '', zip: '' }) => {
        updateDoc(doc(db, 'users', user.uid), payload)
    }

    const getUserInfo = () => getDoc(doc(db, 'users', user.uid))


    return { createNewUser, getUserInfo, UpdateUserInfo }
}
