// React Imports.
import React, { useEffect, useState } from 'react'
// Components Imports.
import Hero from '../../components/Hero'
import Services from '../../components/Services'
// React Markdown Imports.
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
//  Markdown Imports.
import markdownRef from './soins_dentaires.md'
// Icons Imports.
import { MdList } from 'react-icons/md'
// Data Imports.
import { services } from '../../data'


export default function Service01() {
  
  const [markdown, setMarkdown] = useState('')

  useEffect(() => {
    fetch(markdownRef)
    .then(response => response.text())
    .then(result => setMarkdown(result))
  }, [])

  const hero = {
    url: 'https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/services%2Fsoin-dentaire.jpg?alt=media&token=2d1bf996-2aad-4533-8bdf-2089f4939ff0',
    alt: '',
    currentPage: 'soins-dentaires',
    title: 'Soins dentaires',
    description: 'Les soins dentaires sont multiples et variés et ont pour objectif de prévenir les maladies des dents et des gencives et/ou de les traiter pour conserver une bouche saine. En fonction de vos besoins, les tarifs des soins dentaires sont différents et un devis sera établi au préalable de manière transparente.',
  } 

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
    <Hero { ...hero } />
    
    <div className='w-full flex justify-center my-[4rem]'>
      <div className='w-full max-w-[1600px] grid grid-cols-3 gap-[4rem]'>
        <div className='col-span-1 w-full h-full relative'>
          <div className='w-full bg-bluish-gray text-light-gray text-lg font-semibold rounded-xl flex flex-col gap-y-2 px-8 py-12 sticky top-[4rem]'>
              <h2 className='mb-4 flex gap-x-2 text-light-blue'><MdList />Summaire</h2>
              {summary.map(value => (
                <a href={`#${value}`} className='hover:text-light-blue ml-[1rem]'>{value}</a>
              ))}
          </div>
        </div>
        <div className='col-span-2 w-full max-w-[1200px] '>
          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} className='ReactMarkdown'>
            {markdown}
          </ReactMarkdown>
          {/* Services Slider */}
          <div className='mt-[4rem]'><Services services={services} /></div>
        </div>
    </div>
  </div>

    </>
  )
}
