// React Imports.
import { useNavigate, Link } from "react-router-dom"
import { useEffect, useState } from "react"
// Components Imports.
import Input from "../components/Input"
import Logo from "../components/Logo"
// Context Imports.
import { useAuth } from "../contexts/AuthContext"
import { useAlert } from "../contexts/AlertContext"

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
	const { setAlert } = useAlert()
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
				console.log(error.message, error.code)
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
		<div className="w-full grid place-items-center h-[90vh] text-light-gray">
			<form
				onSubmit={onSubmit}
				className="max-w-[488px] w-full flex flex-col items-center bg-light rounded-xl py-[5rem] page-padding border-[3px] border-light-gray/30 shadow-lg"
			>
				<Logo />
				<h3 className="my-4">Se Connecter</h3>
				{/* Input Field */}
				{formParams.map((params) => (
					<Input key={params.label} {...params} {...props} />
				))}
				<div className="w-full flex items-center justify-between font-semibold">
					<Link to="/signup" className="link">
						Cree Un Nouveau Compte
					</Link>
					{/* Submit Button */}
					<button disabled={loading} type="submit" className="submit-btn">
						Suivant
					</button>
				</div>
				<Link to="/reset_password" className="w-full text-left link">
					Forgot your password?
				</Link>
			</form>
		</div>
	)
}
