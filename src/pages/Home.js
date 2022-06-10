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
// Hooks Imports.
import useDocs from '../hooks/useDocs'
// Icons Imports.
import { CgArrowLongRight } from 'react-icons/cg'
// Data Imports.
import { servicesData, stats, US_IMG, SLIDESHOW_IMGS } from '../data' 

export default function Home() {

  const { docs } = useDocs("before_and_after")

  return (
    <div className='flex gap-y-[6rem] lg:gap-y-[8rem] flex-col items-center text-light-gray bg-light overflow-hidden'>
      {/* SlideShow */}
      <SlideShow images={SLIDESHOW_IMGS} />

      {/* Stats */}
      <div className='max-w-[1800px] w-full mt-[-5rem] flex-wrap flex gap-x-[2rem] gap-y-[1rem] justify-center items-start text-primary'>
        {stats.home.map((stat, id) => <Stats key={id} { ...stat } speed={3000} />)}
      </div>

      {/* Services */}
      <div className='max-w-[1800px] page-padding'>
        <div className='grid lg:grid-flow-col gap-x-[6rem] justify-between'>
          <h2 className='font-bold text-primary w-full capitalize leading-10 py-4'>
            Des traitements dentaires adaptés à vos besoins et au prix le plus juste
          </h2>
          <p>
            <p>
              Chez Dentego, <b>nous vous garantissons des traitements dentaires adaptés à vos besoins,</b> prodigués par le dentiste   de votre choix, au prix le plus juste et avec <b>une prise en charge rapide, globale et personnalisée.</b>
            </p>
            <Link to='/services' className='text-light-blue font-bold py-3 flex items-center gap-x-2 hover:underline hover:opacity-75'>
              Our Services<CgArrowLongRight className='text-light-blue text-3xl' />
            </Link>
          </p>
        </div>
      </div>
      {/* Services Slider */}
      <div className='mt-[-4rem]'>
        <ServicesSlider servicesData={servicesData} />
      </div>

      {/* About */}
      <div className='max-w-[1800px] w-full grid lg:grid-cols-2 lg:gap-x-[6rem] gap-y-[2rem] page-padding'>
        <img src={US_IMG} alt="" className='object-cover aspect-[8/5] w-full h-full rounded-xl' />
        <div className='flex flex-col justify-around'>
            <h2 className='text-primary my-4'>
              Dentego, groupe engagé pour la santé dentaire de tous!
            </h2>
            <p>
              <p>
                <b>Présentation du Groupe Dentego est une enseigne créée en 2013.</b> Fruit de compétences et de valeurs partagées par ses fondateurs, 
                  <b>Dentego a à cœur</b> de promouvoir la santé bucco-dentaire accessible pour tous. <b>Dentego garantit</b> des traitements les plus adaptés aux besoins des patients, prodigués par le <b>dentiste de leur choix qui les accompagne tout au […]</b>
              </p>
              <Link to='/about' className='text-light-blue font-bold py-3 flex items-center gap-x-2 hover:underline hover:opacity-75'>
                About Us<CgArrowLongRight className='text-light-blue text-3xl' />
              </Link>
            </p>
        </div>
      </div>

      {/* Before & After */}
      <div className='max-w-[1800px] w-full page-padding'>
        <div className='flex justify-between'>
          <h2 className='font-bold text-primary w-full capitalize leading-10'>
            Gallery
          </h2>
            <Link to='/gallery' className='text-light-blue font-bold py-3 flex items-center gap-x-2 hover:underline hover:opacity-75 text-lg lg:text-xl'>
              More<CgArrowLongRight className='text-light-blue text-3xl' />
            </Link>
        </div>
          {/* Gallery */}
        <div className='rounded-xl overflow-hidden page-padding'><Gallery /></div>
      </div>

      
      
      {/* Blog */}

      {/* Contact */}
      <div className='text-light w-full'><ContactForm /></div>

      {/* GooGle Maps */}
      {/* <div className='w-full h-[480px] mt-[-8rem]'><GoogleMaps location={info.location} /></div> */}
    </div>
  )
}
