import { useState } from 'react'
import useDocs from '../hooks/useDocs'
import ImageModel from '../components/ImageModel'


export default function Gallery() {
  const { docs } = useDocs('gallery')
  const [selected, setSelected] = useState(null)

  return (
    <div>
      {typeof selected === 'number' && <ImageModel currIndex={selected} docs={docs} setSelected={setSelected} />}
      <div className='grid justify-center'>
        <div className='flex flex-wrap gap-4 max-w-[1400px] w-full'>
          {docs.map((doc, index) => <div key={doc.id} className='overflow-hidden'>
            <img src={doc.url} alt={doc.id}  onClick={() => setSelected(index)}
              className='w-[440px] h-[270px] object-cover hover:scale-110 transition-transform duration-300 select-none'></img>
          </div>)}
        </div>
      </div>
    </div>
  )
}
