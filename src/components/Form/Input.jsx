import { useState } from 'react'
import { MdEdit, MdEmail, MdPerson, MdPhoneEnabled, MdCheck, MdDangerous } from 'react-icons/md'
export default function Input({ params, formValues, setFormValues }) {
    const { type, name, label, required, errormessage, pattern } = params
    const [validity, setValidity] = useState(true)
    const [onFocus, setOnFocus] = useState(false)
    const handleChange = ev => {
        const { name, value } = ev.target
        setFormValues({ ...formValues, [name]: value })
        setValidity(pattern ? ev.target.checkValidity() : true)
    }
    const getInputField = () => {
        if (type === 'textarea') return (
            <textarea maxLength='500' {...params} onFocus={() => setOnFocus(true)} onBlur={() => setOnFocus(false)}
                    className={`--input-base h-[10rem] ${validity ? 'border-light-gray' : 'border-red-500'}`}></textarea>
        )
        if (type === 'select') return (
            <select name='subject' value={formValues.subject} onFocus={() => setOnFocus(true)} onBlur={() => setOnFocus(false)}
                onChange={ev => setFormValues({ ...formValues, 'subject': ev.target.value })}
                className={`--input-base h-[3.4rem] ${validity ? 'border-light-gray' : 'border-red-500'}`}>
                <option value='option 1' className='--select-option'>Option 1</option>
                <option value='option 2' className='--select-option'>Option 2</option>
                <option value='option 3' className='--select-option'>Option 3</option>
                <option value='option 4' className='--select-option'>Option 4</option>
                <option value='option 5' className='--select-option'>Option 5</option>
            </select>
        )
        else return (
            <input {...params} onChange={handleChange} onFocus={() => setOnFocus(true)} onBlur={() => setOnFocus(false)}
                className={`--input-base h-[3.5rem] ${validity ? 'border-light-gray' : 'border-red-500'}`} />
        )
    }
    const getValidationMessage = () => {
        if (formValues[name].length === 0 || !pattern || onFocus) return <div className='h-[1.2rem]'></div>
        if (validity) return <p className='flex items-center gap-2 px-2 text-sm text-emerald-600'><MdCheck />All Good!</p>
        else return <p className='text-sm font-medium px-2 text-red-500'>{errormessage}</p>
    }
    const getIcon = () => {
        if (!validity && !onFocus) return <MdDangerous className='--form-icon' />
        if (name === 'phone') return <MdPhoneEnabled className='--form-icon' />
        if (name === 'email') return <MdEmail className='--form-icon' />
        if (['name', 'lastName'].includes(name)) return <MdPerson className='--form-icon' />
        if (name === 'message') return <MdEdit className='--form-icon top-[3rem]' />
    }
    return (
        <div className='relative flex flex-col'>
            <label htmlFor={name} className='font-bold text-light transition-all duration-300'>{label}<span className="text-light-gray font-medium text-sm mx-2">{required ? '' : 'optional'}</span></label>
            {getInputField()}
            {getIcon()}
            {getValidationMessage()}
        </div>
    )
}
