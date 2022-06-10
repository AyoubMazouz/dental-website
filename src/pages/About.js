// React Imports.
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
// Hooks Imports.
import useDocs from '../hooks/useDocs'
// Icons Imports.
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'
// Data Imports.
import { stats, info, ABOUT_HERO_IMG, VIDEO_URL } from '../data'

export default function About() {
  // Get Reviews from FireStore.
  const { docs: reviewsDocs } = useDocs("reviews")
  const { docs: profilesDocs } = useDocs("profiles")
  const [ primaryProfile, setPrimaryProfile ] = useState(null)

  useEffect(() => {
    setPrimaryProfile(profilesDocs.filter(profile => {
      return profile.primary
    })[0])
    console.log(primaryProfile)
  }, [profilesDocs])

  const heroValues = {
    imgUrl: "https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/gallery%2Fabout.jpg?alt=media&token=e10843d1-9104-4264-8614-c7bfcd6fc8f2",
    alt: '',
    currentPage: 'About',
    title: 'Dentego, groupe engagé pour la santé dentaire de tous !',
    description: "Présentation du Groupe Dentego est une enseigne créée en 2013. Fruit de compétences et de valeurs partagées par ses fondateurs, Dentego a à cœur de promouvoir la santé bucco-dentaire accessible pour tous. Dentego garantit des traitements les plus adaptés aux besoins des patients, prodigués par le dentiste de leur choix qui les accompagne tout au […]",
  }
  return (
    <>
      {/* Hero Section */}
      <Hero { ...heroValues } />
      
      <div className='flex flex-col items-center text-dark gap-y-[4rem] lg:gap-y-[8rem] overflow-hidden'>

        {/* Content */}
        <div className='flex flex-col items-center gap-y-[4rem] lg:gap-y-[8rem] py-[4rem] w-full bg-primary'>
          {/* Stats */}
          <div className='max-w-[1600px] w-full flex-wrap flex gap-x-[2rem] gap-y-[1rem] justify-center items-start text-light'>
            {stats.about.map((stat, id) => <Stats key={id} { ...stat } speed={3000} />)}
          </div>
        </div>

        {/* About Us */}
        {
          primaryProfile && 
            <div className='max-w-[1600px] w-full px-2 sm:px-4 md:px-8 mt-[20vw] lg:mt-0'>
            <div className='w-full grid lg:grid-cols-2 gap-[2rem] lg:gap-[6rem]'>
              {/* Image */}
              <img src={primaryProfile.imgUrl} alt="" className='object-cover aspect-video w-full rounded-2xl' />
              <div className='flex flex-col justify-around'>
                <h1 className='text-primary'>
                  {primaryProfile.id}
                </h1>
                <p className=''>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cumque esse sequi quibusdam nihil illo nulla neque delectus dicta facere temporibus autem quas unde ut repudiandae velit veritatis et officia commodi pariatur, nostrum eius totam dolorum ab. Delenium aperiam similique temporibus tempora.
                </p>
                <div className='flex text-2xl gap-4 my-[.8rem]'>
                    {/* Social Media Links */}
                    <ul className='flex items-center justify-center h-12'>
                        {
                          primaryProfile?.facebook && 
                            <Link to="" className="">
                                <FaFacebook className='w-[4rem] h-[4rem] text-5xl p-1 rounded-full pt-1 px-3 transition-all duration-500 cursor-pointer bg-light text-facebook hover:scale-[.8] hover:bg-facebook hover:text-light' />
                            </Link>
                        }
                        {
                          primaryProfile?.twitter && 
                            <Link to="" className="">
                                <FaTwitter className="w-[4rem] h-[4rem] text-5xl p-1 rounded-full pt-1 px-3 transition-all duration-500 
                                cursor-pointer bg-light text-twitter hover:scale-[.8] hover:bg-twitter hover:text-light" />
                            </Link>
                        }   
                        {
                          primaryProfile?.instagram && 
                            <Link to="" className="">
                                <FaInstagram className='w-[4rem] h-[4rem] text-5xl p-1 rounded-full pt-1 px-3 transition-all duration-500 cursor-pointer bg-light text-instagram hover:scale-[.8] hover:bg-instagram hover:text-light' />
                            </Link>
                        }
                        {
                        primaryProfile?.youtube && 
                          <Link to="#" className="">
                              <FaYoutube className='w-[4rem] h-[4rem] text-5xl p-1 rounded-full pt-1 px-3 transition-all duration-500 cursor-pointer bg-light text-youtube hover:scale-[.8] hover:bg-youtube hover:text-light' />
                          </Link> 
                        }
                        {
                          primaryProfile?.whatsapp && 
                            <Link to="#" className="">
                                <FaWhatsapp className='w-[4rem] h-[4rem] text-5xl p-1 rounded-full pt-1 px-3 transition-all duration-500 cursor-pointer bg-light text-whatsapp hover:scale-[.8] hover:bg-whatsapp hover:text-light' />
                            </Link>
                        }
                    </ul>
                </div>
              </div>
            </div>
          </div>
        }
        {/* Team */}
        {
          profilesDocs?.length > 1 && 
          <div className='max-w-[1600px] w-full px-2 sm:px-4 md:px-8'>
            <h1 className='--header mb-[4rem]'>Notre Equipe</h1>
            <div className='w-full flex flex-wrap justify-around gap-4'>
              {profilesDocs.map(profile => <AboutCard { ...profile } />)}
            </div>
          </div>
        }

        {
          VIDEO_URL && 
            <div className='max-w-[1600px] w-full rounded-xl overflow-hidden px-2 sm:px-4 md:px-8'>
              <Video url={VIDEO_URL} />
            </div>
        }
        
        {/* Reviews */}
        <h1 className='--header max-w-[1600px] w-full mb-[-4rem]'>Reviews</h1>
        <Reviews reviews={reviewsDocs} />

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
