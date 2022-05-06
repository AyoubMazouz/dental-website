import { FaStar, FaRegStar, FaQuoteLeft } from 'react-icons/fa'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Scrollbar, Pagination } from 'swiper'

export default function Reviews({ reviews }) {
  return (
    <div><Swiper modules={[Scrollbar, FreeMode, Pagination]} grabCursor spaceBetween={30} pagination={{ clickable: true }}
        className='h-[480px] max-w-[99.1vw] my-[2.5rem] mb-[5rem]'
        // breakpoints={{
        //   640: { slidesPerView: 1 },
        //   768: { slidesPerView: 1.25 },
        //   1024: { slidesPerView: 1.75 },
        //   1280: { slidesPerView: 2.25 },
        //   1536: { slidesPerView: 2.75 },
        // }}
        >
        {reviews.reviews.map((review, id) => (
            <SwiperSlide key={id} className='bg-bluish-gray rounded-2xl overflow-hidden'>
                <ReviewCard review={review} />
            </SwiperSlide>))}
    </Swiper></div>
  )
}

const ReviewCard = ({ review }) => {
    const stars = rating => new Array(rating).fill(<FaStar />).concat(new Array(5 - rating).fill(<FaRegStar />))
    return (
        <div className='h-full pl-4 pr-12 py-20 space-y-4 text-xl relative'>
            <div className='flex gap-4 h-full'>
                <FaQuoteLeft className='text-[8rem] text-light-blue min-w-[8rem] translate-y-[-3.6rem]' />
                <div className='flex flex-col justify-between h-full'>
                    <p className='text-light-gray font-bold'>{review.comment}</p>
                    <div className='border-t-[4px] border-secondary mr-auto'>
                        <h1 className='font-semibold text-2xl text-light-blue'>{review.name}</h1>
                        <h1 className='font-semibold text-sm text-light-gray'>{review.date}</h1>
                        <div className='flex space-x-1 text-2xl text-secondary'>{stars(review.rating).map(star => star)}</div> 
                    </div> 
                </div>
            </div>
        </div>   
    )
}

