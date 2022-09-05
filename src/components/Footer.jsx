// React Imports.
import { useState } from "react"
import { Link } from "react-router-dom"
// Icons Imports.
import {
	YoutubeIC,
	FacebookIC,
	InstagramIC,
	LinkedinIC,
	TwitterIC,
	WhatsappIC,
	MailIC,
} from "../data/icons.data"
// Components Imports.
import Logo from "./Logo"
// Data Imports.
import { links, socialLinks } from "../data/links.data"
const { whatsapp, linkedin, youtube, twitter, instagram, facebook } =
	socialLinks

const Footer = () => {
	const [formValues, setFormValues] = useState({ email: "" })

	const getIcons = () => (
		<>
			{facebook && (
				<a href={facebook} target="__blanc__" className="footer-icon group">
					<FacebookIC className="group-hover:bg-light group-hover:text-facebook" />
				</a>
			)}
			{youtube && (
				<a href={youtube} target="__blanc__" className="footer-icon group">
					<YoutubeIC className="group-hover:bg-light group-hover:text-youtube" />
				</a>
			)}
			{twitter && (
				<a href={twitter} target="__blanc__" className="footer-icon group">
					<TwitterIC className=" group-hover:bg-light group-hover:text-twitter" />
				</a>
			)}
			{instagram && (
				<a href={instagram} target="__blanc__" className="footer-icon group">
					<InstagramIC className="group-hover:bg-light group-hover:text-instagram" />
				</a>
			)}
			{linkedin && (
				<a href={linkedin} target="__blanc__" className="footer-icon group">
					<LinkedinIC className=" group-hover:bg-light group-hover:text-linkedin" />
				</a>
			)}
			{whatsapp && (
				<a href={whatsapp} target="__blanc__" className="footer-icon group">
					<WhatsappIC className=" group-hover:bg-light group-hover:text-whatsapp" />
				</a>
			)}
		</>
	)
	return (
		<div className="w-full max-w-[2500px] text-light">
			{/* News Letter */}
			<div className="page-padding w-full bg-accent py-[5rem] text-center">
				<h1 className="text-center">Abonnez-vous à notre newsletter</h1>

				<p className="my-4 mb-12">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
					vero sapiente?
				</p>

				<form className="relative flex flex-col items-center justify-center gap-4 sm:flex-row">
					<div className="absolute left-0 grid h-[4rem] items-center border-r-[3px] border-gray/25 px-3 text-3xl text-accent md:px-6">
						<MailIC className="" />
					</div>
					<input
						type="email"
						placeHolder="Votre address email..."
						value={formValues.email}
						onChange={(e) => setFormValues({ email: e.target.value })}
						className="input h-[4rem] w-full pl-16 md:pl-24"
					/>

					<button
						type="submit"
						className="absolute right-[.2rem] top-[50%] h-[3.6rem] translate-y-[-50%] rounded bg-accent px-6 font-semibold shadow-none hover:bg-accent/75">
						S'abonner
					</button>
				</form>
			</div>

			{/* Nav Links */}
			<div className="page-padding flex w-full max-w-[2500px] flex-wrap justify-between gap-6 bg-gray py-[5rem] ">
				<div className="col-span-2 flex flex-col gap-6">
					{/* logo */}
					<Logo />
					{/* Social Media Links */}
					<ul className="flex gap-1">{getIcons()}</ul>
				</div>

				<ul className="flex flex-col text-bluish-gray">
					<h4>Navigation</h4>
					{Object.entries(links).map(([label, link], id) => {
						return (
							<li className="hover:underline hover:opacity-75">
								<Link key={id} to={link} className="">
									{label}
								</Link>
							</li>
						)
					})}
				</ul>

				<ul className="flex flex-col text-bluish-gray">
					<h4>Services</h4>
					{links["Services"]?.subLinks &&
						Object.entries(links["Services"].subLinks).map(
							([label, link], id) => {
								return (
									<li className="hover:underline hover:opacity-75">
										<Link key={id} to={link} className="">
											{label}
										</Link>
									</li>
								)
							}
						)}
				</ul>
				<ul className="flex flex-col text-bluish-gray">
					<h4>Gallery</h4>
					{links["Services"]?.subLinks &&
						Object.entries(links["Gallery"].subLinks).map(
							([label, link], id) => {
								return (
									<li className="hover:underline hover:opacity-75">
										<Link key={id} to={link} className="">
											{label}
										</Link>
									</li>
								)
							}
						)}
				</ul>
			</div>
			{/* CopyRight, Policy & Terms of Service */}
			<div className="w-full bg-gray py-1 text-center">
				<h5>
					Copyright 2021 {"| "}
					<Link
						to="#"
						className="font-semibold text-accent hover:underline hover:opacity-75">
						Policy
					</Link>
					<Link
						to="#"
						className="font-semibold text-accent hover:underline hover:opacity-75">
						, Terms of Service
					</Link>
					{" |"} created by Mazouz Ayoub
				</h5>
			</div>
		</div>
	)
}

export default Footer
