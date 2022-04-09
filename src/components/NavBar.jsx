import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';


const Header = () => {
  return (
    <>
      <NavFull />
      <NavSmall />
    </>
  )
}

const NavFull = () => {
  return (

    <nav className='bg-slate-100 items-center justify-between px-12 py-4 my-6 rounded shadow-lg hidden lg:flex'>

      <Logo />

      <ul className='flex space-x-2'>
        <a href="#"
          className='text-gray-700 capitalize px-2 py-1 hover:text-sky-500 trans'>
          home
        </a>
        <a href="#"
          className='text-gray-700 capitalize px-2 py-1 hover:text-sky-500 trans'>
          services
        </a>
        <a href="#"
          className='text-gray-700 capitalize px-2 py-1 hover:text-sky-500 trans'>
          about
        </a>
        <a href="#"
          className='text-gray-700 capitalize px-2 py-1 hover:text-sky-500 trans'>
          gallery
        </a>
        <a href="#"
          className='text-gray-700 capitalize px-2 py-1 hover:text-sky-500 trans'>
          contact
        </a>
      </ul>

      <CallToAction />

    </nav>

  )
}

const NavSmall = () => {

  const [navLinks, setNavLinks] = useState(false);

  const linkStyles = [
    'links flex flex-col space-y-2 text-center',
    'links hidden flex-col space-y-2'
  ]
  const navStyles = [
    'bg-slate-100 flex items-center justify-around px-12 py-4 my-6 rounded shadow-lg lg:hidden',
    'bg-slate-100 flex items-center justify-between px-12 py-4 my-6 rounded shadow-lg lg:hidden'
  ]

  return (

    <nav className={navLinks ? navStyles[0] : navStyles[1]}>

      <Logo navLinks={navLinks} />

      <ul className={navLinks ? linkStyles[0] : linkStyles[1]}>
        <Logo className='hidden mb-4' />
        <a href="#"
          className='text-gray-700 capitalize px-2 py-1 hover:text-sky-500 trans'>
          home
        </a>
        <a href="#"
          className='text-gray-700 capitalize px-2 py-1 hover:text-sky-500 trans'>
          services
        </a>
        <a href="#"
          className='text-gray-700 capitalize px-2 py-1 hover:text-sky-500 trans'>
          about
        </a>
        <a href="#"
          className='text-gray-700 capitalize px-2 py-1 hover:text-sky-500 trans'>
          gallery
        </a>
        <a href="#"
          className='text-gray-700 capitalize px-2 py-1 hover:text-sky-500 trans'>
          contact
        </a>
        <CallToAction />
      </ul>

      <ToggleButton navLinks={navLinks} setNavLinks={setNavLinks} />

    </nav>

  )
}

const Logo = ({ navLinks=false }) => {

  const styles = [
    'text-lg text-slate-700 capitalize hidden',
    'text-lg text-slate-700 capitalize block'
  ]

  return (
    <a href="#"
      className={navLinks ? styles[0] : styles[1]}>
      dental
      <span className="font-semibold text-sky-500">
        Care
      </span>
    </a>
  )
}

const CallToAction = () => {
  return (
    <a href="#"
      className="capitalize px-2 py-1 rounded text-sky-500 border-2 border-sky-500 hover:shadow-lg hover:shadow-sky-500 hover:bg-sky-500 hover:text-slate-100 trans">
      make appointment
    </a>
  )
}

const ToggleButton = ({navLinks, setNavLinks}) => {

  const bars = 'text-2xl text-slate-700 hover:text-sky-500 trans cursor-pointer';
  const ex = 'text-2xl text-slate-700 hover:text-sky-500 trans cursor-pointer absolute top-[2.65rem] right-[5rem]';
  
  const onClick = () => setNavLinks(prev => !prev);
  
  return (
    <>
    <FaBars onClick={onClick}
    className={navLinks ? 'hidden' : bars} />
    <FaTimes onClick={onClick}
    className={navLinks ? ex : 'hidden'} />
    </>
  )
}

export default Header;