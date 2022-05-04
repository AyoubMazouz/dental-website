import SlideShow from '../components/SlideShow'
import ServicesCard from '../components/ServicesCard'
import ReviewCard from '../components/ReviewCard'
import GoogleMaps from '../components/GoogleMaps'
import Details from '../components/Details'
import Form from '../components/Form'
import Slider from '../components/Slider'
import Stats from '../components/Stats'

import { slideShow, info, profiles, comparisonImgs, services, reviews, stats } from '../data'
import { Link } from 'react-router-dom'
import { CgArrowLongRight } from 'react-icons/cg'

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar, Pagination } from 'swiper';
import { useEffect, useState } from 'react'

export default function Home() {
  const [viewWidth, setViewWidth] = useState()
  window.addEventListener('resize', () => setViewWidth(Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)));
  return (
    <div className='flex flex-col items-center text-dark bg-light'>

        {/* SlideShow */}
        <SlideShow { ...slideShow } />

          {/* Stats */}
          <div className='max-w-[1400px] w-full flex-wrap flex justify-center md:justify-between items-start mt-4 mb-[4rem] px-4 lg:px-12 gap-4 md:px-12 xl:px-0'>
            {stats.map((stat, id) => <Stats key={id} { ...stat } speed={3000} />)}
          </div>

          {/* Services */}
          <div className='max-w-[1400px] mt-[5rem] px-4 lg:px-12'>
          <h1 className='font-bold text-5xl text-primary my-[2.5rem] border-r-2 border-r-primary'>Services</h1>
            <div className='grid lg:grid-flow-col gap-8 justify-between'>
              <h1 className='--header'>{services.header.title}</h1>
              <p className='text-lg'>{services.header.content}
                <Link to='#' className='--link text-light-gray font-bold py-2'>
                  Our Services<CgArrowLongRight className='--nav-icons text-primary' /></Link>
              </p>
            </div>
          </div>
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

           {/* Reviews */}
           <div className='max-w-[1400px] mt-[5rem] px-4 lg:px-12'>
          <h1 className='font-bold text-5xl text-primary my-[2.5rem] border-r-2 border-r-primary'>Reviews</h1>
            <div className='grid lg:grid-flow-col gap-8 justify-between'>
              <div className='--header'>{services.header.title}</div>
              <p className='text-lg'>{services.header.content}
              <Link to='#' className='--link text-light-gray font-bold py-2'>
                Our Services<CgArrowLongRight className='--nav-icons text-primary' /></Link>
              </p>
            </div>
           </div>
           <div><Swiper modules={[Scrollbar, FreeMode, Pagination]} grabCursor spaceBetween={30} pagination={{ clickable: true }}
                className='h-[480px] max-w-[99.1vw] my-[2.5rem] mb-[5rem]'
                // breakpoints={{
                //   640: { slidesPerView: 1 },
                //   768: { slidesPerView: 1.25 },
                //   1024: { slidesPerView: 1.75 },
                //   1280: { slidesPerView: 2.25 },
                //   1536: { slidesPerView: 2.75 },
                // }}
                >
                {reviews.reviews.map((review, id) => (
                  <SwiperSlide key={id} className='bg-bluish-gray rounded-2xl overflow-hidden'>
                      <ReviewCard review={review} />
                  </SwiperSlide>))}
            </Swiper></div>

          {/* Before & After */}
          <div className='max-w-[1400px] mt-[5rem] px-4 lg:px-12'>
            <h1 className='font-bold text-5xl text-primary my-[2.5rem] border-r-2 border-r-primary'>Before & After</h1>
            <div className='grid lg:grid-flow-col gap-8 justify-between'>
              <div className='--header'>{services.header.title}</div>
              <p className='text-lg'>{services.header.content}
              <Link to='#' className='--link text-light-gray font-bold py-2'>
                Our Services<CgArrowLongRight className='--nav-icons text-primary' /></Link>
              </p>
            </div>
            <div className='flex flex-wrap my-[2.5rem]'>{comparisonImgs.map((v, id) => <Slider id={id} { ...v } />)}</div>
          </div>

          {/* Contact */}
          <div className='w-full bg-primary flex flex-col justify-center items-center mt-[5rem] py-[6rem] px-4 lg:px-12'>
            <div className='max-w-[1400px] grid lg:gap-20 grid-cols-8'>
              <h1 className='col-span-full font-bold text-5xl text-light mb-[2.5rem] border-r-2 border-r-light'>Contact</h1>
              <div className='col-span-full lg:col-span-4'><Form /></div>
              <div className='col-span-full lg:col-span-4'><Details {...info} /></div>
            </div>
          </div>
          {/* GooGle Maps */}
          <div className='w-full h-[480px]'><GoogleMaps location={info.location} /></div>
    </div>
  )
}
