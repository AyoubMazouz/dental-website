import useDocs from '../hooks/useDocs'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

export default function Gallery () {
    const { docs } = useDocs('gallery')
    return (
        <Swiper modules={[ Pagination, Navigation ]} grabCursor navigation={{ prevEl: '.gallery-button-prev', nextEl: '.gallery-button-next' }} pagination={{ clickable: true, }}
            className='max-w-[1400px] rounded-xl'>
            {docs.map(doc => (
                <SwiperSlide key={doc.id}>
                    <img src={doc.url} alt={doc.alt} className='max-w-[1400px] w-full h-full max-h-[768px] object-cover hover:scale-105 transition-transform duration-500' />
                </SwiperSlide>
            ))}
        </Swiper>
    )
}