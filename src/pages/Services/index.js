// React Imports.
import React, { useEffect, useState } from 'react'
// React Router Dom Imports.
import { useParams } from 'react-router-dom'
// React Markdown Imports.
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
// Components Imports.
import Hero from '../../components/Hero'
import ServicesSlider from '../../components/ServicesSlider'
import Summary from '../../components/Summary'
// Data Imports.
import { SERVICES_MD_URL, servicesData } from '../../data'


export default function Services() {
  const [markdown, setMarkdown] = useState()
  const [headersList, setHeadersList] = useState([])

  useEffect(() => {
    fetch(SERVICES_MD_URL)
    .then(response => response.text())
    .then(result   => setMarkdown(result))
  }, [])

  useEffect(() => {
    const textDoc = document.querySelector(".ReactMarkdown")
    const headers = textDoc.querySelectorAll("h1, h2")
    const headersList = [] 
    headers.forEach(header => {
      headersList.push(header)
      header.id = header.innerText
      header.classList.add("scroll")
    })
    setHeadersList(headersList)
  }, [markdown])

  const heroValues = {
    currentPage: "services",
    title: "Traitements dentaires",
    description: "Chez Dentego, nous vous garantissons des traitements dentaires adaptés à vos besoins, prodigués par le dentiste de votre choix, au prix le plus juste et avec une prise en charge rapide, complète et personnalisée. Ces traitements dentaires vous permettront de conserver ou de rétablir une bonne santé bucco-dentaire. Nos équipes sont constituées de praticiens experts et d'assistants qualifiés, spécialisés dans de nombreux domaines comme l'orthodontie, la pédodontie, la parodontologie, la radiologie et l'implantologie. Renseignez-vous auprès du centre Dentego près de chez vous en prenant rendez-vous en ligne ou par téléphone pour bénéficier de tous les traitements dont vous avez besoin et de manière adaptée.",
  }
  return (
    <>
      <Hero { ...heroValues } />

      <div className={`w-full flex flex-col items-center my-[4rem]`}>
        {/* Services Slider */}
        <div className='mb-[4rem] col-span-full'>
          <ServicesSlider servicesData={servicesData} />
        </div>
        <div className='w-full max-w-[1600px] relative grid grid-cols-3 gap-[4rem] px-2 sm:px-4 md:px-8'>


          <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]} 
            className='ReactMarkdown col-span-full lg:col-span-2 w-full max-w-[1200px]'>
            {markdown}
          </ReactMarkdown>

          {/* Summary */}
          <Summary headerList={headersList} />

        </div>
      </div>

    </>
  )
}
