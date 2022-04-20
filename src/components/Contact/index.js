import Details from "./Details"
import Form from "./Form"
import GoogleMaps from "./GoogleMaps"
import { details, location } from './data'

const Contact = () => {


    

    

    return (
        
        <div className="w-full flex justify-center">

            <div className="w-full lg:max-w-[1200px] px-12 md:px-24 py-12 grid grid-cols-2">

                {/* Heading */}
                <div className="col-span-2">
                    <h1 className="font-semibold text-xl">Contact</h1>
                </div>

                <Details {...details} />
                <Form />
                <GoogleMaps location={location} />

            </div>
  
        </div>


    )
}

export default Contact