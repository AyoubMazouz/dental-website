import { useState } from 'react'
import useAddVideoUrl from '../../hooks/useAddVideoUrl'

export default function VideoSettings() {
	
	const [ urlInput, setUrlInput ] = useState("")
	const { getTitle, addVideo } = useAddVideoUrl()

	return (
		<form onSubmit={e => {
			e.preventDefault()
			addVideo(urlInput)
			setUrlInput("")
		}}>
			<label htmlFor="url-input"></label>
			<input type="text" name="url-input" value={urlInput} 
				onChange={e => setUrlInput(e.target.value)} />
		<button type='submit'>Add</button>
		</form>
	)
}
