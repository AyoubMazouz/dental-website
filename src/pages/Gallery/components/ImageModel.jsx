import { useState } from "react"
import { MdClose } from "react-icons/md"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, FreeMode, Thumbs, Zoom } from "swiper"
import "swiper/css/zoom"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function ImageModel({ currIndex, docs, setSelected }) {
	const [index, _] = useState(currIndex)
	const [thumbsSwiper, setThumbsSwiper] = useState(null)
	return (
		<div className="w-[99vw] h-[100vh] bg-[rgba(0,0,0,.9)] grid place-items-center fixed z-40 top-0">
			<MdClose
				className="text-light text-3xl lg:text-5xl absolute z-10 top-3 right-3 cursor-pointer"
				onClick={() => setSelected(null)}
			/>
			<Swiper
				style={{
					"--swiper-navigation-color": "#fff",
					"--swiper-pagination-color": "#fff",
				}}
				thumbs={{
					swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
				}}
				grabCursor
				zoom
				spaceBetween={10}
				navigation={true}
				initialSlide={index}
				modules={[FreeMode, Zoom, Thumbs]}
				className="w-full h-full mb-[10px]">
				{Object.entries(docs).map(([alt, url]) => (
					<SwiperSlide key={alt} className="rounded-xl overflow-hidden">
						<div className="swiper-zoom-container">
							<img src={url} alt={alt} className="w-full h-full" />
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<Swiper
				onSwiper={setThumbsSwiper}
				spaceBetween={10}
				slidesPerView={"auto"}
				grabCursor
				freeMode={true}
				watchSlidesProgress={true}
				modules={[FreeMode, Navigation, Thumbs]}
				className="mySwiper w-full h-[96px]">
				{Object.entries(docs).map((doc) => (
					<SwiperSlide
						key={doc[0]}
						className="rounded-md overflow-hidden w-gallery-swiper-important">
						<img
							src={doc[1]}
							alt={doc[0]}
							className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
