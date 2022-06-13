import { useState, useEffect } from 'react'
import { RiArrowLeftRightFill } from 'react-icons/ri'


const Slider = ({ id, alt, before, after }) => {
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
        <div className='group w-full h-full relative rounded-xl shadow-lg border-light-gray border-2 overflow-hidden'>
            <h5 className='z-10 absolute bottom-[10%] left-[80%] translate-x-[-50%] bg-light rounded-full py-1 px-2 opacity-75 text-primary'>before</h5>
            <h5 className='z-10 absolute bottom-[10%] left-[20%] translate-x-[-50%] bg-light rounded-full py-1 px-2 opacity-75 text-primary'>after</h5>
            <img src={before} alt={alt} className='absolute w-full h-full pointer-events-none object-cover' />
            <img src={after} alt={alt} id={imgId} className='absolute w-full h-full pointer-events-none object-cover' />
            <input type='range' min='5' max='95' value={sliderValue} onChange={onChangeSlider}
                className='relative w-full h-full bg-transparent opacity-0 outline-none --appearance-none' >
            </input>
            <div id={sliderId} className='h-full w-1 bg-light absolute top-0 pointer-events-none opacity-75'>
                <div className='h-10 w-10 rounded-ful absolute top-[42%] left-[50%] translate-x-[-50%] translate-y-[50%] pointer-events-none bg-light rounded-full p-2 opacity-75'>
                    <RiArrowLeftRightFill className='w-full h-full text-primary group-hover:scale-[1.25] transition-all duration-300' />
                </div>
            </div>
        </div>
    )
}

export default Slider