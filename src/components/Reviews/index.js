import Card from "./Card"
import { ratings } from "./data"


const Review = () => {

    return (

        <div className='grid justify-center'>

            <div className='w-full max-w-[1200px] px-12 md:px-24 py-12 grid md:grid-cols-2 gap-16'>

                {ratings.map((v, id) => <Card key={id} {...v} />)}

            </div>

        </div>

    )
}

export default Review