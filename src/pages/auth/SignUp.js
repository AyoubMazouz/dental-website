// React Router Dom Imports.
import { useNavigate, Link } from "react-router-dom"
// Components Imports.
import Input from "../../components/Input"
import Logo from "../../components/Logo"
// Context Imports.
import { useAuth } from "../../contexts/AuthContext"
import { useNotification } from "../../contexts/NotificationContext"
// Hooks Imports.
import useForm from "../../hooks/useFom"
import useUserData from "../../hooks/useUserData"
// Icons Imports.
import { GoogleIC, FacebookIC } from "../../data/icons.data"

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
	const { signUp, AuthWithGoogle, AuthWithFacebook } = useAuth()
	const { setAlert, newNotification } = useNotification()
	const { createNewUser, UserDocExist } = useUserData()
	const navigate = useNavigate()
	const {
		formValues,
		setFormValues,
		handleChange,
		onSubmit,
		loading,
		setLoading,
	} = useForm({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	})

	const signUpWithEmail = (e) => {
		onSubmit(e, async () => {
			try {
				const response = await signUp(formValues.email, formValues.password)
				await createNewUser(
					response.user.uid,
					formValues.displayName,
					formValues.email
				)
				await newNotification({
					type: "info",
					title: "welcome",
					content: `Hello ${formValues.displayName} welcome to DentalCare`,
					link: "",
				})
				setAlert(["success", "Account created successfully"])
				navigate("/add-personal-info")
			} catch (error) {
				setAlert(alerts[error.code] || ["warning", error.code])
			}
		})
	}
	const signUpWithGoogle = async () => {
		setLoading(true)
		try {
			const res = await AuthWithGoogle()
			if (await !UserDocExist(res.user.uid)) {
				await createNewUser(
					res.user.uid,
					res.user.displayName,
					res.user.email,
					res.user.photoURL
				)
			}
			await newNotification({
				type: "info",
				content: `Welcome back ${res.user.displayName}.`,
			})
			setAlert(["success", "Log In with Google successfully"])
			navigate("/")
		} catch (err) {
			setAlert(alerts[err.code] || ["error", err.message])
		}
		setLoading(false)
	}
	const signUpWithFacebook = async () => {
		try {
			const res = await AuthWithFacebook()
			if (await !UserDocExist(res.user.uid)) {
				await createNewUser(
					res.user.uid,
					res.user.displayName,
					res.user.email,
					res.user.photoURL
				)
			}
			await newNotification({
				type: "info",
				content: `Welcome back ${res.user.displayName}.`,
			})
			setAlert(["success", "Log In with Facebook successfully"])
			navigate("/")
		} catch (err) {
			setAlert(alerts[err.code] || ["error", err.message])
		}
	}

	return (
		<div className="grid w-full place-items-center py-12 text-gray">
			<div className="page-padding flex w-full max-w-[488px] flex-col items-center rounded-xl border-2 border-gray/30 bg-light py-[5rem] shadow-lg">
				<form className="w-full" onSubmit={(e) => signUpWithEmail(e)}>
					<Logo type="form" />
					<h3 className="my-6">Cree un nouveau compte</h3>
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
					log in with facebook
				</button>
			</div>
		</div>
	)
}
