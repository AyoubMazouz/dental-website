import { useNavigate, Link } from 'react-router-dom'
import { FaSearch, FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaLocationArrow } from 'react-icons/fa'
import Logo from './Logo'
import { links, info } from '../data'
import { useState } from 'react'


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
            <li key={id}><Link to={link.url} className='relative after:absolute after:-bottom-[.2rem] after:left-0 after:content-[" "] after:w-0 after:h-[.2rem] after:bg-secondary after:hover:w-full after:transition-all after:duration-300 hover:text-primary'>{link.label}</Link></li>
        )
        else return (
            <li key={id} className='group relative cursor-pointer'><Link to={link.url}>{link.label}</Link>
                <ul className='absolute text-base w-[22rem] z-20 flex flex-col space-y-4 py-8 px-6 bg-light rounded shadow-lg invisible group-hover:visible lowercase'>
                    {link.subLinks.map((v, id) => <li key={id}><Link to={v.url} className='relative after:absolute after:-bottom-[.2rem] after:left-0 after:content-[" "] after:w-0 after:h-[.2rem] after:bg-secondary after:hover:w-full after:transition-all after:duration-300 hover:text-primary'>{v.label}</Link></li>)}
                </ul>
            </li>
        )
    }
    return (
        <nav className={`${scrolling 
            ? 'w-full sticky top-0 z-20 h-[70px] hidden md:flex flex-col justify-center items-center bg-light shadow-lg transitions duration-200'
            : 'w-full h-[140px] hidden md:flex flex-col justify-center items-center transitions duration-200'}`}>
            {!scrolling ? <div className={'w-full h-[25%] px-6 flex justify-around items-center bg-primary text-light'}>
                <ul className='flex items-center text-2xl space-x-6'>
                    {links.icons.facebook && <FaFacebook className='--nav-icons' />}
                    {links.icons.instagram && <FaInstagram className='--nav-icons' />}
                    {links.icons.linkedin && <FaLinkedin className='--nav-icons' />}
                </ul>
                <Link to='#' className='--link'><FaLocationArrow />{info.address}</Link>
                <div className='--link'><FaPhone />{info.phone[0]}</div>
            </div> : null}
            <div className='w-full lg:max-w-[1600px] h-[75%] px-6 flex justify-between items-center'>
                <div className='h-full flex items-center'><Logo /></div>
                <ul className='h-full flex items-center space-x-8 text-lg uppercase'>
                    {links.nav.map((link, id) => getLinks(link, id))}
                </ul>
                <div className='flex h-10 overflow-hidden relative text-primary p-1'>
                    <input type="text" placeholder='Search' className='w-[12rem] h-full px-2 focus:outline-none ring-2 ring-primary hover:ring-opacity-75 focus:ring-secondary rounded-md' />
                    <FaSearch className='h-6 w-6 absolute right-[.5rem] top-[.5rem]' />
                </div>
            </div>
        </nav>
    )
}