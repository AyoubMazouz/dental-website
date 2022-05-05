import { useEffect, useState } from 'react'
import useDocs from '../hooks/useDocs'
import ProcessBar from '../components/ProgressBar'


export default function Gallery() {
  const { docs } = useDocs('gallery')
  const [file, setFile] = useState(null)

  return (
    <div>
      <div>
        <input type="file" onChange={ev => {
          setFile(ev.target.files[0])
        }} />
      </div>
      {file && <ProcessBar file={file} setFile={setFile} />}
      <div className='grid justify-center'>
        <div className='flex flex-wrap gap-4 max-w-[1400px] w-full'>
          {docs.map(doc => <img key={doc.id} src={doc.url} alt={doc.id} className='w-[440px] h-[270px] object-cover'></img>)}
        </div>
      </div>
    </div>
  )
}
