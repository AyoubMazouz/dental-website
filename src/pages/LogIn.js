// React Imports.
import { useNavigate, Link } from "react-router-dom"
import { useEffect, useState } from "react"
// Components Imports.
import Input from "../components/Input"
import Logo from "../components/Logo"
// Context Imports.
import { useAuth } from "../contexts/AuthContext"
import { useNotification } from "../contexts/NotificationContext"

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
	const { logIn } = useAuth()
	const { setAlert } = useNotification()
	const navigate = useNavigate()
	const [loading, setLoading] = useState(false)
	const [formValues, setFormValues] = useState({
		email: "",
		password: "",
	})

	const onSubmit = async (e) => {
		e.preventDefault()
		setLoading(true)
		logIn(formValues.email, formValues.password)
			.then((response) => {
				navigate("/")
				setAlert(["success", `Welcome Back ${response.user.displayName}!`])
			})
			.catch((error) => {
				setAlert(
					alerts[error.code] || ["warning", "something went wrong, try again!"]
				)
				console.log(error)
			})
		setLoading(false)
	}
	const handleChange = (e) => {
		const { name, value } = e.target
		setFormValues({ ...formValues, [name]: value })
	}

	const props = {
		formValues,
		setFormValues,
		handleChange,
	}

	return (
		<div className="grid h-[90vh] w-full place-items-center text-gray">
			<form
				onSubmit={onSubmit}
				className="page-padding flex w-full max-w-[488px] flex-col items-center rounded-xl border-[3px] border-gray/30 bg-light py-[5rem] shadow-lg">
				<Logo type="form" />
				<h3 className="my-6">Se Connecter</h3>
				{/* Input Field */}
				{formParams.map((params) => (
					<Input key={params.label} {...params} {...props} />
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
		</div>
	)
}
