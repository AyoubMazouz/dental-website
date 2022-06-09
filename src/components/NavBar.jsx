// React Imports.
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
// Context Imports.
import { useAuth } from '../contexts/AuthContext'
// Hooks Imports.
import useUserData from '../hooks/useUserData'
// Icons Imports.
import { FaYoutube, FaFacebookF, FaInstagram, FaLinkedinIn, 
    FaLocationArrow, FaTwitter, FaWhatsapp, FaTimes, FaBars, 
    FaPhone, FaCartPlus, FaBell, FaAngleDown } from 'react-icons/fa'
// Data Imports.
import { links, socialLinks, info } from '../data'
import { useAlert } from '../contexts/AlertContext'



const NavBarFull = ({ scrolling, getLogo, getIcons, getCart }) => {
    // Nav Links.
    const getLinks = (label, link, id) => {
        // Only one Link.
        if (typeof link.subLinks === 'undefined') return (
            <li key={id}>
                <Link to={link} className='relative after:absolute after:-bottom-[.2rem] after:left-0 after:content-[" "] after:w-0 after:h-[.2rem] after:bg-secondary after:hover:w-full after:transition-all after:duration-300 text-primary hover:text-light-blue font-bold'>{label}</Link>
            </li>
        )
        // Link Contain more Links.
        else return (
            <li key={id} className='group relative cursor-pointer text-primary hover:text-light-blue font-bold'>
                <Link to={link.link} className="flex items-center gap-1">
                    {label}
                    <FaAngleDown className='opacity-75' />
                </Link>
                <ul className='absolute text-base w-[22rem] z-20 flex flex-col space-y-4 py-8 px-6 bg-light rounded shadow-lg invisible group-hover:visible'>
                    {
                        Object.entries(link.subLinks)
                            .map(([ label, link ], id) => (
                                <Link key={id} to={link} className='relative after:absolute after:-bottom-[.2rem] after:left-0 after:content-[""] after:w-0 after:h-[.2rem] after:bg-secondary after:hover:w-full after:transition-all after:duration-300 text-light-gray hover:text-primary font-bold pb-2 text-lg border-b-[3px] border-light-gray border-opacity-20'>{label}</Link>
                            ))
                    }
                </ul>
            </li>
        )
    }
    return (
        <nav className={`${scrolling 
            ? 'w-full sticky top-0 z-20 h-[80px] hidden lg:flex flex-col justify-center items-center bg-light shadow-lg transitions duration-200'
            : 'w-full h-[160px] hidden lg:flex flex-col justify-center items-center transitions duration-200'}`}>
            {!scrolling ? 
                <div className='w-full bg-primary flex items-center'>
                    <div className='w-full h-[40px] max-w-[1920px] px-6 flex justify-around items-center text-light'>
                        {/* Top */}
                        {/* Social Media Icons */}
                        <ul className='flex items-center justify-center h-full bg-primary'>
                            {getIcons()}
                        </ul>
                        {/* Address */}
                        <Link to='#' className='--link'><FaLocationArrow />{info.address}</Link>
                        <Link to='#' className='--link'><FaPhone />{info.phone[0]}</Link>
                    </div>
                </div> : null}
            {/* bottom */}
            <div className='w-full max-w-[1920px] h-[75%] px-8 flex justify-between items-center'>
                <ul className='h-full w-full flex justify-between items-center text-xl'>
                    {/* Logo */}
                    <div className='h-full flex items-center'>{getLogo()}</div>
                    {/* NavLinks */}
                    <div className='gap-x-[2rem] flex'>
                        {
                            Object.entries(links)
                                .map(([ label, link ], id) => {
                                    return getLinks(label, link, id)
                                })
                        }
                        </div>
                    <div className='flex items-center gap-x-6 text-xl'>
                        {getCart()}
                        <Notification />
                        <Profile />
                    </div>
                </ul>
            </div>
            <Alert />
        </nav>
    )
}

const NavBarSmall = ({ menuState, setMenuState, scrolling, getLogo, getIcons, getCart }) => {
    const navigate = useNavigate()
    // Nav Links.
    const getLinks = () => {
        return Object.entries(links)
            .map(([ label, link ], id) => { 
                return <li key={id} onClick={() => { setMenuState(false); navigate(link) }}className='relative after:absolute after:-bottom-[.2rem] after:left-0 after:content-[""] after:w-0 after:h-[.2rem] after:bg-secondary after:hover:w-full after:transition-all after:duration-300 hover:text-primary text-2xl font-semibold cursor-pointer'>{label}</li>
        })
    }
    return (
        <nav className={`text-dark relative lg:hidden flex items-center justify-center transition-all duration-500 bg-light px-2 sm:px-4 md:px-8 max-w-[1920px] ${menuState ? 'h-[100vh]' : 'h-[70px]'} ${scrolling ? 'sticky top-0 z-20' : ''}`}>
            <div className='absolute top-0 w-full flex items-center justify-between px-4 py-4'>
                {/* Toggle button */}
                {/* Open */}
                <FaBars onClick={() => setMenuState(prev => !prev)}
                    className={menuState ? 'hidden' : 'text-2xl text-slate-700 hover:text-sky-500 trans cursor-pointer'} />
                {/* Closed */}
                <FaTimes onClick={() => setMenuState(prev => !prev)}
                    className={menuState ? 'text-2xl text-slate-700 hover:text-sky-500 trans cursor-pointer hover:rotate-180' : 'hidden'} />
                {/* Logo */}
                <div className=''>{getLogo()}</div>
                {!menuState && (
                    <div className='flex items-center gap-x-6 text-xl'>
                        {getCart()}
                        <Notification />
                        <Profile />
                    </div>
                )}
            </div>
            {menuState && (
                <ul className='text-center py-8 mt-12'>
                    {/* Links */}
                    <ul className='w-full flex flex-col items-center gap-y-3'>{getLinks()}</ul>
                    {/* Call to Action */}
                    <button className='px-6 py-2 bg-secondary rounded-full text-lg font-semibold text-light my-8'>render vous</button>
                    {/* Social media Icons */}
                    <ul className='flex items-center justify-center'>{getIcons()}</ul>
                </ul>
            )}
            {!menuState && <Alert />}
        </nav>
  )
}

const Profile = () => {
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

const Notification = () => {
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
            <FaBell onClick={() => setMenuState(!menuState)} className='cursor-pointer' />
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

const Alert = () => {
    // Alert Context.
    const { alert, setAlert } = useAlert()
    if (!alert) return null
    const types = {
        danger: 'bg-red-500',
        warning: 'bg-yellow-500',
        inform: 'bg-sky-500',
        success: 'bg-emerald-500',
    }
    return (
        <div className='relative z-20 w-full flex justify-center'>
            <div className={`${types[alert[0]]} ${alert ? 'top-[2.2rem] lg:top-[.8rem]' : 'top-[-12rem]'} w-full max-w-[1840px] absolute py-6 px-4 transition-all duration-1000 flex justify-between rounded-xl`}>
                <div>{alert[1]}</div>
                <FaBars onClick={() => setAlert(false)} className='cursor-pointer' />
            </div>
        </div>
    )
}
  
export default function NavBar() {
    // Set Nav Width According to Scroll State. 
    const [scrolling, setScrolling] = useState(false)
    // Toggle Nav Menu.
    const [menuState, setMenuState] = useState(false)
    // Trigger Nav Bar to be sticky.
    window.addEventListener('scroll', e => {
        if (window.scrollY > 0) setScrolling(true)
        else setScrolling(false)  
    })
    // Logo
    const getLogo = () => {
        return (
          <Link to='/'className='text-lg text-slate-700 capitalize' >
            dental <span className="font-semibold text-sky-500">Care</span>
          </Link>
        )
      }
    // Social Media Icons 
    const getIcons = () => {
        const icons = {
            facebook: <FaFacebookF className='--nav-icons group-hover:bg-[#1877f2]' />,
            youtube: <FaYoutube className='--nav-icons group-hover:bg-[#ff0000]' />,
            twitter: <FaTwitter className='--nav-icons group-hover:bg-[#1da1f2]' />,
            instagram: <FaInstagram className='--nav-icons group-hover:bg-[#c32aa3]' />,
            linkedin: <FaLinkedinIn className='--nav-icons group-hover:bg-[#0a66c2]' />,
            whatsapp: <FaWhatsapp className='--nav-icons group-hover:bg-[#25d366]' />,
        }
        return Object.entries(socialLinks)
            .map(([ label, link ], id) => {
                return link && 
                    <Link key={id} to={link} className='--nav-icons-container group'>
                        {icons[label]}
                        <h5 className='--nav-icons-span'>{label}</h5>
                    </Link>
        }) 
    }
    // Cart.
    const getCart = () => {
        return <Link to='/cart' className=''>
            <FaCartPlus onClick={() => setMenuState(!menuState)} className='cursor-pointer' />
        </Link>
    }

    const values = {
        menuState,
        setMenuState,
        scrolling,
        getLogo,
        getIcons,
        getCart,
    }
    return <div className={scrolling ? 'sticky top-0 z-20' : ''}>
        <NavBarSmall {...values} />
        <NavBarFull {...values} />
    </div>
}
