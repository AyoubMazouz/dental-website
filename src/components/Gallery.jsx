import { useState } from "react"
import useDoc from '../hooks/useDoc'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, FreeMode, Thumbs } from 'swiper';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function Gallery() {
  const { document } = useDoc('gallery', "photos")
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <Swiper style={{
      "--swiper-navigation-color": "#fff",
      "--swiper-pagination-color": "#fff",
      }}
      spaceBetween={10}
      navigation={true}
      thumbs={{ swiper: thumbsSwiper }}
      modules={[FreeMode, Navigation, Thumbs]}
      className='mySwiper2 rounded-xl'>
        {
        Object.entries(document)
          .map(doc => (
            <SwiperSlide key={doc[0]}>
                <img src={doc[1]} alt={doc[0]} className='aspect-square md:aspect-video w-full object-cover hover:scale-105 transition-transform duration-500' />
            </SwiperSlide>
          ))
        }
    </Swiper>
  )
}
