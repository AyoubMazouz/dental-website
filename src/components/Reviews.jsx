import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCreative } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function Reviews({ reviews }) {

    const stars = rating => {
        const starsList = []
        for (let i = 0; i < parseInt(rating); i++) {
            starsList.push(<FaStar />)
        } return starsList
    }

    return (
        <Swiper modules={[Navigation, Pagination, EffectCreative]} 
                grabCursor
                navigation
                pagination
                effect={"creative"}
                creativeEffect={{
                prev: {
                    shadow: true,
                    origin: "left center",
                    translate: ["-5%", 0, -200],
                    rotate: [0, 100, 0],
                },
                next: {
                    origin: "right center",
                    translate: ["5%", 0, -200],
                    rotate: [0, -100, 0],
                },
                }}
                className='w-[820px] h-[580px] rounded shadow-xl overflow-hidden bg-bluish-gray'>

            {reviews.map((v, id) => (
                <SwiperSlide key={id} className='h-full'>
                    <div className='h-full py-24 px-20 space-y-4 bg-bluish-gray text-2xl grid grid-rows-12'>
                        <div className='px-24 h-16 w-64 bg-dark -ml-32 -mt-12 text-light text-bold rounded-r-lg shadow-md flex items-center'>Google</div>
                        <div className='space-y-6 row-span-6'>
                            <h1 className='font-semibold text-4xl text-primary'>{v.title}</h1>
                            <div className='flex gap-6'>
                                <FaQuoteLeft className='text-6xl text-light-blue min-w-[4rem]' />
                                <p className='font-[roman] text-light-gray'>{v.comment}</p>
                            </div>
                        </div>
                        <div className='h-[2px] w-full bg-secondary opacity-50'></div>
                        <div className=''>
                            <h1 className='font-semibold text-base text-light-blue'>{v.name}</h1>
                            <h1 className='font-semibold text-base text-light-gray'>{v.date}</h1>
                            <div className='flex space-x-1 text-xl text-secondary'>{stars(v.rating).map(star => star)}</div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    )
}

