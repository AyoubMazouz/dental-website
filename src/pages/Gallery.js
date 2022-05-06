import { useState } from 'react'
import useDocs from '../hooks/useDocs'
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
      <Hero url={'https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/gallery%2Fcontact.png?alt=media&token=155adb3a-4026-479c-8a93-6312563285f9'} alt={''} currPage={'gallery'} />

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
