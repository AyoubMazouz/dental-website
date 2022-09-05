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
						className="max-h-[28rem] max-w-[20rem] overflow-hidden rounded-xl lg:max-h-[32rem] lg:max-w-[28rem]">
						<ServicesCard
							{...{ link: `services/${serviceData[0]}`, ...serviceData[1] }}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}

const ServicesCard = ({ imgUrl, alt, description, title }) => {
	const navigate = useNavigate()
	return (
		<div className="group relative h-[28rem] w-[20rem] transition-transform duration-300 lg:h-[32rem] lg:w-[28rem]">
			<img
				src={imgUrl}
				alt={alt}
				className="h-full w-full object-cover"
				onClick={() =>
					navigate("/services/" + title.toLowerCase().replace(" ", "_"))
				}
			/>
			<div className="absolute bottom-[-25rem] z-10 h-[30rem] w-full rounded-xl bg-light/[65%] px-4 text-gray backdrop-blur transition-all duration-300 group-hover:bottom-[-4rem]">
				<h4 className="mt-[1.6rem] text-center font-semibold text-primary group-hover:hidden">
					{title}
				</h4>

				<div className="font-semibold">
					<h4 className="mt-[1.6rem] text-center font-semibold text-primary">
						{title}
					</h4>
					<p className="text-ellipsis-service-card mt-8 h-[7char] text-left">
						{description}
					</p>
					<p>
						<Link
							to={"/services/" + title.toLowerCase().replace(" ", "_")}
							className="link my-4 flex gap-x-2">
							Lire la suite
							<LinkArrowIC className="text-4xl" />
						</Link>
					</p>
				</div>
			</div>
			<Link
				to="contact"
				className="absolute top-3 right-3 flex cursor-pointer items-center gap-1 rounded-full bg-secondary p-2 text-sm font-semibold text-light transition-all duration-300 hover:scale-105 hover:bg-secondary/75 hover:underline ">
				<CalendarIC className="text-2xl" />
				Rendez vous
			</Link>
		</div>
	)
}
