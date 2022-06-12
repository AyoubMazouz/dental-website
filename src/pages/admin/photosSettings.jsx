import { useState } from 'react'
import ProcessBar from './ProgressBar'

export default function PhotosSettings() {
	const [file, setFile] = useState(null)
	
	return (
		<div className='page-padding'>
			<div>
				{
					file ? 
						<label htmlFor="input" className=''>{file.name}</label>
					: 
						<label htmlFor="input" className=''>Select an Image</label>
				}
				<input type="file" name='input' multiple
					onChange={e => {
						setFile(e.target.files[0])
					}} />
			</div>
			{
				file && 
					<ProcessBar file={file} setFile={setFile} />
			}
		</div>
	)
}
