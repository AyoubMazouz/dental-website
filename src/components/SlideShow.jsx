// React Imports.
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

export default function SlideShow({ images, header }) {
  return (
    <div className="flex justify-center w-full relative">
      {/* Image Slider */}
      <div className="overflow-hidden h-[60vh] lg:h-[70vh]">
        <Swiper modules={[Navigation, Pagination, Autoplay]}
                navigation={true}
                pagination={{ clickable: true }}
                loop={true}
                autoHeight={true}
                autoplay={{ delay: 5000 }}>
          {images.map((img, id) => <SwiperSlide>
              <img key={id} src={img.img} alt={img.alt} className="object-cover w-full h-[60vh] lg:h-[70vh]" />
            </SwiperSlide>)}
        </Swiper>  
      </div>
        {/* Header */}
      <div className="w-full h-full pointer-events-none absolute z-10 top-0 flex flex-col justify-center items-center bg-[rgba(0,0,0,.3)]">
        <h1 className='font-bold max-w-[17ch] text-center text-light my-[3rem]'>{header}</h1>
        <div className='flex gap-4 text-light'>
          <button className='bg-secondary px-6 py-2 rounded-full'><h4>Appelez</h4></button>
          <Link to='#' className='border-secondary border-2 px-6 py-2 rounded-full'><h4>Prenez Rendez vous</h4></Link>
        </div>
      </div>
    </div>
  )
}

