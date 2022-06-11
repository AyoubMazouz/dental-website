import { useState, useEffect } from 'react'
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";


export default function useDocs(col) {
    const [docs, setDocs] = useState([])
    
    useEffect(() => {
        const collectionRef = collection(db, col)
        getDocs(collectionRef).then(snapshot => {
            const data = snapshot.docs.map(doc => { 
                return { id: doc.id, ...doc.data() }
            })
            setDocs(data)
        })
    }, [])

    return { docs }
}
