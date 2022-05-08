// React Imports.
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
// Icons Imports.
import { FaYoutube, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaLocationArrow, FaTwitter, FaWhatsapp } from 'react-icons/fa'
// Components Imports.
import Logo from './Logo'
// Data Imports.
import { links, info } from '../data'


export default function NavBarFull() {
    const navigate = useNavigate()
    const [scrolling, setScrolling] = useState()
    // Trigger Nav Bar to be sticky.
    window.addEventListener('scroll', ev => {
        if (window.scrollY > 0) setScrolling(true)
        else setScrolling(false)  
    })
    const getLinks = (link, id) => {
        if (typeof link.subLinks === 'undefined') return (
            <li key={id}><Link to={link.link} className='relative after:absolute after:-bottom-[.2rem] after:left-0 after:content-[" "] after:w-0 after:h-[.2rem] after:bg-secondary after:hover:w-full after:transition-all after:duration-300 hover:text-primary'>{link.label}</Link></li>
        )
        else return (
            <li key={id} className='group relative cursor-pointer'><Link to={link.link}>{link.label}</Link>
                <ul className='absolute text-base w-[22rem] z-20 flex flex-col space-y-4 py-8 px-6 bg-light rounded shadow-lg invisible group-hover:visible lowercase'>
                    {link.subLinks.map((link, id) => <li key={id}><Link to={link.link} className='relative after:absolute after:-bottom-[.2rem] after:left-0 after:content-[" "] after:w-0 after:h-[.2rem] after:bg-secondary after:hover:w-full after:transition-all after:duration-300 hover:text-primary'>{link.label}</Link></li>)}
                </ul>
            </li>
        )
    }
    return (
        <nav className={`${scrolling 
            ? 'w-full sticky top-0 z-20 h-[70px] hidden lg:flex flex-col justify-center items-center bg-light shadow-lg transitions duration-200'
            : 'w-full h-[140px] hidden lg:flex flex-col justify-center items-center transitions duration-200'}`}>
            {!scrolling ? <div className={'w-full h-[25%] px-6 flex justify-around items-center bg-primary text-light'}>
                <ul className='flex items-center justify-center h-full bg-primary'>
                    {links.social.facebook && <div className='--nav-icons-container group'>
                        <FaFacebookF className='--nav-icons group-hover:bg-[#1877f2]' />
                        <h5 className='--nav-icons-span'>Facebook</h5></div>}
                    {links.social.youtube && <div className='--nav-icons-container group'>
                        <FaYoutube className='--nav-icons group-hover:bg-[#ff0000]' />
                        <h5 className='--nav-icons-span'>Youtube</h5></div>}
                    {links.social.twitter && <div className='--nav-icons-container group'>
                        <FaTwitter className='--nav-icons group-hover:bg-[#1da1f2]' />
                        <h5 className='--nav-icons-span'>Twitter</h5></div>}
                    {links.social.instagram && <div className='--nav-icons-container group'>
                        <FaInstagram className='--nav-icons group-hover:bg-[#c32aa3]' />
                        <h5 className='--nav-icons-span'>Instagram</h5></div>}
                    {links.social.linkedin && <div className='--nav-icons-container group'>
                        <FaLinkedinIn className='--nav-icons group-hover:bg-[#0a66c2]' />
                        <h5 className='--nav-icons-span'>Linkedin</h5></div>}
                    {links.social.whatsapp && <div className='--nav-icons-container group'>
                        <FaWhatsapp className='--nav-icons group-hover:bg-[#25d366]' />
                        <h5 className='--nav-icons-span'>Whatsapp</h5></div>}
                </ul>
                <Link to='#' className='--link'><FaLocationArrow />{info.address}</Link>
                <div className='--link'><FaPhone />{info.phone[0]}</div>
            </div> : null}
            <div className='w-full lg:max-w-[1600px] h-[75%] px-6 flex justify-between items-center'>
                <div className='h-full flex items-center'><Logo /></div>
                <ul className='h-full flex items-center space-x-8 text-lg uppercase'>
                    {links.nav.map((link, id) => getLinks(link, id))}
                </ul>
                {/* <div className='flex h-10 overflow-hidden relative text-primary p-1'>
                    <input type="text" placeholder='Search' className='w-[12rem] h-full px-2 focus:outline-none ring-2 ring-primary hover:ring-opacity-75 focus:ring-secondary rounded-md' />
                    <FaSearch className='h-6 w-6 absolute right-[.5rem] top-[.5rem]' />
                </div> */}
            </div>
        </nav>
    )
}