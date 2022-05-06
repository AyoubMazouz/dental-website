import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaPhone, FaFacebook, FaInstagram, FaLinkedin, } from 'react-icons/fa'
import Logo from './Logo' 
import { info, links, services } from '../data'

const Footer = () => {
    const [email, setEmail] = useState()
    const handleChange = ev => {
        ev.preventDefault()
        setEmail(ev.target.value)
    }
    return (
        <div className="w-full pt-[6rem] text-light">
            {/* News Letter */}
            <div className='flex flex-col gap-[1rem] justify-center items-center mb-[4rem]'>
                <label htmlFor="email" className='text-xl md:text-3xl lg:text-5xl font-bold'>Subscribe To Our News Letter</label>
                <div className='relative w-[70%]'>
                    <input type="email" name='email' value={email} onChange={handleChange} 
                        pattern="^[a-zA-Z0-9.]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" placeholder='Email... (e.g example@email.com).'
                        className='h-[4.4rem] w-full px-[1rem] lg:px-[3rem] focus:outline-none border-light-gray rounded-full text-primary font-semibold text-xl' />
                    <FaInstagram className='absolute top-[50%] right-[.5rem] translate-y-[-50%] p-2 text-[3.6rem] bg-secondary rounded-full' />
                </div>
            </div>
            {/* Grid */}
            <div className='flex justify-between px-4 lg:px-12'>
                {/* Col-01 */}
                <div className='flex gap-[2rem]'>
                    <div className='space-y-4'>
                        {/* logo */}
                        <div className=''><Logo /></div>
                        <ul className='flex flex-wrap text-sm'>
                            {/* Email */}
                            {info.email.map((v, id) => <li key={id} className='flex gap-2 items-center text--light'><FaPhone />{v}</li>)}
                            {/* Phone */}
                            {info.phone.map((v, id) => <li key={id} className='flex gap-2 items-center text--light'><FaPhone />{v}</li>)}
                        </ul>
                        {/* Social Media Links */}
                        <ul className='flex gap-3'>
                            {links.icons.facebook && <FaFacebook className='--nav-icons text-light' />}
                            {links.icons.instagram && <FaInstagram className='--nav-icons text-light' />}
                            {links.icons.linkedin && <FaLinkedin className='--nav-icons text-light' />}
                        </ul>
                    </div>
                    
                </div>
                {/* Col-02 */}
                {/* Nav Links */}
                <div className='text-right flex gap-[2rem]'>
                    <ul className='text-light'>
                        <h3 className='font-bold text-2xl mb-[.4rem]'>Navigation</h3>
                        {links.nav.map((link, id) => (
                            <li key={id}><Link to={link.url} className='--footer-link'>{link.label}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
            {/* CopyRight, Policy & Terms of Service */}
            <div className='w-full mt-[12rem] text-center py-1 text-xs'>
                <p>Copyright 2021 | <Link to='#' className='--footer-link'>Policy</Link>, <Link to='#' className='--footer-link'>Terms of Service</Link></p>
            </div>
        </div>
    )
}

export default Footer