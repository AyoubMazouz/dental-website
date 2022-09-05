import { useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, FreeMode, Thumbs } from "swiper"
import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"
// Data Imports.
import { photos } from "../data"

export default function Gallery() {
	const [thumbsSwiper, setThumbsSwiper] = useState(null)
	return (
		<>
			<Swiper
				style={{
					"--swiper-navigation-color": "#fff",
					"--swiper-pagination-color": "#fff",
				}}
				thumbs={{
					swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
				}}
				spaceBetween={10}
				navigation={true}
				grabCursor
				modules={[FreeMode, Navigation, Thumbs]}
				className="mySwiper2 mb-[10px] h-[448px] w-full max-w-[1400px] rounded-xl lg:h-[768px]">
				{photos.map((doc) => (
					<SwiperSlide key={doc}>
						<img
							src={doc}
							className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
						/>
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				onSwiper={setThumbsSwiper}
				spaceBetween={10}
				slidesPerView={"auto"}
				freeMode={true}
				grabCursor
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className="mySwiper h-[96px] w-full max-w-[1400px]">
				{photos.map((doc) => (
					<SwiperSlide
						key={doc}
						className="w-gallery-swiper-important overflow-hidden rounded-md">
						<img
							src={doc}
							className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}
