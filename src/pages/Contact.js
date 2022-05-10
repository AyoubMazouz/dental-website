// Components Imports.
import Hero from "../components/Hero"
import ContactForm from "../components/ContactForm"
import GoogleMaps from "../components/GoogleMaps"
// Data Imports.
import { info } from '../data'

export default function Contact() {
  return (
    <div>
    {/* Hero Section */}
    <Hero url={'https://via.placeholder.com/1000x1000'} alt='' currPage={'contact'} />
    {/* Contact */}
    <ContactForm />
    {/* GooGle Maps */}
    <div className='w-full h-[480px]'><GoogleMaps location={info.location} /></div>
  </div>
  )
}
