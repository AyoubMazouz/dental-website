// Components Imports.
import Form from "./Form"
import Details from "./Details"
// Context Imports.
import { useNotification } from "../../contexts/NotificationContext"

export default function ContactForm() {
	const { setAlert } = useNotification()
	return (
		<div
			id="contact"
			className="flex w-full flex-col items-center justify-center bg-primary py-[4rem] px-2 sm:px-4 md:px-8">
			<div className="max-width grid grid-cols-2 gap-[2rem] gap-y-[4rem] lg:grid-cols-4 lg:gap-x-[6rem]">
				{/* Header */}
				<h1 className="col-span-full border-r-2 border-r-light text-light">
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
