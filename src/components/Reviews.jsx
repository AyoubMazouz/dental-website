import { FaStar, FaRegStar, FaQuoteLeft } from 'react-icons/fa'

import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Scrollbar, Pagination } from 'swiper'

export default function Reviews({ reviews }) {
	return (
		<div><Swiper modules={[Scrollbar, FreeMode, Pagination]} grabCursor spaceBetween={30} pagination={{ clickable: true }}
			className='h-[480px] max-w-[99.1vw]'
			breakpoints={{
				640: { slidesPerView: 1 },
				768: { slidesPerView: 1.25 },
				1024: { slidesPerView: 1.75 },
				1280: { slidesPerView: 2.25 },
				1536: { slidesPerView: 2.75 },
			}}
		>
			{reviews.map((review, id) => (
				<SwiperSlide key={id} className='bg-bluish-gray rounded-2xl overflow-hidden'>
					<ReviewCard {...review} />
				</SwiperSlide>))}
		</Swiper></div>
	)
}

const ReviewCard = ({ name, date, comment, rating: r }) => {
	if (!comment || !name) return null
	const rating = Number(r)
	const stars = rating => (
		new Array(rating).fill(<FaStar />).concat(
			new Array(5 - rating).fill(<FaRegStar />)
		)
	)
	return (
		<div className='h-full pl-4 pr-12 py-20 space-y-4 relative'>
			<div className='flex gap-4 h-full'>
				<FaQuoteLeft className='text-[8rem] text-light-blue min-w-[8rem] translate-y-[-3.6rem]' />
				<div className='flex flex-col justify-between h-full'>
					<p className='text-light-gray font-semibold'>{comment}</p>
					<div className='border-t-[4px] border-secondary'>
						<h3 className='font-semibold text-light-blue'>{name}</h3>
						<h6 className='font-semibold  text-light-gray'>{date}</h6>
						<div className='flex space-x-1 text-2xl text-secondary mt-2'>
							{
								stars(rating).map(star => star)
							}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

