// Icons Imports.
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Card ({ 
    imgUrl, name, profession, alt, details, 
    facebook, instagram, youtube, linkedin, twitter }) {
    return (
        <div className='h-full relative group transition-transform duration-300 overflow-hidden rounded-xl shadow-lg text-primary'>
            <img src={imgUrl} alt={alt} className="max-h-[480px] w-full object-cover"/>
            <div className="absolute z-10 bottom-[-380px] group-hover:bottom-[-80px] w-full h-full bg-light px-6 transition-all duration-300">
                {/* Name */}
                <h3 className='font-bold text-center mt-[1.8rem] group-hover:mt-[.5rem] group-hover:mb-[-.5rem] text-lg'>{name}</h3>
                {/* Profession */}
                <h3 className='text-center text-lg mb-[1rem]'>{profession}</h3>
                {/* Details */}
                <p className='text-left mt-[1.2rem] group-hover:mt-[0rem]'>{details}</p>
                {/* Social Media */}
                <div className='flex justify-center text-2xl gap-4'>
                  {facebook && <a href={facebook}><FaFacebook className='--nav-icons' /></a>}
                  {instagram && <a href={instagram}><FaInstagram className='--nav-icons' /></a>}
                  {youtube && <a href={youtube}><FaYoutube className='--nav-icons' /></a>}
                  {linkedin && <a href={linkedin}><FaLinkedin className='--nav-icons' /></a>}
                  {twitter && <a href={twitter}><FaTwitter className='--nav-icons' /></a>}
              </div>
            </div>
        </div>
    )
}