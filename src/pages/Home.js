import SlideShow from '../components/SlideShow'
import ServicesCard from '../components/ServicesCard'
import AboutCard from '../components/AboutCard'
import ReviewCard from '../components/ReviewCard'
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
        <div className='max-w-[1600px] flex flex-col items-center'>
          {/* Stats */}
          <div className='w-full flex justify-around items-center mt-4'>
            {stats.map((stat, id) => <Stats key={id} { ...stat } speed={3000} />)}
          </div>
          {/* Why Us */}
          <div className='w-full my-32 flex justify-around'>
            <div className='w-[60ch]'><Header content={info.whyUs.title} /></div>
            <p className='w-[60ch] text-lg'>{info.whyUs.content}
              <Link to='#' className='flex gap-4 items-center text-primary underline font-bold py-2'>
                About Us<CgArrowLongRight className='text-3xl' /></Link>
            </p>
          </div>
          {/* Services */}
          <Header content='Pourquoi Clinique la Colline'/>
          <div className='flex gap-8'>
            {services.map((v, id) => <ServicesCard { ...v } />)} 
          </div>
           {/* About */}
           <Header content='Notre Equipe'/>
           <div className='flex gap-8'>
            {profiles.map((v, id) => <AboutCard key={id} { ...v }/>)}
           </div>
           {/* Reviews */}
           <Header content='What our client say about us'/>
           <div className='flex gap-8'>
            {reviews.map((v, id) => <ReviewCard key={id} { ...v } />)}
           </div>
           {/* Gallery */}
           <Gallery />
           {/* Contact */}
           <div className='grid grid-col-2'>
              <Header content='Contact'/>
              <Details {...info} />
              <Form />
              <GoogleMaps location={info.location} />
           </div>
           {/* Before & After */}
           <div className='flex'>
            {comparisonImgs.map((v, id) => <Slider id={id} { ...v } />)}
           </div>
        </div>
    </div>
  )
}
