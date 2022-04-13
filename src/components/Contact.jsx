


const Contact = () => {


    return (
        
        <div className="w-full flex justify-center">

            <div className="w-full lg:max-w-[1200px] px-12 md:px-24 py-12 grid grid-cols-2">

                {/* Heading */}
                <div className="col-span-2">
                    <h1 className="font-semibold text-xl">
                        Contact
                    </h1>
                </div>

                {/* Details */}
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

                <div className="py-12 px-6 space-y-4">

                    {/* FullName */}
                    <div className="flex flex-col">
                        <label htmlFor="full-name"
                            className="">
                            FullName
                        </label>
                        <input type="text"
                            name="full-name"
                            placeholder="full name"
                            className="h-10 bg-slate-100 rounded shadow" />
                    </div>
                    {/* Email */}
                    <div className="flex flex-col">
                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email"
                            name="email"
                            placeholder="email"
                            className="h-10 bg-slate-100 rounded shadow" />
                    </div>
                    {/* Phone */}
                    <div className="flex flex-col">
                        <label htmlFor="phone">
                            Phone
                        </label>
                        <input type="tel"
                            name="phone"
                            placeholder="phone"
                            className="h-10 bg-slate-100 rounded shadow" />
                    </div>
                    {/* Message */}
                    <div className="flex flex-col">
                        <label htmlFor="message">
                            Message
                        </label>
                        <textarea name="message" 
                            rows="4" cols="50"
                            className="h-10 bg-slate-100 rounded shadow">
                        </textarea>
                    </div>
                    {/* Submit btn */}
                    <button type="submit"
                            className="h-10 bg-slate-100 rounded shadow">Send</button>
                </div>

                {/* GoogleMaps */}
                <div className="w-full h-full">
                    <iframe
                        className="w-full h-full"
                        loading="lazy"
                        allowfullscreen
                        referrerpolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDKbBArDacDk5serVzGPim9D9A-zRLEOMA
                            &q=Space+Needle,Seattle+WA">
                    </iframe>
                 </div>

            </div>
  
        </div>


    )
}

export default Contact