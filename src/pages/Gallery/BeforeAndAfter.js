// React Imports.
import { useState } from 'react'
// Hooks Imports.
import useDoc from '../../hooks/useDoc'
// Components Imports.
import Hero from '../../components/Hero'
import Slider from '../../components/Slider'



export default function BeforeAndAfterGallery() {
  // How Many Images to Show At Once.
  const [elementsAtOnce, setElementsAtOnce] = useState(20)
  // Images From db.
  const { document } = useDoc('gallery', "before_and_after")
  const heroValues = {
    currentPage: {
      label: 'before_and_after',
      parent: {
        label: "Gallery",
        link: "/gallery"
      }
    },
    title: 'Before And After',
  }
  return (
    <div>
      {/* Hero Section */}
      <Hero  { ...heroValues } />
      {/* Image Gallery */}
      <div className='grid justify-center my-[6rem]'>
        <div className='flex flex-wrap gap-4 justify-center max-w-[1800px] w-full'>
          {/* Map trough the Array of Images and Only Display the Allowed Numnber of Images */}
          {
            Object.entries(document)
              .map((doc, index) => index < elementsAtOnce ? ( 
              <div key={doc[0]} className='overflow-hidden rounded-lg aspect-video h-[238px]'>
                <Slider id={index} alt={""} before={doc[1][0]} after={doc[1][1]} />
              </div>
              ) : null)
          }
        </div>
      {/* Load More Button */}
      {
        Object.keys(document).length > elementsAtOnce ? 
          <div className='grid justify-center mt-[3rem]'>
            <button onClick={() => setElementsAtOnce(prev => prev + 10)} 
              className='px-8 py-3 bg-secondary rounded-full text-light font-semibold'>Load More</button>
          </div> 
          : 
          <div className='h-[6rem]'></div>
      }
      </div>
    </div>
  )
}