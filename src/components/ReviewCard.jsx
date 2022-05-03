import { FaStar, FaRegStar, FaQuoteLeft } from 'react-icons/fa'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css/scrollbar";

export default function ReviewCard({ review }) {
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

