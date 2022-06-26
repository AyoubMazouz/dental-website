// React Router Dom Imports.
import { Link } from "react-router-dom"
// Components Imports.
import SlideShow from "../components/SlideShow"
import ServicesSlider from "../components/ServicesSlider"
import GoogleMaps from "../components/GoogleMaps"
import ContactForm from "../components/ContactForm"
import Stats from "../components/Stats"
import Gallery from "../components/Gallery"
// Icons Imports.
import { LinkArrowIC } from "../data/icons.data"
// Data Imports.
import { servicesData, stats, US_IMG, SLIDESHOW_IMGS, info } from "../data"

export default function Home() {
	return (
		<div className="flex flex-col items-center gap-y-[6rem] overflow-hidden bg-light text-gray lg:gap-y-[8rem]">
			{/* SlideShow */}
			<SlideShow images={SLIDESHOW_IMGS} />

			{/* Stats */}
			<div className="mt-[-5rem] flex w-full max-w-[1800px] flex-wrap items-start justify-center gap-x-[2rem] gap-y-[1rem] text-primary">
				{stats.home.map((stat, id) => (
					<Stats key={id} {...stat} speed={3000} />
				))}
			</div>

			{/* Services */}
			<div className="page-padding max-w-[1800px]">
				<div className="grid justify-between gap-x-[6rem] lg:grid-flow-col">
					<h2 className="w-full py-4 font-bold capitalize leading-10 text-primary">
						Des traitements dentaires adaptés à vos besoins et au prix le plus
						juste
					</h2>
					<p>
						<p>
							Chez Dentego,{" "}
							<b>
								nous vous garantissons des traitements dentaires adaptés à vos
								besoins,
							</b>{" "}
							prodigués par le dentiste de votre choix, au prix le plus juste et
							avec <b>une prise en charge rapide, globale et personnalisée.</b>
						</p>
						<Link
							to="/services"
							className="flex items-center gap-x-2 py-3 font-bold text-accent hover:underline hover:opacity-75">
							Our Services
							<LinkArrowIC className="text-4xl text-accent" />
						</Link>
					</p>
				</div>
			</div>
			{/* Services Slider */}
			<div className="mt-[-4rem]">
				<ServicesSlider servicesData={servicesData} />
			</div>

			{/* About */}
			<div className="page-padding grid w-full max-w-[1800px] gap-y-[2rem] lg:grid-cols-2 lg:gap-x-[6rem]">
				<img
					src={US_IMG}
					alt=""
					className="aspect-[8/5] h-full w-full rounded-xl object-cover"
				/>
				<div className="flex flex-col justify-around">
					<h2 className="my-4 text-primary">
						Dentego, groupe engagé pour la santé dentaire de tous!
					</h2>
					<p>
						<p>
							<b>
								Présentation du Groupe Dentego est une enseigne créée en 2013.
							</b>{" "}
							Fruit de compétences et de valeurs partagées par ses fondateurs,
							<b>Dentego a à cœur</b> de promouvoir la santé bucco-dentaire
							accessible pour tous. <b>Dentego garantit</b> des traitements les
							plus adaptés aux besoins des patients, prodigués par le{" "}
							<b>dentiste de leur choix qui les accompagne tout au […]</b>
						</p>
						<Link
							to="/about"
							className="flex items-center gap-x-2 py-3 font-bold text-accent hover:underline hover:opacity-75">
							About Us
							<LinkArrowIC className="text-4xl text-accent" />
						</Link>
					</p>
				</div>
			</div>

			{/* Gallery */}
			<div className="page-padding w-full max-w-[1800px]">
				<div className="flex items-center justify-between">
					<h1 className="my-6 w-full font-bold text-primary">Gallery</h1>
					<Link
						to="/gallery"
						className="link flex items-center gap-x-2 py-3 font-bold">
						<p>More</p>
						<LinkArrowIC className="text-4xl text-accent" />
					</Link>
				</div>
				<div className="page-padding overflow-hidden rounded-xl">
					<Gallery />
				</div>
			</div>

			{/* Blog */}

			{/* Contact */}
			<div className="w-full text-light">
				<ContactForm />
			</div>
			{/* GooGle Maps */}
			<div className="mt-[-8rem] h-[480px] w-full">
				<GoogleMaps location={info.location} />
			</div>
		</div>
	)
}
