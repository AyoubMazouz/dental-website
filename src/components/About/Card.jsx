import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'


const Card = ({ name, details, img, facebook, instagram, youtube }) => {

    return (

        <div className='rounded shadow-lg overflow-hidden max-w-[320px] space-y-4'>

            <img src={img} alt=""
            className="aspect-[1/1] object-cover"/>

            <div className='text-center px-6'>
                <h1 className='text-xl font-semibold'>
                    {name}
                </h1>
                <h3 className=''>
                    {details}
                </h3>
            </div>

            <div className='w-full flex justify-around pb-6 text-3xl px-6'>
                <a href={facebook}>
                    <FaFacebook />
                </a>
                <a href={instagram}>
                    <FaInstagram />
                </a>
                <a href={youtube}>
                    <FaYoutube />
                </a>
            </div>

        </div>

    )
}


export default Card