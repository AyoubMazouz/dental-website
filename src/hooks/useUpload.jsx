import { useState, useEffect } from 'react'
import { db, storage } from "../firebase/config";
import { setDoc, doc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export default function useUpload(file) {
    const [progress, setProgress] = useState(null)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        if (file) {
            const fileRef = ref(storage, `gallery/${file.name}`)
            const uploadTask = uploadBytesResumable(fileRef, file)
            uploadTask.on('state_changed',
                snapshot => setProgress((snapshot.bytesTransferred / snapshot.totalBytes ) * 100)
                , () => setError(error)
                , () => getDownloadURL(fileRef).then(url => {
                    setUrl(url)
                    const payload = {
                        url: url,
                        alt: 'alt',
                        date: '',
                    }
                    setDoc(doc(db, 'gallery', file.name), payload)
                })
            )
        }
    }, [file]) 
    return { progress, url, error }
}
