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
                <div className='flex bg-primary w-full py-[5rem] px-[2rem]'>
                    <div className='space-y-4'>
                        <div className='flex flex-wrap justify-end'>
                            {/* News Letter */}
                            <div className='max-w-[40rem] w-full mb-[2rem] flex h-[3rem] gap-2'>
                                <input type="email" name='email' value={email} onChange={handleChange} 
                                    pattern="^[a-zA-Z0-9.]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" placeholder='Email... (e.g example@email.com).'
                                    className='w-full h-full mb-[1rem] px-[1rem] focus:outline-none border-light-gray rounded-xl text-primary font-semibold' />
                            <button className='py-2 px-6 text-lg font-semibold bg-secondary rounded-xl'>Subscribe</button>
                            </div>
                            <div className='flex flex-wrap justify-center lg:justify-end gap-2'>
                                {/* Email */}
                                {info.email.map((v, id) => <h5 key={id} className='flex gap-2 items-center border-2 border-secondary rounded-full py-2 px-6'><FaPhone />{v}</h5>)}
                                {/* Phone */}
                                {info.phone.map((v, id) => <h5 key={id} className='flex gap-2 items-center border-2 border-secondary rounded-full py-2 px-6'><FaPhone />{v}</h5>)}
                            </div>
                        </div>
                        {/* Social Media Links */}
                        <ul className='flex gap-2 justify-center lg:justify-end'>
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
                    <div className='flex justify-between lg:justify-between gap-4'>
                        <ul>{links.nav.map((link, id) => (
                                <h3 key={id}><Link to={link.link} className='--footer-link'>{link.label}</Link></h3>
                                ))}</ul>
                        <Logo />
                    </div>
                    {/* CopyRight, Policy & Terms of Service */}
                    <div className='w-full mt-[5rem] lg:mt-[12rem] text-center lg:text-left py-1 text-xs'>
                        <h6>Copyright 2021 | <Link to='#' className='--footer-link'>Policy</Link>, <Link to='#' className='--footer-link'>Terms of Service</Link></h6>
                    </div>
                </div>
            </div>
    )
}

export default Footer