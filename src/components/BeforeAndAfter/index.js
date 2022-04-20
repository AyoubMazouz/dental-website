import Slider from './Slider'
import { images } from './data'

const BeforeAndAfter = () => {
    return (
        <div className="grid justify-center">
            <div className="w-full max-w-[1200px] px-12 md:px-24 mt-8">
                <div>
                </div>
                {images.map((v, id) => <Slider {...v} />)}
            </div>
        </div>
    )

}


export default BeforeAndAfter