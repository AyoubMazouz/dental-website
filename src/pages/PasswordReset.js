// React Imports.
import { useNavigate, Link } from 'react-router-dom'
// Components Imports.
import Input from '../components/Input'
import Logo from '../components/Logo'
// Context Imports.
import { useAuth } from '../contexts/AuthContext'
// Hooks Imports.
import useForm from '../hooks/useFom'

const formParams = [
  {
    type: 'email',
    name: 'email',
    label: 'Email',
    required: true,
  },
]

export default function SingUp() {
  // Auth Context.
  const { resetPassword } = useAuth()
  const navigate = useNavigate()
  const { formValues, setFormValues, handleChange, onSubmit, error, setError, loading } = useForm({ email: '' })

  return (
    <div className='w-full grid place-items-center h-[80vh] text-light'>
      <form className='max-w-[520px] w-full flex flex-col items-center bg-primary rounded-xl py-[4rem] px-2 sm:px-4 md:px-8'
        onSubmit={e => onSubmit(e, () => {
          try {
            resetPassword(formValues.email)
          }
          catch {
            setError({ ...error, email: 'Email not found' })
          }
        })}>
        <div className='py-8'><Logo /></div>
        <h3 className='py-4'>Sign Up</h3>
        {/* Error & Message */}
        {error.formError && <h5 className='bg-red-500 rounded-xl py-4 px-4 w-full my-4'>{error}</h5>}
        {/* Input Field */}
        {formParams.map(params => (
          <Input key={params.label} params={params} formValues={formValues} setFormValues={setFormValues} handleChange={handleChange} error={error} setError={setError} />
        ))}
        {/* Submit Button */}
        <button disabled={loading} type='submit' className='rounded-full w-full px-6 py-2 text-center bg-secondary text-lg'>Reset</button>
        <Link to='/signup'>Don't have an account?</Link>
        <Link to='/login'>Log In</Link>
      </form>
    </div>
  )
}
