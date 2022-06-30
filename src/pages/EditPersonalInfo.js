// React Imports.
import { useEffect } from "react"
// React Router Dom Imports.
import { useNavigate } from "react-router-dom"
// Components Imports.
import Input from "../components/Input"
// Hooks Imports.
import useForm from "../hooks/useFom"
import useUserData from "../hooks/useUserData"
// Context Imports.
import { useAlert } from "../contexts/AlertContext"
// Data Imports.
import { getRegions, getCities } from "../data"
// Icons Imports.
import { EditIC, RandomIC } from "../data/icons.data"
import { useAuth } from "../contexts/AuthContext"

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

export default function EditPersonalInfo() {
	const { setAlert } = useAlert()
	const { displayName, email, avatar, info } = useAuth()

	const navigate = useNavigate()
	const { updateInfo, updateProfilePhoto, updateRandomAvatar } = useUserData()

	useEffect(() => {
		if (info) setFormValues(info)
	}, [info])

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

	function openFileDialog() {
		const input = document.getElementById("photo-dialog")
		input.onchange = () => {
			const file = Array.from(input.files)[0]
			updateProfilePhoto(file).then(() =>
				setAlert(["success", "Photo has been updated successfully!"])
			)
		}
		input.click()
	}

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
		<form
			className="page-padding grid w-full justify-center py-16 text-gray"
			onSubmit={(e) =>
				onSubmit(e, () =>
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
				)
			}>
			<div className="page-padding flex w-full max-w-[1000px] justify-between">
				{/* Profile */}
				<div className="mb-4 flex flex-wrap gap-x-6">
					{avatar && (
						<div className="relative">
							<img
								src={avatar}
								alt={displayName}
								className="h-[7rem] w-[7rem] rounded-lg border-4 border-gray/25 object-cover lg:h-[10rem] lg:w-[10rem]"
							/>
							<div
								onClick={openFileDialog}
								className="absolute top-2 right-2 cursor-pointer
								rounded-md bg-accent p-1 font-semibold
								text-light transition-colors duration-300 hover:bg-accent/75
								[&>svg]:text-xl">
								<input
									id="photo-dialog"
									type="file"
									accept=".png, .jpeg, .jpg"
									className="absolute h-0 w-0"
								/>
								<EditIC />
							</div>
							<div
								className="absolute top-2 right-10 cursor-pointer
									rounded-md bg-accent p-1 font-semibold
									text-light transition-colors duration-300 hover:bg-accent/75
									[&>svg]:text-xl">
								<RandomIC
									onClick={() => {
										updateRandomAvatar().then(() =>
											setAlert([
												"success",
												"Profile Image has been updated successfully!",
											])
										)
									}}
								/>
							</div>
						</div>
					)}
					<div className="p-2">
						<h5 className="font-semibold">{email}</h5>
						<h4 className="font-bold capitalize">{displayName}</h4>
					</div>
				</div>
				{/* Edit Button */}
				<div>
					<button disabled={loading} type="submit" className="submit-btn m-2">
						Save
					</button>
					<button
						onClick={() => navigate("/")}
						className="submit-btn m-2 bg-secondary">
						Cancel
					</button>
				</div>
			</div>
			<div className="grid-cols-2 gap-x-12 lg:grid">
				{formParams.map((params) => (
					<div className={"col-span-" + params.span}>
						<Input key={params.label} {...params} {...props} />
					</div>
				))}
			</div>
		</form>
	)
}
