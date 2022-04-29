import { useState } from "react"
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'
import ImageSlider from "./ImageSlider"
import Header from "./Header"
import ImgNavBtn from "./ImgNavBtn"


const Home = ({ images, header }) => {
  const [index, setIndex] = useState(0)
  const [timeInterval, autoScroll] = [3000, true] 
  const rightArrowClick = () => setIndex(index === images.length - 1 ? 0 : index + 1)
  const leftArrowClick  = () => setIndex(index === 0 ? images.length - 1 : index - 1)
  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-h-[90vh] relative">
        {/* Image Slider */}
        <div className="overflow-hidden max-h-[60vh]">
          <ImageSlider images={images} index={index} setIndex={setIndex} autoScroll={autoScroll} timeInterval={timeInterval} />
        </div>
        <div className="w-full h-full absolute top-0 flex justify-between items-center px-8 py-8">
          {/* Left Arrow */}
          <MdOutlineArrowBackIos  onClick={leftArrowClick}  className='text-white  opacity-50 text-6xl'/>
            <div className="h-full flex flex-col justify-between items-center">
              {/* Empty div for layout */}
              <div></div>
              {/* Header */}
              <Header header={header} />
              {/* Nav buttons */}
              <div className="flex space-x-4 ">
                  {images && images.map((_, id) => <ImgNavBtn key={id} currentIndex={index} index={id} setIndex={setIndex} />)}
              </div>
            </div>
            {/* Right Arrow */}
          <MdOutlineArrowForwardIos onClick={rightArrowClick} className='text-white opacity-50 text-6xl'/>
        </div>
      </div>
    </div>
  )
}


export default Home