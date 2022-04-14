import { useEffect, useState } from 'react'
import { FaCalendar } from 'react-icons/fa'

const Home = () => {

    const imgs = ['img1','img2','img3','img4',]

    const [imgIndex, setImgIndex] = useState(0)

    useEffect( () => {
        setInterval(() => {
            setImgIndex(prev => prev === 3 ? 0 : prev + 1)
        }, 2000);   
    }, [])


    return (

        <main className={`bg-cover border-b-oval ${imgs[imgIndex]} transition-all duration-1000 ease-linear`}>

        <div className="min-h-[100vw] md:min-h-[90vw] lg:min-h-[90vh] w-full lg:max-w-[[1200px] flex items-center justify-center px-6">

            <div className="space-y-8 text-center">

                <h1 className="text-3xl sm:text-5xl lg:text-8xl text-white font-semibold capitalize">
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

                <div className='space-x-2'>

                    <button onClick={() => setImgIndex(0)}
                    className={imgIndex === 0 
                    ? 'h-2 w-6 rounded bg-sky-500 ring-2 ring-white'
                    : 'h-2 w-6 rounded bg-white '}>
                        
                    </button>

                    <button onClick={() => setImgIndex(1)}
                    className={imgIndex === 1 
                        ? 'h-2 w-6 rounded bg-sky-500 ring-2 ring-white'
                        : 'h-2 w-6 rounded bg-white '}>
                    </button>

                    <button onClick={() => setImgIndex(2)}
                    className={imgIndex === 2 
                        ? 'h-2 w-6 rounded bg-sky-500 ring-2 ring-white'
                        : 'h-2 w-6 rounded bg-white '}>
                    </button>

                    <button onClick={() => setImgIndex(3)}
                    className={imgIndex === 3 
                        ? 'h-2 w-6 rounded bg-sky-500 ring-2 ring-white'
                        : 'h-2 w-6 rounded bg-white '}>
                    </button>

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