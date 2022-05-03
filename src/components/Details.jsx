import { MdPhone } from 'react-icons/md'
const Details = ({ image, alt, address, phone, workHours }) => {
  return (
    
        <div className="h-full py-[1.5rem]">

            {/* Image */}
            <img src={image} alt={alt} className="object-cover max-h-[380px] w-full rounded-2xl" />

            {/* Address */}
            <p className='text-light font-bold mx-8 mt-2 text-3xl'>{address}</p>

            {/* Phone */}
            <div className='flex gap-4 mx-8 mt-8'>
                {phone.map((v, id) => <p key={id} className="py-2 px-6 flex gap-2 items-center text-light text-base bg-secondary rounded-full"><MdPhone />{v}</p>)}
            </div>

            {/* Work Hours */}
            <div className="flex gap-[7.2rem] mx-8 mt-4 font-semibold text-bluish-gray">
                <ul>{workHours.map((v, id) => <li key={id}>{v.day}</li>)}</ul>
                <ul>{workHours.map((v, id) => <li key={id}>{v.time}</li>)}</ul>
            </div>

        </div>

  )
}

export default Details