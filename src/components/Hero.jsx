import { Link } from 'react-router-dom'

export default function Hero({ url, alt, currentPage, title, description }) {
  return (
    <div className='w-full relative flex justify-center overflow-hidden'>
        <img src={url} alt={alt} className='w-[99.14vw] h-[65vh] object-cover' />
        <div className='w-full h-full absolute top-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] via-transparent to-transparent flex justify-end flex-col text-sm text-light items-center'>
            <div className='py-12 max-w-[1800px] space-y-6'>
              <div className='flex gap-x-2'>
                <Link to='/' className='hover:underline hover:opacity-75 transition-all duration-300'>home</Link>
                <span>{'>'}</span>
                <span>{currentPage}</span>
              </div>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
        </div>
    </div>
  )
}
