// React Imports.
import { useState } from 'react'
// EmailJs Imports.
import emailjs from 'emailjs-com'
// Components Imports.
import Input from './Input'
// Hooks Imports.
import useForm from '../hooks/useFom'
// Icons Imports.
import { MdPhone } from 'react-icons/md'
// Data Imports.
import { info } from '../data'
const { image, alt, address, phone, workHours } = info

// Form Parameters.
const formParams = [
    {
        type: 'text',
        name: 'fullName',
        label: 'Votre Nom',
        required: true,
    },
    {
        type: 'email',
        name: 'email',
        label: 'Votre Email Address',
        required: true,
    },
    {
        type: 'phone',
        name: 'phone',
        label: 'Votre numero de Telephone',
        required: false,
    },
    {
        type: 'select',
        name: 'subject',
        label: 'Subject',
        required: true,
        options: [
            ['option1', 'option1'],
            ['option2', 'option2'],
            ['option3', 'option3'],
            ['option4', 'option4'],
            ['option5', 'option5'],
        ]
    },
    {
        type: 'textarea',
        name: 'message',
        label: 'message',
        required: true,
    },
]


const Form = () => {
    const { formValues, setFormValues, handleChange, onSubmit, error, setError, loading } = useForm({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      })
    // Email template parameters.
    const templateParams = {
        name: formValues.name,
        email: formValues.email,
        phone: formValues.phone,
        subject: formValues.subject,
        message: formValues.message,
    }

    const props = {
        formValues,
        setFormValues,
        handleChange,
        error,
        setError,
    }

    // submit validation!!!!!
    return (
    <form className='space-y-3' 
        onSubmit={e => onSubmit(e, async () => {
            emailjs.send(
                'service_cofo6md', 
                'template_qoq5yk2', 
                templateParams, 
                'GBDJ0fB2Nhe7KZSmS')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(error.text);
              });
        })}>
        {/* Error */}
        {
            error.formError && 
            <h5 className='bg-red-500 rounded-xl py-4 px-4 w-full my-4'>
                {error.formError}
            </h5>
        }
        {
            formParams.map(params => (
                <Input key={params.label} { ...params } { ...props } />
            ))
        }
        {/* Submit btn */}
        <button disabled={loading} type="submit" className="submit-btn text-lg lg:text-2xl h-[3.4rem] w-full col-span-2 bg-secondary">
            Send
        </button>
    </form>
  )
}

const Details = () => {
  return (
        <div className="h-full py-4">
            {/* Image */}
            <img src={image} alt={alt} className="object-cover max-h-[380px] w-full rounded-2xl hidden lg:block" />

            {/* Address */}
            <h3 className='text-light mx-6 mt-2'>{address}</h3>
            <div className="w-full gap-8 flex flex-wrap mx-4 text-bluish-gray mt-[2rem]">
                {/* Work Hours */}
                <ul>
                    {
                        Object.entries(workHours)
                            .map(([ day, time ], id) => {
                                return (
                                    <div className='grid grid-cols-2'>
                                        <h5 key={id} className='border-b-2 border-secondary my-2'>{day}</h5>
                                        <h5 key={id} className='border-b-2 border-secondary my-2'>{time}</h5>
                                    </div>
                                )
                            })
                    }
                </ul>
                {/* Phone */}
                <div className='space-y-2'>{phone.map((v, id) => 
                    <h5 key={id} className="py-2 px-4 flex gap-2 items-center text-light border-2 border-secondary rounded-full"><MdPhone />{v}</h5>)}
                </div>
            </div>
        </div>
    )
}

export default function ContactForm() {
    return (
        <div id='contact' className='w-full bg-primary flex flex-col justify-center items-center py-[4rem] px-2 sm:px-4 md:px-8'>
            <div className='max-w-[1800px] grid gap-[2rem] lg:gap-x-[6rem] gap-y-[4rem] grid-cols-2 lg:grid-cols-4'>
                {/* Header */}
                <h1 className='col-span-full text-light border-r-2 border-r-light'>
                    Contact
                </h1>
                {/* Form & Details */}
                <div className='col-span-2'>
                    <Form />
                </div>
                <div className='col-span-2'>
                    <Details />
                </div>
            </div>
        </div>
    )
}
