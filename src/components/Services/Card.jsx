

const Card = ({ title, description, svg }) => {
  return (
    
    <div className='space-y-4 text-center bg-slate-100 rounded shadow-md px-6 py-4'>

        <h3 className='font-semibold'>
            {title}
        </h3>
        <p className='font-light'>
            {description}
        </p>

    </div>

  )
}

export default Card