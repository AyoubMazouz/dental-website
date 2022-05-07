// Components Imports.
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Reviews from '../components/Reviews'
import Gallery from '../components/Gallery'
import Form from '../components/Form'
import Details from '../components/Details'
import GoogleMaps from '../components/GoogleMaps'
import AboutCard from '../components/AboutCard'
import Video from '../components/Video'
// Icons Imports.
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'
// Data Imports.
import { links, stats, reviews, info, profiles, about } from '../data'

export default function About() {
  const { url, alt } = links.nav.filter(link => link.label === 'about')[0]
  return (
    <>
      {/* Hero Section */}
      <Hero url={url} alt={alt} currPage={'about'} />
      <div className='flex flex-col items-center text-dark text-lg gap-y-[8rem] overflow-hidden'>

        {/* Content */}
        <div className='flex flex-col items-center gap-y-[6rem] py-[4rem] w-full bg-primary'>
          {/* Stats */}
          <div className='max-w-[1600px] w-full flex-wrap flex gap-x-[2rem] gap-y-[1rem] justify-center items-start text-light'>
            {stats.about.map((stat, id) => <Stats key={id} { ...stat } speed={3000} />)}
          </div>
          <div className='max-w-[1600px] grid lg:grid-cols-2 text-light gap-[3rem] lg:gap-[6rem] max-h-[20rem] lg:max-h-[12rem] px-2 sm:px-4 md:px-8'>
            <p>{about.header}</p>
            {/* Image */}
            <img src='https://via.placeholder.com/1000x1000' alt={alt} className="object-cover aspect-video w-full rounded-2xl" />
          </div>
        </div>

        {/* About Us */}
        <div className='max-w-[1600px] w-full px-2 sm:px-4 md:px-8 mt-[20vw] lg:mt-0'>
          <div className='w-full grid lg:grid-cols-2 gap-[3rem] lg:gap-[6rem]'>
            {/* Image */}
            <img src={profiles[0].url} alt="" className='object-cover aspect-video w-full rounded-2xl' />
            <div className='flex flex-col justify-end'>
              <h1>{profiles[0].name}</h1>
              <p>{profiles[0].details}</p>
              <div className='flex text-2xl gap-4 my-[.8rem]'>
                  {profiles[0].facebook && <a href={profiles[0].facebook}><FaFacebook /></a>}
                  {profiles[0].instagram && <a href={profiles[0].instagram}><FaInstagram /></a>}
                  {profiles[0].youtube && <a href={profiles[0].youtube}><FaYoutube /></a>}
                  {profiles[0].linkedin && <a href={profiles[0].linkedin}><FaLinkedin /></a>}
              </div>
            </div>
          </div>
        </div>
        {/* Team */}
        <div className='max-w-[1600px] w-full'>
          <h1 className='--header mb-[4rem]'>Notre Equipe</h1>
          <div className='w-full flex flex-wrap justify-center gap-[4rem]'>
            {profiles.map(profile => <AboutCard { ...profile } />)}
          </div>
        </div>

        <div className='max-w-[1600px] w-full rounded-xl overflow-hidden mx-2 sm:mx-4 md:mx-8'><Video url={about.video} /></div>
        
        {/* Reviews */}
        <h1 className='--header max-w-[1600px] w-full mb-[-4rem]'>Reviews</h1>
        <Reviews reviews={reviews} />

        {/* Gallery */}
        <div className='max-w-[1600px] w-full rounded-xl overflow-hidden mx-2 sm:mx-4 md:mx-8'><Gallery /></div>

        {/* Contact */}
        <div id='contact' className='w-full bg-primary flex flex-col justify-center items-center py-[4rem] px-4 lg:px-12'>
          <div className='max-w-[1600px] grid lg:gap-20 grid-cols-8'>
            <h1 className='col-span-full font-bold text-5xl text-light border-r-2 border-r-light'>Contact</h1>
            <div className='col-span-full lg:col-span-4'><Form /></div>
            <div className='col-span-full lg:col-span-4'><Details {...info} /></div>
          </div>
        </div>
        {/* GooGle Maps */}
        <div className='w-full h-[480px] mt-[-8rem]'><GoogleMaps location={info.location} /></div>

      </div>
    </>
  )
}
