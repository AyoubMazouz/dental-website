// React Imports.
import { useState, useEffect } from "react"
// Firebase Imports.
import { db } from "../firebase"
import { setDoc, doc, getDoc } from "firebase/firestore"


export default function useAddVideoUrl () {

	const [document, setDocument] = useState(null)
  
	useEffect(() => {
		// Get Videos Documents From DB.
		getDoc(doc(db, "gallery", "videos"))
			.then(snapshot => setDocument(snapshot.data()))
	}, [document])

	const addVideo = url => {
		if (!document) return
		// Check if The link lead to Actual Video.
		if (getVideoId(url)) {
			// Add New Video.
			document[getVideoId(url)] = url
			setDoc(doc(db, "gallery", "videos"), document)
			// Set The Docs to null To fetch them again to stay in sync with the db.
			setDocument(null)
		}
	}

	const getVideoId = url => {
		// Take Youtube Video URL and get the Id.
		const VideoId = url.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)?.pop();
		if (VideoId?.length == 11) return VideoId
	  }
	return { getVideoId, addVideo }
}
