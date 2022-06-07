// React Imports.
import React, { useEffect, useState } from 'react'
// React Router Dom Imports.
import { useParams } from 'react-router-dom'
// React Markdown Imports.
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
// Components Imports.
import Hero from '../components/Hero'
import ServicesSlider from '../components/ServicesSlider'
import Summary from './Services/Summary'
// Data Imports.
import { servicesData } from '../data/services'


export default function Pedodontie() {
  
  const [markdown, setMarkdown] = useState('')
  const { serviceName } = useParams()

  useEffect(() => {
    fetch(servicesData[serviceName].textUrl)
    .then(response => response.text())
    .then(result   => setMarkdown(result))
    
  }, [serviceName])

  const summary = [
    'Pédodontie',
    "La pédodontie, c'est quoi?",
    'Quel est le but de la pédodontie?',
    "Que vérifie le pédodontiste lors d'une consultation?",
    'La prévention orthodontique:',
    'Quel est le prix des traitements de pédontie?',
    'Quelques astuces:'
  ]
  return (
    <>
    <Hero { ...servicesData[serviceName] } />

    <div className={`w-full flex justify-center my-[4rem]`}>
      <div className='w-full max-w-[1600px] grid grid-cols-3 gap-[4rem] px-2 sm:px-4 md:px-8'>

        <Summary summary={summary} />

        <div className='col-span-full lg:col-span-2 w-full max-w-[1200px] '>

          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} className='ReactMarkdown'>
            {markdown}
          </ReactMarkdown>

          {/* Services Slider */}
          <div className='mt-[4rem]'><ServicesSlider servicesData={servicesData} /></div>
        </div>
    </div>
  </div>

    </>
  )
}
