import { FaStar, FaRegStar, FaQuoteLeft } from "react-icons/fa"

import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Scrollbar, Pagination } from "swiper"

export default function Reviews({ reviews }) {
	return (
		<div>
			<Swiper
				modules={[Scrollbar, FreeMode, Pagination]}
				grabCursor
				spaceBetween={10}
				slidesPerView={"auto"}
				pagination={{ clickable: true }}
				className="max-w-[99.1vw] h-[388px] lg:h-[480px]">
				{reviews.map((review, id) => (
					<SwiperSlide key={id} className="max-w-[388px] lg:max-w-[642px]">
						<ReviewCard {...review} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

const ReviewCard = ({ name, date, comment, rating: r }) => {
	if (!comment || !name) return null
	const rating = Number(r)
	const stars = (rating) =>
		new Array(rating)
			.fill(<FaStar />)
			.concat(new Array(5 - rating).fill(<FaRegStar />))
	return (
		<div className="pl-4 pr-12 py-20 space-y-4 relative h-full w-full bg-bluish-gray">
			<FaQuoteLeft className="text-[3.5rem] lg:text-[7rem] text-light-blue/50 absolute top-[4rem] left-[1erm]" />
			<div className="flex flex-col justify-between h-full ml-[4rem] lg:ml-[8rem]">
				<p className="text-light-gray font-semibold text-ellipsis-review-card">
					{comment}
				</p>
				<div className="border-t-[4px] border-secondary">
					<h3 className="font-semibold text-light-blue">{name}</h3>
					<h6 className="font-semibold  text-light-gray">{date}</h6>
					<div className="flex space-x-1 text-2xl text-secondary mt-2">
						{stars(rating).map((star) => star)}
					</div>
				</div>
			</div>
		</div>
	)
}
