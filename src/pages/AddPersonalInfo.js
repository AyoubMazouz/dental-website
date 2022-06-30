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
import { useNotification } from "../contexts/NotificationContext"

const formParams = [
	// FirstName.
	{
		type: "text",
		name: "firstName",
		label: "Prenom",
		span: 1,
	},
	// LastName.
	{
		type: "text",
		name: "lastName",
		label: "Nom",
		span: 1,
	},
	// Phone.
	{
		type: "tel",
		name: "phone",
		label: "Telephone",
		span: 1,
	},
	// Zip Code.
	{
		type: "text",
		name: "zip",
		label: "Zip Code",
		span: 1,
	},
	// Address 01.
	{
		type: "text",
		name: "address1",
		label: "Address 1",
		span: 2,
	},
	// Address 02.
	{
		type: "text",
		name: "address2",
		label: "Address 2",
		span: 2,
	},
	// Region.
	{
		type: "select",
		name: "region",
		label: "Region",
		placeHolder: "Selectionner votre region...",
		options: [],
		span: 2,
	},
	// City.
	{
		type: "select",
		name: "city",
		label: "city",
		placeHolder: "Selectionner votre ville..",
		options: [],
		span: 2,
	},
]

export default function EditInfo() {
	const { currentUser } = useAuth()
	const { setAlert } = useNotification()
	const navigate = useNavigate()
	const { updateInfo } = useUserData(currentUser)
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
		formParams.forEach((params) => {
			if (params.name === "region") params.options = getRegions()
		})
	}, [])
	// Update Second Select List.
	useEffect(() => {
		formParams.forEach((params) => {
			if (params.name === "city" && formValues.region) {
				params.options = getCities(formValues.region)
				setFormValues({ city: "", ...formValues })
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
		<div className="grid h-[90vh] w-full place-items-center">
			<form
				className="page-padding grid w-full max-w-[680px] grid-cols-2 gap-x-12 rounded-xl border-[3px] border-gray/25 bg-light py-[5rem] shadow-lg"
				onSubmit={(e) =>
					onSubmit(e, () => {
						updateInfo(formValues)
							.then(() => {
								setAlert([
									"success",
									"Your personal info has been updated successfully",
								])
							})
							.catch((error) => {
								console.log(error)
								setAlert(["danger", "Something went wrong, please try again!"])
							})
						navigate("/")
					})
				}>
				<div className="col-span-full flex flex-col items-center">
					<Logo />
					<h3 className="my-6">Ajoutez votre info personnel</h3>
				</div>
				{/* Input Field */}
				{formParams.map((params) => (
					<div className={"col-span-" + params.span}>
						<Input key={params.label} {...params} {...props} />
					</div>
				))}
				<div className="col-span-full flex w-full items-center justify-between">
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
