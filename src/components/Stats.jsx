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
        <div className='font-bold flex justify-center items-center flex-col gap-4'>
            <h1 className='text-[4.4rem] text-sky-500'>{count + after}</h1>
            <h1 className='text-xl'>{title}</h1>
        </div>
    )
}
