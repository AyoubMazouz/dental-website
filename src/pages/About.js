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
		imgUrl:
			"https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/other-images%2Fabout_hero.png?alt=media&token=ca1ac0e0-92ae-405a-aacc-6005e2828742",
		alt: "",
		currentPage: "About",
		title: "Dentego, groupe engagé pour la santé dentaire de tous !",
		description:
			"Présentation du Groupe Dentego est une enseigne créée en 2013. Fruit de compétences et de valeurs partagées par ses fondateurs, Dentego a à cœur de promouvoir la santé bucco-dentaire accessible pour tous. Dentego garantit des traitements les plus adaptés aux besoins des patients, prodigués par le dentiste de leur choix qui les accompagne tout au […]",
	}

	return (
		<>
			{/* Hero Section */}
			<Hero {...heroValues} />

			<div className="flex flex-col items-center gap-y-[4rem] lg:gap-y-[8rem] overflow-hidden">
				{/* Content */}
				<div className="flex flex-col items-center gap-y-[4rem] lg:gap-y-[8rem] py-[4rem] w-full">
					{/* Stats */}
					<div className="max-w-[1800px] w-full flex-wrap flex gap-x-[2rem] gap-y-[1rem] justify-center items-start text-primary">
						{stats.about.map((stat, id) => (
							<Stats key={id} {...stat} speed={3000} />
						))}
					</div>
				</div>

				{/* About Us */}
				{primaryProfile && (
					<div className="max-w-[1800px] w-full px-2 sm:px-4 md:px-8 mt-[20vw] lg:mt-0">
						<div className="w-full grid lg:grid-cols-2 gap-[2rem] lg:gap-[6rem]">
							{/* Image */}
							<img
								src={primaryProfile.imgUrl}
								alt=""
								className="object-cover aspect-video w-full rounded-2xl"
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
								<div className="flex text-2xl gap-4 my-[.8rem]">
									{/* Social Media Links */}
									<ul className="flex items-center justify-center h-12">
										{primaryProfile?.facebook && (
											<Link to="" className="footer-icon group">
												<FacebookIC className="text-light-gray group-hover:text-white group-hover:bg-facebook" />
											</Link>
										)}
										{primaryProfile?.twitter && (
											<Link to="" className="footer-icon group">
												<TwitterIC className="text-light-gray group-hover:text-white group-hover:bg-twitter" />
											</Link>
										)}
										{primaryProfile?.instagram && (
											<Link to="" className="footer-icon group">
												<InstagramIC className="text-light-gray group-hover:text-white group-hover:bg-instagram" />
											</Link>
										)}
										{primaryProfile?.linkedin && (
											<Link to="" className="footer-icon group">
												<LinkedinIC className="text-light-gray group-hover:text-white group-hover:bg-linkedin" />
											</Link>
										)}
										{primaryProfile?.youtube && (
											<Link to="#" className="footer-icon group">
												<YoutubeIC className="text-light-gray group-hover:text-white group-hover:bg-youtube" />
											</Link>
										)}
										{primaryProfile?.whatsapp && (
											<Link to="#" className="footer-icon group">
												<WhatsappIC className="text-light-gray group-hover:text-white group-hover:bg-whatsapp" />
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
					<div className="max-w-[1800px] w-full px-2 sm:px-4 md:px-8">
						<h1 className="font-bold text-primary w-full max-w-[1800px] my-6">
							Notre Equipe
						</h1>
						<div className="w-full flex flex-wrap justify-around gap-4">
							{profilesDocs.map((profile) => (
								<AboutCard {...profile} />
							))}
						</div>
					</div>
				)}

				{VIDEO_URL && (
					<div className="max-w-[1800px] w-full rounded-xl overflow-hidden px-2 sm:px-4 md:px-8">
						<Video url={VIDEO_URL} />
					</div>
				)}

				{/* Reviews */}
				<h1 className="font-bold text-primary w-full max-w-[1800px] mb-[-6rem]">
					Reviews
				</h1>
				<Reviews reviews={reviewsDocs} />

				{/* Gallery */}
				<div className="max-w-[1800px] w-full page-padding">
					<div className="flex justify-between">
						<h1 className="font-bold text-primary w-full my-6">Gallery</h1>
						<Link
							to="/gallery"
							className="link font-bold py-3 flex items-center gap-x-2">
							<p>More</p>
							<LinkArrowIC className="text-light-blue text-4xl" />
						</Link>
					</div>
					<div className="rounded-xl overflow-hidden page-padding">
						<Gallery />
					</div>
				</div>

				{/* Contact */}
				<ContactForm />
				{/* GooGle Maps */}
				<div className="w-full h-[480px] mt-[-8rem]">
					<GoogleMaps location={info.location} />
				</div>
			</div>
		</>
	)
}
