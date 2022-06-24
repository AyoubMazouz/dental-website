// React Imports.
import { useState } from "react"
// EmailJs Imports.
import emailjs from "emailjs-com"
// Components Imports.
import Input from "./Input"
// Context Imports.
import { useAlert } from "../contexts/AlertContext"
// Hooks Imports.
import useForm from "../hooks/useFom"
// Icons Imports.
import { PhoneIC } from "../data/icons.data"
// Data Imports.
import { info } from "../data"
const { image, alt, address, phone, workHours } = info

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
		placeHolder: "Selectioner un sujet...",
		required: true,
		options: [
			["option1", "option1"],
			["option2", "option2"],
			["option3", "option3"],
			["option4", "option4"],
			["option5", "option5"],
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

const Form = ({ setAlert }) => {
	const {
		formValues,
		setFormValues,
		handleChange,
		onSubmit,
		error,
		setError,
		loading,
	} = useForm({
		name: "",
		email: "",
		phone: "",
		subject: "",
		message: "",
	})
	// Email template parameters.
	const templateParams = {
		name: formValues.name,
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
				className="submit-btn text-lg lg:text-2xl h-[3.4rem] w-full col-span-2 bg-secondary">
				Send
			</button>
		</form>
	)
}

const Details = ({ setAlert }) => {
	return (
		<div className="h-full py-4">
			{/* Image */}
			<img
				src={image}
				alt={alt}
				className="object-cover max-h-[380px] w-full rounded-2xl hidden lg:block"
			/>

			{/* Address */}
			<h3 className="text-light mx-6 mt-2">{address}</h3>
			<div className="w-full gap-8 flex flex-wrap mx-4 text-bluish-gray mt-[2rem]">
				{/* Work Hours */}
				<ul>
					{Object.entries(workHours).map(([day, time], id) => {
						return (
							<div className="grid grid-cols-2 font-semibold">
								<h5 key={id} className="border-b-2 border-secondary my-1">
									{day}
								</h5>
								<h5 key={id} className="border-b-2 border-secondary my-1">
									{time}
								</h5>
							</div>
						)
					})}
				</ul>
				{/* Phone */}
				<div className="space-y-2">
					{phone.map((number, id) => (
						<h5
							key={id}
							onClick={() => {
								navigator.clipboard.writeText(number)
								setAlert([
									"success",
									`Phone number \"${number}\" has been copied to your clipboard.`,
								])
							}}
							className="border-b-2 border-secondary my-1 flex gap-x-2 cursor-pointer font-semibold">
							<PhoneIC className="text-lg" />
							{number}
						</h5>
					))}
				</div>
			</div>
		</div>
	)
}

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
