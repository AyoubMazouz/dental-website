import { useState, useEffect } from 'react'


const Slider = ({ id, before, after }) => {

    const [sliderValue, setSliderValue] = useState(50);

    const [sliderId, imgId] = ['slider-thumb' + id, 'clip-img' + id]

    const onChangeSlider = e => {
        setSliderValue(e.target.value)

        const clipImg = document.getElementById(imgId)
        const sliderThumb = document.getElementById(sliderId)

        clipImg.style.clipPath = `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)`
        sliderThumb.style.left = sliderValue + '%'
    }

    useEffect( () => {
        const clipImg = document.getElementById(imgId)
        const sliderThumb = document.getElementById(sliderId)

        clipImg.style.clipPath = `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)`
        sliderThumb.style.left = sliderValue + '%'
    }, [])

    return (

        <div className='w-[360px] h-[420px] relative rounded shadow-lg mb-16 overflow-hidden'>

            <img src={before} alt=""
            className='absolute w-full h-full pointer-events-none' />

            <img src={after} alt=""
            id={imgId}
            className='absolute w-full h-full pointer-events-none' />

            <input type='range' 
            min='10' max='90' value={sliderValue}
            onChange={onChangeSlider}
            className='relative w-full h-full bg-transparent outline-none --appearance-none' ></input>

            <div id={sliderId}
            className='h-full w-1.5 bg-blue-500 absolute top-0 pointer-events-none'>
                <div className='h-10 w-10 rounded-full bg-blue-500 absolute top-[42%] left-[50%] translate-x-[-50%] translate-y-[50%] pointer-events-none'></div>
            </div>

        </div>

    )
}

export default Slider