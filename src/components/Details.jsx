import { MdPhone } from 'react-icons/md'
const Details = ({ image, alt, address, phone, workHours }) => {
  return (
    
        <div className="h-full py-[1.5rem]">

            {/* Image */}
            <img src={image} alt={alt} className="object-cover max-h-[380px] w-full rounded-2xl" />

            {/* Address */}
            <p className='text-light font-bold mx-8 mt-2 text-3xl'>{address}</p>

            {/* Telephone */}
            <div className='flex gap-4 mx-8 mt-8'>
                {phone.map((v, id) => <p key={id} className="py-2 px-6 flex gap-2 items-center text-light text-base bg-secondary rounded-full"><MdPhone />{v}</p>)}
            </div>

            {/* Horaire */}
            <div className="flex gap-[7.2rem] mx-8 mt-4 font-semibold text-bluish-gray">
                <div>{workHours.map((v, id) => <p key={id}>{v.day}</p>)}</div>
                <div>{workHours.map((v, id) => <p key={id}>{v.time}</p>)}</div>
            </div>

        </div>

  )
}

export default Details