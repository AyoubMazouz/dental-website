import React from 'react'

export default function ImgNavBtn({ currentIndex, index, setIndex }) {

    const normal = 'h-4 w-4 border-2 border-sky-500 bg-white rounded-full'
    const active = 'h-4 w-4 border-2 bg-sky-500 border-white rounded-full'

    return (
        <div onClick={() => setIndex(index)}
            className={index === currentIndex ? active : normal}>
        </div>
    )
}
