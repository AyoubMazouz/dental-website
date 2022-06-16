// React Imports.
import { useNavigate, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
// Components Imports.
import Input from '../components/Input'
import Logo from '../components/Logo'
// Context Imports.
import { useAuth } from '../contexts/AuthContext'
import { useAlert } from '../contexts/AlertContext'

const formParams = [
  { 
    type: 'email', 
    name: 'email', 
    label: 'Email',
    required: true, 
  },
  { 
    type: 'password', 
    name: 'password', 
    label: 'Password',
    required: true, 
  },
]

export default function SingUp() {
  const { logIn, currentUser } = useAuth()
  const { setAlert } = useAlert()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })

  const onSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    try {
      setError('')
      await logIn(formValues.email, formValues.password)
    }
    catch (e) {
      setError('Could Not Log In')
      setAlert(["danger", `Failed to log in!`])
    }
    setLoading(false)
  }
  const handleChange = e => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  // Redirect to Home page if Successfully Signed Up.
  useEffect(() => {
    if (currentUser) {
      navigate('/')
      setAlert(["success", `Welcome Back ${currentUser.displayName}!`])
    }
  } , [currentUser])

  const props = {
    formValues,
    setFormValues,
    handleChange,
    error,
  }

  return (
    <div className='w-full grid place-items-center h-[90vh]'>
      <form onSubmit={onSubmit} className='max-w-[488px] w-full flex flex-col items-center bg-light rounded-xl py-[5rem] page-padding border-[3px] border-light-gray/30 shadow-lg'>
        <Logo />
        <h3 className='my-4'>Se Connecter</h3>
        {/* Error */}
        {
          error && 
          <h5 className='bg-red-500 rounded-xl py-4 px-4 w-full my-4'>
            {error}
          </h5>
        }
        {/* Input Field */}
        {
          formParams.map(params => (
            <Input key={params.label} { ...params } { ...props } />
          ))
        }
        <div className='w-full flex items-center justify-between font-semibold'>
          <Link to="/signup" className='link'>
            Cree Un Nouveau Compte
          </Link>
          {/* Submit Button */}
          <button disabled={loading} type='submit' 
            className='submit-btn'>
            Suivant
          </button>
        </div>
        <Link to='/reset_password' className='w-full text-left link'>
          Forgot your password?
        </Link>
      </form>
    </div>
  )
}
