import { FaCalendar } from 'react-icons/fa'
import { CgArrowLongRight } from 'react-icons/cg'
import { Link } from 'react-router-dom'

const Card = ({ img, alt, title, description }) => {
  return (
    
    <div className='relative space-y-4 text-center bg-slate-100 rounded-md shadow-md overflow-hidden max-w-[380px] group transition-transform duration-300'>

        <div className="w-full"><img src={img} alt={alt} className='object-cover aspect-square' /></div>
        <div className="absolute z-10 bottom-[-65%] group-hover:bottom-0 w-full h-[80%] bg-white pt-4 px-4 transition-all duration-300">
          <h3 className='font-semibold text-center mb-4 text-primary text-lg text-bold'>{title}</h3>
          <p className='text-left'>{description}</p>
          <Link to='#' className='--link text-primary font-bold'
          >Lire la suite<CgArrowLongRight className='--nav-icons' /></Link>
        </div>
        <FaCalendar className='--nav-icons absolute top-0 right-4 text-secondary' />


    </div>

  )
}

export default Card