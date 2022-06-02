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
import markdownRef from './soins_dentaires.md'
// Data Imports.
import { services } from '../../data'


export default function Soins_dentaires() {
  
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetch(markdownRef)
    .then(response => response.text())
    .then(result => setMarkdown(result))
  }, [])

  const summary = [
    'Les soins dentaires complets.',
    'Pourquoi recevoir des soins dentaires réguliers?',
    'Quels sont les différents soins dentaires et leur déroulemen?',
    'Les soins de pédodontie.',
    'Les soins fondamentaux des dents et les soins préventifs.',
    'La parodontologie et endodontie.',
    'Quel est le prix des soins dentaires?',
    'Quelques astuces.'
  ]
  return (
    <>
    <Hero { ...services.services[0] } />
    
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
