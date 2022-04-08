


const Header = () => {
  return (
    <>
      <NavFull />
      <NavSmall />
    </>
  )
}

const Logo = () => {
  return (
    <a href="#"
      className="text-lg text-slate-700 capitalize">
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
      className="capitalize px-2 py-1 rounded text-sky-500 border-2 border-sky-500 hover:shadow-lg hover:shadow-sky-500 hover:bg-sky-500 hover:text-slate-100 transition-all duration-300">
      make appointment
    </a>
  )
}

const NavFull = () => {
  return (

    <nav className='bg-slate-100 flex items-center justify-between px-12 py-4 my-6 mx-12 rounded shadow-lg'>

      <Logo />

      <ul className='links flex space-x-2'>
        <a href="#">
          home
        </a>
        <a href="#">
          services
        </a>
        <a href="#">
          about
        </a>
        <a href="#">
          gallery
        </a>
        <a href="#">
          contact
        </a>
      </ul>

      <CallToAction />

    </nav>

  )
}

const NavSmall = ({ text }) => {
  return (

    <></>

  )
}

export default Header;