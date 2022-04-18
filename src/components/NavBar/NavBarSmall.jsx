import React, { useState } from 'react'
import Logo from './Logo'
import ToggleBtn from './ToggleBtn'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import { motion, animatePresent } from 'framer-motion'


export default function NavBarSmall() {

    const [menuState, setMenuState] = useState(false)

    const baseStyle = 'flex justify-between items-center bg-white'
    const preventHiddenWhenMenuOpen = menuState ? '' : 'lg:hidden'
    const linksVariant = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1 ,
        },
        exit: {
            opacity: 1,
        },
    }

  return (
    <header>

        <motion.nav 
            className={menuState ? `${baseStyle} z-10 absolute h-full w-full top-0 left-0`
                                : `${baseStyle} ${preventHiddenWhenMenuOpen} relative h-16`}>
            
            <div className={menuState ? 'hidden' : ''}
                ><Logo /></div>

            <ul className={menuState ? 'flex flex-col justify-around items-center w-full h-full text-6xl py-36' : 'hidden'}>
                <div className='-mt-24'><Logo /></div>
                <animatePresent>
                    <motion.ul animate
                        className='w-full flex flex-col text-center'>
                        <motion.a variants={linksVariant}
                                initial='hidden'
                                animate='visible'
                                transition={{ transition: {duration: 2, type: 'just',delay: 2 }}}
                            className='--nav-sm-links' href="#">Home</motion.a>
                        <a className='--nav-sm-links' href="#">About</a>
                        <a className='--nav-sm-links' href="#">Services</a>
                        <a className='--nav-sm-links' href="#">Gallery</a>
                    </motion.ul>
                </animatePresent>
                <button className='px-4 py-2 bg-sky-500'>render vous</button>
                <div className='flex space-x-6'>
                    <a href="#"><FaFacebook  /></a>
                    <a href="#"><FaInstagram /></a>
                    <a href="#"><FaYoutube   /></a>
                </div>
            </ul>

            <div className='absolute top-[1rem] right-[1rem]'
                ><ToggleBtn state={menuState} setState={setMenuState} /></div>

        </motion.nav>

    </header>
  )
}
