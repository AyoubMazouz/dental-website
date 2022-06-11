// React Imports.
import { useState } from 'react'
import { Link } from 'react-router-dom'
// Icons Imports.
import { FaYoutube, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhone, FaLocationArrow, FaTwitter, FaWhatsapp } from 'react-icons/fa'
// Components Imports.
import Logo from './Logo'
// Data Imports. 
import { links, socialLinks } from '../data'
const { whatsapp, linkedin, youtube, twitter, instagram, facebook } = socialLinks

const Footer = () => {
    const [email, setEmail] = useState()
    const handleChange = ev => {
        ev.preventDefault()
        setEmail(ev.target.value)
    }
    const getIcons = () => (<>
            {
                facebook && 
                    <Link to="" className="group footer-icon">
                        <FaFacebookF className='group-hover:text-[#1877f2] group-hover:bg-white' />   
                    </Link>
            }
            {
                youtube && 
                    <Link to="" className="group footer-icon">
                        <FaYoutube className='group-hover:text-[#ff0000] group-hover:bg-white' />
                    </Link>
            }
            {
                twitter && 
                    <Link to="" className="group footer-icon">
                        <FaTwitter className=' group-hover:text-[#1da1f2] group-hover:bg-white' />
                    </Link>
            }
            {
                instagram && 
                    <Link to="" className="group footer-icon">
                        <FaInstagram className='group-hover:text-[#c32aa3] group-hover:bg-white' />
                    </Link>
            }
            {
                linkedin && 
                    <Link to="" className="group footer-icon">
                        <FaLinkedinIn className=' group-hover:text-[#0a66c2] group-hover:bg-white' />
                    </Link>
            }
            {
                whatsapp && 
                    <Link to="" className="group footer-icon">
                        <FaWhatsapp className=' group-hover:text-[#25d366] group-hover:bg-white' />
                    </Link>
            }
       
    </>)
    return ( 
        <div className='text-light'>
            {/* News Letter */}
            <div className='w-full bg-light-gray py-[7rem] space-y-[3rem] page-padding'>

                <h1 className='text-center'>SubScribe To Our News Letter</h1>

                <div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
                    <input type="email" name='email' value={email} onChange={handleChange}
                        placeholder='Email... (e.g example@email.com).'
                        className='w-full min-w-[22rem] max-w-[1200px] h-[5rem] px-[1rem] focus:outline-none border-light-gray rounded-xl text-primary font-semibold' />
                
                    <button className='h-[5rem] px-6 text-lg font-semibold bg-light-blue rounded-xl max-w-[22rem] w-full'>
                        Subscribe
                    </button>
                </div>

            </div>

            {/* Nav Links */}
            <div className='bg-primary w-full page-padding xl:px-24 py-12 grid grid-cols-4'>
                <div className='col-span-2 flex flex-col gap-12'>
                    {/* logo */}
                    <div><Logo /></div>
                    {/* Social Media Links */}
                    <ul className='flex gap-1'>
                        {getIcons()}
                    </ul>
                </div>

                <ul className='flex flex-col list-disc'>
                    <h3 className='ml-[-2rem]'>Navigation</h3>
                    {
                        Object.entries(links)
                            .map(([ label, link ], id) => {
                                return (
                                        <li className='hover:underline hover:opacity-75 hover:text-bluish-gray'><p>
                                            <Link key={id} to={link} className=''>{label}</Link>
                                        </p></li>
                                )
                            })
                    }
                </ul>

                <ul className='flex flex-col list-disc'>
                    <h3 className='ml-[-2rem]'>Services</h3>
                    {
                        links["Services"]?.subLinks &&
                            Object.entries(links["Services"].subLinks)
                                .map(([ label, link ], id) => {
                                    return (
                                            <li className='hover:underline hover:opacity-75 hover:text-bluish-gray'><p>
                                                <Link key={id} to={"services/" + link} className=''>{label}</Link>
                                            </p></li>
                                    )
                                })
                    }
                </ul>
            </div>
            {/* CopyRight, Policy & Terms of Service */}
            <div className='w-full text-center py-1 bg-primary'>
                <h5>
                    Copyright 2021 | 
                    <Link to='#' className='font-semibold hover:underline hover:opacity-75 text-light-blue'>
                        Policy
                    </Link>
                    , 
                    <Link to='#' className='font-semibold hover:underline hover:opacity-75 text-light-blue'>
                        Terms of Service
                    </Link>
                </h5>
            </div>
        </div>
    )
}

export default Footer