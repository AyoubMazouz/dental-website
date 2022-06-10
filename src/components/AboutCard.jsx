
// React Router Dom imports.
import { Link } from 'react-router-dom'
// Icons Imports.
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa'

export default function Card ({ 
    imgUrl, id, profession, alt, primary, 
    facebook, instagram, youtube, linkedin, 
    twitter, whatsapp }) {

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
                {/* Social Media Links */}
                    <ul className='flex items-center justify-center h-12'>
                        {
                        youtube && 
                            <Link to="" className="">
                                <FaYoutube className='w-[4rem] h-[4rem] text-5xl p-1 rounded-full pt-1 px-3 transition-all duration-500 cursor-pointer bg-light text-youtube hover:scale-[.8] hover:bg-youtube hover:text-light' />
                            </Link>
                        }
                        {twitter && 
                            <Link to="" className="">
                                <FaTwitter className="w-[4rem] h-[4rem] text-5xl p-1 rounded-full pt-1 px-3 transition-all duration-500 
                                cursor-pointer bg-light text-twitter hover:scale-[.8] hover:bg-twitter hover:text-light" />
                            </Link>
                        }   
                        {
                            instagram && 
                                <Link to="" className="">
                                    <FaInstagram className='w-[4rem] h-[4rem] text-5xl p-1 rounded-full pt-1 px-3 transition-all duration-500 cursor-pointer bg-light text-instagram hover:scale-[.8] hover:bg-instagram hover:text-light' />
                                </Link>
                        }
                    {
                        FaTwitter && 
                        <Link to="#" className="">
                            <FaTwitter className='w-[4rem] h-[4rem] text-5xl p-1 rounded-full pt-1 px-3 transition-all duration-500 cursor-pointer bg-light text-linkedin hover:scale-[.8] hover:bg-linkedin hover:text-light' />
                        </Link> 
                        }
                        {
                        whatsapp && 
                            <Link to="#" className="">
                                <FaWhatsapp className='w-[4rem] h-[4rem] text-5xl p-1 rounded-full pt-1 px-3 transition-all duration-500 cursor-pointer bg-light text-whatsapp hover:scale-[.8] hover:bg-whatsapp hover:text-light' />
                            </Link>
                        }
                    </ul>
              </div>
        </div>
    )
}