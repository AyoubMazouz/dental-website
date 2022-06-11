import { useState } from 'react'
import ProcessBar from '../components/ProgressBar'

export default function Root() {
    const [file, setFile] = useState(null)
    
    return (
        <div>
            <div>
                {file 
                    ? <label htmlFor="input" className=''>{file.name}</label>
                    : <label htmlFor="input" className=''>Select an Image</label>}
                <input type="file" name='input' onChange={ev => setFile(ev.target.files[0])} />
            </div>
            {file && <ProcessBar file={file} setFile={setFile} />}
        </div>
    )
}
