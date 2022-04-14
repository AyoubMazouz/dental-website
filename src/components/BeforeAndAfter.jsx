import { useEffect, useState } from 'react'
import goodTeeth1 from '../media/good-teeth1.png'
import badTeeth1 from '../media/bad-teeth1.png'


const BeforeAndAfter = () => {

    const [sliderValue, setSliderValue] = useState(50);

    const onChangeSlider = e => {
        const clipImg = document.getElementById('clip-img')
        const sliderThumb = document.getElementById('slider-thumb')

        setSliderValue(e.target.value)

        clipImg.style.clipPath = `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)`

        sliderThumb.style.left = sliderValue + '%'
    }

    useEffect( () => {
        const clipImg = document.getElementById('clip-img')
        const sliderThumb = document.getElementById('slider-thumb')

        clipImg.style.clipPath = `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)`
        sliderThumb.style.left = sliderValue + '%'
    }, [])

    return (

        <div className="grid justify-center">

            <div className="w-full max-w-[1200px] px-12 md:px-24 mt-8">

                <div>

                </div>


                <div className='w-[360px] h-[420px] relative rounded shadow-lg mb-16'>

                    <img src={goodTeeth1} alt=""
                    className='absolute w-full h-full pointer-events-none' />

                    <img src={badTeeth1} alt=""
                    id='clip-img'
                    className='absolute w-full h-full pointer-events-none' />

                    <input type='range' 
                    min='10' max='90' value={sliderValue}
                    onChange={onChangeSlider}
                    className='relative w-full h-full bg-transparent outline-none --appearance-none' ></input>

                    <div id='slider-thumb'
                    className='h-full w-1.5 bg-blue-500 absolute top-0 pointer-events-none'>
                        <div className='h-10 w-10 rounded-full bg-blue-500 absolute top-[42%] left-[50%] translate-x-[-50%] translate-y-[50%] pointer-events-none'>

                        </div>
                    </div>

                </div>

            </div>

        </div>

    )

}


export default BeforeAndAfter