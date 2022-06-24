// React Imports.
import emailjs from "emailjs-com"
// Components Imports.
import Input from "../Input"
// Hooks Imports.
import useForm from "../../hooks/useFom"

// Form Parameters.
const formParams = [
	{
		type: "text",
		name: "fullName",
		label: "Votre Nom",
		placeHolder: "Entrer votre nom...",
		required: true,
	},
	{
		type: "email",
		name: "email",
		label: "Votre Email Address",
		placeHolder: "Entrer votre address electronique...",
		required: true,
	},
	{
		type: "phone",
		name: "phone",
		label: "Votre numero de Telephone",
		placeHolder: "Entrer votre numero de telephone...",
		required: false,
	},
	{
		type: "select",
		name: "subject",
		label: "Subject",
		required: true,
		placeHolder: "Selectionner un sujet",
		options: [
			"Soins dentaires",
			"Pédodontie",
			"Orthodonties",
			"Prothèses et implants dentaires",
			"Esthétique dentaire",
			"Radiologie dentaire",
			"Urgence dentaire",
			"Autre",
		],
	},
	{
		type: "textarea",
		name: "message",
		label: "message",
		placeHolder: "Ecriver votre message...",
		required: true,
	},
]

export default function Form({ setAlert }) {
	const {
		formValues,
		setFormValues,
		handleChange,
		onSubmit,
		error,
		setError,
		loading,
	} = useForm({
		fullName: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	})
	// Email template parameters.
	const templateParams = {
		fullName: formValues.fullName,
		email: formValues.email,
		phone: formValues.phone,
		subject: formValues.subject,
		message: formValues.message,
	}

	const props = {
		formValues,
		setFormValues,
		handleChange,
		error,
		setError,
	}

	// submit validation!!!!!
	return (
		<form
			className="space-y-3"
			onSubmit={(e) =>
				onSubmit(e, async () => {
					emailjs
						.send(
							"service_cofo6md",
							"template_qoq5yk2",
							templateParams,
							"GBDJ0fB2Nhe7KZSmS"
						)
						.then(
							(result) => {
								setAlert(["success", "Message sent successfully!"])
							},
							(error) => {
								console.log(error.text, "emailjs")
								setAlert(["warning", "something went wrong, try again later!"])
							}
						)
				})
			}>
			{formParams.map((params) => (
				<Input key={params.label} {...params} {...props} />
			))}
			{/* Submit btn */}
			<button
				disabled={loading}
				type="submit"
				className="submit-btn text-lg lg:text-2xl h-[3.4rem] w-full col-span-2 bg-secondary hover:bg-secondary/75">
				Send
			</button>
		</form>
	)
}
