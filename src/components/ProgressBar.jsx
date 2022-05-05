import { useEffect } from 'react'
import useUpload from '../hooks/useUpload'

export default function ProcessBar ({ file, setFile }) {
    const { progress, url, error } = useUpload(file)
    useEffect(() => {
        if (url) setFile(null)
    }, [url])
    return (
        <div>{progress}</div>
    )
}
