import { FaCalendar } from 'react-icons/fa'
import { CgArrowLongRight } from 'react-icons/cg'
import { Link } from 'react-router-dom'

export default function Card({ service }) {
  return (
    <div className='relative group transition-transform duration-300'>
        <div className="w-full"><img src={service.img} alt={service.alt} className='object-cover aspect-square pointer-events-none' /></div>
        <div className="absolute z-10 bottom-[-90%] group-hover:bottom-[-25%] w-full h-[100%] bg-primary text-light px-6 transition-all duration-300">
          <h3 className='font-semibold text-center mt-[1.8rem] group-hover:mt-[1.2rem] text-lg text-bold pointer-events-none'>{service.title}</h3>
          <p className='text-left mt-[1.2rem] group-hover:mt-[0rem] pointer-events-none'>{service.description}</p>
          <Link to='#' className='--link text-bluish-gray font-bold'>Lire la suite<CgArrowLongRight className='--nav-icons' /></Link>
        </div>
        <FaCalendar className='--nav-icons absolute top-[1rem] right-[1rem] bg-secondary text-[2.5rem] text-light p-2 rounded-full' />
    </div>
  )
}