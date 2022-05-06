import { useState } from 'react'
import useDocs from '../hooks/useDocs'
import ImageModel from '../components/ImageModel'
import Hero from '../components/Hero'

import { links } from '../data'


export default function Gallery() {
  // Selected Image to Display on the Model.
  const [selected, setSelected] = useState(null)
  // How Many Images to Show At Once.
  const [imgsAtOnce, setImgsAtOnce] = useState(6)
  // Images From db.
  const { docs } = useDocs('gallery')
  // Get Hero Image.
  const { url, alt } = links.nav.filter(obj => obj.label === 'gallery')[0]

  // Still not compatible with SubLinks.

  return (
    <div>
      {/* Hero Section */}
      <Hero url={url} alt={alt} currPage={'gallery'} />
      {/* Image Model __default hidden__ */}
      {typeof selected === 'number' && <ImageModel currIndex={selected} docs={docs} setSelected={setSelected} />}
      {/* Image Gallery */}
      <div className='grid justify-center'>
        <div className='flex flex-wrap gap-4 justify-center max-w-[1400px] w-full'>
          {/* Map trough the Array of Images and Only Display the Allowed Numnber of Images */}
          {docs.map((doc, index) => index < imgsAtOnce 
            // Additional Div for Scaling Animation.
            ? ( <div key={doc.id} className='overflow-hidden rounded-lg'>
            <img src={doc.url} alt={doc.id}  onClick={() => setSelected(index)}
              className='w-[440px] h-[270px] object-cover hover:scale-110 transition-transform duration-500 select-none'></img>
          </div>
            ) : null)}
        </div>
        {/* Load More Button */}
        {imgsAtOnce < docs.length && <button onClick={() => setImgsAtOnce(prev => prev+6)}>Load More</button>}
      </div>
    </div>
  )
}
