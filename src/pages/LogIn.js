// React Imports.
import { useNavigate, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
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
    }
    setLoading(false)
  }
  const handleChange = e => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  // Redirect to Home page if Successfully Signed Up.
  useEffect(() => {
    if (currentUser) navigate('/')
  } , [currentUser])
  return (
    <div className='w-full grid place-items-center h-[80vh] text-light'>
      <form onSubmit={onSubmit} className='max-w-[520px] w-full flex flex-col items-center bg-primary rounded-xl py-[4rem] px-2 sm:px-4 md:px-8'>
        <div className='py-8'><Logo /></div>
        <h3 className='py-4'>Log In</h3>
        {/* Error */}
        {error && <h5 className='bg-red-500 rounded-xl py-4 px-4 w-full my-4'>{error}</h5>}
        {/* Input Field */}
        {formParams.map(params => (
          <Input key={params.label} params={params} formValues={formValues} handleChange={handleChange} error={error} />
        ))}
        {/* Submit Button */}
        <button disabled={loading} type='submit' className='rounded-full w-full px-6 py-2 text-center bg-secondary text-lg'>Sign Up</button>
        <Link to='/reset_password'>Forgot your password?</Link>
        <Link to='/signup'>Don't have an account?</Link>
      </form>
    </div>
  )
}
