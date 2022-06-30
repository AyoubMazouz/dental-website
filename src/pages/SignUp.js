// React Router Dom Imports.
import { useNavigate, Link } from "react-router-dom"
// Components Imports.
import Input from "../components/Input"
import Logo from "../components/Logo"
// Context Imports.
import { useAuth } from "../contexts/AuthContext"
import { useNotification } from "../contexts/NotificationContext"
// Hooks Imports.
import useForm from "../hooks/useFom"
import useUserData from "../hooks/useUserData"
// Icons Imports.
import { GoogleIC } from "../data/icons.data"

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
	const { signUp, AuthWithGoogle } = useAuth()
	const { setAlert } = useNotification()
	const { createNewUser, setNewNotification } = useUserData()
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

	const signUpWithEmail = (e) => {
		onSubmit(e, () => {
			signUp(formValues.email, formValues.password)
				.then((response) => {
					createNewUser(
						response.user.uid,
						formValues.displayName,
						formValues.email
					)
					setNewNotification(
						{
							type: "info",
							title: "welcome",
							content: `Hello ${formValues.displayName} welcome to DentalCare`,
							link: "",
						},
						response.user.uid
					)
					setAlert(["success", "Account created successfully"])
					navigate("/add-personal-info")
				})
				.catch((error) => {
					setAlert(alerts[error.code] || ["warning", error.code])
				})
		})
	}
	const signUpWithGoogle = () => {
		AuthWithGoogle()
			.then((response) => {
				console.log(response)
				createNewUser(
					response.user.uid,
					response.user.displayName,
					response.user.email,
					response.user.photoURL
				)
				setNewNotification(
					{
						type: "info",
						title: "welcome",
						content: `Hello ${response.user.displayName} welcome to DentalCare`,
						link: "",
					},
					response.user.uid
				)
				setAlert(["success", "Log In with Google successfully"])
				navigate("/add-personal-info")
			})
			.catch((error) => {
				setAlert(alerts[error.code] || ["warning", error.message])
			})
	}

	return (
		<div className="grid h-[90vh] w-full place-items-center text-gray">
			<div className="page-padding flex w-full max-w-[488px] flex-col items-center rounded-xl border-[3px] border-gray/30 bg-light py-[5rem] shadow-lg">
				<form onSubmit={(e) => signUpWithEmail(e)}>
					<Logo type="form" />
					<h3 className="my-6">Cree un nouveau compte</h3>
					{/* Input Field */}
					{formParams.map((params) => (
						<Input key={params.label} {...params} {...props} />
					))}
					<div className="flex w-full items-center justify-between">
						<Link to="login" className="link">
							Already have an account?
						</Link>
						{/* Submit Button */}
						<button disabled={loading} type="submit" className="submit-btn">
							Sign Up
						</button>
					</div>
				</form>
				<button
					className="submit-btn mt-6 flex w-full items-center gap-x-2 border-2 bg-white text-accent hover:text-white"
					onClick={signUpWithGoogle}>
					<GoogleIC className="text-3xl" />
					log in with google
				</button>
			</div>
		</div>
	)
}
