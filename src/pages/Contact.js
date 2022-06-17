// Components Imports.
import Hero from "../components/Hero"
import ContactForm from "../components/ContactForm"
import GoogleMaps from "../components/GoogleMaps"
// Data Imports.
import { info } from '../data'

export default function Contact() {
  const heroValues = {
    imgUrl: 'https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/gallery%2Fcontact.jpg?alt=media&token=53208cb9-ec98-4e8e-a8ef-5d7a82f0c914',
    alt: '',
    currentPage: 'Contact',
    title: 'Contact Dentego',
    description: "La teinte et la forme des dents sont des éléments essentiels de l'esthétique dentaire. Deux techniques possibles : le blanchiment dentaire qui vise à éclaircir les dents dont la coloration est trop foncée ou les facettes dentaires qui permettent de les rendre plus blanches, mais aussi de modifier l'aspect général des dents (forme, alignement).",
  }
  return (
    <div>
      {/* Hero Section */}
      <Hero {...heroValues} />
      {/* Contact */}
      <ContactForm />
      {/* GooGle Maps */}
      <div className='w-full h-[480px]'><GoogleMaps location={info.location} /></div>
    </div>
  )
}
