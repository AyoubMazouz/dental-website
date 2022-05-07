import { MdPhone } from 'react-icons/md'
const Details = ({ image, alt, address, phone, workHours }) => {
  return (
    
        <div className="h-full py-[1.5rem]">

            {/* Image */}
            <img src={image} alt={alt} className="object-cover max-h-[380px] w-full rounded-2xl hidden lg:block" />

            {/* Address */}
            <p className='text-light font-bold mx-6 mt-2 text-3xl'>{address}</p>

            {/* Phone */}
            <div className='flex flex-wrap gap-2 mx-8 mt-6'>
                {phone.map((v, id) => <p key={id} className="py-2 px-4 flex gap-2 items-center text-light text-base border-2 border-secondary rounded-full"><MdPhone />{v}</p>)}
            </div>

            {/* Work Hours */}
            <h1 className='text-xl font-bold text-light mx-8 mt-6'>Work Hours</h1>
            <div className="w-full gap-8 flex mx-8 font-semibold text-bluish-gray text-sm">
                <ul>{workHours.map((v, id) => <li className='border-b-2 border-secondary my-2' key={id}>{v.day}</li>)}</ul>
                <ul>{workHours.map((v, id) => <li className='border-b-2 border-secondary my-2' key={id}>{v.time}</li>)}</ul>
            </div>

        </div>

  )
}

export default Details