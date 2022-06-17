import { useState } from "react"
import useDoc from '../hooks/useDoc'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, FreeMode, Thumbs } from 'swiper';
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function Gallery() {
	const { document } = useDoc('gallery', "photos")
	const [thumbsSwiper, setThumbsSwiper] = useState(null);
	return (<>
		<Swiper style={{
			"--swiper-navigation-color": "#fff",
			"--swiper-pagination-color": "#fff",
		}}
			spaceBetween={10}
			navigation={true}
			thumbs={{ swiper: thumbsSwiper }}
			modules={[FreeMode, Navigation, Thumbs]}
			className='mySwiper2 rounded-xl w-full max-w-[1400px] h-[448px] lg:h-[768px] mb-[10px]'>
			{
				Object.entries(document)
					.map(doc => (
						<SwiperSlide key={doc[0]} className="">
							<img src={doc[1]} alt={doc[0]} className='w-full h-full object-cover hover:scale-105 transition-transform duration-500' />
						</SwiperSlide>
					))
			}
		</Swiper>
		<Swiper onSwiper={setThumbsSwiper}
			spaceBetween={10}
			slidesPerView={"auto"}
			freeMode={true}
			watchSlidesProgress={true}
			modules={[FreeMode, Navigation, Thumbs]}
			className="mySwiper w-full max-w-[1400px] h-[96px]">
			{
				Object.entries(document)
					.map(doc => (
						<SwiperSlide key={doc[0]} className="rounded-xl overflow-hidden cursor-pointer w-gallery-swiper-important">
							<img src={doc[1]} alt={doc[0]} className='w-full h-full object-cover hover:scale-105 transition-transform duration-500' />
						</SwiperSlide>
					))
			}
		</Swiper>
	</>)
}
