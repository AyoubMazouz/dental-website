import useDoc from '../hooks/useDoc'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

export default function Gallery() {
  const { document } = useDoc('gallery', "photos")
  return (
    <Swiper modules={[ Pagination, Navigation ]} grabCursor navigation pagination={{ clickable: true, }} className='rounded-xl'>
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
