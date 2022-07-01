// React Imports.
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
// Components Imports.
import Input from "../components/Input"
import Logo from "../components/Logo"
// Context Imports.
import { useAuth } from "../contexts/AuthContext"
import { useNotification } from "../contexts/NotificationContext"
// Icons Imports.
import { GoogleIC, FacebookIC } from "../data/icons.data"

const formParams = [
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
]
const alerts = {
	"auth/wrong-password": ["danger", "Failed to login, password is wrong!"],
	"auth/user-not-found": ["warning", "Failed to login, user not found!"],
}

export default function SingUp() {
	const { logIn, AuthWithGoogle, AuthWithFacebook } = useAuth()
	const { setAlert, newNotification } = useNotification()
	const navigate = useNavigate()
	const [loading, setLoading] = useState(false)
	const [formValues, setFormValues] = useState({
		email: "",
		password: "",
	})

	const signUpWithEmail = async (e) => {
		e.preventDefault()
		setLoading(true)
		logIn(formValues.email, formValues.password)
			.then((response) => {
				navigate("/")
				setAlert(["success", `Welcome Back ${response.user.displayName}!`])
			})
			.catch((err) => {
				setAlert(
					alerts[err.code] || ["warning", "something went wrong, try again!"]
				)
				console.log(err)
			})
		setLoading(false)
	}

	const signUpWithGoogle = async () => {
		try {
			const response = await AuthWithGoogle()
			await newNotification({
				type: "info",
				content: `Welcome back ${response.user.displayName}.`,
			})
			setAlert(["success", "Log In with Google successfully"])
			navigate("/")
		} catch (err) {
			setAlert(alerts[err.code] || ["error", err.message])
			console.log(err)
		}
	}
	const signUpWithFacebook = async () => {
		try {
			const response = await AuthWithFacebook()
			console.log(response)
			await newNotification({
				type: "info",
				content: `Welcome back ${response.user.displayName}.`,
			})
			setAlert(["success", "Log In with Facebook successfully"])
			navigate("/")
		} catch (err) {
			setAlert(alerts[err.code] || ["error", err.message])
			console.log(err)
		}
	}

	const handleChange = (e) => {
		const { name, value } = e.target
		setFormValues({ ...formValues, [name]: value })
	}

	return (
		<div className="grid w-full place-items-center py-12 text-gray">
			<div className="page-padding flex w-full max-w-[488px] flex-col items-center rounded-xl border-2 border-gray/30 bg-light py-[5rem] shadow-lg">
				<form className="w-full" onSubmit={signUpWithEmail}>
					<Logo type="form" />
					<h3 className="my-6">Se Connecter</h3>
					{/* Input Field */}
					{formParams.map((params) => (
						<Input
							key={params.label}
							{...params}
							{...{
								formValues,
								setFormValues,
								handleChange,
							}}
						/>
					))}
					<div className="flex w-full items-center justify-between font-semibold">
						<Link to="/signup" className="link">
							Cree Un Nouveau Compte
						</Link>
						{/* Submit Button */}
						<button disabled={loading} type="submit" className="submit-btn">
							Suivant
						</button>
					</div>
					<Link to="/reset_password" className="link w-full text-left">
						Forgot your password?
					</Link>
				</form>
				<button
					className="submit-btn mt-6 flex w-full items-center gap-x-2 border-2 bg-white text-accent hover:text-white"
					onClick={signUpWithGoogle}>
					<GoogleIC className="text-3xl" />
					log in with google
				</button>
				<button
					className="submit-btn mt-6 flex w-full items-center gap-x-2 border-2 bg-white text-accent hover:text-white"
					onClick={signUpWithFacebook}>
					<FacebookIC className="text-3xl" />
					log in with Facebook
				</button>
			</div>
		</div>
	)
}
