// React Imports.
import { useState } from 'react'
// React Router Dom Imports.
import { useNavigate, Link } from 'react-router-dom'
// Context Imports.
import { useAuth } from '../../contexts/AuthContext'
import { useAlert } from '../../contexts/AlertContext'
// Hooks Imports.
import useUserData from '../../hooks/useUserData'


export default function Profile () {
    // Toggle Profile Menu.
    const [ menuState, setMenuState ] = useState(false)
    // Contexts.
    const { currentUser, logOut } = useAuth()
    const { setNotifications } = useUserData(currentUser)
    const { setAlert } = useAlert()
    const navigate = useNavigate()
    // Close Profile Menu if you Click Anywhere on the Screen.
    window.addEventListener('click', e => {
        if (['profile', 'profileImg'].includes(e.target.id)) setMenuState(!menuState)
        else setMenuState(false)
    })
    // Log Out.
    const handleLogOut = async () => {
        if (!currentUser) return 
        try {
            await logOut()
            navigate('/login')
            setAlert(['inform', 'Logged Out'])
            setNotifications({ text: 'hello from the other side: YOU LOGGED OUT!!!', time: '', link: '' })

        }
        catch {
            console.log('LOG OUT FAIL')
        }
    }
    if (currentUser) return (
        // Profile 
        <div id='profile' className='h-[2.7rem] w-[2.7rem] relative'>
            {/* Profile Image */}
            <img id='profileImg' src="https://via.placeholder.com/100x100" alt="" 
                className='w-full h-full object-cover rounded-full cursor-pointer' />
            {menuState && (
                <ul className='absolute z-50 top-[110%] right-0 w-[18rem] px-2 py-6 bg-light rounded-lg border-[1px] border-gray-200 flex flex-col gap-y-3'>
                    <Link to='/profile' className='flex gap-4 border-b-[1px] border-gray-200 pb-3'>
                        {/* Profile Image */}
                        <img src="https://via.placeholder.com/100X100" alt="" className='object-cover h-12 w-12 rounded-full' />
                        <div>
                            {/* UserName */}
                            <h5>{currentUser.displayName}</h5>
                            {/* Email */}
                            <h5 className='text-xs'>{currentUser.email}</h5>
                        </div>
                    </Link>
                    {/* Log Out */}
                    <li onClick={handleLogOut} className='cursor-pointer'>Log Out</li>
                </ul>
            )}
        </div>
    ) 
    return (
        // SignUp LogIn.
        <Link to='/login' className='h-[2.7rem] w-[2.7rem] relative'>
            {/* Profile Image */}
            <img id='profileImg' src="https://via.placeholder.com/100x100" alt="" 
                className='w-full h-full object-cover rounded-full cursor-pointer' />
        </Link>
    )
}