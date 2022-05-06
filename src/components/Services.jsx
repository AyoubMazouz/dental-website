// React Router Dom Imports.
import { Link } from 'react-router-dom'
// Icons Import.
import { FaCalendar } from 'react-icons/fa'
import { CgArrowLongRight } from 'react-icons/cg'
// SwiperJs Imports.
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar, Pagination } from 'swiper';

export default function Services({ services }) {
  return (
    <div><Swiper modules={[Scrollbar, FreeMode, Pagination]} grabCursor spaceBetween={30}
        className='h-[420px] max-w-[99.1vw] mb-[5rem] my-[2.5rem]'
        // breakpoints={{
        //   640: { slidesPerView: 1.25 },
        //   768: { slidesPerView: 1.75 },
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

const ServicesCard = ({ service }) => {
  return (
    <div className='h-full relative group transition-transform duration-300'>
        <img src={service.img} alt={service.alt} className='object-cover w-full h-full pointer-events-none' />
        <div className="absolute z-10 bottom-[-340px] group-hover:bottom-[-80px] w-full h-full bg-primary text-light px-6 transition-all duration-300">
          <h3 className='font-semibold text-center mt-[1.8rem] group-hover:mt-[1.2rem] text-lg text-bold pointer-events-none'>{service.title}</h3>
          <p className='text-left mt-[1.2rem] group-hover:mt-[0rem] pointer-events-none'>{service.description}</p>
          <Link to='#' className='--link text-bluish-gray font-bold'>Lire la suite<CgArrowLongRight className='--nav-icons' /></Link>
        </div>
        <FaCalendar className='--nav-icons absolute top-[1rem] right-[1rem] bg-secondary text-[2.5rem] text-light p-2 rounded-full' />
    </div>
  )
}
