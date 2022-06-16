// React Imports.
import { useState } from 'react'
// Context Imports.
import { useAuth } from '../../contexts/AuthContext'
// Components Imports.
import NavBarLg from './NavBarLg'
import NavBarSm from './NavBarSm'





 
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
