// React Imports.
import { useState } from 'react'
import { Link } from 'react-router-dom'
// Icons Import.
import { FaPhone, FaFacebook, FaInstagram, FaLinkedin, } from 'react-icons/fa'
// Components Imports
import Logo from './Logo'
// Data Imports. 
import { info, links } from '../data'

const Footer = () => {
    const [email, setEmail] = useState()
    const handleChange = ev => {
        ev.preventDefault()
        setEmail(ev.target.value)
    }
    return ( 
        <div className='grid lg:grid-cols-2 --direction-ltr h-[28rem] text-light'>
                {/* Col-01 */}
                <div className='flex gap-[2rem] bg-primary w-full py-[5rem] px-[2rem]'>
                    <div className='space-y-4'>
                        <div className='flex flex-wrap justify-end text-sm'>
                            {/* News Letter */}
                            <div className='max-w-[40rem] w-full mb-[4rem] flex h-[3rem] gap-4'>
                                <input type="email" name='email' value={email} onChange={handleChange} 
                                    pattern="^[a-zA-Z0-9.]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" placeholder='Email... (e.g example@email.com).'
                                    className='w-full h-full mb-[1rem] px-[1rem] focus:outline-none border-light-gray rounded-xl text-primary font-semibold' />
                            <button className='py-2 px-6 text-lg font-bold bg-secondary rounded-xl'>Subscribe</button>
                            </div>
                            <div className='flex flex-wrap gap-6'>
                                {/* Email */}
                                {info.email.map((v, id) => <li key={id} className='flex gap-2 items-center border-2 border-secondary rounded-full py-2 px-6'><FaPhone />{v}</li>)}
                                {/* Phone */}
                                {info.phone.map((v, id) => <li key={id} className='flex gap-2 items-center border-2 border-secondary rounded-full py-2 px-6'><FaPhone />{v}</li>)}
                            </div>
                        </div>
                        {/* Social Media Links */}
                        <ul className='flex gap-3 justify-end'>
                            {links.icons.facebook && <FaFacebook className='--nav-icons' />}
                            {links.icons.instagram && <FaInstagram className='--nav-icons' />}
                            {links.icons.linkedin && <FaLinkedin className='--nav-icons' />}
                        </ul>
                    </div>
                </div>
                {/* Col-02 */}
                {/* Nav Links */}
                <div className='bg-light-blue w-full pt-[5rem] px-[2rem]'>
                    {/* logo */}
                    <div className='flex justify-between lg:justify-start gap-[16rem]'>
                        <ul className='lg:text-2xl'>
                            {links.nav.map((link, id) => (
                                <li key={id}><Link to={link.link} className='--footer-link'>{link.label}</Link></li>
                                ))}
                        </ul>
                        <Logo />
                    </div>
                    {/* CopyRight, Policy & Terms of Service */}
                    <div className='w-full mt-[5rem] lg:mt-[12rem] text-center lg:text-left py-1 text-xs'>
                        <p>Copyright 2021 | <Link to='#' className='--footer-link'>Policy</Link>, <Link to='#' className='--footer-link'>Terms of Service</Link></p>
                    </div>
                </div>
            </div>
    )
}

export default Footer