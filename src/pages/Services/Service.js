// React Imports.
import React, { useEffect, useState } from 'react'
// React Router Dom Imports.
import { useParams, Navigate } from 'react-router-dom'
// React Markdown Imports.
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
// Components Imports.
import Hero from '../../components/Hero'
import ServicesSlider from '../../components/ServicesSlider'
import Summary from '../../components/Summary'
import Page404 from "../Page404"
// Data Imports.
import { servicesData, links } from '../../data'


export default function Pedodontie() {
  
  const [ error, setError ] = useState(null)
  const { serviceName } = useParams()
  const [ markdown, setMarkdown ] = useState(null)
  const [ headersList, setHeadersList ] = useState([])

  // Fetch md File.
  useEffect(() => {
    // Get a list of Valid url end points.
    const servicesList = Object.keys(servicesData)
    // Check if page Exist.
    if (servicesList.includes(serviceName)) {
      fetch(servicesData[serviceName].textUrl)
        .then(response => response.text())
        .then(result   => {
          setMarkdown(result)
          setError(null)
        })
        // Show Page404 if failed to fetch md file.
        .catch(error => {
          console.log(error)
          setError("404")
        })
    }
    // If url is Invalid show Page404.
    else setError("404")
  }, [serviceName])

  // Generate Summary.
  useEffect(() => {
    if (!error) {
      const textDoc = document.querySelector(".ReactMarkdown")
      const headers = textDoc.querySelectorAll("h1, h2")
      const headersList = [] 
      headers.forEach(header => {
        headersList.push(header)
        header.id = header.innerText
      })
      setHeadersList(headersList)
    }
  }, [markdown])

  if (error === "404") return <Page404 />

  return (
    <>
    <Hero { ...servicesData[serviceName] } />

    <div className={`w-full flex justify-center my-[4rem]`}>
      <div className='w-full max-w-[1600px] relative grid grid-cols-3 gap-[4rem] px-2 sm:px-4 md:px-8'>

        <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} 
          className='ReactMarkdown col-span-full lg:col-span-2 w-full max-w-[1200px]'>
          {markdown}
        </ReactMarkdown>

        {/* Summary */}
        <Summary headerList={headersList} />

      </div>
    </div>
    {/* Services Slider */}
    <div className='my-[4rem] col-span-full'>
      <ServicesSlider servicesData={servicesData} />
    </div>

    </>
  )
}
