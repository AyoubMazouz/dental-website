// React Imports.
import { useEffect, useState } from 'react'
// React Router Dom Imports.
import { Link } from 'react-router-dom'
// Context Imports.
import { useAuth } from '../../contexts/AuthContext'
// Hooks Imports.
import useUserData from '../../hooks/useUserData'
// Icons Imports.
import { FaBell } from 'react-icons/fa'

export default function Notification () {
    // Contexts.
    const { currentUser } = useAuth()
    const { getNotifications } = useUserData(currentUser)
    // Toggle Profile Menu.
    const [ menuState, setMenuState ] = useState(false)
    const [ notifications, setNotifications ] = useState([])
    
    useEffect(() => {
        getNotifications(setNotifications)
    }, [])

    return (
        <div className='relative'>
            <FaBell className='cursor-pointer text-2xl text-primary hover:text-light-blue transition-colors duration-300' onClick={() => setMenuState(!menuState)}  />
            {menuState && (
                <ul className='absolute z-30 top-[160%] right-[-2rem] w-[26rem] px-4 py-6 border-[1px] border-primary bg-light cursor-pointer'>
                    {notifications.map(notify => (
                        <Link to={notify.link || ''}>
                            <p>{notify.text}</p>
                            <h5>{notify.date}</h5>
                        </Link>
                    ))}
                </ul>  
            )}
        </div>
    )
}