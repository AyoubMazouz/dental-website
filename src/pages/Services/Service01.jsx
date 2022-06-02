// React Imports.
import React, { useEffect, useState } from 'react'
// Components Imports.
import Hero from '../../components/Hero'
// React Markdown Imports.
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
//  Markdown Imports.
import markdownRef from './soins_dentaires.md'


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

  return (
    <>
    <Hero { ...hero } />
    
    <div className='w-full flex justify-center mt-[4rem]'>
      <div className='w-full max-w-[1600px] grid grid-cols-3 gap-[4rem]'>
        <div className='col-span-1 w-full bg-gray-400'>

        </div>
        <ReactMarkdown remarkPlugins={[remarkGfm]} className='ReactMarkdown'>
          {markdown}
        </ReactMarkdown>
    </div>
  </div>

    </>
  )
}
