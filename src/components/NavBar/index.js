// React Imports.
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
// Context Imports.
import { useAuth } from '../../contexts/AuthContext'
// Components Imports.
import Profile from './Profile'
import Notification from './Notification'
import Alert from './Alert'
// Icons Imports.
import { FaYoutube, FaFacebookF, FaInstagram, FaLinkedinIn, 
    FaLocationArrow, FaTwitter, FaWhatsapp, FaTimes, FaBars, 
    FaPhone, FaCartPlus, FaAngleDown, FaShoppingCart } from 'react-icons/fa'
import { CgProfile } from "react-icons/cg"
    // Data Imports.
import { links, socialLinks, info } from '../../data'





const NavBarFull = ({ currentUser, scrolling, getLogo, getIcons, getCart }) => {
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
                        <Link to='#' className='flex items-center gap-2 hover:underline hover:opacity-75 cursor-pointer transition-opacity duration-300'>
                            <FaLocationArrow />
                            {info.address}
                        </Link>
                        <Link to='#' className='flex items-center gap-2 hover:underline hover:opacity-75 cursor-pointer transition-opacity duration-300'>
                            <FaPhone />
                            {info.phone[0]}
                        </Link>
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
                        {
                            currentUser ? (<>
                                <Link to="/cart">
                                    <FaShoppingCart className="cursor-pointer text-2xl text-primary hover:text-light-blue transition-colors duration-300" />
                                </Link>
                                <Notification />
                                <Profile /> 
                            </>) : (
                                <Link to="login" className='text-light-blue font-semibold border-[3px] border-light-blue rounded py-2 px-4 shadow-md hover:bg-light-blue hover:text-white hover:shadow-light-blue transition-all duration-300 flex gap-x-3'>
                                    <CgProfile className='text-3xl' />
                                    Se Connecter
                                </Link>
                            )
                        }
                    </div>
                </ul>
            </div>
            <Alert />
        </nav>
    )
}

const NavBarSmall = ({ currentUser, menuState, setMenuState, scrolling, getLogo, getIcons, getCart }) => {
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
                        {
                            currentUser ? (<>
                                <Link to="/cart">
                                    <FaShoppingCart className="cursor-pointer text-2xl text-primary hover:text-light-blue transition-colors duration-300" />
                                </Link>
                                <Notification />
                                <Profile /> 
                            </>) : (
                                <Link to="login" className='text-light-blue font-semibold border-[3px] border-light-blue rounded py-2 px-4 shadow-md hover:bg-light-blue hover:text-white hover:shadow-light-blue transition-all duration-300 flex gap-x-3 text-base'>
                                    <CgProfile className='text-2xl' />
                                    Se Connecter
                                </Link>
                            )
                        }
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
 
export default function NavBar() {
    const { currentUser } = useAuth()
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
            facebook: <FaFacebookF className='nav-bar-icon group-hover:bg-facebook' />,
            youtube: <FaYoutube className='nav-bar-icon group-hover:bg-youtube' />,
            twitter: <FaTwitter className='nav-bar-icon group-hover:bg-twitter' />,
            instagram: <FaInstagram className='nav-bar-icon group-hover:bg-instagram' />,
            linkedin: <FaLinkedinIn className='nav-bar-icon group-hover:bg-linkedin' />,
            whatsapp: <FaWhatsapp className='nav-bar-icon group-hover:bg-whatsapp' />,
        }
        return Object.entries(socialLinks)
            .map(([ label, link ], id) => {
                return link && 
                    <Link key={id} to={link} className='h-full gap-2 flex items-center w-12 hover:w-36 transition-all duration-500 cursor-pointer bg-light group [&>svg]:bg-primary [&>svg]:text-light'>
                        {icons[label]}
                        <h5 className='hidden group-hover:block text-dark font-semibold'>{label}</h5>
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
        currentUser,
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
