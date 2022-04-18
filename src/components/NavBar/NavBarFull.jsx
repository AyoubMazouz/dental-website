import Logo from './Logo'
import ToggleBtn from './ToggleBtn'
import { FaSearch } from 'react-icons/fa'


export default function NavBarFull() {

    const linkStyle = 'mx-2 w-screen text-center font-semibold capitalize  transition-all duration-300 ease-in md:hover:underline text-slate-600 hover:bg-sky-600 hover:text-white md:hover:bg-transparent md:hover:text-sky-600'

    return (

        <header className='hidden lg:flex justify-center w-full h-[160px]'>

            <nav className='w-full h-full lg:max-w-[1900px] flex justify-between px-6 trans'>

                <div className='h-full flex items-center'>
                <Logo />
                </div>

                <div className='w-full h-full hidden md:block'>
                    <div className='w-full h-[30%] flex justify-between items-center border-b-2'>
                        <div></div>
                        <ul className=''>
                            <a className={linkStyle} href="#">Home</a>
                            <a className={linkStyle} href="#">About</a>
                            <a className={linkStyle} href="#">Services</a>
                            <a className={linkStyle} href="#">Gallery</a>
                        </ul>
                        <button className='bg-sky-500 h-8 px-12 text-white font-bold'>Rendez Vous</button>
                    </div>
                    <div className='w-full h-[70%] flex justify-between items-center'>
                        <div></div>
                        <ul className='h-full flex items-center space-x-8 -mr-32'>
                            <a className={'font-bold text-xl text-slate-700'} href="#">Home</a>
                            <a className={'font-bold text-xl text-slate-700'} href="#">About</a>
                            <a className={'font-bold text-xl text-slate-700'} href="#">Services</a>
                            <a className={'font-bold text-xl text-slate-700'} href="#">Gallery</a>
                        </ul>
                        <div className='flex h-12 rounded overflow-hidden'>
                            <input type="text" className='w-58 border-2 h-full' />
                            <FaSearch className='h-full bg-sky-500 w-12 p-2' />
                        </div>
                    </div>
                </div>

            </nav>

        </header>
    )
}