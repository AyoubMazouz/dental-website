// React Imports.
import { useNavigate, Link } from "react-router-dom"
// Components Imports.
import Input from "../../components/Input"
import Logo from "../../components/Logo"
// Context Imports.
import { useAuth } from "../../contexts/AuthContext"
import { useNotification } from "../../contexts/NotificationContext"
// Hooks Imports.
import useForm from "../../hooks/useFom"

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
	const { setAlert } = useNotification()
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
		<div className="grid h-[80vh] w-full place-items-center text-gray">
			<form
				className="page-padding border-light-gray/30 flex w-full max-w-[488px] flex-col items-center rounded-xl border-[3px] bg-light py-[5rem] shadow-lg"
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
				<div className="flex w-full items-center justify-between">
					<Link to="/signup" className="link">
						Cree Un Nouveau Compte
					</Link>
					{/* Submit Button */}
					<button disabled={loading} type="submit" className="submit-btn">
						Reset
					</button>
				</div>
				<Link to="/signup" className="link w-full text-left">
					Se connectez
				</Link>
			</form>
		</div>
	)
}
