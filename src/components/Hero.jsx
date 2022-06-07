import { Link } from 'react-router-dom'

export default function Hero({ imgUrl, alt, currentPage, title, description }) {
  return (
    <div className='w-full relative flex justify-center overflow-hidden'>
        <img src={imgUrl} alt={alt} className='w-[99.14vw] h-[65vh] object-cover' />
        <div className='w-full h-full absolute top-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] via-transparent to-transparent flex justify-end flex-col text-sm text-light items-center px-2 sm:px-4 md:px-8'>
            <div className='py-12 w-full max-w-[1800px] space-y-6'>
              <div className='flex gap-x-2'>
                <Link to='/' className='hover:underline hover:opacity-75 transition-all duration-300'>home</Link>
                  { currentPage?.parent && (<>
                    <span>{'>'}</span>
                    <Link to={currentPage?.parent.link} className='hover:underline hover:opacity-75 transition-all duration-300'
                      >{currentPage.parent.label}</Link>
                  </>)}
                  <span>{'>'}</span>
                  <li className='underline'>{currentPage.label}</li>
              </div>
              <h1>{title}</h1>
              <p>{description}</p>
            </div>
        </div>
    </div>
  )
}
