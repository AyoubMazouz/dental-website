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
import { EditIC, ResetIC } from "../data/icons.data"

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
		displayName,
		avatar,
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
		<div className="flex justify-center text-light-gray">
			<form
				className="max-w-[1000px] w-full py-16"
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
				<div className="mb-20 flex justify-between">
					{/* Profile */}
					<div className="mb-8 flex gap-x-12">
						{avatar && (
							<div className="relative">
								<img
									src={avatar}
									alt={displayName}
									className="w-[12rem] h-[12rem] object-cover rounded-lg border-4 border-light-blue/25"
								/>
								<div
									onClick={openFileDialog}
									className="absolute bottom-4 right-4 text-white flex gap-x-2
									py-1 px-2 bg-light-blue hover:bg-secondary rounded-md
									font-semibold cursor-pointer transition-colors duration-300
									[&>svg]:text-xl">
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
									className="absolute bottom-4 left-4 text-white
									py-1 px-2 bg-light-blue hover:bg-secondary rounded-md
									font-semibold cursor-pointer transition-colors duration-300
									[&>svg]:text-xl">
									<ResetIC onClick={updateRandomAvatar} />
								</div>
							</div>
						)}
						<div>
							<h3>{displayName}</h3>
							<h4>{currUser?.email}</h4>
						</div>
					</div>
					{/* Edit Button */}
					<div className="space-x-4">
						<button disabled={loading} type="submit" className="submit-btn">
							Save
						</button>
						<button
							onClick={() => navigate("/")}
							className="submit-btn bg-secondary">
							Cancel
						</button>
					</div>
				</div>
				<div className="grid grid-cols-2 gap-x-12">
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
