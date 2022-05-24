// React Imports.
import { useNavigate, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
// Components Imports.
import Input from '../components/Input'
import Logo from '../components/Logo'
// Context Imports.
import { useAuth } from '../contexts/AuthContext'
// Hooks Imports.
import useForm from '../hooks/useFom'
import useUserInfo from '../hooks/useUserInfo'

const formParams = [
  { 
    type: 'text', 
    name: 'userName', 
    label: 'UserName',
    required: true, 
  },
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
  { 
    type: 'password', 
    name: 'confirmPassword', 
    label: 'Confirm Password',
    required: true, 
  },
]

export default function SingUp() {
  // Auth Context.
  const { signUp, updateProfile, currentUser } = useAuth()
  const { createNewUser } = useUserInfo(currentUser)
  const navigate = useNavigate()
  const { formValues, setFormValues, handleChange, onSubmit, error, setError, loading } = useForm({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  // Redirect to Home page if Successfully Signed Up.
  useEffect(() => {
    if (currentUser) {
      createNewUser()
      navigate('/personalinfo')
    }
  } , [currentUser])

  return (
    <div className='w-full grid place-items-center h-[80vh] text-light'>
      <form className='max-w-[520px] w-full flex flex-col items-center bg-primary rounded-xl py-[4rem] px-2 sm:px-4 md:px-8'
        onSubmit={e => onSubmit(e, () => {
          try {
            signUp(formValues.email, formValues.password)
            .then(cred => updateProfile(cred.user, { 
              displayName: formValues.userName,
              photoUrl: 'https://via.placeholder.com/1000x1000'
            }))
            .catch(error => setError({ ...error, ['formError']: 'Email already used' }))
          }
          catch (e) {
            setError(prev => ({ ...prev, ['formError']: 'Could Not Sign Up, try again.' }))
          }
        })}>
        <div className='py-8'><Logo /></div>
        <h3 className='py-4'>Sign Up</h3>
        {/* Error */}
        {error.formError && <h5 className='bg-red-500 rounded-xl py-4 px-4 w-full my-4'>{error.formError}</h5>}
        {/* Input Field */}
        {formParams.map(params => (
          <Input key={params.label} params={params} formValues={formValues} setFormValues={setFormValues} handleChange={handleChange} error={error} setError={setError} />
        ))}
        {/* Submit Button */}
        <button disabled={loading} type='submit' className='rounded-full w-full px-6 py-2 text-center bg-secondary text-lg'>Sign Up</button>
        <Link to='/login'>Already have an account?</Link>
      </form>
    </div>
  )
}
