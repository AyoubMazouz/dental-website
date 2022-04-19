import React, { useState } from 'react'
import Logo from './Logo'
import ToggleBtn from './ToggleBtn'
import { navLinks, navIcons } from './data'
import { motion, AnimatePresence } from 'framer-motion'


export default function NavBarSmall() {

    const [menuState, setMenuState] = useState(false)

    const baseStyle = 'flex justify-between items-center bg-white'
    const navVariant = {
        hidden: {
            height: '4rem',

            transition: {
                type: 'string',
                damping: 500, 
                when: 'afterChildren',
            },
        },
        visible: {
            height: '100vh',

            transition: {
                duration: .75, 
                delayChildren: 2,
            },
        }
    }
    

  return (
    <header>

    
        <motion.nav variants={navVariant}
                    initial={false}
                    animate={menuState ? 'visible' : 'hidden'}
                    className={menuState ? `${baseStyle} z-10 absolute h-full w-full top-0 left-0`
                                : `${baseStyle} relative h-16`}>

             { !menuState && <div className=''><Logo /></div> }

            { menuState && (
                <ul className={menuState ? 'flex flex-col justify-around items-center w-full h-full text-6xl py-36' : 'hidden'}>
                    <div className='-mt-24'><Logo /></div> 
                        <ul className='w-full flex flex-col text-center'>
                            { navLinks.map((v, id) => (
                                <a key={id} className='--nav-sm-links' href={v.url}>{v.label}</a>
                            ))}
                        </ul>
                    <button className='px-4 py-2 bg-sky-500'>render vous</button>
                    <ul className='flex space-x-6'>
                        { navIcons.map((v, id) => (
                                <a key={id} href={v.url}>{v.icon}</a>
                            ))}
                    </ul>
                </ul>
            )}

            <div className='absolute top-[1rem] right-[1rem]'
                ><ToggleBtn state={menuState} setState={setMenuState} /></div>

        </motion.nav>

    </header>
  )
}
