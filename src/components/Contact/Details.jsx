import React from 'react'

const Details = () => {
  return (
    
        <div className="col-span-2 grid grid-cols-3 gap-2 bg-sky-400 py-4 px-6">
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

  )
}

export default Details