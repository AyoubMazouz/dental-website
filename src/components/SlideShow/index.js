import ImageSlider from "./ImageSlider"
import Header from "./Header"



export default function SlideShow({ images, header }) {
  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-h-[90vh] relative">
        {/* Image Slider */}
        <div className="overflow-hidden max-h-[70vh]">
            <ImageSlider images={images} />
        </div>
        <div className="w-full h-full pointer-events-none absolute z-10 top-0 flex justify-center items-center px-8 py-8 bg-[rgba(0,0,0,.3)]">
            {/* Header */}
            <Header header={header} />
        </div>
      </div>
    </div>
  )
}

