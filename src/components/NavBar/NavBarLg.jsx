// React Router Dom Imports.
import { Link } from 'react-router-dom'
// Components Imports.
import Profile from './Profile'
import Notification from './Notification'
import Logo from '../Logo'
// Icons Imports.
import { FaYoutube, FaFacebookF, FaInstagram, FaLinkedinIn, 
    FaLocationArrow, FaTwitter, FaWhatsapp, FaTimes, FaBars, 
    FaPhone, FaCartPlus, FaAngleDown, FaShoppingCart } from 'react-icons/fa'
import { CgProfile } from "react-icons/cg"
    // Data Imports.
import { links, socialLinks, info } from '../../data'





export default function NavBarFull ({ currentUser, scrolling }) {
    // Nav Links.
    const getLinks = (label, link, id) => {
        // Only one Link.
        if (typeof link.subLinks === 'undefined') return (
            <Link key={id} to={link} className='relative after:absolute after:-bottom-[.2rem] after:left-0 after:content-[""] after:w-0 after:h-[.29rem] after:bg-secondary after:hover:w-full after:transition-all after:duration-300 text-primary hover:text-light-blue font-bold'>
                {label}
            </Link>
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

    return (
        <nav className={`${scrolling 
            ? 'w-full sticky top-0 z-20 h-[80px] hidden lg:flex flex-col justify-center items-center bg-light shadow-lg transitions duration-200'
            : 'w-full h-[160px] hidden lg:flex flex-col justify-center items-center transitions duration-200'}`}>
            {
                !scrolling &&
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
                    </div>
            }
            {/* bottom */}
            <div className='w-full max-w-[1920px] h-[75%] px-8 flex justify-between items-center'>
                <ul className='h-full w-full flex justify-between items-center text-xl'>
                    {/* Logo */}
                    <div className='h-full flex items-center'>
                        <Logo />
                    </div>
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
        </nav>
    )
}
