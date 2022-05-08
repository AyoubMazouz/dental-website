import { Link } from 'react-router-dom'

export default function About({ home, url, alt }) {
  return (
    <div className='max-w-[1600px] w-full grid lg:grid-cols-2 gap-4'>
        <img src={url} alt={alt} className='object-cover aspect-video rounded-xl' />
        <div>
            <h2 className='text-primary my-4'>{home.header}</h2>
            <p>{home.content}</p>
            <h4><Link to='/about'>Learn more</Link></h4>
            <h4><Link to='/contact'>Contact</Link></h4>
        </div>
    </div>
  )
}
