import { FaCalendar } from 'react-icons/fa'

const Home = () => {


    return (

        <main className="bg-[url('./media/img.png')] bg-cover border-b-oval">

        <div className="min-h-[100vw] md:min-h-[90vw] lg:min-h-[90vh] w-full lg:max-w-[[1200px] flex items-center justify-center px-6">

            <div className="space-y-8 text-center">

                <h1 className="text-3xl sm:text-5xl lg:text-6xl text-white font-semibold capitalize">
                    votre clinique
                    <br /> dentaire à 
                    <br /> casablanca pour un
                    <br /> beau sourire
                </h1>

                <h3 className="text-white text-lg sm:text-xl">
                Prenez le meilleur traitement de Qualité chez votre dentiste à Sidi Maarouf Casablanca 
                </h3>

                <div>
                    <CallToAction />
                </div>

            </div>

        </div>

</main>

    )
}

const CallToAction = () => {
    return (
      <a href="#"
        className={`capitalize px-2 py-1 rounded text-sky-500 border-2 border-sky-500 hover:shadow-lg hover:shadow-sky-500 hover:bg-sky-500 hover:text-slate-100 trans flex w-56 m-auto`}>
        <FaCalendar className='mr-3' />Prenez rendez vous
      </a>
    )
}

export default Home;