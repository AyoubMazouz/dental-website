import { MdPhone } from 'react-icons/md'
export default function Details ({ image, alt, address, phone, workHours }) {
  return (
        <div className="h-full py-4">
            {/* Image */}
            <img src={image} alt={alt} className="object-cover max-h-[380px] w-full rounded-2xl hidden lg:block" />

            {/* Address */}
            <h3 className='text-light mx-6 mt-2'>{address}</h3>

            {/* Work Hours */}
            <div className="w-full gap-8 flex flex-wrap mx-4 text-bluish-gray mt-[2rem]">
                <ul>{workHours.map((v, id) => <h5 className='border-b-2 border-secondary my-2' key={id}>{v.day}</h5>)}</ul>
                <ul>{workHours.map((v, id) => <h5 className='border-b-2 border-secondary my-2' key={id}>{v.time}</h5>)}</ul>
                {/* Phone */}
                <div className='space-y-2'>{phone.map((v, id) => 
                    <h5 key={id} className="py-2 px-4 flex gap-2 items-center text-light border-2 border-secondary rounded-full"><MdPhone />{v}</h5>)}
                </div>
            </div>
        </div>
  )
}