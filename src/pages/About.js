// React Imports.
import { Link } from "react-router-dom"
// Components Imports.
import Hero from "../components/Hero"
import Stats from "../components/Stats"
import Reviews from "../components/Reviews"
import Gallery from "../components/Gallery"
import ContactForm from "../components/ContactForm"
import GoogleMaps from "../components/GoogleMaps"
import AboutCard from "../components/AboutCard"
import { Video } from "../components/VideoModel"

import { LinkArrowIC } from "../data/icons.data"
// Data Imports.
import { VIDEO_URL } from "../data"
import { info } from "../data/info.data"
import { stats } from "../data/stats.data"
import { reviews } from "../data/reviews.data"
import { profiles } from "../data/profiles.data"

export default function About() {
	const heroValues = {
		imgURL:
			"https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/other-images%2Fabout_hero.png?alt=media&token=ca1ac0e0-92ae-405a-aacc-6005e2828742",
		title: "À-propos",
		description:
			"Présentation du Groupe Dentego est une enseigne créée en 2013. Fruit de compétences et de valeurs partagées par ses fondateurs, Dentego a à cœur de promouvoir la santé bucco-dentaire accessible pour tous. Dentego garantit des traitements les plus adaptés aux besoins des patients, prodigués par le dentiste de leur choix qui les accompagne tout au […]",
	}

	return (
		<>
			{/* Hero Section */}
			<Hero {...heroValues} />

			<div className="flex flex-col items-center gap-y-[4rem] overflow-hidden lg:gap-y-[8rem]">
				{/* Content */}
				<div className="flex w-full flex-col items-center gap-y-[4rem] py-[4rem] lg:gap-y-[8rem]">
					{/* Stats */}
					<div className="flex w-full max-w-[1800px] flex-wrap items-start justify-center gap-x-[2rem] gap-y-[1rem] text-primary">
						{stats.about.map((stat, id) => (
							<Stats key={id} {...stat} speed={3000} />
						))}
					</div>
				</div>

				{/* About Us */}
				{profiles?.length && (
					<div className="mt-[20vw] w-full max-w-[1800px] px-2 sm:px-4 md:px-8 lg:mt-0">
						<div className="grid w-full gap-[2rem] lg:grid-cols-2 lg:gap-[6rem]">
							{/* Image */}
							<img
								src={profiles[0].img}
								alt={profiles[0].name}
								className="aspect-video w-full rounded-2xl object-cover"
							/>
							<div className="flex flex-col justify-around">
								<h1 className="text-primary">{profiles[0].name}</h1>
								<p className="">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
									cumque esse sequi quibusdam nihil illo nulla neque delectus
									dicta facere temporibus autem quas unde ut repudiandae velit
									veritatis et officia commodi pariatur, nostrum eius totam
									dolorum ab. Delenium aperiam similique temporibus tempora.
								</p>
							</div>
						</div>
					</div>
				)}
				{/* Team */}
				{profiles?.length && (
					<div className="w-full max-w-[1800px] px-2 sm:px-4 md:px-8">
						<h1 className="my-6 w-full max-w-[1800px] font-bold text-primary">
							Notre Equipe
						</h1>
						<div className="flex w-full flex-wrap justify-around gap-4">
							{profiles.map((profile, index) => {
								if (index === 0) return null
								else return <AboutCard {...profile} />
							})}
						</div>
					</div>
				)}

				{VIDEO_URL && (
					<div className="w-full max-w-[1800px] overflow-hidden rounded-xl px-2 sm:px-4 md:px-8">
						<Video url={VIDEO_URL} />
					</div>
				)}

				{/* Reviews */}
				<h1 className="mb-[-6rem] w-full max-w-[1800px] font-bold text-primary">
					Témoignage
				</h1>
				<Reviews reviews={reviews} />

				{/* Gallery */}
				<div className="page-padding w-full max-w-[1800px]">
					<div className="flex justify-between">
						<h1 className="my-6 w-full font-bold text-primary">Gallery</h1>
						<Link to="/gallery" className="link flex items-center gap-x-1">
							<p>Plus</p>
							<LinkArrowIC className="text-3xl text-accent" />
						</Link>
					</div>
					<div className="page-padding overflow-hidden rounded-xl">
						<Gallery />
					</div>
				</div>

				{/* Contact */}
				<ContactForm />
				{/* GooGle Maps */}
				<div className="mt-[-8rem] h-[480px] w-full">
					<GoogleMaps location={info.location} />
				</div>
			</div>
		</>
	)
}
