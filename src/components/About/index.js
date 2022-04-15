import Card from './Card'
import dr1 from '../../media/dr1.png'
import dr2 from '../../media/dr2.png'



const About = () => {


    return (
        <div className='grid justify-center'>

            <div className='w-full max-w-[1200px] px-12 md:px-24 mt-8'>
                <h1 className='text-xl font-semibold'>
                    Notre Equipe
                </h1>
            </div>

            <div className='w-full max-w-[1200px] px-12 md:px-24 py-12 grid md:grid-cols-2 gap-12 justify-center'>

                <Card name={'Dr.Hanan Nehroui'}
                    details={'Tous ont une philosophie d’approche en douceur et de savoir-faire que vous apprécierez.'}
                    img={dr1}
                    facebook={'#'}
                    instagram={'#'}
                    youtube={'#'} />

                <Card name={'Dr.Hanan Nehroui'}
                    details={'Tous ont une philosophie d’approche en douceur et de savoir-faire que vous apprécierez.'}
                    img={dr2}
                    facebook={'#'}
                    instagram={'#'}
                    youtube={'#'} />

            </div>

        </div>
    )
}

export default About

