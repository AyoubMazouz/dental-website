import CallToAction from "./CallToAction";



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

export default Home;