import { useEffect, useState } from 'react'



export default function Stats({ title, record, speed, after='' }) {

    const [count, setCount] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            if (count === record) return
            setCount(prev => prev + 1)
        }, speed / record | 0)
    }, [count])

    return (
        <div className='font-bold flex gap-[1.5rem] items-center flex-col w-[8rem] lg:w-[18rem]'>
            <h1 className='text-[2.2rem] md:text-[3.2rem] lg:text-[4.4rem]'>{count + after}</h1>
            <h1 className='text-base lg:text-xl text-center'>{title}</h1>
        </div>
    )
}
