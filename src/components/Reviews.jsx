import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/scrollbar";

export default function Reviews({ reviews }) {

    const stars = rating => {
        const starsList = []
        for (let i = 0; i < parseInt(rating); i++) {
            starsList.push(<FaStar />)
        } return starsList
    }

    return (
        <Swiper modules={[Scrollbar, FreeMode]} 
                grabCursor
                scrollbar
                spaceBetween={20}
                slidesPerView={3}
                freeMode={true}
                className='h-[580px] overflow-hidden bg-bluish-gray'>

            {reviews.map((v, id) => (
                <SwiperSlide key={id} className='max-w-[720px]'>
                    <div className='h-full py-24 px-20 space-y-4 bg-bluish-gray text-2xl relative'>
                        <div className='px-24 h-16 w-64 -ml-32 -mt-12 text-light text-bold self-start flex items-center absolute top-0'>Google</div>
                        <div className='space-y-6'>
                            <h1 className='font-semibold text-4xl text-primary'>{v.title}</h1>
                            <div className='flex gap-6'>
                                <FaQuoteLeft className='text-6xl text-light-blue min-w-[4rem]' />
                                <p className='text-light-gray'>{v.comment}</p>
                            </div>
                        </div>
                        <div className='border-t-[2px] border-secondary border-opacity-50 w-full pt-4 absolute bottom-10'>
                            <h1 className='font-semibold text-xl text-light-blue'>{v.name}</h1>
                            <h1 className='font-semibold text-base text-light-gray'>{v.date}</h1>
                            <div className='flex space-x-1 text-xl text-secondary'>{stars(v.rating).map(star => star)}</div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

