// Icons Imports.
import { MdList } from 'react-icons/md'

export default function Summary({ summary }) {
  return (
    <div className='col-span-full lg:col-span-1 w-full h-full relative'>
        <div className='w-full bg-bluish-gray text-light-gray text-lg font-semibold rounded-xl flex flex-col gap-y-4 lg:gap-y-6 px-8 py-12 sticky top-[8rem]'>
            <h2 className='mb-4 flex gap-x-2 text-light-blue'><MdList />Summaire</h2>
            {summary.map(value => (
            <a href={`#${value}`} className='hover:text-light-blue ml-[1rem]'>{value}</a>
            ))}
        </div>
    </div>
  )
}
