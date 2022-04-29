import { useEffect, useState } from 'react'

export default function Stats({ title, record, speed }) {

    const [count, setCount] = useState(0)
    useEffect(() => {
        setTimeout(() => {
            if (count === record) return
            setCount(prev => prev + 1)
        }, speed / record | 0)
    }, [count])

    return (
        <div>{count}</div>
    )
}
