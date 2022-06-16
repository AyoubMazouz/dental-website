import { useState } from 'react'
// Context Imports.
import { useAlert } from '../contexts/AlertContext'


export default function useFom(form) {

    // Alert Context.
    const { setAlert } = useAlert()
    const [formValues, setFormValues] = useState(form)
    const [error, setError] = useState({ ...form })
    // To Disable Sign Up Button While Waiting for a response.
    const [loading, setLoading] = useState(false)

    const handleChange = e => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })
        valid(formValues, setError)
    }
    const onSubmit = async (e, func) => {
        e.preventDefault()
        setLoading(true)
        if (!valid(formValues, setError)) {
            setLoading(false)
            return setAlert([ "danger", Object.values(error).filter(e => e.length > 0) ])
        }
        setAlert(null)
        await func()
        setLoading(false)
      }

    return { formValues, setFormValues, handleChange, onSubmit, error, setError, loading }
}



// Validation.

// Email.
export const validateEmail = (email, setError=()=>'') => {
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (regex.test(email.trim())) {
        setError(error => ({ ...error, email: '' }))
        return true
    }
    setError(error => ({ ...error, email: 'Invalid Email Id' }))
}
// Password.
export const validatePassword = (password, setError=()=>'') => {
    // Check Length.
    if (password.length < 6) {
        setError(error => ({ ...error, password: 'Password must be at least 6 characters long!' }))
        return false
    }
    // Check if Contains LowerCase Letters.
    else if ((password.match(/[a-z]/g) || []).length === 0) {
        setError(error => ({ ...error, password: 'Password must have at least one lowercase character!' }))
        return false
    }
    // Check if Contains UpperCase Letters.
    else if ((password.match(/[A-Z]/g) || []).length === 0) {
        setError(error => ({ ...error, password: 'Password must have at least one uppercase character!' }))
        return false
    }
    // Check if Contains Numbers.
    else if ((password.match(/[0-9]/g) || []).length === 0) {
        setError(error => ({ ...error, password: 'Password must have at least one number!' }))
        return false
    }
    setError(error => ({ ...error, password: '' } ))
    return true
}
// Confirm Password.
export const validateConfirmPassword = (password, confirmPassword, setError=()=>'') => {
    // Check Equality.
    if (password !== confirmPassword) {
        setError(error => ({ ...error, confirmPassword: 'Passwords do not match' }))
        return false
    }
    setError(error => ({ ...error, confirmPassword: '' } ))
    return true
}
// Phone.
export const validatePhone = (phone, setError=()=>'') => {
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    if (regex.test(phone.trim())) {
        setError(error => ({ ...error, phone: '' }))
        return true
    }
    setError(error => ({ ...error, phone: 'Invalid phone number' }))
    return false
}
// FullName.
export const validateFullName = (fullName, setError=()=>'') => {
    // Check Length.
    if (fullName.length > 3) {
        setError(error => ({ ...error, fullName: '' } ))
        return true
    }
    setError(error => ({ ...error, fullName: 'Name must be at least 3 characters long!' }))
    return false
}
// UserName.
export const validateUserName = (userName, setError=()=>'') => {
    // Check Length.
    if (userName.length > 3) {
        setError(error => ({ ...error, userName: '' } ))
        return true
    }
    setError(error => ({ ...error, userName: 'Name must be at least 3 characters long!' }))
    return false
}
// Zip.
export const validateZip = (zip, setError=()=>'') => {
    // Check if is type of Number.
    if (isNaN(zip)) {
        setError(error => ({ ...error, zip: 'Zip code must be numbers.' } ))
        return false
    }
    // Check Length.
    if (zip.trim().length !== 6) {
        setError(error => ({ ...error, zip: 'Zip code must be 6 numbers long.' } ))
        return false
    }
    setError(error => ({ ...error, zip: '' }))
    return true
}
// Address1.
export const validateAddress1 = (address1, setError=()=>'') => {
    // Check Length.
    if (address1.length > 3) {
        setError(error => ({ ...error, address1: '' } ))
        return true
    }
    setError(error => ({ ...error, address1: 'Address 1 must be at least 3 characters long!' }))
    return false
}
// Address2.
export const validateAddress2 = (address2, setError=()=>'') => {
    // Check Length.
    if (address2.length > 3) {
        setError(error => ({ ...error, address2: '' } ))
        return true
    }
    setError(error => ({ ...error, address2: 'Address 2 must be at least 3 characters long!' }))
    return false
}

const valid = (formValues, setError) => {
    const result = []

    if (formValues?.email)          result.push(validateEmail(formValues.email, setError))
    if (formValues?.password)       result.push(validatePassword(formValues.password, setError))
    if (formValues?.confirmPassword)result.push(validateConfirmPassword(formValues.password, formValues.confirmPassword, setError))
    if (formValues?.phone)          result.push(validatePhone(formValues.phone, setError))
    if (formValues?.zip)            result.push(validateZip(formValues.zip, setError))
    if (formValues?.fullName)       result.push(validateFullName(formValues.fullName, setError))
    if (formValues?.userName)       result.push(validateUserName(formValues.userName, setError))
    if (formValues?.address1)       result.push(validateAddress1(formValues.address1, setError))
    if (formValues?.address2)       result.push(validateAddress2(formValues.address2, setError))
    
    console.log(result)

    return result.every(value => value === true)
}
