import Details from "./Details"


const Footer = () => {
  return (
    
    <div className="w-full flex justify-center bg-sky-400">
        <div className="w-full lg:max-w-[1200px] px-12 md:px-24 py-12 grid grid-cols-2">
            <div>This is a Logo</div>
            <div>
                <p>Chraibi Dental Clinic, une clinique multi-spécialiste pour traiter l'ensemble de vos besoins dentaires.</p>
            </div>
            <div>
                <ul className=''>
                    <a className='nav-links'href="#">Home</a>
                    <a className='nav-links'href="#">About</a>
                    <a className='nav-links'href="#">Services</a>
                    <a className='nav-links'href="#">Gallery</a>
                </ul>
            </div>
            <Details />
        </div>
    </div>

  )
}

export default Footer