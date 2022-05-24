// React Imports.
import { useState } from 'react'
// Hooks Imports.
import useDocs from '../hooks/useDocs'
// Components Imports.
import ImageModel from '../components/ImageModel'
import Hero from '../components/Hero'



export default function Gallery() {
  // Selected Image to Display on the Model.
  const [selected, setSelected] = useState(null)
  // How Many Images to Show At Once.
  const [imgsAtOnce, setImgsAtOnce] = useState(6)
  // Images From db.
  const { docs } = useDocs('gallery')

  return (
    <div>
      {/* Hero Section */}
      <Hero url='https://via.placeholder.com/1000x1000' alt='' currPage={'gallery'} />
      {/* Image Model __default hidden__ */}
      {typeof selected === 'number' && <ImageModel currIndex={selected} docs={docs} setSelected={setSelected} />}
      {/* Image Gallery */}
      <div className='grid justify-center my-[6rem]'>
        <div className='flex flex-wrap gap-4 justify-center max-w-[1800px] w-full'>
          {/* Map trough the Array of Images and Only Display the Allowed Numnber of Images */}
          {docs.map((doc, index) => index < imgsAtOnce 
            // Additional Div for Scaling Animation.
            ? ( <div key={doc.id} className='overflow-hidden rounded-lg'>
            <img src={doc.url} alt={doc.id}  onClick={() => setSelected(index)}
              className='w-[332px] h-[220px] object-cover hover:scale-110 transition-transform duration-500 select-none'></img>
          </div>
            ) : null)}
        </div>
      {/* Load More Button */}
      {imgsAtOnce < docs.length ? <div className='grid justify-center mt-[3rem]'>
        <button onClick={() => setImgsAtOnce(prev => prev+6)} 
          className='px-8 py-3 bg-secondary rounded-full text-light font-semibold'>Load More</button>
      </div> : <div className='h-[6rem]'></div>}
      </div>
    </div>
  )
}