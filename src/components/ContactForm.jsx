// React Imports.
import { useState } from 'react'
// EmailJs Imports.
import emailjs from 'emailjs-com'
// Components Imports.
import Input from './Input'
// Icons Imports.
import { MdPhone } from 'react-icons/md'
// Data Imports.
import { info } from '../data'
const { image, alt, address, phone, workHours } = info

// Form Parameters.
const formParams = [
    {
        type: 'text',
        name: 'name',
        label: 'Votre Nom',
        required: true,
        errormessage: 'Name must be at least 3 characters long.',
        span: 1,
    },
    {
        type: 'email',
        name: 'email',
        label: 'Votre Email Address',
        required: true,
        errormessage: 'Please enter a valid email address.',
        pattern: "^[a-zA-Z0-9.]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$",
        span: 21,
    },
    {
        type: 'phone',
        name: 'phone',
        label: 'Votre numero de Telephone',
        required: false,
        errormessage: 'Please enter a valid phone number.',
        pattern: "^[0-9]{10}$",
        span: 1,
    },
    {
        type: 'select',
        name: 'subject',
        label: 'Subject',
        required: true,
        errormessage: 'Please select an option.',
        span: 2,
    },
    {
        type: 'textarea',
        name: 'message',
        label: 'message',
        required: true,
        errormessage: '',
        span: 2,
    },
]


const Form = () => {
    // Form stats.
    const [formValues, setFormValues] = useState({
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
    // Send Email.
    const sendEmail = (e) => {
        e.preventDefault();
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
    }
    // submit validation!!!!!
    return (
    <form onSubmit={sendEmail} className='space-y-3'>
        {formParams.map(param => <Input key={param.label} params={param} formValues={formValues} setFormValues={setFormValues} />)}
        {/* Submit btn */}
        <button type="submit" className="h-[3.4rem] w-full col-span-2 bg-secondary hover:opacity-75 rounded-full transition-all duration-300 font-semibold text-light text-3xl"
            >Send</button>
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
                <ul>{workHours.map((v, id) => <h5 className='border-b-2 border-secondary my-2' key={id}>{v.day}</h5>)}</ul>
                <ul>{workHours.map((v, id) => <h5 className='border-b-2 border-secondary my-2' key={id}>{v.time}</h5>)}</ul>
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
            <div className='max-w-[1600px] grid gap-[2rem] lg:gap-[6rem] grid-cols-2 lg:grid-cols-4'>
                {/* Header */}
                <h1 className='col-span-full text-light border-r-2 border-r-light'>Contact</h1>
                {/* Form & Details */}
                <div className='col-span-2'><Form /></div><div className='col-span-2'><Details /></div>
            </div>
        </div>
    )
}
