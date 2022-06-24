// React Router Dom Imports.
import { Link } from "react-router-dom"
// Data Imports.
import logo from "./logo.png"

export default function Logo({ type }) {
	if (!type)
		return (
			<Link to="/" className="flex items-center select-none">
				<img
					src={logo}
					alt="dental care"
					className="w-12 lg:w-16 pointer-events-none mx-2"
				/>
				<div className="text-xl capitalize">
					dental
					<span className="font-bold text-accent underline">Care</span>
				</div>
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
					<span className="font-bold text-accent underline">Care</span>
				</h3>
			</div>
		)
}
