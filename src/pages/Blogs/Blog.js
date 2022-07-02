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
import Summary from "../../components/Summary"
import Page404 from "../Page404"
import useBlog from "../../hooks/useBlog"

export default function Blog() {
	const { blogId, hero, markDown } = useBlog()
	const [headersList, setHeadersList] = useState([])

	// Generate Summary.
	useEffect(() => {
		if (markDown) {
			const textDoc = document.querySelector(".ReactMarkdown")
			const headers = textDoc.querySelectorAll("h1, h2")
			const headersList = []
			headers.forEach((header) => {
				headersList.push(header)
				header.id = header.innerText
			})
			setHeadersList(headersList)
		}
	}, [markDown])

	return (
		<>
			<Hero {...hero} />

			<div className={`my-[4rem] flex w-full justify-center`}>
				<div className="relative grid w-full max-w-[1600px] grid-cols-3 gap-[4rem] px-2 sm:px-4 md:px-8">
					<ReactMarkdown
						remarkPlugins={[remarkGfm]}
						rehypePlugins={[rehypeRaw]}
						className="ReactMarkdown col-span-full w-full max-w-[1200px] lg:col-span-2">
						{markDown}
					</ReactMarkdown>

					{/* Summary */}
					<Summary headerList={headersList} />
				</div>
			</div>
		</>
	)
}
