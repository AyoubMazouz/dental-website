// React Imports.
import { Link } from "react-router-dom"
// Swiper Imports.
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, Autoplay } from "swiper"
// Data Imports.
import { info } from "../data/info.data"

// <a href="sms:+18664504185&body=Hi%2520there%252C%2520I%2527d%2520like%2520to%2520place%2520an%2520order%2520for...">
// Click here to text us!
// </a>

export default function SlideShow({ images }) {
	return (
		<div className="relative flex w-full justify-center">
			{/* Image Slider */}
			<div className="h-[60vh] overflow-hidden lg:h-[70vh]">
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
								className="h-[60vh] w-full object-cover lg:h-[70vh]"
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			{/* Header */}
			<div className="pointer-events-none absolute top-0 z-10 flex h-full w-full flex-col items-center justify-center bg-black/25">
				<h1 className="text-stroke-md lg:text-stroke-lg max-w-[17ch] text-center font-bold uppercase text-light md:text-5xl lg:text-7xl">
					Dentego, le meilleur de la santé dentaire, pour tous
				</h1>
				<p className="max-w-[45ch] text-center font-light text-light">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. At ducimus
					consequuntur, quam distinctio.
				</p>
				<div className="pointer-events-auto mt-12 flex gap-4">
					<Link to="contact" className="submit-btn">
						<h4>Nous contacter</h4>
					</Link>
					<Link
						to="about"
						className="submit-btn hidden bg-secondary hover:bg-secondary/75 lg:flex">
						<h4>à propos de nous</h4>
					</Link>
					<a
						href={`'tel:${info.phone[0]}`}
						className="submit-btn bg-secondary hover:bg-secondary/75 lg:hidden">
						<h4>Rendez vous</h4>
					</a>
				</div>
			</div>
		</div>
	)
}
