import Card from "./Card"


const Review = () => {

    return (

        <div className='grid justify-center'>

            <div className='w-full max-w-[1200px] px-12 md:px-24 py-12 grid md:grid-cols-2 gap-16'>

                <Card name='ahmed halalouia' img='https://via.placeholder.com/60x60' comment='lorem ipsum' rating='1' />

                <Card name='ahmed halalouia' img='https://via.placeholder.com/60x60' comment='lorem ipsum' rating='5' />

                <Card name='ahmed halalouia' img='https://via.placeholder.com/60x60' comment='lorem ipsum' rating='3' />

                <Card name='ahmed halalouia' img='https://via.placeholder.com/60x60' comment='lorem ipsum' rating='4' />

            </div>

        </div>

    )
}

export default Review