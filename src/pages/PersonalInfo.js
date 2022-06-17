// React Imports.
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
// Components Imports.
import Input from '../components/Input'
import Logo from '../components/Logo'
// Context Imports.
import { useAuth } from '../contexts/AuthContext'
// Hooks Imports.
import useForm from '../hooks/useFom'
import useUserData from '../hooks/useUserData'
// Data Imports.
import { getRegions, getCities } from '../data'

const formParams = [
  {
    type: 'text',
    name: 'fullName',
    label: 'fullName',
  },
  {
    type: 'tel',
    name: 'phone',
    label: 'Phone',
  },
  {
    type: 'select',
    name: 'region',
    label: 'Region',
    options: getRegions
  },
  {
    type: 'select',
    name: 'city',
    label: 'city',
    options: []
  },
  {
    type: 'text',
    name: 'zip',
    label: 'zip',
  },
  {
    type: 'text',
    name: 'address1',
    label: 'address1',
  },
  {
    type: 'text',
    name: 'address2',
    label: 'address2',
  },
]

export default function PersonalInfo() {
  // Auth Context.
  const { currentUser } = useAuth()
  const navigate = useNavigate()
  const { UpdateUserInfo } = useUserData(currentUser)
  const { formValues, setFormValues, handleChange, onSubmit, error, setError, loading } = useForm({
    fullName: '',
    phone: '',
    region: '',
    city: '',
    zip: '',
    address1: '',
    address2: '',
  })

  // Update Second Select List.
  useEffect(() => {
    if (!formValues.region) return
    formParams.forEach(params => {
      if (params?.name === 'city') {
        params.options = getCities(formValues.region)
      }
    })
  }, [formValues.region])

  const props = {
    formValues,
    setFormValues,
    handleChange,
    error,
    setError,
  }

  return (
    <div className='w-full grid place-items-center text-light'>
      <form className='max-w-[520px] w-full flex flex-col items-center bg-primary rounded-xl py-[4rem] px-2 sm:px-4 md:px-8'
        onSubmit={e => onSubmit(e, () => {
          UpdateUserInfo(formValues)
          navigate('/')
        })}>

        <div className='py-8'><Logo /></div>
        <h3 className='py-4'>Personal Info</h3>
        {/* Error */}
        {error.formError && <h5 className='bg-red-500 rounded-xl py-4 px-4 w-full my-4'>{error.formError}</h5>}
        {/* Input Field */}
        {formParams.map(params => (
          <Input key={params.label} {...params} {...props} />
        ))}
        {/* Submit Button */}
        <button disabled={loading} type='submit' className='rounded-full w-full px-6 py-2 text-center bg-secondary text-lg'>Complete</button>
        {/* Skip Button */}
        <button disabled={loading} onClick={() => navigate('/')} className='rounded-full w-full px-6 py-2 text-center bg-secondary text-lg'>Skip</button>
      </form>
    </div>
  )
}