// React Imports.
import { useState } from "react"
// Icons Imports.
import { MdList } from "react-icons/md"

export default function Summary({ headerList }) {
	const [summaryStat, setSummaryStat] = useState(false)
	const [summaryVisibility, setSummaryVisibility] = useState(false)
	const [height, setHeight] = useState(100)

	window.onscroll = (e) => {
		const reviewsEle = document.getElementById("summary-hiding-point")
		const scrollTop = window.pageYOffset || document.documentElement.scrollTop
		const rectTop = reviewsEle.getBoundingClientRect().top
		const summaryEndPnt = rectTop + scrollTop * 0.8

		if (window.pageYOffset < 400 || window.pageYOffset > summaryEndPnt) {
			setSummaryVisibility(false)
		} else setSummaryVisibility(true)
	}
	// Close Profile summary if you Click Anywhere on the Screen.
	window.onclick = (e) => {
		const ids = ["summary", "summary-container"]
		if (ids.includes(e.target.id)) {
			setSummaryStat((prev) => !prev)
		} else if (summaryStat && !ids.includes(e.target.id)) {
			setSummaryStat(false)
		}
	}

	const getHeadersReady = () =>
		headerList?.map((header) => {
			if (header.tagName === "H1")
				return (
					<a
						href={`#${header.innerText}`}
						className="my-2 pl-[1rem] hover:text-secondary">
						{header.innerText}
					</a>
				)
			else
				return (
					<a
						href={`#${header.innerText}`}
						className="pl-[2.5rem] hover:text-secondary">
						{header.innerText}
					</a>
				)
		})

	return (
		<>
			{/* Large Screen & Bottom Page Summary */}
			<div className="relative col-span-full h-full w-full lg:col-span-1">
				<div className="sticky top-[8rem] flex w-full flex-col gap-y-3 rounded-xl bg-bluish-gray px-4 py-12 text-lg font-semibold text-gray">
					<h2 className="mb-4 flex gap-x-2 text-accent">
						<MdList className="text-4xl" />
						Summaire
					</h2>
					{getHeadersReady()}
				</div>
			</div>

			{/* Floating Summary */}
			{summaryVisibility && (
				<div
					//
					id="summary"
					className={`fixed mx-2 max-h-[500px] w-full cursor-pointer overflow-y-scroll rounded-xl bg-bluish-gray px-4 py-8 font-semibold shadow-lg transition-all duration-300 lg:hidden ${
						summaryStat ? "bottom-[25px]" : "bottom-0"
					}`}>
					<div
						id="summary-container"
						className="flex flex-col text-lg text-gray">
						<h2 className="pointer-events-none flex gap-x-2 text-accent">
							<MdList className="pointer-events-none text-4xl" />
							Summaire
						</h2>
						{summaryStat && getHeadersReady()}
					</div>
				</div>
			)}
		</>
	)
}
