// React Router Dom Imports.
import { Link } from 'react-router-dom'
// Components Imports.
import SlideShow from '../components/SlideShow'
import Services from '../components/Services'
import Reviews from '../components/Reviews'
import GoogleMaps from '../components/GoogleMaps'
import Details from '../components/Details'
import Form from '../components/Form'
import Slider from '../components/Slider'
import Stats from '../components/Stats'
import Gallery from '../components/Gallery'
// Icons Imports.
import { CgArrowLongRight } from 'react-icons/cg'
// Data Imports.
import { slideShow, info, profiles, comparisonImgs, services, reviews, stats } from '../data' 

export default function Home() {
  return (
    <div className='flex gap-y-[8rem] flex-col items-center text-dark bg-light overflow-hidden'>
      {/* SlideShow */}
      <SlideShow { ...slideShow } />

      {/* Stats */}
      <div className='max-w-[1600px] w-full mt-[-7rem] flex-wrap flex gap-[4rem] justify-center items-start text-primary'>
        {stats.home.map((stat, id) => <Stats key={id} { ...stat } speed={3000} />)}
      </div>

      {/* Gallery */}
      <div className='max-w-[1600px]'><Gallery /></div>

      {/* Services */}
      <div className='max-w-[1600px] px-2 sm:px-4 md:px-8'>
      <h1 className='--header'>Services</h1>
        <div className='grid lg:grid-flow-col gap-8 justify-between'>
          <h1 className='--sub-header'>{services.header.title}</h1>
          <p className='text-lg'>{services.header.content}
            <Link to='#' className='--link text-light-gray font-bold py-2'>
              Our Services<CgArrowLongRight className='--nav-icons text-primary' /></Link>
          </p>
        </div>
      </div>

      {/* Services Slider */}
      <Services services={services} />

        {/* Reviews */}
        <div className='max-w-[1600px] px-2 sm:px-4 md:px-8'>
          <h1 className='--header'>Reviews</h1>
          <div className='grid lg:grid-flow-col gap-8 justify-between'>
            <h1 className='--sub-header'>{services.header.title}</h1>
            <p className='text-lg'>{services.header.content}
            <Link to='#' className='--link text-light-gray font-bold py-2'>
              Our Services<CgArrowLongRight className='--nav-icons text-primary' /></Link>
            </p>
          </div>
        </div>
        {/* Slider */}
        <Reviews reviews={reviews} />

      {/* Before & After */}
      <div className='max-w-[1600px] px-2 sm:px-4 md:px-8'>
        <h1 className='--header'>Before & After</h1>
        <div className='grid lg:grid-flow-col gap-8 justify-between'>
          <div className='--sub-header'>{services.header.title}</div>
          <p className='text-lg'>{services.header.content}
          <Link to='#' className='--link text-light-gray font-bold py-2'>
            Our Services<CgArrowLongRight className='--nav-icons text-primary' /></Link>
          </p>
        </div>
        <div className='flex gap-4 justify-center flex-wrap my-[2.5rem]'>{comparisonImgs.map((v, id) => <Slider id={id} { ...v } />)}</div>
      </div>

      {/* Contact */}
      <div className='w-full bg-primary flex flex-col justify-center items-center px-2 sm:px-4 md:px-8'>
        <div className='max-w-[1600px] grid lg:gap-20 grid-cols-8'>
          <h1 className='col-span-full font-bold text-5xl text-light mb-[2.5rem] border-r-2 border-r-light'>Contact</h1>
          <div className='col-span-full lg:col-span-4'><Form /></div>
          <div className='col-span-full lg:col-span-4'><Details {...info} /></div>
        </div>
      </div>

      {/* GooGle Maps */}
      <div className='w-full h-[480px] mt-[-8rem]'><GoogleMaps location={info.location} /></div>
    </div>
  )
}
