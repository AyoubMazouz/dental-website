// React Imports.
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
// Context Imports.
import { useAuth } from '../contexts/AuthContext'
// Icons Imports.
import { FaYoutube, FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationArrow, FaTwitter, FaWhatsapp, FaTimes, FaBars } from 'react-icons/fa'
// Components Imports.
import Logo from './Logo'
// Data Imports.
import { links, info } from '../data'
import { connectStorageEmulator } from 'firebase/storage'
const { whatsapp, linkedin, youtube, twitter, instagram, facebook } = info.social

const NavBarFull = () => {
    const navigate = useNavigate()
    const { currentUser, logOut } = useAuth()
    const [scrolling, setScrolling] = useState(false)
    const [profileMenu, setProfileMenu] = useState(false)
    // Trigger Nav Bar to be sticky.
    window.addEventListener('scroll', e => {
        if (window.scrollY > 0) setScrolling(true)
        else setScrolling(false)  
    })
    // Trigger Nav Bar to be sticky.
    window.addEventListener('click', e => {
        if (['profile', 'profileImg'].includes(e.target.id)) setProfileMenu(!profileMenu)
        else setProfileMenu(false)
    })
    // Log Out.
    const handleLogOut = async () => {
        if (!currentUser) return 
        try {
            await logOut()
            navigate('/login')
            console.log('LOG OUT')
        }
        catch {
            console.log('LOG OUT FAIL')
        }
    }
    const getLinks = (link, id) => {
        if (typeof link.subLinks === 'undefined') return (
            <li key={id}><Link to={link.link} className='relative after:absolute after:-bottom-[.2rem] after:left-0 after:content-[" "] after:w-0 after:h-[.2rem] after:bg-secondary after:hover:w-full after:transition-all after:duration-300 hover:text-primary'>{link.label}</Link></li>
        )
        else return (
            <li key={id} className='group relative cursor-pointer'><Link to={link.link}>{link.label}</Link>
                <ul className='absolute text-base w-[22rem] z-20 flex flex-col space-y-4 py-8 px-6 bg-light rounded shadow-lg invisible group-hover:visible'>
                    {link.subLinks.map((link, id) => <li key={id}><Link to={link.link} className='relative after:absolute after:-bottom-[.2rem] after:left-0 after:content-[" "] after:w-0 after:h-[.2rem] after:bg-secondary after:hover:w-full after:transition-all after:duration-300 hover:text-primary'>{link.label}</Link></li>)}
                </ul>
            </li>
        )
    }
    return (
        <nav className={`${scrolling 
            ? 'w-full sticky top-0 z-20 h-[70px] hidden lg:flex flex-col justify-center items-center bg-light shadow-lg transitions duration-200 max-w-[1920px]'
            : 'w-full h-[140px] hidden lg:flex flex-col justify-center items-center transitions duration-200 max-w-[1920px]'}`}>
            {!scrolling ? <div className={'w-full h-[25%] px-6 flex justify-around items-center bg-primary text-light'}>
                {/* Top */}
                <ul className='flex items-center justify-center h-full bg-primary'>
                    {/* Social Media Icons */}
                    {facebook && <div className='--nav-icons-container group'>
                        <FaFacebookF className='--nav-icons group-hover:bg-[#1877f2]' />
                        <h5 className='--nav-icons-span'>Facebook</h5></div>}
                    {youtube && <div className='--nav-icons-container group'>
                        <FaYoutube className='--nav-icons group-hover:bg-[#ff0000]' />
                        <h5 className='--nav-icons-span'>Youtube</h5></div>}
                    {twitter && <div className='--nav-icons-container group'>
                        <FaTwitter className='--nav-icons group-hover:bg-[#1da1f2]' />
                        <h5 className='--nav-icons-span'>Twitter</h5></div>}
                    {instagram && <div className='--nav-icons-container group'>
                        <FaInstagram className='--nav-icons group-hover:bg-[#c32aa3]' />
                        <h5 className='--nav-icons-span'>Instagram</h5></div>}
                    {linkedin && <div className='--nav-icons-container group'>
                        <FaLinkedinIn className='--nav-icons group-hover:bg-[#0a66c2]' />
                        <h5 className='--nav-icons-span'>Linkedin</h5></div>}
                    {whatsapp && <div className='--nav-icons-container group'>
                        <FaWhatsapp className='--nav-icons group-hover:bg-[#25d366]' />
                        <h5 className='--nav-icons-span'>Whatsapp</h5></div>}
                </ul>
                {/* Address */}
                <Link to='#' className='--link'><FaLocationArrow />{info.address}</Link>
            </div> : null}
            {/* bottom */}
            <div className='w-full h-[75%] px-8 flex justify-between items-center'>
                <ul className='h-full flex items-center space-x-8 text-lg'>
                    {/* Logo */}
                    <div className='h-full flex items-center'><Logo /></div>
                    {/* NavLinks */}
                    {links.map((link, id) => getLinks(link, id))}
                </ul>
                {currentUser ? (
                    // Profile 
                    <div id='profile' className='h-[3rem] w-[3rem] relative'>
                        <img id='profileImg' src="https://via.placeholder.com/100x100" alt="" className='w-full h-full object-cover rounded-full cursor-pointer' />
                        {profileMenu && (
                            <ul className='absolute z-50 top-[110%] right-0 w-[18rem] px-2 py-6 bg-light rounded-lg border-[1px] border-gray-200 flex flex-col gap-y-3'>
                                <Link to='/profile' className='flex gap-4 border-b-[1px] border-gray-200 pb-3'>
                                    <img src="https://via.placeholder.com/100X100" alt="" className='object-cover h-12 w-12 rounded-full' />
                                    <div>
                                        <h5>{currentUser.displayName}</h5>
                                        <h5 className='text-xs'>{currentUser.email}</h5>
                                    </div>
                                </Link>
                                <li onClick={handleLogOut} className='cursor-pointer'>Log Out</li>
                            </ul>
                        )}
                </div>
                ) : (
                    // SignUp LogIn.
                    <div className='space-x-8'>
                        <Link to='/login' className='relative after:absolute after:-bottom-[.2rem] after:left-0 after:content-[" "] after:w-0 after:h-[.2rem] after:bg-secondary after:hover:w-full after:transition-all after:duration-300 hover:text-primary'>Se Connecter</Link>
                        <Link to='/signup' className='py-2 px-6 border-2 border-primary text-primary'>S'inscrire</Link>
                    </div>
                )}
            </div>
        </nav>
    )
}

const ToggleBtn = ({ state, setState }) => {
    return <>
        <FaBars onClick={() => setState(prev => !prev)}
            className={state ? 'hidden' : 'text-2xl text-slate-700 hover:text-sky-500 trans cursor-pointer'} />
        <FaTimes onClick={() => setState(prev => !prev)}
            className={state ? 'text-2xl text-slate-700 hover:text-sky-500 trans cursor-pointer hover:rotate-180' : 'hidden'} />
    </>
}
const NavBarSmall = () => {
    const [menuState, setMenuState] = useState(false)
    const navigate = useNavigate() 
    const [scrolling, setScrolling] = useState()
    // Trigger Nav Bar to be sticky.
    window.addEventListener('scroll', ev => {
        if (window.scrollY > 0) setScrolling(true)
        else setScrolling(false)  
    })
  return (
    <nav className={`text-dark relative lg:hidden flex items-center justify-center px-4 transition-all duration-500 bg-light px-2 sm:px-4 md:px-8 max-w-[1920px] ${menuState ? 'h-[100vh]' : 'h-[60px]'} ${scrolling ? 'sticky top-0 z-20' : ''}`}>
        <div className='absolute top-0 w-full flex justify-between px-4 py-4'>
            <div className=''><Logo /></div>
            <div className=''><ToggleBtn state={menuState} setState={setMenuState} /></div>
        </div>
        {menuState && (
            <ul className='text-center py-8 mt-12'>
                <ul className='w-full flex flex-col items-center gap-y-3'>
                    {links.map((link, id) => <li key={id} onClick={() => { setMenuState(false); navigate(link.link) }}className='relative after:absolute after:-bottom-[.2rem] after:left-0 after:content-[" "] after:w-0 after:h-[.2rem] after:bg-secondary after:hover:w-full after:transition-all after:duration-300 hover:text-primary text-2xl font-semibold cursor-pointer'>{link.label}</li>)}
                </ul>
                <button className='px-6 py-2 bg-secondary rounded-full text-lg font-semibold text-light my-8'>render vous</button>
                    <ul className='flex items-center justify-center'>
                        {facebook && <div className='--nav-icons-container group'>
                            <FaFacebookF className='--nav-icons bg-light text-[#1877f2] rounded-full group-hover:bg-[#1877f2]' />
                            <h5 className='--nav-icons-span'>Facebook</h5></div>}
                        {youtube && <div to='' className='--nav-icons-container group'>
                            <FaYoutube className='--nav-icons bg-light text-[#ff0000] rounded-full group-hover:bg-[#ff0000]' />
                            <h5 className='--nav-icons-span'>Youtube</h5></div>}
                        {twitter && <div className='--nav-icons-container group'>
                            <FaTwitter className='--nav-icons bg-light text-[#1da1f2] rounded-full group-hover:bg-[#1da1f2]' />
                            <h5 className='--nav-icons-span'>Twitter</h5></div>}
                        {instagram && <div className='--nav-icons-container group'>
                            <FaInstagram className='--nav-icons bg-light text-[#c32aa3] rounded-full group-hover:bg-[#c32aa3]' />
                            <h5 className='--nav-icons-span'>Instagram</h5></div>}
                        {linkedin && <div className='--nav-icons-container group'>
                            <FaLinkedinIn className='--nav-icons bg-light text-[#0a66c2] rounded-full group-hover:bg-[#0a66c2]' />
                            <h5 className='--nav-icons-span'>Linkedin</h5></div>}
                        {whatsapp && <div className='--nav-icons-container group'>
                            <FaWhatsapp className='--nav-icons bg-light text-[#25d366] rounded-full group-hover:bg-[#25d366]' />
                            <h5 className='--nav-icons-span'>Whatsapp</h5></div>}
                    </ul>
            </ul>
        )}
    </nav>
  )
}
  
export default function NavBar() {
  return <><NavBarFull /><NavBarSmall /></>
}
