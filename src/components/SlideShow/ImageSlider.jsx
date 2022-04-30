import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function SlideShow({ images }) {
  return (
      <Swiper modules={[Navigation, Pagination, Autoplay]}
              navigation={true}
              pagination={{ clickable: true }}
              loop={true}
              autoHeight={true}
              autoplay={{ delay: 5000 }}>
        {images.map((img, id) => <SwiperSlide className="">
            <img key={id} src={img.img} alt={img.alt} className="object-cover" />
          </SwiperSlide>)}
      </Swiper>    
  )
}