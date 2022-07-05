// React Imports.
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import remarkGfm from "remark-gfm"
// Components Imports.
import Hero from "../components/Hero"
import Stats from "../components/Stats"
import Reviews from "../components/Reviews"
import Gallery from "../components/Gallery"
import ContactForm from "../components/ContactForm"
import GoogleMaps from "../components/GoogleMaps"
import AboutCard from "../components/AboutCard"
import { Video } from "../components/VideoModel"
// Hooks Imports.
import useDocs from "../hooks/useDocs"
// Icons Imports.
import {
	FacebookIC,
	InstagramIC,
	YoutubeIC,
	LinkedinIC,
	TwitterIC,
	WhatsappIC,
} from "../data/icons.data"
import { LinkArrowIC } from "../data/icons.data"
// Data Imports.
import { stats, info, VIDEO_URL } from "../data"

export default function About() {
	// Get Reviews from FireStore.
	const { docs: reviewsDocs } = useDocs("reviews")
	const { docs: profilesDocs } = useDocs("profiles")
	const [primaryProfile, setPrimaryProfile] = useState(null)

	useEffect(() => {
		setPrimaryProfile(
			profilesDocs.filter((profile) => {
				return profile.primary
			})[0]
		)
	}, [profilesDocs])

	const heroValues = {
		imgURL:
			"https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/other-images%2Fabout_hero.png?alt=media&token=ca1ac0e0-92ae-405a-aacc-6005e2828742",
		title: "About",
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
				{primaryProfile && (
					<div className="mt-[20vw] w-full max-w-[1800px] px-2 sm:px-4 md:px-8 lg:mt-0">
						<div className="grid w-full gap-[2rem] lg:grid-cols-2 lg:gap-[6rem]">
							{/* Image */}
							<img
								src={primaryProfile.imgUrl}
								alt=""
								className="aspect-video w-full rounded-2xl object-cover"
							/>
							<div className="flex flex-col justify-around">
								<h1 className="text-primary">{primaryProfile.id}</h1>
								<p className="">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
									cumque esse sequi quibusdam nihil illo nulla neque delectus
									dicta facere temporibus autem quas unde ut repudiandae velit
									veritatis et officia commodi pariatur, nostrum eius totam
									dolorum ab. Delenium aperiam similique temporibus tempora.
								</p>
								<div className="my-[.8rem] flex gap-4 text-2xl">
									{/* Social Media Links */}
									<ul className="flex h-12 items-center justify-center">
										{primaryProfile?.facebook && (
											<Link to="" className="footer-icon group">
												<FacebookIC className="text-light-gray group-hover:bg-facebook group-hover:text-light" />
											</Link>
										)}
										{primaryProfile?.twitter && (
											<Link to="" className="footer-icon group">
												<TwitterIC className="text-light-gray group-hover:bg-twitter group-hover:text-light" />
											</Link>
										)}
										{primaryProfile?.instagram && (
											<Link to="" className="footer-icon group">
												<InstagramIC className="text-light-gray group-hover:bg-instagram group-hover:text-light" />
											</Link>
										)}
										{primaryProfile?.linkedin && (
											<Link to="" className="footer-icon group">
												<LinkedinIC className="text-light-gray group-hover:bg-linkedin group-hover:text-light" />
											</Link>
										)}
										{primaryProfile?.youtube && (
											<Link to="#" className="footer-icon group">
												<YoutubeIC className="text-light-gray group-hover:bg-youtube group-hover:text-light" />
											</Link>
										)}
										{primaryProfile?.whatsapp && (
											<Link to="#" className="footer-icon group">
												<WhatsappIC className="text-light-gray group-hover:bg-whatsapp group-hover:text-light" />
											</Link>
										)}
									</ul>
								</div>
							</div>
						</div>
					</div>
				)}
				{/* Team */}
				{profilesDocs?.length > 1 && (
					<div className="w-full max-w-[1800px] px-2 sm:px-4 md:px-8">
						<h1 className="my-6 w-full max-w-[1800px] font-bold text-primary">
							Notre Equipe
						</h1>
						<div className="flex w-full flex-wrap justify-around gap-4">
							{profilesDocs.map((profile) => (
								<AboutCard {...profile} />
							))}
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
					Reviews
				</h1>
				<Reviews reviews={reviewsDocs} />

				{/* Gallery */}
				<div className="page-padding w-full max-w-[1800px]">
					<div className="flex justify-between">
						<h1 className="my-6 w-full font-bold text-primary">Gallery</h1>
						<Link to="/gallery" className="link flex items-center gap-x-1">
							<p>More</p>
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
