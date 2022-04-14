


const Footer = () => {


    return (

        <div className="w-full flex justify-center bg-sky-400">

            <div className="w-full lg:max-w-[1200px] px-12 md:px-24 py-12 grid grid-cols-2">

                <div>
                    <Logo />
                </div>

                <div>
                    <p>
                        Chraibi Dental Clinic, une clinique multi-spécialiste pour traiter l'ensemble de vos besoins dentaires.
                    </p>
                </div>

                <div>
                    <ul className=''>

                        <a className='nav-links'
                        href="#">
                        Home</a>
                        <a className='nav-links'
                        href="#">
                        About</a>
                        <a className='nav-links'
                        href="#">
                        Services</a>
                        <a className='nav-links'
                        href="#">
                        Gallery</a>

                    </ul>
                </div>

                {/* Details */}
                <div className="col-span-2 grid grid-cols-3 gap-2 py-4 px-6">
                    {/* Address */}
                    <div className="bg-sky-300 py-4 px-2 rounded">

                        <h3 className="font-semibold">
                            Addresse
                        </h3>
                        <p>441, 2ème Etage Lot La Colline Californie ( en face siège Inwi ), Casablanca</p>

                    </div>

                    {/* Telephone */}
                    <div className="bg-sky-300 py-4 px-2 rounded">

                        <h3 className="font-semibold">
                            Telephone
                        </h3>
                        <p>05227-84296</p>
                        <p>05344-87696</p>

                    </div>

                    {/* Horaire */}
                    <div className="bg-sky-300 py-4 px-2 rounded">

                        <h3 className="font-semibold">
                            Horaire
                        </h3>
                        <p>Notre clinique vous informe que l'horaire de travail est de 9h à 19h sauf Samedi de 9h à 15h</p>

                    </div>

                </div>

            </div>

        </div>

    )
}

const Logo = () => {
    return (
      <a href="#"
        className='text-lg text-slate-700 capitalize' >
        dental
        <span className="font-semibold text-sky-500">
          Care
        </span>
      </a>
    )
  }

export default Footer