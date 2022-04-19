import { useState } from "react"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import SlideShow from "./SlideShow"
import Header from "./Header"
import ImgNavBtn from "./ImgNavBtn"
import { images } from './data'




const Home = () => {

  const [index, setIndex] = useState(0)
  const [timeInterval, autoScroll] = [3000, true] 

  const rightBtnOnClick = () => setIndex(index === images.length - 1 ? 0 : index + 1)

  const leftBtnOnClick  = () => setIndex(index === 0 ? images.length - 1 : index - 1)

  return (
    <div className="flex justify-center w-full">
      <div className="max-w-[1600px] max-h-[90vh] relative">

        <div className="overflow-hidden max-h-[70vh]">
          <SlideShow images={images} index={index} setIndex={setIndex} autoScroll={autoScroll} timeInterval={timeInterval} />
        </div>

        <div className="w-full h-full absolute top-0 flex justify-between items-center px-8 py-8">
          <FaArrowLeft  onClick={leftBtnOnClick}  className='text-white text-6xl'/>

            <div className="h-full flex flex-col justify-between items-center">
              <div></div><Header />
              <div className="flex space-x-4 ">
                  { images && images.map((img, i) => (
                    <ImgNavBtn currentIndex={index} index={i} setIndex={setIndex} />
                  ))}
              </div>
            </div>

          <FaArrowRight onClick={rightBtnOnClick} className='text-white text-6xl'/>
        </div>

      </div>
    </div>
  )
}


export default Home