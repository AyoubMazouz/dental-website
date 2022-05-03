import { useState } from 'react'
import emailjs from 'emailjs-com'
import Input from './Input'


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
    const formParams = [
        {
            type: 'text',
            name: 'name',
            label: 'Votre Nom',
            required: true,
            errormessage: 'Name must be at least 3 characters long.',
            pattern: "",
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
            label: 'Sujet',
            required: true,
            errormessage: 'Please select an option.',
            pattern: '',
            span: 2,
        },
        {
            type: 'textarea',
            name: 'message',
            label: 'Votre message',
            required: true,
            errormessage: '',
            pattern: '^',
            span: 2,
        },
    ]
    // submit validation!!!!!
    return (
    <form onSubmit={sendEmail} className='space-y-3'>
        {formParams.map((v, id) => <Input key={id} params={v} formValues={formValues} setFormValues={setFormValues} />)}
        {/* Submit btn */}
        <button type="submit" className="h-[3.4rem] w-full col-span-2 bg-secondary hover:opacity-75 rounded-full transition-all duration-300 font-bold text-light text-xl"
            >Send</button>
    </form>
  )
}


export default Form