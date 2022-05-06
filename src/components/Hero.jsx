import { Link } from 'react-router-dom'

export default function Hero({ url, alt, currPage }) {
  return (
    <div className='w-full relative flex justify-center mb-[6rem]'>
            <img src={url} alt={alt} className='w-[100vw] h-[40vh] object-cover' />
        <div className='w-full h-full absolute top-0 bg-[rgba(0,0,0,.6)] flex items-end gap-4 px-12 py-6 text-lg text-light'>
            <Link to={`/home`} className='hover:underline hover:opacity-75 transition-all duration-300'
                >home</Link><span>{'>'}</span><span>{currPage}</span>
        </div>
    </div>
  )
}
