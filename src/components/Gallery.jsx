import useDocs from '../hooks/useDocs'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

export default function Gallery () {
    const { docs } = useDocs('gallery')
    return (
        <Swiper modules={[ Pagination, Navigation ]} grabCursor navigation pagination={{ clickable: true, }}>
            {docs.map(doc => (
                <SwiperSlide key={doc.id} className=''>
                    <img src={doc.url} alt={doc.alt} className='aspect-video w-full object-cover hover:scale-105 transition-transform duration-500' />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}