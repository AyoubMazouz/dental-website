// React Router Dom Imports.
import { Link } from "react-router-dom"
// Data Imports.
import logo from "./logo.png"

export default function Logo() {
	return (
		<Link to="/" className="text-lg capitalize flex gap-x-2 items-center">
			<img src={logo} alt="dental care" className="w-16" />
			<h3>
				dental
				<span className="font-bold text-sky-500 underline">Care</span>
			</h3>
		</Link>
	)
}
