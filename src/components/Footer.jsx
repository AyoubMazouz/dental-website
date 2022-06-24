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
import Input from "./Input"
// Data Imports.
import { links, socialLinks } from "../data"
const { whatsapp, linkedin, youtube, twitter, instagram, facebook } =
	socialLinks

const Footer = () => {
	const [email, setEmail] = useState({ email: "" })

	const handleChange = (ev) => {
		setEmail(ev.target.value)
	}
	const getIcons = () => (
		<>
			{facebook && (
				<a href={facebook} target="__blanc__" className="group footer-icon">
					<FacebookIC className="group-hover:text-facebook group-hover:bg-light" />
				</a>
			)}
			{youtube && (
				<a href={youtube} target="__blanc__" className="group footer-icon">
					<YoutubeIC className="group-hover:text-youtube group-hover:bg-light" />
				</a>
			)}
			{twitter && (
				<a href={twitter} target="__blanc__" className="group footer-icon">
					<TwitterIC className=" group-hover:text-twitter group-hover:bg-light" />
				</a>
			)}
			{instagram && (
				<a href={instagram} target="__blanc__" className="group footer-icon">
					<InstagramIC className="group-hover:text-instagram group-hover:bg-light" />
				</a>
			)}
			{linkedin && (
				<a href={linkedin} target="__blanc__" className="group footer-icon">
					<LinkedinIC className=" group-hover:text-linkedin group-hover:bg-light" />
				</a>
			)}
			{whatsapp && (
				<a href={whatsapp} target="__blanc__" className="group footer-icon">
					<WhatsappIC className=" group-hover:text-whatsapp group-hover:bg-light" />
				</a>
			)}
		</>
	)
	return (
		<div className="text-light max-w-[2500px] w-full">
			{/* News Letter */}
			<div className="w-full bg-accent text-center py-[5rem] page-padding">
				<h1 className="text-center">SubScribe To Our News Letter</h1>

				<p className="my-4 mb-12">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
					vero sapiente?
				</p>

				<div className="relative flex flex-col sm:flex-row justify-center items-center gap-4">
					<div className="border-r-[3px] border-gray/25 absolute left-0 text-accent text-3xl grid items-center px-3 md:px-6 h-[4rem]">
						<MailIC className="" />
					</div>
					<input
						type="email"
						placeHolder="Votre address email..."
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="input w-full h-[4rem] pl-16 md:pl-24"
					/>

					<button className="bg-accent hover:bg-accent/75 px-6 rounded font-semibold absolute right-[.2rem] top-[50%] translate-y-[-50%] h-[3.6rem] shadow-none">
						Subscribe
					</button>
				</div>
			</div>

			{/* Nav Links */}
			<div className="bg-gray w-full page-padding max-w-[2500px] py-[5rem] flex flex-wrap justify-between gap-6 ">
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
			<div className="w-full text-center py-1 bg-gray">
				<h5>
					Copyright 2021 {"| "}
					<Link
						to="#"
						className="font-semibold hover:underline hover:opacity-75 text-accent">
						Policy
					</Link>
					<Link
						to="#"
						className="font-semibold hover:underline hover:opacity-75 text-accent">
						, Terms of Service
					</Link>
				</h5>
			</div>
		</div>
	)
}

export default Footer
