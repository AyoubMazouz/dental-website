// React Imports.
import { useEffect } from "react"
// React Router Dom Imports.
import { useNavigate, Link } from "react-router-dom"
// Components Imports.
import Input from "../components/Input"
import Logo from "../components/Logo"
// Context Imports.
import { useAuth } from "../contexts/AuthContext"
// Hooks Imports.
import useForm from "../hooks/useFom"
import useUserData from "../hooks/useUserData"
// Data Imports.
import { getRegions, getCities } from "../data"

const formParams = [
	{
		type: "text",
		name: "firstName",
		label: "FirstName",
		span: 1,
	},
	{
		type: "text",
		name: "lastName",
		label: "LastName",
		span: 1,
	},
	{
		type: "tel",
		name: "phone",
		label: "Phone",
		span: 1,
	},
	{
		type: "text",
		name: "zip",
		label: "zip",
		span: 1,
	},
	{
		type: "select",
		name: "region",
		label: "Region",
		options: getRegions,
		span: 2,
	},
	{
		type: "select",
		name: "city",
		label: "city",
		options: [],
		span: 2,
	},
	{
		type: "text",
		name: "address1",
		label: "address1",
		span: 2,
	},
	{
		type: "text",
		name: "address2",
		label: "address2",
		span: 2,
	},
]

export default function EditInfo() {
	// Auth Context.
	const { currentUser } = useAuth()
	const navigate = useNavigate()
	const { UpdateUserInfo } = useUserData(currentUser)
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
		phone: "",
		region: "",
		city: "",
		zip: "",
		address1: "",
		address2: "",
	})

	// Update Second Select List.
	useEffect(() => {
		if (!formValues.region) return
		formParams.forEach((params) => {
			if (params?.name === "city") {
				params.options = getCities(formValues.region)
			}
		})
	}, [formValues.region])

	const props = {
		formValues,
		setFormValues,
		handleChange,
		error,
		setError,
	}

	return (
		<div className="w-full grid place-items-center h-[90vh]">
			<form
				className="max-w-[680px] w-full grid grid-cols-2 gap-x-12 bg-light rounded-xl py-[5rem] page-padding border-[3px] border-light-gray/30 shadow-lg"
				onSubmit={(e) =>
					onSubmit(e, () => {
						UpdateUserInfo(formValues)
						navigate("/")
					})
				}>
				<div className="col-span-full flex flex-col items-center">
					<Logo />
					<h3 className="my-6">Cree un nouveau compte</h3>
				</div>
				{/* Input Field */}
				{formParams.map((params) => (
					<div className={"col-span-" + params.span}>
						<Input key={params.label} {...params} {...props} />
					</div>
				))}
				<div className="flex items-center justify-between w-full col-span-full">
					{/* Skip Button */}
					<Link to="/" className="link">
						Passer
					</Link>
					{/* Submit Button */}
					<button disabled={loading} type="submit" className="submit-btn">
						Suivant
					</button>
				</div>
			</form>
		</div>
	)
}
