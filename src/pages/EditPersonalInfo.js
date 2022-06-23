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

const formParams = [
	// FirstName.
	{
		type: "text",
		name: "firstName",
		label: "Prenom",
		colspan: 1,
	},
	// LastName.
	{
		type: "text",
		name: "lastName",
		label: "Nom",
		colspan: 1,
	},
	// Phone.
	{
		type: "tel",
		name: "phone",
		label: "Telephone",
		colspan: 1,
	},
	// Zip Code.
	{
		type: "text",
		name: "zip",
		label: "Zip Code",
		colspan: 1,
	},
	// Address 01.
	{
		type: "text",
		name: "address1",
		label: "Address 1",
		colspan: 2,
	},
	// Address 02.
	{
		type: "text",
		name: "address2",
		label: "Address 2",
		colspan: 2,
	},
	// Region.
	{
		type: "select",
		name: "region",
		label: "Region",
		options: getRegions,
		colspan: 2,
	},
	// City.
	{
		type: "select",
		name: "city",
		label: "city",
		options: [],
		colspan: 2,
	},
]

export default function EditPersonalInfo() {
	const { setAlert } = useAlert()

	const navigate = useNavigate()
	const {
		currUser,
		getUserInfo,
		UpdateUserInfo,
		updateProfilePhoto,
		updateRandomAvatar,
	} = useUserData()
	const {
		formValues,
		setFormValues,
		handleChange,
		onSubmit,
		error,
		setError,
		loading,
	} = useForm({
		info: {
			fullName: "",
			phone: "",
			region: "",
			city: "",
			zip: "",
			address1: "",
			address2: "",
		},
	})

	function openFileDialog() {
		const input = document.getElementById("photo-dialog")
		input.onchange = () => {
			const file = Array.from(input.files)[0]
			updateProfilePhoto(file)
		}
		input.click()
	}

	// Get User Data.
	useEffect(() => {
		getUserInfo(setFormValues)
	}, [])

	// Update Second Select List.
	useEffect(() => {
		if (!formValues.region) return
		formParams.forEach((params) => {
			if (params?.name === "city") {
				params.options = getCities(formValues.region)
			}
		})
	}, [formValues?.region])

	const props = {
		formValues,
		setFormValues,
		handleChange,
		error,
		setError,
	}

	return (
		<div className="w-full py-16 grid justify-center text-light-gray page-padding">
			<div className="max-w-[1000px] w-full flex justify-between page-padding">
				{/* Profile */}
				<div className="mb-4 flex gap-x-6 flex-wrap">
					{currUser.photoURL && (
						<div className="relative">
							<img
								src={currUser.photoURL}
								alt={currUser.displayName}
								className="w-[7rem] lg:w-[10rem] h-[7rem] lg:h-[10rem] object-cover rounded-lg border-4 border-light-gray/25"
							/>
							<div
								onClick={openFileDialog}
								className="absolute top-2 right-2 text-white flex gap-x-1
									p-1 bg-light-blue hover:bg-light-blue/75 rounded-md
									font-semibold cursor-pointer transition-colors duration-300
									[&>svg]:text-xl text-sm">
								<input
									id="photo-dialog"
									type="file"
									accept=".png, .jpeg, .jpg"
									className="w-0 h-0"
								/>
								Edit
								<EditIC />
							</div>
							<div
								className="absolute top-12 right-2 text-white
									p-1 bg-light-blue hover:bg-light-blue/75 rounded-md
									font-semibold cursor-pointer transition-colors duration-300
									[&>svg]:text-xl">
								<RandomIC onClick={updateRandomAvatar} />
							</div>
						</div>
					)}
					<div className="p-2">
						<h5 className="font-semibold">{currUser.email}</h5>
						<h4 className="font-bold capitalize">{currUser.displayName}</h4>
					</div>
				</div>
				{/* Edit Button */}
				<div>
					<button disabled={loading} type="submit" className="submit-btn m-2">
						Save
					</button>
					<button
						onClick={() => navigate("/")}
						className="submit-btn bg-secondary m-2">
						Cancel
					</button>
				</div>
			</div>
			<form
				className="max-w-[1000px] w-full page-padding"
				onSubmit={(e) =>
					onSubmit(e, () => {
						UpdateUserInfo(formValues).then(() =>
							setAlert([
								"success",
								"Your personal info has been updated successfully",
							])
						)
					})
				}>
				<div className="lg:grid grid-cols-2 gap-x-12">
					{formParams.map((params) => (
						<div className={"col-span-" + params.colspan}>
							<Input key={params.label} {...params} {...props} />
						</div>
					))}
				</div>
			</form>
		</div>
	)
}
