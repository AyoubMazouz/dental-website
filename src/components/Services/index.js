import Card from './Card'


const Services = () => {
    return (

      <div className='w-full flex justify-center'>
            <div className='w-full lg:max-w-[1200px] px-12 md:px-24 py-12 space-y-8 space-x-8 grid grid-cols-2'>
          
                <div className='col-span-full text-center space-y-3'>
  
                    <h1 className='font-semibold text-xl'>
                        Pourquoi Clinique la Colline
                    </h1>
                    <h3>
                        Laissez-nous égayer votre sourire!
                    </h3>
  
                </div>
  
  
                <Card title='lorem ipsum'
                    description='lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'  />
                <Card title='lorem ipsum'
                    description='lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'  />
                <Card title='lorem ipsum'
                    description='lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'  />
                <Card title='lorem ipsum'
                    description='lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'  />        
  
            </div>
      </div>
    )
  }
  
  export default Services