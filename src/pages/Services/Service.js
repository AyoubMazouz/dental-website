// React Imports.
import { useEffect, useState } from "react"
// React Router Dom Imports.
import { useParams } from "react-router-dom"
// React Markdown Imports.
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
// Components Imports.
import Hero from "../../components/Hero"
import ServicesSlider from "../../components/ServicesSlider"
import Summary from "../../components/Summary"
import Page404 from "../Page404"
// Data Imports.
import { servicesData } from "../../data"

export default function Services() {
	const [error, setError] = useState(null)
	const { serviceId } = useParams()
	const [markdown, setMarkdown] = useState(null)
	const [headersList, setHeadersList] = useState([])

	// Fetch md File.
	useEffect(() => {
		// Get a list of Valid url end points.
		const servicesList = Object.keys(servicesData)
		// Check if page Exist.
		if (servicesList.includes(serviceId)) {
			fetch("/assets/services/text/" + serviceId + ".md")
				.then((response) => response.text())
				.then((result) => {
					setMarkdown(result)
					setError(null)
				})
				// Show Page404 if failed to fetch md file.
				.catch((error) => {
					console.log(error)
					setError("404")
				})
		}
		// If url is Invalid show Page404.
		else setError("404")
	}, [serviceId])

	// Generate Summary.
	useEffect(() => {
		if (!error) {
			const textDoc = document.querySelector(".ReactMarkdown")
			const headers = textDoc.querySelectorAll("h1, h2")
			const headersList = []
			headers.forEach((header) => {
				headersList.push(header)
				header.id = header.innerText
			})
			setHeadersList(headersList)
		}
	}, [markdown])

	if (error === "404") return <Page404 />

	return (
		<>
			<Hero {...servicesData[serviceId]} />

			<div className={`my-[4rem] flex w-full justify-center`}>
				<div className="relative grid w-full max-w-[1600px] grid-cols-3 gap-[4rem] px-2 sm:px-4 md:px-8">
					<ReactMarkdown
						remarkPlugins={[remarkGfm]}
						rehypePlugins={[rehypeRaw]}
						className="ReactMarkdown col-span-full w-full max-w-[1200px] lg:col-span-2">
						{markdown}
					</ReactMarkdown>

					{/* Summary */}
					<Summary headerList={headersList} />
				</div>
			</div>
			{/* Services Slider */}
			<div id="summary-hiding-point" className="col-span-full my-[4rem]">
				<ServicesSlider servicesData={servicesData} />
			</div>
		</>
	)
}
