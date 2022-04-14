import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import dr1 from '../media/dr1.png'
import dr2 from '../media/dr2.png'



const About = () => {


    return (
        <div className='grid justify-center'>

            <div className='w-full max-w-[1200px] px-12 md:px-24 mt-8'>
                <h1 className='text-xl font-semibold'>
                    Notre Equipe
                </h1>
            </div>

            <div className='w-full max-w-[1200px] px-12 md:px-24 py-12 grid md:grid-cols-2 gap-12 justify-center'>

                <div className='rounded shadow-lg overflow-hidden max-w-[320px] space-y-4'>

                    <img src={dr1} alt=""
                    className="aspect-[1/1] object-cover"/>

                    <div className='text-center px-6'>
                        <h1 className='text-xl font-semibold'>
                            Dr. Zahra Nehraoui
                        </h1>
                        <h3 className=''>
                            Dental and sexy baby with think ass
                        </h3>
                    </div>

                    <div className='w-full flex justify-around pb-6 text-3xl px-6'>
                        <a href="#">
                            <FaFacebook />
                        </a>
                        <a href="#">
                            <FaInstagram />
                        </a>
                        <a href="#">
                            <FaYoutube />
                        </a>
                    </div>

                </div>

                <div className='rounded shadow-lg overflow-hidden max-w-[320px] space-y-4'>

                    <img src={dr2} alt=""
                    className="aspect-[1/1] object-cover"/>

                    <div className='text-center px-6'>
                        <h1 className='text-xl font-semibold'>
                            Dr. Zahra Nehraoui
                        </h1>
                        <h3 className=''>
                            Dental and sexy baby with think ass
                        </h3>
                    </div>

                    <div className='w-full flex justify-around pb-6 text-3xl px-6'>
                        <a href="#">
                            <FaFacebook />
                        </a>
                        <a href="#">
                            <FaInstagram />
                        </a>
                        <a href="#">
                            <FaYoutube />
                        </a>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default About