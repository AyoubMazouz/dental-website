// React Imports.
import { useState, useEffect } from 'react'
// context Imports.
import { useAuth } from '../contexts/AuthContext'
// Components Imports.
import Input from '../components/Input'
// Hooks Imports.
import useDoc from '../hooks/useDoc'
import useForm from '../hooks/useFom'
import useUserData from '../hooks/useUserData'
// Data Imports.
import { regions, getRegions, getCities } from '../data'
import { useNavigate } from 'react-router-dom'

const formParams = [
    // FullName.
    {
        type: 'text',
        name: 'fullName',
        label: 'Prenom',
    },
    // Phone.
    {
        type: 'tel',
        name: 'phone',
        label: 'Telephone',
    },
    // Address 01.
    {
        type: 'text',
        name: 'address1',
        label: 'Address 1',
    },
    // Address 02.
    {
        type: 'text',
        name: 'address2',
        label: 'Address 2',
    },
    // Region.
    {
        type: 'select',
        name: 'region',
        label: 'Region',
        options: getRegions
    },
    // City.
    {
        type: 'select',
        name: 'city',
        label: 'city',
        options: []
    },
    // Zip Code.
    {
        type: 'text',
        name: 'zip',
        label: 'Zip Code',
    },
]

export default function Profile() {
    // Auth Context.
    const { currentUser } = useAuth()
    const navigate = useNavigate()
    const { getUserInfo, UpdateUserInfo } = useUserData(currentUser)
    const { formValues, setFormValues, handleChange, onSubmit, error, setError, loading } = useForm({
        info: {
            fullName: '',
            phone: '',
            region: '',
            city: '',
            zip: '',
            address1: '',
            address2: '',
        }
    })

    // Get User Data.
    useEffect(() => {
        getUserInfo(setFormValues)
    }, [])

    // Update Second Select List.
    useEffect(() => {
        if (!formValues.region) return
        formParams.forEach(params => {
            if (params?.name === 'city') {
                params.options = getCities(formValues.region)
            }
        })
    }, [formValues?.region])

    const props = {
        formValues,
        setFormValues,
        handleChange,
        error,
        setError,
    }

    return (
        <div className='flex justify-center'>
            <form className='max-w-[1600px] w-full py-16'
                onSubmit={e => onSubmit(e, () => {
                    try {
                        UpdateUserInfo(formValues)
                    }
                    catch {
                        setError({ ...error, ['formError']: 'Failed to save changes.' })
                    }
                })} >

                <div className='mb-12 flex justify-between'>
                    {/* Profile */}
                    <div className='mb-12 flex gap-x-12'>
                        <img src={currentUser.photoUrl} alt="" className='w-[12rem] h-[12rem] object-cover rounded-full' />
                        <div><h4>{currentUser.displayName}</h4>
                            <h5>{currentUser.email}</h5></div>
                    </div>
                    {/* Edit Button */}
                    <div>
                        <button disabled={loading} type='submit' className='px-6 py-2 font-semibold'>Save</button>
                        <button onClick={() => navigate('/')} className='px-6 py-2 font-semibold'>Cancel</button>
                    </div>
                </div>
                {/* Error */}
                {error.formError && <h5 className='bg-red-500 rounded-xl py-4 px-4 w-full my-4'>{error.formError}</h5>}
                <div className='space-y-3'>
                    {formParams.map(params => (
                        <Input key={params.label} {...params} {...props} />
                    ))}
                </div>
            </form>
        </div>
    )
}
