import CallToAction from "./CallToAction";



const Home = () => {


    return (

        <main className="min-h-[80vh] flex justify-center items-center">

        <div className="space-y-4 -mt-12">
            <h1 className="text-3xl text-sky-500 font-semibold capitalize">
                your health care is our purpose
            </h1>
            <h3 className="text-slate-500 pl-4">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </h3>

            <div>
            <CallToAction />
            </div>

        </div>

</main>

    )
}

export default Home;