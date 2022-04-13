


const Gallery = () => {


    return (

        <div className="w-full flex justify-center">

            <div className="w-full lg:max-w-[1200px] px-12 md:px-24 py-12 --grid">

                <div className="w-full h-full col-span-12 row-span-3 lg:col-span-7 lg:row-span-3">
                    <Image link='https://source.unsplash.com/1600x900/?nature' />
                </div>

                <div className="w-full h-full col-span-7 row-span-2 lg:col-span-5 lg:row-span-3">
                    <Image link='https://source.unsplash.com/1600x900/?food' />
                </div>

                <div className="w-full h-full col-span-5 row-span-2 lg:col-span-5 lg:row-span-2">
                    <Image link='https://source.unsplash.com/1600x900/?fruits' />
                </div>

                <div className="w-full h-full col-span-6 row-span-2 lg:col-span-4 lg:row-span-2">
                    <Image link='https://source.unsplash.com/1600x900/?cars' />
                </div>

                <div className="w-full h-full col-span-3 row-span-3 lg:col-span-3 lg:row-span-3">
                    <Image link='https://source.unsplash.com/1600x900/?dentist' />
                </div>

                <div className="w-full h-full col-span-3 row-span-2 lg:col-span-3 lg:row-span-3">
                    <Image link='https://source.unsplash.com/1600x900/?sports' />
                </div>

                <div className="w-full h-full col-span-6 row-span-2 lg:col-span-6 lg:row-span-3">
                    <Image link='https://source.unsplash.com/1600x900/?books' />
                </div>

                <div className="w-full h-full col-span-3 row-span-1 lg:col-span-3 lg:row-span-2">
                    <Image link='https://source.unsplash.com/1600x900/?games' />
                </div>

                <div className="w-full h-full col-span-6 row-span-2 lg:col-span-8 lg:row-span-2">
                    <Image link='https://source.unsplash.com/1600x900/?work' />
                </div>

                <div className="w-full h-full col-span-6 row-span-1 lg:col-span-4 lg:row-span-2">
                    <Image link='https://source.unsplash.com/1600x900/?sea' />
                </div>

                <div className="w-full h-full col-span-4 row-span-3 lg:col-span-5 lg:row-span-3">
                    <Image link='https://source.unsplash.com/1600x900/?animals' />
                </div>

                <div className="w-full h-full col-span-8 row-span-3 lg:col-span-7 lg:row-span-3">
                    <Image link='https://source.unsplash.com/1600x900/?plantes' />
                </div>

            </div>

        </div>

    )
}

const Image = ({ link }) => {
    return (
        <img src={link} alt="" 
                    className="w-full h-full object-cover object-center"/>
    )
}

export default Gallery