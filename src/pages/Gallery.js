import { useState } from 'react'
import useDocs from '../hooks/useDocs'
import ImageModel from '../components/ImageModel'


export default function Gallery() {
  const [selected, setSelected] = useState(null)
  const [imgsAtOnce, setImgsAtOnce] = useState(2)
  const { docs } = useDocs('gallery')

  return (
    <div>
      {typeof selected === 'number' && <ImageModel currIndex={selected} docs={docs} setSelected={setSelected} />}
      <div className='grid justify-center'>
        <div className='flex flex-wrap gap-4 justify-center max-w-[1400px] w-full'>
          {docs.map((doc, index) => index < imgsAtOnce ? <div key={doc.id} className='overflow-hidden rounded-lg'>
            <img src={doc.url} alt={doc.id}  onClick={() => setSelected(index)}
              className='w-[440px] h-[270px] object-cover hover:scale-110 transition-transform duration-500 select-none'></img>
          </div> : null)}
        </div>
        {imgsAtOnce < docs.length && <button onClick={() => setImgsAtOnce(prev => prev+1)}>Load More</button>}
      </div>
    </div>
  )
}
