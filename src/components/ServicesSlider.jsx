// React Router Dom Imports.
import { Link, useNavigate } from 'react-router-dom'
// Icons Import.
import { FaCalendar } from 'react-icons/fa'
import { CgArrowLongRight } from 'react-icons/cg'
// SwiperJs Imports.
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar, Pagination, Navigation } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";

export default function ServicesSlider({ servicesData }) {
	return (
		<div><Swiper
			slidesPerView={"auto"}
			spaceBetween={30}
			centeredSlides={true}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination, Navigation]}
			className="mySwiper"
		>
			{
				Object.entries(servicesData).map((serviceData, id) => {
					const service = { link: serviceData[0], ...serviceData[1] }
					return (
						<SwiperSlide key={id} className="max-w-[28rem] max-h-[32rem] rounded-3xl overflow-hidden">
							<ServicesCard {...service} />
						</SwiperSlide>
					)
				})
			}
		</Swiper></div>
	)
}

const ServicesCard = ({ imgUrl, alt, description, title, link }) => {
	const navigate = useNavigate()
	return (
		<div className='h-[32rem] w-[28rem] relative group transition-transform duration-300'
			onClick={() => navigate(link)}>
			<img src={imgUrl} alt={alt} className='object-cover w-full h-full pointer-events-none' />
			<div className="absolute z-10 bottom-[-25rem] group-hover:bottom-0 w-full h-[30rem] bg-primary text-light px-4 transition-all duration-300">
				<h4 className='text-center mt-[1.6rem] pointer-events-none'>
					{title}
				</h4>

				<div className='flex flex-col justify-around h-full pb-[3rem]'>
					<p className='text-left mt-8 pointer-events-none text-ellipsis-service-card h-[7char]'>
						{description}
					</p>
					<p><Link to={link} className="text-light hover:text-secondary font-bold flex gap-x-2 items-center">
						Lire la suite
						<CgArrowLongRight className='text-3xl' />
					</Link></p>
				</div>
			</div>
			<FaCalendar className='--nav-icons absolute top-[1rem] right-[1rem] bg-secondary text-light p-2 rounded-full' />
		</div>
	)
}
