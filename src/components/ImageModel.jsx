import { connectStorageEmulator } from 'firebase/storage'
import { useEffect, useState } from 'react'
import { MdClose, MdArrowForwardIos, MdArrowBackIos } from 'react-icons/md'

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Scrollbar, Pagination, Zoom } from 'swiper';
import "swiper/css/zoom";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ImageModel({ currIndex, docs, setSelected }) {
    const [index, _] = useState(currIndex)
    console.log(index)
    return (
        <div className='w-[100vw] h-[100vh] bg-[rgba(0,0,0,.9)] grid place-items-center fixed z-40 top-0'>
            <MdClose className='text-light text-6xl absolute z-10 top-[1rem] right-[3rem]' onClick={() => setSelected(null)} />
                <Swiper modules={[Scrollbar, FreeMode, Pagination, Zoom]} grabCursor pagination zoom initialSlide={index}
                    className='w-full' >
                {docs.map((doc, id) => (
                <SwiperSlide key={doc.id} className='rounded-[2rem] overflow-hidden'>
                    <div className="swiper-zoom-container">
                        <img src={doc.url} alt={doc.id} className='w-full h-full' />
                    </div>
                </SwiperSlide>))}
            </Swiper>
        </div>
    )
}
