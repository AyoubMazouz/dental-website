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
        <div className='flex gap-y-[1rem] items-center flex-col w-[8rem] lg:w-[18rem]'>
            <h1 className='scale-[1.5]'>{count + after}</h1>
            <h4 className='text-center leading-6'>{title}</h4>
        </div>
    )
}
