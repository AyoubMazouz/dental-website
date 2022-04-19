import React from 'react'
import NavBarFull from './NavBarFull'
import NavBarSmall from './NavBarSmall'

export default function NavBar() {
    return (
      <>
            <div className='hidden lg:block'><NavBarFull  /></div>
            <div className='block lg:hidden'><NavBarSmall /></div>
      </>
    )
}
