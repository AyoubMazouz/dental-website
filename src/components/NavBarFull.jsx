import { useNavigate, Link } from 'react-router-dom'
import { FaSearch, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Logo from './Logo'
import { links, info } from '../data'
import { useState } from 'react'


export default function NavBarFull() {
    const navigate = useNavigate()
    const [scrolling, setScrolling] = useState()

    window.addEventListener('scroll', ev => {
        if (window.scrollY > 0) setScrolling(true)
        else setScrolling(false)  
    })
    return (
        <>
            <nav className={`${scrolling 
                ? 'w-full sticky top-0 z-10 h-[70px] hidden md:flex flex-col justify-center items-center font-[Helvetica] bg-white shadow-lg transitions duration-200'
                : 'w-full h-[140px] hidden md:flex flex-col justify-center items-center font-[Poppins] transitions duration-200'}`}>
                {!scrolling ? <div className={'w-full h-[25%] px-6 flex justify-around items-center bg-sky-500'}>
                    <ul className='flex text-xl space-x-6'>
                        {links.icons.facebook && <FaFacebook />}
                        {links.icons.instagram && <FaInstagram />}
                        {links.icons.linkedin && <FaLinkedin />}
                    </ul>
                    <div>{info.address}</div>
                    <div>{info.phone[0]}</div>
                    <button className='bg-sky-500 h-8 px-12 text-white font-bold'>Rendez Vous</button>
                </div> : null}
                <div className='w-full lg:max-w-[1600px] h-[75%] px-6 flex justify-between items-center'>
                    <div className='h-full flex items-center'><Logo /></div>
                    <ul className='h-full flex items-center space-x-8 text-lg'>
                        <li><Link to='#' className='--link-nav-full'>home</Link></li>
                        <li><Link to='#' className='--link-nav-full'>about</Link></li>
                        <li className='group relative'>
                            <Link to='#' className='--link-nav-full'>services</Link>
                            <ul className='absolute text-base w-[22rem] z-20 flex flex-col space-y-4 py-8 px-6 bg-white rounded shadow-lg invisible group-hover:visible'>
                                <li className=''><Link to='#' className='--link-nav-full'>Clean system and networks</Link></li>
                                <li className=''><Link to='#' className='--link-nav-full'>service 2</Link></li>
                                <li className=''><Link to='#' className='--link-nav-full'>service 3</Link></li>
                                <li className=''><Link to='#' className='--link-nav-full'>service 4</Link></li>
                            </ul>
                        </li>
                        <li><Link to='#' className='--link-nav-full'>gallery</Link></li>
                        <li><Link to='#' className='--link-nav-full'>blog</Link></li>
                        <li><Link to='#' className='--link-nav-full'>contact</Link></li>
                    </ul>
                    <div className='flex h-10 rounded overflow-hidden relative'>
                        <input type="text" className='w-[12rem] border-2 h-full' />
                        <FaSearch className='h-6 w-6 absolute right-[.5rem] top-[.5rem]' />
                    </div>
                </div>
            </nav>
            {scrolling 
                ? <ul className='fixed z-20 top-[50%] right-0 w-[100px] translate-y-[-50%] flex flex-col text-4xl space-y-6'>
                    {links.icons.facebook && <FaFacebook />}
                    {links.icons.instagram && <FaInstagram />}
                    {links.icons.linkedin && <FaLinkedin />}
                </ul> : null}
        </>
    )
}