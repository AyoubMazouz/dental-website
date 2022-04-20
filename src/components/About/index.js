import Card from './Card'
import { profiles } from './data'




const About = () => {


    return (
        <div className='grid justify-center'>

            <div className='w-full max-w-[1200px] px-12 md:px-24 mt-8'>
                <h1 className='text-xl font-semibold'>Notre Equipe</h1>
            </div>

            <div className='w-full max-w-[1200px] px-12 md:px-24 py-12 grid md:grid-cols-2 gap-12 justify-center'>
                {profiles.map((v, id) => <Card key={id} { ...v }/>)}
            </div>

        </div>
    )
}

export default About

