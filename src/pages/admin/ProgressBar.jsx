import { useEffect } from 'react'
import useUpload from '../../hooks/useUpload'

export default function ProcessBar ({ file, setFile }) {

  const { progress, url, error } = useUpload(file, "gallery", "photos")

  useEffect(() => { 
    if (url) setFile(null) 
  }, [url])
  
  return (
    <div className=''>
      <div style={{ width: `${progress}%` }} 
        className='h-[1rem] bg-green-500 text-white text-center'>
        {progress}
      </div>
        {
          error && 
            <div>
              {error}
            </div>
        }
    </div>
   )
}
