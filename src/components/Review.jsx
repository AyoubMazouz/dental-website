import { FaStar } from 'react-icons/fa'


const Review = () => {

    return (

        <div className='grid justify-center'>

            <div className='w-full max-w-[1200px] px-12 md:px-24 py-12 grid md:grid-cols-2 gap-16'>

            <div className='py-6 px-8 space-y-4 bg-slate-100 rounded shadow-lg'>
                
                <div className='flex space-x-3 items-center'>

                    <img src="https://via.placeholder.com/58x58" alt=""
                    className="rounded-full" />

                    <div>

                        <h1 className='font-semibold'>
                            Hamza Lahoumi
                        </h1>

                    <div className='flex space-x-1 text-xl text-yellow-500'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <div className='w-[.75rem] overflow-hidden'>
                            <FaStar />
                        </div>
                    </div>

                </div>

                </div>

                <div className='px-6'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magnam, distinctio modi atque exercitationem maiores unde?
                    </p>
                </div>

            </div>

            <div className='py-6 px-8 space-y-4 bg-slate-100 rounded shadow-lg'>
                
                <div className='flex space-x-3 items-center'>

                    <img src="https://via.placeholder.com/58x58" alt=""
                    className="rounded-full" />

                    <div>

                        <h1 className='font-semibold'>
                            Hamza Lahoumi
                        </h1>

                    <div className='flex space-x-1 text-xl text-yellow-500'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                    </div>

                </div>

                </div>

                <div className='px-6'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure magnam, distinctio modi atque exercitationem maiores unde?
                    </p>
                </div>

            </div>

            </div>

        </div>

    )
}

export default Review