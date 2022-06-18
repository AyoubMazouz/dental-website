// React Imports.
import { useState } from "react"
import { Link } from "react-router-dom"
// Icons Imports.
import {
	MdEdit,
	MdEmail,
	MdPerson,
	MdPhoneEnabled,
	MdLocationCity,
	MdDangerous,
	MdLocationOn,
	MdMail,
	MdSubject,
	MdPassword,
} from "react-icons/md"

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
					}`}
				></textarea>
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
					}`}
				>
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
			<MdDangerous className="form-icon text-red-500" />
		)
		else if (name === "phone") return (
			<MdPhoneEnabled className="form-icon" />
		)
		else if (name === "email") return (
			<MdEmail className="form-icon" />
		)
		else if (name === "message") return (
			<MdEdit className="form-icon top-[3rem]" />
		) 
		else if (name === "city") return (
			<MdLocationCity className="form-icon top-[3rem]" />
		)
		else if (name === "zip") return (
			<MdMail className="--form-icon top-[3rem]" />
		)
		else if (["fullName", "displayName"].includes(name)) return (
			<MdPerson className="form-icon" />
		)
		else if (["password", "confirmPassword"].includes(name)) return (
			<MdPassword className="form-icon" />
		) 
		else if (["subject", "region"].includes(name)) return (
			<MdSubject className="form-icon" />
		)
		else if (["address1", "address2"].includes(name)) return (
			<MdLocationOn className="form-icon" />
		)
	}
	console.log(label)
	return (
		<div className="relative flex flex-col text-lg w-full">
			<label
				htmlFor={name}
				className={`transition-all duration-300 ${labelStyles}`}
			>
				{label}
				<span className="text-light-gray text-sm mx-2">
					{required ? "" : "optional"}
				</span>
			</label>
			{getInputField()}
			{getIcon()}
			{formValues[name]?.length > 0 && (
				<MdDangerous
					onClick={() => {
						setFormValues({ ...formValues, [name]: "" })
						setError({ ...error, [name]: "" })
					}}
					className="absolute top-[50%] right-[1rem] translate-y-[-25%] cursor-pointer text-primary"
				/>
			)}
			{getValidationMessage()}
		</div>
	)
}
