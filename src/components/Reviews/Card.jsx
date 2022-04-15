import { FaStar } from 'react-icons/fa'


const Card = ({ name, img, comment, rating }) => {

    const stars = rating => {
        const starsList = []
        for (let i = 0; i < parseInt(rating); i++) {
            starsList.push(<FaStar />)
        } return starsList
    }

    return (

        <div className='py-6 px-8 space-y-4 bg-slate-100 rounded shadow-lg'>      
            <div className='flex space-x-3 items-center'>

                <img src={img} alt=""
                className="rounded-full" />

                <div>
                    <h1 className='font-semibold'>
                        {name}
                    </h1>

                    <div className='flex space-x-1 text-xl text-yellow-500'>
                        {stars(rating).map(element => element)}
                    </div>
                </div>

            </div>

            <div className='px-6'>
                <p>
                    {comment}
                </p>
            </div>

        </div>

    )
}


export default Card