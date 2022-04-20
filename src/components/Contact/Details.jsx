import React from 'react'

const Details = ({ address, phone, time }) => {
  return (
    
        <div className="col-span-2 grid grid-cols-3 gap-2 bg-sky-400 py-4 px-6">
            {/* Address */}
            <div className="bg-sky-300 py-4 px-2 rounded">
                <h3 className="font-semibold">Addresse</h3>
                <p>{address}</p>
            </div>

            {/* Telephone */}
            <div className="bg-sky-300 py-4 px-2 rounded">
                <h3 className="font-semibold">Telephone</h3>
                {phone.map((v, id) => <p key={id}>{v}</p>)}
            </div>

            {/* Horaire */}
            <div className="bg-sky-300 py-4 px-2 rounded">
                <h3 className="font-semibold">Horaire</h3>
                <p>{time}</p>
            </div>

        </div>

  )
}

export default Details