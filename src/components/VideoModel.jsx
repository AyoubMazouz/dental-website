import { useState } from 'react'
import { MdClose } from 'react-icons/md'

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar, Pagination, Zoom } from 'swiper';
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function VideoModel({ currIndex, docs, setSelected }) {
    const [index, _] = useState(currIndex)
    return (
        <div className='w-[100vw] h-[100vh] bg-[rgba(0,0,0,.9)] fixed z-40 top-0'>
            <MdClose className='text-light text-6xl absolute z-10 top-[1rem] left-[3rem] cursor-pointer' onClick={() => setSelected(null)} />
            <Video url={Object.values(docs)[currIndex]} />
        </div>
    )
}



export function Video({ url }) {
  return <iframe className="aspect-video w-full h-full rounded-xl" frameborder="0" scrolling="no" type="text/html" src={url}></iframe>
}
