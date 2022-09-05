import { useState } from "react"
import { MdClose } from "react-icons/md"

import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Scrollbar, Pagination, Zoom } from "swiper"
import "swiper/css/zoom"
import "swiper/css/navigation"
import "swiper/css/pagination"

export default function VideoModel({ currIndex, docs, setSelected }) {
	const [index, _] = useState(currIndex)
	return (
		<div className="fixed top-0 z-40 h-[100vh] w-[100vw] bg-[rgba(0,0,0,.9)]">
			<MdClose
				className="absolute top-[1rem] left-[3rem] z-10 cursor-pointer text-6xl text-light"
				onClick={() => setSelected(null)}
			/>
			<Video url={docs[currIndex]} />
		</div>
	)
}

export function Video({ url }) {
	return (
		<iframe
			className="aspect-video h-full w-full rounded-xl"
			frameborder="0"
			scrolling="no"
			type="text/html"
			src={"https://youtube.com/embed/" + url}></iframe>
	)
}
