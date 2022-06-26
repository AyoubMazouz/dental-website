// React Imports.
import { useState, useEffect } from "react"
// Firebase Imports.
import { db } from "../firebase"
import { setDoc, doc, getDoc } from "firebase/firestore"
// Util Imports.
import { getVideoIdFromUrl } from "../util/video"

export default function useAddVideoUrl() {
	const [document, setDocument] = useState(null)

	useEffect(() => {
		// Get Videos Documents From DB.
		getDoc(doc(db, "gallery", "videos")).then((snapshot) =>
			setDocument(snapshot.data() || {})
		)
	}, [document])

	const addVideo = (url) => {
		if (!document) return
		const videoId = getVideoIdFromUrl(url)
		// Check if The link doesn't lead to an Actual Video.
		if (!videoId) return
		// Add New Video.
		document[videoId] = "https://youtube.com/embed/" + videoId
		setDoc(doc(db, "gallery", "videos"), document)
		// Set The Docs to null To fetch them again to stay in sync with the db.
		setDocument(null)
	}
	return { addVideo }
}
