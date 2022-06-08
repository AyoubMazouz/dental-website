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
import { servicesData, stats, ABOUT_US_IMG, SLIDESHOW_IMGS } from '../data' 

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
          <h2 className='--sub-header'>
            Des traitements dentaires adaptés à vos besoins et au prix le plus juste
          </h2>
          <p>
            Chez Dentego, <b>nous vous garantissons des traitements dentaires adaptés à vos besoins,</b> prodigués par le dentiste   de votre choix, au prix le plus juste et avec <b>une prise en charge rapide, globale et personnalisée.</b>
            <Link to='#' className='--link text-light-blue font-bold py-3'>
              Our Services<CgArrowLongRight className='text-light-blue' />
            </Link>
          </p>
        </div>
      </div>
      {/* Services Slider */}
      <div className='mt-[-4rem]'>
        <ServicesSlider servicesData={servicesData} />
      </div>

      {/* About */}
      <div className='max-w-[1800px] w-full grid lg:grid-cols-2 gap-x-[6rem] page-padding'>
        <img src={ABOUT_US_IMG} alt="" className='object-cover aspect-[8/5] w-full h-full rounded-xl' />
        <div className='flex flex-col justify-around'>
            <h2 className='text-primary'>
              Dentego, groupe engagé pour la santé dentaire de tous !
            </h2>
            <p>
              <b>Présentation du Groupe Dentego est une enseigne créée en 2013.</b> Fruit de compétences et de valeurs partagées par ses fondateurs, 
              <b>Dentego a à cœur</b> de promouvoir la santé bucco-dentaire accessible pour tous. <b>Dentego garantit</b> des traitements les plus adaptés aux besoins des patients, prodigués par le <b>dentiste de leur choix qui les accompagne tout au […]</b>
              <Link to='#' className='--link text-light-blue font-bold py-3'>
              Our Services<CgArrowLongRight className='text-light-blue' />
            </Link>
            </p>
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
          {docs.map(doc => <Slider id={doc.id} { ...doc } />)}
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
