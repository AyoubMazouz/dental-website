// Icons Imports.
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin, FaTwitter } from 'react-icons/fa'

export default function Card ({ 
    imgUrl, id, profession, alt, primary, 
    facebook, instagram, youtube, linkedin, twitter }) {

    // if current Profile is Primary one ( the one Rendered in About page ) Skip
    if (primary) return null

    return (
        <div className='max-h-[440px] relative group transition-transform duration-300 overflow-hidden rounded-xl shadow-lg text-primary'>
            {/* Image */}
            <img src={imgUrl} alt={alt} className="h-full w-full aspect-[3/4] object-cover"/>
            <div className="absolute bottom-[-5rem] group-hover:bottom-0 w-full bg-light px-6 py-6 transition-all duration-300">
                {/* Name */}
                <h3 className='font-bold text-center text-lg'>
                    {id}
                </h3>
                {/* Profession */}
                <h3 className='text-center text-lg mb-[1rem]'>
                    {profession}
                </h3>
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