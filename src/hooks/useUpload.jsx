import { useState, useEffect } from 'react'
import { db, storage } from "../firebase";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";

export default function useUpload(file, colRef, docRef) {
  const [progress, setProgress] = useState(null)
  const [error, setError] = useState(null)
  const [url, setUrl] = useState(null)

  useEffect(() => {
    if (file) {
      const fileRef = ref(storage, `${colRef}/${file.name}`)
      const uploadTask = uploadBytesResumable(fileRef, file)
      uploadTask.on('state_changed',
        snapshot => setProgress((snapshot.bytesTransferred / snapshot.totalBytes ) * 100)
        , () => setError(error)
        , () => getDownloadURL(fileRef).then(url => {
          setUrl(url)
					getDoc(doc(db, colRef, docRef))
						.then(snapshot => {
							const payload = snapshot.data() || {}
							payload[file.name] = url
							setDoc(doc(db, colRef, docRef), payload)
						})
        })
      )
    }
  }, [file]) 
  return { progress, url, error }
}
