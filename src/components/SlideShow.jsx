// React Imports.
import { Link } from 'react-router-dom'
// Swiper Imports.
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
// Data Imports.
import { info } from '../data'

export default function SlideShow({ images }) {
  return (
    <div className="flex justify-center w-full relative">
      {/* Image Slider */}
      <div className="overflow-hidden h-[60vh] lg:h-[70vh]">
        <Swiper modules={[Navigation, Pagination, Autoplay]}
                navigation={true}
                pagination={{ clickable: true }}
                loop={true}
                autoHeight={true}
                autoplay={{ delay: 5000 }}
                style={{
                  "--swiper-navigation-color": "#fff",
                  "--swiper-pagination-color": "#fff",
                }}>
          {images.map((url, id) => <SwiperSlide>
              <img key={id} src={url} className="object-cover w-full h-[60vh] lg:h-[70vh]" />
            </SwiperSlide>)}
        </Swiper>  
      </div>
        {/* Header */}
      <div className="w-full h-full absolute pointer-events-none z-10 top-0 flex flex-col justify-center items-center bg-[rgba(0,0,0,.3)]">
        <h1 className='font-bold max-w-[17ch] text-center text-light my-[3rem]'>
          Dentego, le meilleur de la santé dentaire, pour tous
        </h1>
        <div className='flex gap-4 text-light'>
          <Link to='contact' className='bg-secondary px-6 py-2 rounded-full pointer-events-auto'><h4>Rendez vous</h4></Link>
          <a href={`'tel:${info.phone[0]}`} className='border-secondary border-2 px-6 py-2 rounded-full pointer-events-auto'><h4>Appelez</h4></a>
        </div>
      </div>
    </div>
  )
}

