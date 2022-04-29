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

import { slideShow, info, profiles, comparisonImgs, services, reviews, stats } from '../data'



export default function Home() {
  return (
    <div className='flex flex-col items-center'>
        {/* SlideShow */}
        <SlideShow { ...slideShow } />
        <div className='max-w-[1600px] flex flex-col items-center'>
          {/* Stats */}
          <h1>Stats</h1>
          {stats.map((stat, id) => <Stats key={id} { ...stat } speed={5000} />)}
          {/* Services */}
          <h1 className='font-semibold text-xl'>Pourquoi Clinique la Colline</h1>
          <div className='flex gap-8'>
            {services.map((v, id) => <ServicesCard { ...v } />)} 
          </div>
           {/* About */}
           <h1 className='text-xl font-semibold'>Notre Equipe</h1>
           <div className='flex gap-8'>
            {profiles.map((v, id) => <AboutCard key={id} { ...v }/>)}
           </div>
           {/* Reviews */}
           <h1 className='text-xl font-semibold'>What our client say about us</h1>
           <div className='flex gap-8'>
            {reviews.map((v, id) => <ReviewCard key={id} { ...v } />)}
           </div>
           {/* Gallery */}
           <Gallery />
           {/* Contact */}
           <div className='grid grid-col-2'>
            <h1 className="font-semibold text-xl col-span-full">Contact</h1>
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
