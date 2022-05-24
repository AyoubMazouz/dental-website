import { useState, useEffect } from 'react'
import { db } from "../firebase";
import { collection, getDoc, doc } from "firebase/firestore";


export default function useDocs(col, id) {
    const [doc, setDoc] = useState([])

    useEffect(() => {
        const collectionRef = collection(db, col)
        getDoc(collectionRef, id).then(snapshot => setDoc(snapshot))
    }, [])

    return { doc }
}
