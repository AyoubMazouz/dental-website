// React Imports.
import { useNavigate, Link } from "react-router-dom"
// Components Imports.
import Input from "../components/Input"
import Logo from "../components/Logo"
// Context Imports.
import { useAuth } from "../contexts/AuthContext"
import { useAlert } from "../contexts/AlertContext"
// Hooks Imports.
import useForm from "../hooks/useFom"

const formParams = [
	{
		type: "email",
		name: "email",
		label: "Email",
	},
]

const alerts = {
	"auth/missing-email": [
		"danger",
		"Failed to to reset password, email doesn't exist!",
	],
}

export default function PasswordReset() {
	// Auth Context.
	const { resetPassword } = useAuth()
	const { setAlert } = useAlert()
	const navigate = useNavigate()
	const {
		formValues,
		setFormValues,
		handleChange,
		onSubmit,
		error,
		setError,
		loading,
	} = useForm({ email: "" })

	return (
		<div className="w-full grid place-items-center h-[80vh] text-gray">
			<form
				className="max-w-[488px] w-full flex flex-col items-center bg-light rounded-xl py-[5rem] page-padding border-[3px] border-light-gray/30 shadow-lg"
				onSubmit={(e) =>
					onSubmit(e, () => {
						resetPassword(formValues.email)
							.then((response) => {
								console.log(response)
							})
							.catch((error) => {
								setAlert(alerts[error.message])
							})
					})
				}>
				<Logo type="form" />
				<h3 className="my-6">Reset Password</h3>
				{/* Input Field */}
				{formParams.map((params) => (
					<Input
						key={params.label}
						{...params}
						{...{ formValues, setFormValues, handleChange, error, setError }}
					/>
				))}
				<div className="w-full flex justify-between items-center">
					<Link to="/signup" className="link">
						Cree Un Nouveau Compte
					</Link>
					{/* Submit Button */}
					<button disabled={loading} type="submit" className="submit-btn">
						Reset
					</button>
				</div>
				<Link to="/signup" className="link text-left w-full">
					Se connectez
				</Link>
			</form>
		</div>
	)
}
