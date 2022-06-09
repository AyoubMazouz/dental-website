// Icons Imports.
import { useEffect, useState } from 'react'
import { MdList } from 'react-icons/md'

export default function Summary({ headerList }) {
  const [ summaryStat, setSummaryStat ] = useState(false)
  const [ summaryVisibility, setSummaryVisibility ] = useState(false)
  const [ height, setHeight ] = useState(false)

  console.log(headerList)

  window.addEventListener("scroll", e => {
    const summary = document.getElementById("original-summary")
    const { y, height } = summary.getBoundingClientRect()
    if (window.screenY > y - height * 2) setSummaryVisibility(false)
    else setSummaryVisibility(true)
  })

  useEffect(() => {
    const summary = document.getElementById("original-summary")
    const { height } = summary.getBoundingClientRect()
    setHeight(height)
  }, [])

  const getHeadersReady = () => (
    headerList?.map(header => (
      <a href={`#${header.innerText}`} 
        className={`hover:text-light-blue ${
            header.tagName === "H1" ? 'pl-[1rem] my-2' : 'pl-[2.5rem]'
      }`}>  
        {header.innerText}
      </a>
    ))
  )

  return (
    <>
      {/* Large Screen & Bottom Page Summary */}
      <div id="original-summary" className="col-span-full lg:col-span-1 w-full h-full relative">
        <div className="w-full bg-bluish-gray text-light-gray text-lg font-semibold rounded-xl flex flex-col gap-y-3 px-4 py-12 sticky top-[8rem]">
            <h2 className='mb-4 flex gap-x-2 text-light-blue'><MdList />Summaire</h2>
            {getHeadersReady()}
        </div>
      </div>

    {/* Floating Summary */}
      {
        summaryVisibility &&
          <div className={`lg:hidden w-[90vw] fixed transition-all duration-300`}
            style={{ bottom: summaryStat ? `${-height + 100}px` : "0" }}
            onClick={() => {
              setSummaryStat(!summaryStat)
            }}>
    
            <div className="w-full h-full bg-bluish-gray text-light-gray text-lg font-semibold rounded-xl flex flex-col gap-y-3 lg:gap-y-6 px-4 py-8 sticky bottom-[100px]">
                <h2 className='mb-10 flex gap-x-2 text-light-blue cursor-pointer'><MdList />Summaire</h2>
                {getHeadersReady()}
            </div>
          </div>
      }
      
    </>
  )
}
