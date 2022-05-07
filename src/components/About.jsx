import { Link } from 'react-router-dom'

export default function About({ home, url, alt }) {
  return (
    <div className='max-w-[1600px] w-full grid grid-cols-2 gap-[6rem]'>
        <img src={url} alt={alt} className='object-cover aspect-video rounded-xl' />
        <div>
            <h1 className='text-primary my-4'>{home.header}</h1>
            <p>{home.content}</p>
            <Link to='/about'>Learn more</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    </div>
  )
}
