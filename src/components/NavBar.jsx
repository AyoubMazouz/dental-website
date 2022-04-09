import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import CallToAction from './CallToAction';


const Header = () => {

  const [toggle, setToggle] = useState(false)

  return (

    <nav className={toggle 
      ? 'bg-slate-100 flex flex-col justify-around items-center h-56 px-10 trans'
      : 'bg-slate-100 flex justify-around items-center h-16 px-10 trans'}>


      <div className={toggle ? '-mb-12' : ''}>
        <Logo />
      </div>

      <div className={toggle ? 'ml-auto' : 'ml-auto md:hidden'}>
        <ToggleButton toggle={toggle} setToggle={setToggle} />
      </div>

      <ul className={toggle ? 'flex flex-col' : 'hidden md:block'}>

        <a className='nav-links'
          href="#">
          Home</a>
        <a className='nav-links'
          href="#">
          About</a>
        <a className='nav-links'
          href="#">
          Services</a>
        <a className='nav-links'
          href="#">
          Gallery</a>

      </ul>
    </nav>
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