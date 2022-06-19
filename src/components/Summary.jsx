// Icons Imports.
import { safeGet } from "@firebase/util"
import { useEffect, useState } from "react"
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
						className="hover:text-secondary pl-[1rem] my-2">
						{header.innerText}
					</a>
				)
			else
				return (
					<a
						href={`#${header.innerText}`}
						className="hover:text-secondary pl-[2.5rem]">
						{header.innerText}
					</a>
				)
		})

	return (
		<>
			{/* Large Screen & Bottom Page Summary */}
			<div className="col-span-full lg:col-span-1 w-full h-full relative">
				<div className="w-full bg-bluish-gray text-light-gray text-lg font-semibold rounded-xl flex flex-col gap-y-3 px-4 py-12 sticky top-[8rem]">
					<h2 className="mb-4 flex gap-x-2 text-light-blue">
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
					className={`lg:hidden w-full mx-2 bg-bluish-gray font-semibold rounded-xl px-4 py-8 transition-all duration-300 shadow-lg fixed overflow-y-scroll max-h-[500px] cursor-pointer ${
						summaryStat ? "bottom-[25px]" : "bottom-0"
					}`}>
					<div
						id="summary-container"
						className="text-light-gray text-lg flex flex-col">
						<h2 className="flex gap-x-2 text-light-blue pointer-events-none">
							<MdList className="text-4xl pointer-events-none" />
							Summaire
						</h2>
						{summaryStat && getHeadersReady()}
					</div>
				</div>
			)}
		</>
	)
}
