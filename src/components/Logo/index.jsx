// React Router Dom Imports.
import { Link } from "react-router-dom"
// Data Imports.
import logo from "./logo.png"

export default function Logo({ type }) {
	if (!type)
		return (
			<Link
				to="/"
				className="text-lg capitalize flex gap-x-2 items-center select-none">
				<img
					src={logo}
					alt="dental care"
					className="w-16 pointer-events-none"
				/>
				<h3>
					dental
					<span className="font-bold text-sky-500 underline">Care</span>
				</h3>
			</Link>
		)
	if (type === "form")
		return (
			<div
				to="/"
				className="capitalize flex flex-col gap-y-2 items-center select-none">
				<img
					src={logo}
					alt="dental care"
					className="w-20 pointer-events-none"
				/>
				<h3>
					dental
					<span className="font-bold text-sky-500 underline">Care</span>
				</h3>
			</div>
		)
}
