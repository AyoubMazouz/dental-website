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
import { links, stats, reviews, info, profiles, videos } from '../data'

export default function About() {
  const { url, alt } = links.nav.filter(link => link.label === 'about')[0]
  return (
    <>
      {/* Hero Section */}
      <Hero url={url} alt={alt} />
      <div className='flex flex-col items-center text-dark text-lg gap-y-[6rem]'>

        {/* Content */}
        <div className='flex flex-col items-center gap-y-[6rem] py-[5rem] w-full bg-primary'>
          {/* Stats */}
          <div className='max-w-[1600px] w-full flex-wrap flex gap-[4rem] justify-center items-start text-light'>
            {stats.about.map((stat, id) => <Stats key={id} { ...stat } speed={3000} />)}
          </div>
          <div className='max-w-[1600px] text-light grid grid-cols-2 gap-[6rem] max-h-[16rem]'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cumque esse sequi quibusdam nihil illo nulla neque delectus dicta facere temporibus autem quas unde ut repudiandae velit veritatis et officia commodi pariatur, nostrum eius totam dolorum ab. Delenium aperiam similique temporibus tempora, voluptate explicabo debitis officia! Nam explicabo molestias consequatur.</p>
            {/* Image */}
            <img src='https://via.placeholder.com/1000x1000' alt={alt} className="object-cover max-h-[480px] w-full rounded-2xl" />
          </div>
        </div>

        {/* About Us */}
        <div className='max-w-[1600px] w-full'>
          <div className='w-full grid grid-cols-2 gap-[6rem]'>
            {/* Image */}
            <img src="https://via.placeholder.com/1000x1000" alt="" className='object-cover max-h-[480px] w-full rounded-2xl' />
            <div className='flex flex-col justify-end'>
              <h1>Dr Hanan Lahlaoui</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis odio iusto consequuntur incidunt id amet veritatis repellendus labore omnis consectetur autem consequatur corrupti corporis repudiandae praesentium, ea, voluptate eaque sunt obcaecati suscipit. Magni, voluptatum assumenda.</p>
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
          <h1 className='font-bold text-5xl text-primary my-[2.5rem] border-r-2 border-r-primary'>Notre Equipe</h1>
          <div className='w-full flex flex-wrap justify-center'>
            {profiles.map(profile => <AboutCard { ...profile } />)}
          </div>
        </div>

        <div className='max-w-[1600px] w-full rounded-xl overflow-hidden'><Video url={videos[0]} /></div>
        
        {/* Reviews */}
        <Reviews reviews={reviews} />

        {/* Gallery */}
        <Gallery />

        {/* Contact */}
        <div id='contact' className='w-full bg-primary flex flex-col justify-center items-center mt-[5rem] py-[6rem] px-4 lg:px-12'>
          <div className='max-w-[1400px] grid lg:gap-20 grid-cols-8'>
            <h1 className='col-span-full font-bold text-5xl text-light mb-[2.5rem] border-r-2 border-r-light'>Contact</h1>
            <div className='col-span-full lg:col-span-4'><Form /></div>
            <div className='col-span-full lg:col-span-4'><Details {...info} /></div>
          </div>
        </div>
        {/* GooGle Maps */}
        <div className='w-full h-[480px] mt-[-6rem]'><GoogleMaps location={info.location} /></div>

      </div>
    </>
  )
}
