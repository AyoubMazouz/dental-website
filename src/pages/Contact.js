// Components Imports.
import Hero from "../components/Hero"
import Form from "../components/Form"
import Details from "../components/Details"
import GoogleMaps from "../components/GoogleMaps"
// Data Imports.
import { info } from '../data'

export default function Contact() {
  return (
    <>
    {/* Hero Section */}
    <Hero url={'https://via.placeholder.com/1000x1000'} alt='' currPage={'contact'} />
    {/* Contact */}
    <div id='contact' className='w-full bg-primary flex flex-col justify-center items-center py-[6rem] px-4 lg:px-12'>
      <div className='max-w-[1400px] grid lg:gap-20 grid-cols-8'>
        <h1 className='col-span-full font-bold text-5xl text-light mb-[2.5rem] border-r-2 border-r-light'>Contact</h1>
        <div className='col-span-full lg:col-span-4'><Form /></div>
        <div className='col-span-full lg:col-span-4'><Details {...info} /></div>
      </div>
    </div>
    {/* GooGle Maps */}
    <div className='w-full h-[480px] mt-[-6rem]'><GoogleMaps location={info.location} /></div>
  </>
  )
}
