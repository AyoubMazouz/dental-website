import { Link } from 'react-router-dom'

export default function Hero({ url, alt, currPage }) {
  return (
    <div className='w-full relative flex justify-center overflow-hidden'>
            <img src={url} alt={alt} className='w-[99.14vw] h-[50vh] object-cover' />
        <div className='w-full h-full absolute top-0 bg-[rgba(0,0,0,.6)] flex items-end gap-4 px-12 py-6 text-lg text-light'>
            <Link to='/' className='hover:underline hover:opacity-75 transition-all duration-300'
                >home</Link><span>{'>'}</span><span>{currPage}</span>
        </div>
    </div>
  )
}
