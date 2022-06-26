// React Router Dom Imports.
import { useNavigate, Link } from "react-router-dom"
// Components Imports.
import Input from "../components/Input"
import Logo from "../components/Logo"
// Context Imports.
import { useAuth } from "../contexts/AuthContext"
import { useAlert } from "../contexts/AlertContext"
// Hooks Imports.
import useForm from "../hooks/useFom"
import useUserData from "../hooks/useUserData"
import useEditImg from "../hooks/useEditImg"

const formParams = [
	{
		type: "text",
		name: "displayName",
		label: "UserName",
	},
	{
		type: "email",
		name: "email",
		label: "Email",
		required: true,
	},
	{
		type: "password",
		name: "password",
		label: "Password",
		required: true,
	},
	{
		type: "password",
		name: "confirmPassword",
		label: "Confirm Password",
		required: true,
	},
]
const alerts = {
	"auth/email-already-in-use": ["warning", "Email already in use."],
}

export default function SingUp() {
	// Contexts.
	const { signUp, updateProfile } = useAuth()
	const { setAlert } = useAlert()
	const { createNewUser, setNewNotification } = useUserData()
	const { getRandomAvatar } = useEditImg()
	const navigate = useNavigate()
	const {
		formValues,
		setFormValues,
		handleChange,
		onSubmit,
		error,
		setError,
		loading,
	} = useForm({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	})

	const props = {
		formValues,
		setFormValues,
		handleChange,
		error,
		setError,
	}

	const onSubmitForm = (e) => {
		onSubmit(e, () => {
			signUp(formValues.email, formValues.password)
				.then((response) => {
					createNewUser(response.user.uid)
					setNewNotification(
						{
							title: `welcome`,
							content: `Hello ${formValues.displayName} welcome to DentalCare`,
							link: "",
						},
						response.user.uid
					)
					getRandomAvatar().then((dataURL) =>
						updateProfile(response.user, {
							displayName: formValues.displayName,
							photoURL: dataURL,
						})
					)
					setAlert(["success", "Account created successfully"])
					navigate("/add-personal-info")
				})
				.catch((error) => {
					setAlert(
						alerts[error.code] || [
							"warning",
							"something went wrong, try again!",
						]
					)
					console.log(error)
				})
		})
	}

	return (
		<div className="grid h-[90vh] w-full place-items-center text-gray">
			<form
				className="page-padding flex w-full max-w-[488px] flex-col items-center rounded-xl border-[3px] border-gray/30 bg-light py-[5rem] shadow-lg"
				onSubmit={(e) => onSubmitForm(e)}>
				<Logo type="form" />
				<h3 className="my-6">Cree un nouveau compte</h3>
				{/* Input Field */}
				{formParams.map((params) => (
					<Input key={params.label} {...params} {...props} />
				))}
				<div className="flex w-full items-center justify-between">
					<Link to="/login" className="link">
						Already have an account?
					</Link>
					{/* Submit Button */}
					<button disabled={loading} type="submit" className="submit-btn">
						Sign Up
					</button>
				</div>
			</form>
		</div>
	)
}
