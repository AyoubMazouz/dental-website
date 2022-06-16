// React Imports.
import { useEffect, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
// Context Imports.
import { useAuth } from '../../contexts/AuthContext'
// Components Imports.
import Profile from './Profile'
import Notification from './Notification'
import Alert from './Alert'
import Logo from '../Logo'
import NavBarLg from './NavBarLg'
import NavBarSm from './NavBarSm'
// Icons Imports.
import { FaYoutube, FaFacebookF, FaInstagram, FaLinkedinIn, 
    FaLocationArrow, FaTwitter, FaWhatsapp, FaTimes, FaBars, 
    FaPhone, FaCartPlus, FaAngleDown, FaShoppingCart } from 'react-icons/fa'
import { CgProfile } from "react-icons/cg"
    // Data Imports.
import { links, socialLinks, info } from '../../data'






 
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

    const values = {
        currentUser,
        menuState,
        setMenuState,
        scrolling,
    }
    return <div className={scrolling ? 'sticky top-0 z-20' : ''}>
        <NavBarLg {...values} />
        <NavBarSm {...values} />
    </div>
}
