import React from 'react'

const Services = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full lg:max-w-[1200px] px-12 md:px-24 py-12 space-y-8'>
        
        <div className='text-center space-y-3'>

          <h1 className='font-semibold text-xl'>
            Pourquoi Clinique la Colline
          </h1>
          <h3>
            Laissez-nous égayer votre sourire!
          </h3>

        </div>


        <div className='grid gap-12 md:grid-cols-2 xl:grid-cols-4'>

          <div className='text-center bg-slate-100 rounded shadow-md px-6 py-4'>

          {/* 01 */}
          <div className='space-y-4'>
              {/* icons or svg */}
              <h3 className='font-semibold'>
                Équipe Dentaire
              </h3>
              <p className='font-light'>
              Tous ont une philosophie d’approche en douceur et de savoir-faire que vous apprécierez.
              </p>
          </div>

          </div>

          <div className='text-center bg-slate-100 rounded shadow-md px-6 py-4'>

          {/* 02 */}
          <div className='space-y-4'>
              {/* icons or svg */}
              <h3 className='font-semibold'>
                Équipe Dentaire
              </h3>
              <p className='font-light'>
              Tous ont une philosophie d’approche en douceur et de savoir-faire que vous apprécierez.
              </p>
          </div>

          </div>

          <div className='text-center bg-slate-100 rounded shadow-md px-6 py-4'>

          {/* 03 */}
          <div className='space-y-4'>
              {/* icons or svg */}
              <h3 className='font-semibold'>
                Équipe Dentaire
              </h3>
              <p className='font-light'>
              Tous ont une philosophie d’approche en douceur et de savoir-faire que vous apprécierez.
              </p>
          </div>

          </div>

          <div className='text-center bg-slate-100 rounded shadow-md px-6 py-4'>

          {/* 04 */}
          <div className='space-y-4'>
              {/* icons or svg */}
              <h3 className='font-semibold'>
                Équipe Dentaire
              </h3>
              <p className='font-light'>
              Tous ont une philosophie d’approche en douceur et de savoir-faire que vous apprécierez.
              </p>
          </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default Services