// React Markdown Imports.
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
// Components Imports.
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Reviews from '../components/Reviews'
import Gallery from '../components/Gallery'
import ContactForm from '../components/ContactForm'
import GoogleMaps from '../components/GoogleMaps'
import AboutCard from '../components/AboutCard'
import Video from '../components/Video'
// Icons Imports.
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'
// Data Imports.
import { stats, reviews, info, profiles, about } from '../data'

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <Hero url='https://via.placeholder.com/1000x1000' alt='' currPage={'about'} />
      <div className='flex flex-col items-center text-dark gap-y-[4rem] lg:gap-y-[8rem] overflow-hidden'>

        {/* Content */}
        <div className='flex flex-col items-center gap-y-[4rem] lg:gap-y-[8rem] py-[4rem] w-full bg-primary'>
          {/* Stats */}
          <div className='max-w-[1600px] w-full flex-wrap flex gap-x-[2rem] gap-y-[1rem] justify-center items-start text-light'>
            {stats.about.map((stat, id) => <Stats key={id} { ...stat } speed={3000} />)}
          </div>
        </div>

        {/* About Us */}
        <div className='max-w-[1600px] w-full px-2 sm:px-4 md:px-8 mt-[20vw] lg:mt-0'>
          <div className='w-full grid lg:grid-cols-2 gap-[2rem] lg:gap-[6rem]'>
            {/* Image */}
            <img src={profiles[0].url} alt="" className='object-cover aspect-video w-full rounded-2xl' />
            <div className='flex flex-col justify-end'>
              <h1>{profiles[0].name}</h1>
              <p className=''>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cumque esse sequi quibusdam nihil illo nulla neque delectus dicta facere temporibus autem quas unde ut repudiandae velit veritatis et officia commodi pariatur, nostrum eius totam dolorum ab. Delenium aperiam similique temporibus tempora.
              </p>
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
        <div className='max-w-[1600px] w-full px-2 sm:px-4 md:px-8'>
          <h1 className='--header mb-[4rem]'>Notre Equipe</h1>
          <div className='w-full flex flex-wrap justify-around gap-4'>
            {profiles.map(profile => <AboutCard { ...profile } />)}
          </div>
        </div>

        <div className='max-w-[1600px] w-full rounded-xl overflow-hidden px-2 sm:px-4 md:px-8'><Video url={about.video} /></div>
        
        {/* Reviews */}
        <h1 className='--header max-w-[1600px] w-full mb-[-4rem]'>Reviews</h1>
        <Reviews reviews={reviews} />

        {/* Gallery */}
        <div className='max-w-[1600px] w-full rounded-xl overflow-hidden mx-2 px-2 sm:px-4 md:px-8'><Gallery /></div>

        {/* Contact */}
        <ContactForm />
        {/* GooGle Maps */}
        <div className='w-full h-[480px] mt-[-8rem]'><GoogleMaps location={info.location} /></div>

      </div>
    </>
  )
}
