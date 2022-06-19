// React Imports.
import { useState } from "react"
import { Link } from "react-router-dom"
// Icons Imports.
import {
	EditIC,
	MailIC,
	PersonIC,
	PhoneIC,
	LocationIC,
	CloseIC,
	SubjectIC,
	PasswordIC,
	ErrorIC,
} from "../data/icons.data"

export default function Input({
	type,
	name,
	label,
	required,
	options,
	formValues,
	setFormValues,
	handleChange,
	error = {},
	setError = () => null,
	labelStyles = "",
	inputStyles = "",
}) {
	const [onFocus, setOnFocus] = useState(false)
	const getInputField = () => {
		if (type === "textarea")
			return (
				<textarea
					maxLength="500"
					{...{ type, name, label, required }}
					onFocus={() => setOnFocus(true)}
					onBlur={() => setOnFocus(false)}
					onChange={handleChange}
					className={`input h-[10rem] ${inputStyles} ${
						error[name] && formValues[name].trim()
							? "ring-red-500"
							: "ring-light-gray/25"
					}`}></textarea>
			)
		if (type === "select")
			return (
				<select
					name={name}
					value={formValues[name]}
					onFocus={() => setOnFocus(true)}
					onBlur={() => setOnFocus(false)}
					onChange={handleChange}
					className={`input h-[3rem] ${inputStyles} ${
						error[name] && formValues[name].trim()
							? "ring-red-500"
							: "ring-light-gray/25"
					}`}>
					{options.map((option) => (
						<option value={option[0]} className="--select-option">
							{option[1]}
						</option>
					))}
				</select>
			)
		else
			return (
				<input
					{...{ type, name, label, required }}
					value={formValues[name]}
					onChange={handleChange}
					onFocus={() => setOnFocus(true)}
					onBlur={() => setOnFocus(false)}
					className={`input h-[3rem] ${inputStyles} ${
						error[name] && formValues[name].trim()
							? "ring-red-500"
							: "ring-light-gray/25"
					}`}
				/>
			)
	}
	const getValidationMessage = () => {
		if (!error[name] || onFocus || !formValues[name].trim())
			return <div className="h-[1.2rem]"></div>
		else
			return (
				<p className="flex items-center gap-2 px-2 text-sm text-red-500">
					{error[name]}
				</p>
			)
	}
	// prettier-ignore
	const getIcon = () => {
		if (error[name] && !onFocus && formValues[name].trim()) return (
			<ErrorIC className="form-icon text-red-500" />
		)
		else if (name === "phone") return (
			<PhoneIC className="form-icon" />
		)
		else if (name === "email") return (
			<MailIC className="form-icon" />
		)
		else if (name === "message") return (
			<EditIC className="form-icon top-[3rem]" />
		)
		else if (name === "city") return (
			<LocationIC className="form-icon top-[3rem]" />
		)
		else if (name === "zip") return (
			<MailIC className="--form-icon top-[3rem]" />
		)
		else if (["fullName", "displayName"].includes(name)) return (
			<PersonIC className="form-icon" />
		)
		else if (["password", "confirmPassword"].includes(name)) return (
			<PasswordIC className="form-icon" />
		)
		else if (["subject", "region"].includes(name)) return (
			<SubjectIC className="form-icon" />
		)
		else if (["address1", "address2"].includes(name)) return (
			<LocationIC className="form-icon" />
		)
	}
	return (
		<div className="relative flex flex-col text-lg w-full">
			<label
				htmlFor={name}
				className={`transition-all duration-300 ${labelStyles}`}>
				{label}
				<span className="text-light-gray text-sm mx-2">
					{required ? "" : "optional"}
				</span>
			</label>
			{getInputField()}
			{getIcon()}
			{formValues[name]?.length > 0 && (
				<CloseIC
					onClick={() => {
						setFormValues({ ...formValues, [name]: "" })
						setError({ ...error, [name]: "" })
					}}
					className="absolute top-[2.5rem] right-[.8rem] cursor-pointer text-primary text-2xl"
				/>
			)}
			{getValidationMessage()}
		</div>
	)
}
