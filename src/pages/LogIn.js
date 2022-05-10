// React Imports.
import { useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'
// Components Imports.
import Input from '../components/Input'
import Logo from '../components/Logo'
// Context Imports.
import { useAuth } from '../contexts/AuthContext'

const formParams = [
  { 
    type: 'email', 
    name: 'email', 
    label: 'Email',
    required: true, 
    errormessage: '' 
  },
  { 
    type: 'password', 
    name: 'password', 
    label: 'Password',
    required: true, 
    errormessage: '' 
  },
]

export default function SingUp() {
  // Auth Context.
  const { logIn, currentUser } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  // To Disable Sign Up Button While Waiting for a response.
  const [loading, setLoading] = useState(false)
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })
  const onSubmit = e => {
    e.preventDefault()
    // Try Log In
    try {
      setError('')
      setLoading(true)
      logIn(formValues.email, formValues.password)
      // Redirect to Home page if Successfully Signed Up.
      if (currentUser) navigate('/about')
    }
    catch (e) {
      setError('Failed to Log In')
    }
    setLoading(false)
  }
  return (
    <div className='w-full grid place-items-center h-[80vh] text-light'>
      <form onSubmit={onSubmit} className='max-w-[520px] w-full flex flex-col items-center bg-primary rounded-xl py-[4rem] px-2 sm:px-4 md:px-8'>
        <div className='py-8'><Logo /></div>
        <h3 className='py-4'>Log In</h3>
        {/* Error */}
        {error && <h5 className='bg-red-500 rounded-xl py-4 px-4 w-full my-4'>{error}</h5>}
        {/* Input Field */}
        {formParams.map(param => (
          <Input key={param.label} params={param} formValues={formValues} setFormValues={setFormValues} />
        ))}
        {/* Submit Button */}
        <button disabled={loading} type='submit' className='rounded-full w-full px-6 py-2 text-center bg-secondary text-lg'>Sign Up</button>
        <Link to='/reset_password'>Forgot your password?</Link>
        <Link to='/signup'>Don't have an account?</Link>
      </form>
    </div>
  )
}
