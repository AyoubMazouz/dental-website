// Icons Imports.
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'

export default function Card ({ img, name, alt, details, facebook, instagram, youtube, linkedin }) {
    return (
        <div className='rounded shadow-lg overflow-hidden max-w-[380px] w-full space-y-4'>
            <img src={img} alt={alt} className="max-h-[380px] w-full object-cover"/>
            <div className='text-center px-6'>
                <h1 className='text-xl font-semibold'>{name}</h1>
                <h3 className=''>{details}</h3>
            </div>

            <div className='w-full flex justify-around pb-6 text-3xl px-6'>
                {facebook && <a href={facebook}><FaFacebook /></a>}
                {instagram && <a href={instagram}><FaInstagram /></a>}
                {youtube && <a href={youtube}><FaYoutube /></a>}
                {linkedin && <a href={linkedin}><FaLinkedin /></a>}
            </div>
        </div>
    )
}