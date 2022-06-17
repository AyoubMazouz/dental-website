// React Imports.
import { useEffect, useState } from 'react'
// React Router Dom Imports.
import { useParams } from 'react-router-dom'
// Components Imports.
import PhotosSettings from './photosSettings'
import VideoSettings from './VideoSettings'
import BeforeAndAfterSettings from './BeforeAndAfterSettings'
import Page404 from '../Page404'

export default function Admin() {
	const [ error, setError ] = useState(null)
  const { setting } = useParams()
  const [ currTab, setCurrTab ] = useState(null)

  const tabs = {
    "photos": <PhotosSettings />,
    "videos": <VideoSettings />,
    "before_and_after": <BeforeAndAfterSettings />,
  }

  useEffect(() => {
		console.log(setting)
    if (!setting) return setCurrTab(<PhotosSettings />)
    if (["photos", "videos", "before_and_after"].includes(setting)) {
      setCurrTab(tabs[setting])
      setError(null)
    } else setError("404")
  }, [setting])

  if (error === "404") return <Page404 />

  return currTab
}
