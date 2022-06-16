import { useState, useEffect } from 'react'
import { db } from "../firebase";
import {getDoc, doc } from "firebase/firestore";


export default function useDoc(colRef, docRef) {
    const [document, setDocument] = useState({})

    useEffect(() => {
        getDoc(doc(db, colRef, docRef)).then(snapshot => setDocument(snapshot.data()))
    }, [])

    return { document }
}
