// React Imports.
import { useEffect, useState } from 'react'
// React Router Dom Imports.
import { useParams } from 'react-router-dom'
// Components Imports.
import Photos from './Photos'
import Videos from './Videos'
import BeforeAndAfter from './BeforeAndAfter'
import Page404 from '../Page404'


export default function Gallery() {

  const [ error, setError ] = useState(null)
  const { mediaPage } = useParams()
  const [ page, setPage ] = useState(null)

  const pages = {
    "photos": <Photos />,
    "videos": <Videos />,
    "before_and_after": <BeforeAndAfter />,
  }

  useEffect(() => {
    if (!mediaPage) return setPage(<Photos />)
    if (["photos", "videos", "before_and_after"].includes(mediaPage)) {
      setPage(pages[mediaPage])
      setError(null)
    } else setError("404")
  }, [mediaPage])

  if (error === "404") return <Page404 />

  return page
}
