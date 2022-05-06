import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SlideShow({ images, header }) {
  return (
    <div className="flex justify-center w-full relative">
      {/* Image Slider */}
      <div className="overflow-hidden h-[60vh] md:h-[70vh]">
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
      <div className="w-full h-full pointer-events-none absolute z-10 top-0 grid place-items-center bg-[rgba(0,0,0,.3)]">
        <div className='text-3xl md:text-5xl lg:text-7xl font-bold max-w-[20ch] text-center text-light'>{header}</div>
      </div>
    </div>
  )
}

