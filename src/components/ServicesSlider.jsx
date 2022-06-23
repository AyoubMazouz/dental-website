// React Router Dom Imports.
import { Link, useNavigate } from "react-router-dom"
// Icons Import.
import { CalendarIC, LinkArrowIC } from "../data/icons.data"
// SwiperJs Imports.
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import "swiper/css"
import "swiper/css/pagination"

export default function ServicesSlider({ servicesData }) {
	return (
		<div>
			<Swiper
				slidesPerView={"auto"}
				spaceBetween={30}
				centeredSlides={true}
				grabCursor
				modules={[Navigation]}
				className="mySwiper">
				{Object.entries(servicesData).map((serviceData, id) => (
					<SwiperSlide
						key={id}
						className="lg:max-h-[32rem] lg:max-w-[28rem] max-h-[28rem] max-w-[20rem] overflow-hidden rounded-xl">
						<ServicesCard
							{...{ link: `services/${serviceData[0]}`, ...serviceData[1] }}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

const ServicesCard = ({ imgUrl, alt, description, title, link }) => {
	const navigate = useNavigate()
	return (
		<div className="lg:h-[32rem] lg:w-[28rem] h-[28rem] w-[20rem] relative group transition-transform duration-300">
			<img
				src={imgUrl}
				alt={alt}
				className="object-cover w-full h-full"
				onClick={() => navigate(link)}
			/>
			<div className="absolute z-10 bottom-[-25rem] group-hover:bottom-[-4rem] w-full h-[30rem] backdrop-blur bg-white/[65%] text-light-gray px-4 transition-all duration-300 rounded-xl">
				<h4 className="text-center text-primary mt-[1.6rem] font-semibold group-hover:hidden">
					{title}
				</h4>

				<div className="font-semibold">
					<h4 className="text-center text-primary mt-[1.6rem] font-semibold">
						{title}
					</h4>
					<p className="text-left mt-8 text-ellipsis-service-card h-[7char]">
						{description}
					</p>
					<p>
						<Link to={link} className="link flex gap-x-2 my-4">
							Lire la suite
							<LinkArrowIC className="text-4xl" />
						</Link>
					</p>
				</div>
			</div>
			<Link
				to="contact"
				className="gap-1 flex items-center p-2 cursor-pointer bg-secondary text-light absolute top-3 right-3 transition-all duration-300 rounded-full hover:underline text-sm font-semibold hover:bg-secondary/75 hover:scale-105 ">
				<CalendarIC className="text-2xl" />
				Rendez vous
			</Link>
		</div>
	)
}
