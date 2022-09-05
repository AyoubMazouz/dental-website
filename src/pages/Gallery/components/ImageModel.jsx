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
		<div className="fixed top-0 z-40 grid h-[100vh] w-[99vw] place-items-center bg-[rgba(0,0,0,.9)]">
			<MdClose
				className="absolute top-3 right-3 z-10 cursor-pointer text-3xl text-light lg:text-5xl"
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
				className="mb-[10px] h-full w-full">
				{Object.entries(docs).map(([alt, url]) => (
					<SwiperSlide key={alt} className="overflow-hidden rounded-xl">
						<div className="swiper-zoom-container">
							<img src={url} alt={alt} className="h-full w-full" />
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
				className="mySwiper h-[96px] w-full">
				{docs.map((doc) => (
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
		</div>
	)
}
