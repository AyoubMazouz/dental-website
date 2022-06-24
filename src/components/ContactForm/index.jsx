// Components Imports.
import Form from "./Form"
import Details from "./Details"
// Context Imports.
import { useAlert } from "../../contexts/AlertContext"

export default function ContactForm() {
	const { setAlert } = useAlert()
	return (
		<div
			id="contact"
			className="w-full bg-primary flex flex-col justify-center items-center py-[4rem] px-2 sm:px-4 md:px-8">
			<div className="max-width grid gap-[2rem] lg:gap-x-[6rem] gap-y-[4rem] grid-cols-2 lg:grid-cols-4">
				{/* Header */}
				<h1 className="col-span-full text-light border-r-2 border-r-light">
					Contact
				</h1>
				{/* Form & Details */}
				<div className="col-span-2 text-light">
					<Form setAlert={setAlert} />
				</div>
				<div className="col-span-2">
					<Details setAlert={setAlert} />
				</div>
			</div>
		</div>
	)
}
