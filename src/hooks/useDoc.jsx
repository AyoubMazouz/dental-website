import { useState, useEffect } from 'react'
import { db } from "../firebase";
import { collection, getDoc, doc } from "firebase/firestore";


export default function useDoc(col, id) {
    const [document, setDocument] = useState({})

    useEffect(() => {
        getDoc(doc(db, col, id)).then(snapshot => setDocument(snapshot.data()))
    }, [])

    return { document }
}
