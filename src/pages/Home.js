import SlideShow from '../components/SlideShow'
import ServicesCard from '../components/ServicesCard'
import AboutCard from '../components/AboutCard'
import Reviews from '../components/Reviews'
import Gallery from '../components/Gallery'
import GoogleMaps from '../components/GoogleMaps'
import Details from '../components/Details'
import Form from '../components/Form'
import Slider from '../components/Slider'
import Stats from '../components/Stats'
import Header from '../components/Header'

import { slideShow, info, profiles, comparisonImgs, services, reviews, stats } from '../data'
import { Link } from 'react-router-dom'
import { CgArrowLongRight } from 'react-icons/cg'

export default function Home() {
  return (
    <div className='flex flex-col items-center text-dark bg-light'>

        {/* SlideShow */}
        <SlideShow { ...slideShow } />

          {/* Stats */}
          <div className='max-w-[1600px] flex justify-around items-center mt-4'>
            {stats.map((stat, id) => <Stats key={id} { ...stat } speed={3000} />)}
          </div>

          {/* Services */}
          <div className='max-w-[1600px] my-32 flex justify-around'>
            <div className='w-[60ch]'><Header content={services.whyUs.title} /></div>
            <p className='w-[60ch] text-lg'>{services.whyUs.content}
              <Link to='#' className='--link text-primary font-bold py-2'>
                Our Services<CgArrowLongRight className='--nav-icons' /></Link>
            </p>
          </div>
          <div className='flex gap-8'>
            {services.services.map((v, id) => <ServicesCard { ...v } />)} 
          </div>

           {/* Reviews */}
           <div className='max-w-[1600px] flex flex-col justify-center items-center'>
              <div className='relative text-center text-primary overflow-hidden'>
                <h1 className='font-[roman] text-2xl italic'>What our customers</h1>
                <h1 className='font-bold text-4xl'>Are Saying</h1>
                <div className='before:content-[""] before:h-[2px] before:w-[800px] before:bg-primary before:absolute before:top-[50%] before:right-[0%] before:opacity-50 before:scale-x-[75%] after:content-[""] after:h-[2px] after:w-full after:bg-primary after:absolute after:top-[50%] after:left-[60%] after:opacity-50 after:scale-x-[75%]'></div>
              </div>
              <div className='h-[70vh] max-w-[99.1vw] flex justify-center items-center'>
                <Reviews reviews={reviews} />
              </div>
              <div className='w-[1600px] h-[2px] bg-primary opacity-50'></div>
           </div>

           {/* Gallery */}
           <Gallery />

           {/* Contact */}
           <div className='max-w-[1600px] grid grid-col-2'>
              <Header content='Contact'/>
              <Details {...info} />
              <Form />
              <GoogleMaps location={info.location} />
           </div>

           {/* Before & After */}
           <div className='max-w-[1600px] flex'>
            {comparisonImgs.map((v, id) => <Slider id={id} { ...v } />)}
           </div>

    </div>
  )
}
