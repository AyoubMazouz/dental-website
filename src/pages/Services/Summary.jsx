// Icons Imports.
import { useState } from 'react'
import { MdList } from 'react-icons/md'

export default function Summary({ summary }) {
  const [ summaryStat, setSummaryStat ] = useState(false)
  const [ summaryVisibility, setSummaryVisibility ] = useState(false)

  window.addEventListener("scroll", e => {
    const summary = document.getElementById("original-summary")
    const { y, height } = summary.getBoundingClientRect()
    if (window.screenY > y - height) setSummaryVisibility(false)
    else setSummaryVisibility(true)
  })

  return (
    <>
      {/* Large Screen & Bottom Page Summary */}
      <div id="original-summary" className="col-span-full lg:col-span-1 w-full h-full relative">
        <div className="w-full bg-bluish-gray text-light-gray text-lg font-semibold rounded-xl flex flex-col gap-y-4 lg:gap-y-6 px-8 py-12 sticky top-[8rem]">
            <h2 className='mb-4 flex gap-x-2 text-light-blue'><MdList />Summaire</h2>
            {summary?.map(value => (
            <a href={`#${value}`} className='hover:text-light-blue ml-[1rem]'>{value}</a>
            ))}
        </div>
      </div>

    {/* Floating Summary */}
      {
        summaryVisibility &&
          <div className={`lg:hidden w-[90vw] fixed transition-all duration-300 ${
            summaryStat ? "bottom-[2rem]" : "bottom-[-42%]"
          }`}
            onClick={() => {
              setSummaryStat(!summaryStat)
            }}>
    
            <div className="w-full h-full bg-bluish-gray text-light-gray text-lg font-semibold rounded-xl flex flex-col gap-y-4 lg:gap-y-6 px-8 py-8 sticky bottom-[100px]">
                <h2 className='mb-10 flex gap-x-2 text-light-blue cursor-pointer'><MdList />Summaire</h2>
                {summary?.map(value => (
                <a href={`#${value}`} className='hover:text-light-blue ml-[1rem]'>{value}</a>
                ))}
            </div>
          </div>
      }
      
    </>
  )
}
