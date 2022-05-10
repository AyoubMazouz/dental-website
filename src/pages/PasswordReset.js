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
]

export default function SingUp() {
  // Auth Context.
  const { resetPassword, currentUser } = useAuth()
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  // To Disable Sign Up Button While Waiting for a response.
  const [loading, setLoading] = useState(false)
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  })
  const onSubmit = e => {
    e.preventDefault()
    // Try to Reset Password.
    try {
      setError('')
      setLoading(true)
      resetPassword(formValues.email, formValues.password)
      setMessage('Check your Email box to reset your password.')
    }
    catch (e) {
      setError('Failed to reset password')
      setMessage('')
    }
    setLoading(false)
  }
  return (
    <div className='w-full grid place-items-center h-[80vh] text-light'>
      <form onSubmit={onSubmit} className='max-w-[520px] w-full flex flex-col items-center bg-primary rounded-xl py-[4rem] px-2 sm:px-4 md:px-8'>
        <div className='py-8'><Logo /></div>
        <h3 className='py-4'>Sign Up</h3>
        {/* Error & Message */}
        {error && <h5 className='bg-red-500 rounded-xl py-4 px-4 w-full my-4'>{error}</h5>}
        {message && <h5 className='bg-green-500 rounded-xl py-4 px-4 w-full my-4'>{message}</h5>}
        {/* Input Field */}
        {formParams.map(param => (
          <Input key={param.label} params={param} formValues={formValues} setFormValues={setFormValues} />
        ))}
        {/* Submit Button */}
        <button disabled={loading} type='submit' className='rounded-full w-full px-6 py-2 text-center bg-secondary text-lg'>Reset</button>
        <Link to='/signup'>Don't have an account?</Link>
        <Link to='/login'>Log In</Link>
      </form>
    </div>
  )
}
