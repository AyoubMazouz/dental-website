import ImageSlider from "./ImageSlider"
import Header from "./Header"



export default function SlideShow({ images, header }) {
  return (
    <div className="flex justify-center w-full relative">
      {/* Image Slider */}
      <div className="overflow-hidden h-[60vh] md:h-[70vh]">
          <ImageSlider images={images} />
      </div>
        {/* Header */}
      <div className="w-full h-full pointer-events-none absolute z-10 top-0 grid place-items-center bg-[rgba(0,0,0,.3)]">
        <Header header={header} />
      </div>
    </div>
  )
}

