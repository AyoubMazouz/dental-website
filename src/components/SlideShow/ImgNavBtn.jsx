import React from 'react'

export default function ImgNavBtn({ currentIndex, index, setIndex }) {

    const normal = 'h-4 w-4 opacity-50 bg-white rounded-full shadow-lg'
    const active = 'h-4 w-4 bg-white rounded-full shadow-lg shadow-white'

    return (
        <div onClick={() => setIndex(index)}
            className={index === currentIndex ? active : normal}>
        </div>
    )
}
