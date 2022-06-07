// React Router Dom Imports.
import { Link } from 'react-router-dom'
// Components Imports.
import SlideShow from '../components/SlideShow'
import ServicesSlider from '../components/ServicesSlider'
import GoogleMaps from '../components/GoogleMaps'
import ContactForm from '../components/ContactForm'
import Slider from '../components/Slider'
import Stats from '../components/Stats'
import Gallery from '../components/Gallery'
// Icons Imports.
import { CgArrowLongRight } from 'react-icons/cg'
// Data Imports.
import { slideShow, info, profiles, comparisonImgs, reviews, stats, about } from '../data' 
import { servicesData } from '../data/services' 

export default function Home() {
  return (
    <div className='flex gap-y-[6rem] lg:gap-y-[8rem] flex-col items-center text-light-gray bg-light overflow-hidden'>
      {/* SlideShow */}
      <SlideShow { ...slideShow } />

      {/* Stats */}
      <div className='max-w-[1800px] w-full mt-[-5rem] flex-wrap flex gap-x-[2rem] gap-y-[1rem] justify-center items-start text-primary'>
        {stats.home.map((stat, id) => <Stats key={id} { ...stat } speed={3000} />)}
      </div>

      {/* Services */}
      <div className='max-w-[1800px] page-padding'>
        <div className='grid lg:grid-flow-col gap-x-[6rem] justify-between'>
          <h2 className='--sub-header'>
            Des traitements dentaires adaptés à vos besoins et au prix le plus juste
          </h2>
          <p>
            Chez Dentego, <b>nous vous garantissons des traitements dentaires adaptés à vos besoins,</b> prodigués par le dentiste   de votre choix, au prix le plus juste et avec <b>une prise en charge rapide, globale et personnalisée.</b>
            <Link to='#' className='--link text-light-blue font-bold py-3'>
              Our Services<CgArrowLongRight className='text-light-blue' /></Link>
          </p>
        </div>
      </div>
      {/* Services Slider */}
      <div className='mt-[-4rem]'><ServicesSlider servicesData={servicesData} /></div>

      {/* About */}
      <div className='max-w-[1800px] w-full grid lg:grid-cols-2 gap-x-[6rem] page-padding'>
        <img src={about.url} alt={about.alt} className='object-cover aspect-video rounded-xl' />
        <div>
            <h2 className='text-primary my-4'>{about.home.header}</h2>
            <p>{about.home.content}</p>
            <h4><Link to='/about'>Learn more</Link></h4>
            <h4><Link to='/contact'>Contact</Link></h4>
        </div>
      </div>

      {/* Before & After */}
      <div className='max-w-[1800px] page-padding'>
        <div className='grid lg:grid-flow-col gap-x-[6rem] justify-between'>
          <h2 className='--sub-header'>

          </h2>
          <p>

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
      <div className='max-w-[1800px] w-full rounded-xl overflow-hidden page-padding'><Gallery /></div>
      
      {/* Blog */}

      {/* Contact */}
      <div className='text-light w-full'><ContactForm /></div>

      {/* GooGle Maps */}
      {/* <div className='w-full h-[480px] mt-[-8rem]'><GoogleMaps location={info.location} /></div> */}
    </div>
  )
}
