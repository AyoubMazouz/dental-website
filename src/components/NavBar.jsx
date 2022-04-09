import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import CallToAction from './CallToAction';


const Header = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <>

    {/* NavBarFull */}
    <nav className='hidden md:block bg-slate-100'>
      <ul className='flex items-center px-10 lg:px-36 xl:px-56 h-12'>
        <div className='mr-auto'>
          <Logo />
        </div>
        <a className='nav-links-full'
          href="#">
          home</a>
        <a className='nav-links-full'
          href="#">
          about</a>
        <a className='nav-links-full'
          href="#">
          services</a>
        <a className='nav-links-full'
          href="#">
          gallery</a>
        <div className='ml-auto'>
          <CallToAction />
        </div>
      </ul>
    </nav>

    {/* NavBarSmall */}
    <nav className={toggle ? 'menu-small h-[14rem] rounded-b-2xl' : 'menu-small h-12'}>
      <div className=''>
        <Logo />
      </div>
      <ul className={(toggle ? 'menu-small-open' : 'hidden')}>
        <a className='nav-links-small'
          href="#">
          home</a>
        <a className='nav-links-small'
          href="#">
          about</a>
        <a className='nav-links-small'
          href="#">
          services</a>
        <a className='nav-links-small'
          href="#">
          gallery</a>
        <div className='mt-2'>
          <CallToAction />
        </div>
      </ul>
      <div className=''>
        <ToggleButton toggle={toggle} setToggle={setToggle} />
      </div>
    </nav>
    
    </>
  )
}

const Logo = () => {

  return (
    <a href="#"
      className='text-lg text-slate-700 capitalize' >
      dental
      <span className="font-semibold text-sky-500">
        Care
      </span>
    </a>
  )
}

const ToggleButton = ({toggle, setToggle}) => {

  const onClick = () => setToggle(prev => !prev);
  
  return (
    <>
    <FaBars onClick={onClick}
      className={toggle 
        ? 'hidden' 
        : 'text-2xl text-slate-700 hover:text-sky-500 trans cursor-pointer'} />

    <FaTimes onClick={onClick}
      className={toggle 
        ? 'text-2xl text-slate-700 hover:text-sky-500 trans cursor-pointer hover:rotate-180' 
        : 'hidden'} />
    </>
  )
}

export default Header;