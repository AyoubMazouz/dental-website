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
import About from '../components/About'
// Icons Imports.
import { CgArrowLongRight } from 'react-icons/cg'
// Data Imports.
import { slideShow, info, profiles, comparisonImgs, services, reviews, stats, about } from '../data' 

export default function Home() {
  return (
    <div className='flex gap-y-[6rem] lg:gap-y-[8rem] flex-col items-center text-dark bg-light overflow-hidden'>
      {/* SlideShow */}
      <SlideShow { ...slideShow } />

      {/* Stats */}
      <div className='max-w-[1600px] w-full mt-[-5rem] flex-wrap flex gap-x-[2rem] gap-y-[1rem] justify-center items-start text-primary'>
        {stats.home.map((stat, id) => <Stats key={id} { ...stat } speed={3000} />)}
      </div>

      {/* Services */}
      <div className='max-w-[1600px] px-2 sm:px-4 md:px-8'>
        <div className='grid lg:grid-flow-col gap-8 justify-between'>
          <h2 className='--sub-header'>{services.header.title}</h2>
          <p>{services.header.content}
            <Link to='#' className='--link text-light-gray font-bold py-2'>
              Our Services<CgArrowLongRight className='--nav-icons text-primary' /></Link>
          </p>
        </div>
      </div>
      {/* Services Slider */}
      <div className='mt-[-4rem]'><Services services={services} /></div>

      {/* About */}
      <div className='px-2 sm:px-4 md:px-8'><About { ...about } /></div>

      {/* Before & After */}
      <div className='max-w-[1600px] px-2 sm:px-4 md:px-8'>
        <div className='grid lg:grid-flow-col gap-8 justify-between'>
          <h2 className='--sub-header'>{services.header.title}</h2>
          <p>{services.header.content}
          <Link to='#' className='--link text-light-gray py-2'>
            Our Services<CgArrowLongRight className='--nav-icons text-primary' />
          </Link>
          </p>
        </div>
        <div className='flex gap-4 justify-around flex-wrap mt-[4rem]'>
          {comparisonImgs.map((v, id) => <Slider id={id} { ...v } />)}
        </div>
      </div>

      {/* Gallery */}
      <div className='max-w-[1600px] w-full rounded-xl overflow-hidden px-2 sm:px-4 md:px-8'><Gallery /></div>
      
      {/* Blog */}

      {/* Contact */}
      <div id='contact' className='w-full bg-primary flex flex-col justify-center items-center py-[4rem] px-2 sm:px-4 md:px-8'>
        <div className='max-w-[1600px] grid gap-[2rem] lg:gap-[6rem] grid-cols-2 lg:grid-cols-4'>
          <h1 className='col-span-full text-light border-r-2 border-r-light'>Contact</h1>
          <div className='col-span-2'><Form /></div>
          <div className='col-span-2'><Details {...info} /></div>
        </div>
      </div>

      {/* GooGle Maps */}
      <div className='w-full h-[480px] mt-[-8rem]'><GoogleMaps location={info.location} /></div>
    </div>
  )
}
