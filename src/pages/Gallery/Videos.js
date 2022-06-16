// React Imports.
import { useState } from 'react'
// Hooks Imports.
import useDoc from '../../hooks/useDoc'
// Components Imports.
import Hero from '../../components/Hero'
import VideoModel from '../../components/VideoModel'



export default function Videos() {
  // Selected Image to Display on the Model.
  const [selected, setSelected] = useState(null)
  // How Many Images to Show At Once.
  const [elementsAtOnce, setElementsAtOnce] = useState(20)
  // Images From db.
  const { document } = useDoc('gallery', "videos")

  const getThumbnail = url => {
    // Take Youtube Video URL and get the Id.
    // Then Create URL for the Video Image. 
    const VideoId = url.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/)?.pop();
    if (VideoId?.length == 11) {
        return "//img.youtube.com/vi/"+VideoId+"/0.jpg"
    }
  }

  const heroValues = {
    currentPage: {
      label: 'Videos',
      parent: {
        label: "Gallery",
        link: "/gallery"
      }
    },
    title: 'Videos',
  }
  return (
    <div>
      {/* Hero Section */}
      <Hero  { ...heroValues } />
      {
        typeof selected === 'number' && 
          <VideoModel currIndex={selected} docs={document} setSelected={setSelected} />
      }
      {/* Videos Gallery */}
      <div className='grid justify-center my-[6rem]'>
        <div className='flex flex-wrap gap-4 justify-center max-w-[1800px] w-full'>
          {/* Map trough the Array of Videos urls and Only Display the Allowed Numnber of Videos */}
          {
            Object.entries(document)
              .map((doc, index) => index < elementsAtOnce ? ( 
              <div key={doc[0]} className='overflow-hidden rounded-lg'>
                <img src={getThumbnail(doc[1])} alt={doc[0]} onClick={() => setSelected(index)}
                  className='w-[332px] h-[186px] object-cover hover:scale-110 transition-transform duration-500 select-none'></img>
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