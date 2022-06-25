// React Imports.
import { Link } from "react-router-dom"
// Swiper Imports.
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper"
// Data Imports.
import { info } from "../data"

// <a href="sms:+18664504185&body=Hi%2520there%252C%2520I%2527d%2520like%2520to%2520place%2520an%2520order%2520for...">
// Click here to text us!
// </a>

export default function SlideShow({ images }) {
	return (
		<div className="flex justify-center w-full relative">
			{/* Image Slider */}
			<div className="overflow-hidden h-[60vh] lg:h-[70vh]">
				<Swiper
					modules={[Navigation, Pagination, Autoplay]}
					navigation={true}
					pagination={{ clickable: true }}
					loop={true}
					autoHeight={true}
					autoplay={{ delay: 5000 }}
					style={{
						"--swiper-navigation-color": "#fff",
						"--swiper-pagination-color": "#fff",
					}}>
					{images.map((url, id) => (
						<SwiperSlide>
							<img
								key={id}
								src={url}
								className="object-cover w-full h-[60vh] lg:h-[70vh]"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			{/* Header */}
			<div className="w-full h-full absolute pointer-events-none z-10 top-0 flex flex-col justify-center items-center bg-black/25">
				<h1 className="font-bold max-w-[17ch] text-center text-light md:text-5xl lg:text-7xl text-stroke-md lg:text-stroke-lg uppercase">
					Dentego, le meilleur de la santé dentaire, pour tous
				</h1>
				<p className="text-light font-light max-w-[45ch] text-center">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ducimus
					consequuntur, quam distinctio.
				</p>
				<div className="flex gap-4 pointer-events-auto mt-12">
					<Link to="contact" className="submit-btn">
						<h4>Nous contacter</h4>
					</Link>
					<Link
						to="about"
						className="submit-btn lg:flex hidden bg-secondary hover:bg-secondary/75">
						<h4>à propos de nous</h4>
					</Link>
					<a
						href={`'tel:${info.phone[0]}`}
						className="submit-btn lg:hidden bg-secondary hover:bg-secondary/75">
						<h4>Rendez vous</h4>
					</a>
				</div>
			</div>
		</div>
	)
}
