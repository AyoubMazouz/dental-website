// React Imports.
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
// Icons Imports.
import { FaYoutube, FaFacebookF, FaInstagram, FaLinkedinIn, FaLocationArrow, FaTwitter, FaWhatsapp, FaTimes, FaBars } from 'react-icons/fa'
// Components Imports.
import Logo from './Logo'
// Data Imports.
import { links, info } from '../data'
const { whatsapp, linkedin, youtube, twitter, instagram, facebook } = info.social

const NavBarFull = () => {
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
                <Link to='#' className='--link'><FaLocationArrow />{info.address}</Link>
            </div> : null}
            <div className='w-full lg:max-w-[1600px] h-[75%] px-6 flex justify-between items-center'>
                <div className='h-full flex items-center'><Logo /></div>
                <ul className='h-full flex items-center space-x-8 text-lg uppercase'>
                    {links.nav.map((link, id) => getLinks(link, id))}
                </ul>
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
    <nav className={`text-dark relative lg:hidden flex items-center justify-center px-4 transition-all duration-500 bg-light ${menuState ? 'h-[100vh]' : 'h-[60px]'} ${scrolling ? 'sticky top-0 z-20' : ''}`}>
        <div className='absolute top-0 w-full flex justify-between px-4 py-4'>
            <div className=''><Logo /></div>
            <div className=''><ToggleBtn state={menuState} setState={setMenuState} /></div>
        </div>
        {menuState && (
            <ul className='text-center py-8 mt-12'>
                <ul className='w-full flex flex-col items-center gap-y-3'>
                    {links.nav.map((link, id) => <li key={id} onClick={() => { setMenuState(false); navigate(link.link) }}className='relative after:absolute after:-bottom-[.2rem] after:left-0 after:content-[" "] after:w-0 after:h-[.2rem] after:bg-secondary after:hover:w-full after:transition-all after:duration-300 hover:text-primary text-2xl font-semibold cursor-pointer'>{link.label}</li>)}
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
