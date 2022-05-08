// React Router Dom Imports.
import { Link, useNavigate } from 'react-router-dom'
// Icons Import.
import { FaCalendar } from 'react-icons/fa'
import { CgArrowLongRight } from 'react-icons/cg'
// SwiperJs Imports.
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar, Pagination } from 'swiper';

export default function Services({ services }) {
  return (
    <div><Swiper modules={[Scrollbar, FreeMode, Pagination]} grabCursor spaceBetween={16}
        className='h-[420px] max-w-[99.1vw]'
          // breakpoints={{
          //   640:  { slidesPerView: 1.25 },
          //   768:  { slidesPerView: 1.75 },
          //   1024: { slidesPerView: 2.75 },
          //   1280: { slidesPerView: 3.25 },
          //   1536: { slidesPerView: 3.75 },
          // }}
        >
        {services.services.map((service, id) => (
          <SwiperSlide key={id} className='rounded-[2rem] overflow-hidden'>
              <ServicesCard service={service} />
          </SwiperSlide>))}
      </Swiper></div>
  )
}

const ServicesCard = ({ service, link='#' }) => {
  const navigate = useNavigate()
  return (
    <div className='h-full relative group transition-transform duration-300' onClick={() => navigate(link)}>
        <img src={service.img} alt={service.alt} className='object-cover w-full h-full pointer-events-none' />
        <div className="absolute z-10 bottom-[-340px] group-hover:bottom-[-80px] w-full h-full bg-primary text-light px-6 transition-all duration-300">
          <h4 className='text-center mt-[1.6rem] group-hover:hidden pointer-events-none'>{service.title}</h4>
          <p className='text-left mt-4 pointer-events-none'>{service.description}</p>
          <Link to='#' className='--link text-bluish-gray font-bold'>Lire la suite<CgArrowLongRight className='--nav-icons' /></Link>
        </div>
        <FaCalendar className='--nav-icons absolute top-[1rem] right-[1rem] bg-secondary text-light p-2 rounded-full' />
    </div>
  )
}
