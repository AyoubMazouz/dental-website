// React Imports.
import React, { useEffect, useState } from 'react'
// Components Imports.
import Hero from '../../components/Hero'
import ServicesSlider from '../../components/ServicesSlider'
import Summary from './Summary'
// React Markdown Imports.
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
//  Markdown Imports.
import markdownRef from './orthodontie.md'
// Data Imports.
import { services } from '../../data'


export default function Orthodontie() {
  
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetch(markdownRef)
    .then(response => response.text())
    .then(result => setMarkdown(result))
  }, [])

  const summary = [
    "Qu'est-ce que l'orthodontie?",
    "L'orthodontie, c'est quoi?",
    "Chez l'enfant",
    "À l'âge adulte:",
    "Des appareils adaptés à tous les âges:",
    "Les appareils dentaires amovibles:",
    "Les appareils dentaires fixes:",
    'Quel est le prix des traitements orthodontiques?',
    "Quelques astuces:"
  ]
  return (
    <>
    <Hero { ...services.services[2] } />
    
    <div className={`w-full flex justify-center my-[4rem]`}>
      <div className='w-full max-w-[1600px] grid grid-cols-3 gap-[4rem] px-2 sm:px-4 md:px-8'>
        <Summary summary={summary} />
        <div className='col-span-full lg:col-span-2 w-full max-w-[1200px] '>
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} className='ReactMarkdown'>
            {markdown}
          </ReactMarkdown>
          {/* Services Slider */}
          <div className='mt-[4rem]'><ServicesSlider services={services.services} /></div>
        </div>
    </div>
  </div>
  </>
  )
}
