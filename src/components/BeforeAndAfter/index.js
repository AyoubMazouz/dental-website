import goodTeeth1 from '../../media/good-teeth1.png'
import badTeeth1 from '../../media/bad-teeth1.png'
import Slider from './Slider'


const BeforeAndAfter = () => {

    

    return (

        <div className="grid justify-center">

            <div className="w-full max-w-[1200px] px-12 md:px-24 mt-8">

                <div>

                </div>

                <Slider id={1} before={goodTeeth1} after={badTeeth1} />

                <Slider id={2} before={goodTeeth1} after={badTeeth1} />
                

            </div>

        </div>

    )

}


export default BeforeAndAfter