
export const regions = require('./regions.json')
export const getRegions = regions.map(region => [region.name, region.name])
export const getCities = (r) => {
    const region = regions.filter(region => (region.name === r))
    return region[0].cities_list.map(city => [city, city])
}

export const links = [
    {
        label: 'Home',
        link: '/',
    },
    {
        label: 'About',
        link: '/about',
    },
    {
        label: 'Services',
        link: '/services',
        subLinks: [
            {
                label: 'Soins Dentaires',
                link: '/services/soins_dentaires',
            },
            {
                label: 'Pédodontie',
                link: '/services/pedodontie',
            },
            {
                label: 'Orthodontie',
                link: '/services/orthodontie',
            },
            {
                label: 'Prothèses et implants dentaires',
                link: '/services/protheses_et_implants_dentaires',
            },
        ]
    },
    {
        label: 'Gallery',
        link: '/gallery',
    },
    {
        label: 'Contact',
        link: '/contact',
    },
    {
        label: 'Blog',
        link: '/blog',
    },  
]

export const info = {
    image: 'https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/other-images%2Fus.jpg?alt=media&token=a70dcfaf-e08a-4da3-a9a2-0723f0cd797b',
    alt: '',
    phone: ['0555663829', '0555736252'],
    email: ['dentistemail@gmail.com'],
    address: '441, 2ème Etage Lot La Colline Californie, Casablanca',
    location: '',
    social: {
        facebook: '#',
        instagram: '#',
        twitter: '#',
        youtube: '#',
        linkedin: '#',
        whatsapp: '#',
    },
    workHours: [
        {
            day: 'lundi',
            time: '8:30 am - 6:00 pm',
        },
        {
            day: 'mardi',
            time: '8:30 am - 6:00 pm',
        },
        {
            day: 'mercredi',
            time: '8:30 am - 6:00 pm',
        },
        {
            day: 'jeudi',
            time: '8:30 am - 6:00 pm',
        },
        {
            day: 'vendredi',
            time: '8:30 am - 6:00 pm',
        },
        {
            day: 'samedi',
            time: '8:30 am - 6:00 pm',
        },
    ],
}
export const stats = {
    home: [
        {
            title: 'Dentistes et Assistantes dentaires',
            record: 1297,
        },
        {
            title: 'Centres',
            record: 73,
        },
        {
            title: 'Patients reçus',
            record: 891,
        },
        {
            title: 'Note de satisfaction de nos patients',
            record: 9,
            after: '/10'
        },
    ],
    about: [
        {
            title: 'Dentistes et Assistantes dentaires',
            record: 1297,
        },
        {
            title: 'Collaborateurs',
            record: 99,
        },
        {
            title: 'Centres',
            record: 56,
        },
        {
            title: "Heures de formation avec l'Académie Dentego",
            record: 1980,
        },
        {
            title: 'Rendez-vous en 2021',
            record: 840,
        },
        {
            title: 'Note de satisfaction de nos patients',
            record: 9,
            after: '/10'
        },
    ]
}
export const profiles = [
    {
        url: 'https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/profiles%2Fprofile01.jpg?alt=media&token=854feb9c-47a2-4f6f-b333-f8264c922327',
        name: 'Dr.Hanan Nehroui',
        profession: 'assistant dentaire', 
        alt: '',
        details: 'Binôme du chirurgien-dentiste, l’assistant dentaire exerce une profession polyvalente et enrichissante, dédiée à l’assistanat aux soins dentaires. Sur cette page, nous vous expliquons tout ce qu’il faut savoir sur le métier d’assistant dentaire !',
        facebook: '#',
        youtube: '#',
        instagram: '#'
    },
    {
        url: 'https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/profiles%2Fprofile03.jpg?alt=media&token=7feb10be-62b4-456e-b84a-9614e838627e',
        profession: 'Chirurgien dentiste', 
        alt: '',
        details: 'Spécialiste des interventions chirurgicales dentaires et buccales, le chirurgien-dentiste exerce une profession passionnante et particulièrement exigeante au quotidien. Sur cette page, nous vous expliquons tout ce qu’il faut savoir sur le métier de chirurgien-dentiste !',
        facebook: '#',
        youtube: '#',
        instagram: '#',
    },
    {
        url: 'https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/profiles%2Fprofile04.jpg?alt=media&token=ae14bc58-1163-4d4d-b20a-316fdf77960c',
        name: 'Dr.Hanan Nehroui',
        profession: 'Chirurgien dentiste', 
        alt: '',
        details: 'Spécialiste des interventions chirurgicales dentaires et buccales, le chirurgien-dentiste exerce une profession passionnante et particulièrement exigeante au quotidien. Sur cette page, nous vous expliquons tout ce qu’il faut savoir sur le métier de chirurgien-dentiste !',
        facebook: '#',
        youtube: '#',
        instagram: '#',
    },
    {
        url: 'https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/profiles%2Fprofile05.jpg?alt=media&token=78d42186-4dde-4129-9e45-f577d7cb68c7',
        name: 'Dr.Hanan Nehroui',
        profession: 'Chirurgien dentiste', 
        alt: '',
        details: 'Spécialiste des interventions chirurgicales dentaires et buccales, le chirurgien-dentiste exerce une profession passionnante et particulièrement exigeante au quotidien. Sur cette page, nous vous expliquons tout ce qu’il faut savoir sur le métier de chirurgien-dentiste !',
        facebook: '#',
        youtube: '#',
        instagram: '#',
    },
]
export const slideShow = {
    header: "Dentego, le meilleur de la santé dentaire, pour tous",
    images: [
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/slideshow%2Fimg1.png?alt=media&token=b148c61a-e82d-4cc3-a9c9-59d95524092b',
            alt: 'imageAlternative',
        },
        {
            img: 'https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/slideshow%2Fimg2.png?alt=media&token=1409d12d-82a6-48dd-b9ac-22f92d7d992c',
            alt: 'imageAlternative',
        },
    ]
}
export const about = {
    home: {
        header: 'Lorem ipsum dolor sit amet.',
        content: "Rejoindre Dentego, c'est exercer avec ses collaborateurs dans un environnement agréable et épanouissant, au sein d'équipes solidaires où le partage d'expériences permet à tout un chacun d'évoluer et de progresser continuellement.Dentego accueille ses collaborateurs au sein de centres modernes et parfaitement équipés des dernières technologies où tout est mis en œuvre pour que l'activité des Chirurgiens-dentistes et des Assistant(e)s Dentaires, soit exclusivement dédiée aux soins des patients.Chacun peut évoluer et progresser grâce à la promotion en interne et à la formation via l'Académie Dentego."
    },
    header: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cumque esse sequi quibusdam nihil illo nulla neque delectus dicta facere temporibus autem quas unde ut repudiandae velit veritatis et officia commodi pariatur, nostrum eius totam dolorum ab. Delenium aperiam similique temporibus tempora, voluptate explicabo debitis officia! Nam explicabo molestias consequatur.',
    video: 'https://www.youtube.com/embed/9YffrCViTVk?autoplay=0&fs=1&iv_load_policy=1&showinfo=1&rel=0&cc_load_policy=1&start=0&end=0&origin=http://youtubeembedcode.com',
    url: 'https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/other-images%2Fus.jpg?alt=media&token=a70dcfaf-e08a-4da3-a9a2-0723f0cd797b',
    atl: '',
}


export const reviews = {
    header: {
        title: 'Des traitements dentaires adaptés à vos besoins et au prix le plus juste',
        content: 'Chez Dentego, nous vous garantissons des traitements dentaires adaptés à vos besoins, prodigués par le dentiste de votre choix, au prix le plus juste et avec une prise en charge rapide, globale et personnalisée.',
    }, 
    reviews: [
        {
            name: 'Mr. ahmed halalouia',
            title: 'As Good As Advertised',
            rating: 5,
            date: '11:34pm Sat jun 2021',
            source: 'Google',
            comment: 'We never take.'
        },
        {
            name: 'Mr. ahmed halalouia',
            date: '11:34pm Sat jun 2021',
            title: 'As Good As Advertised',
            rating: 4,
            source: 'Google',
            comment: 'We never take a one-size-fits-all approach to dental bridges.'
        },
        {
            name: 'Mr. ahmed halalouia',
            date: '11:34pm Sat jun 2021',
            title: 'As Good As Advertised',
            rating: 2,
            source: 'Google',
            comment: 'We never take a one-size-fits-all approach to dental bridges. Dr. Chern will evaluate your missing teeth, working closely with our team to create a custom solution. We never take a one-size-fits-all approach to dental bridges.'
        },
        {
            name: 'Mr. ahmed halalouia',
            date: '11:34pm Sat jun 2021',
            title: 'As Good As Advertised',
            rating: 1,
            source: 'Google',
            comment: 'We never take a one-size-fits-all approach to dental bridges. Dr. Chern will evaluate your missing teeth, working closely with our team to create a custom solution. We never take a one-size-fits-all approach to dental bridges.'
        },
    ]
}
export const comparisonImgs = [
    {
        alt   : '',
        before: 'https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/before-and-after%2Fbefore1.png?alt=media&token=95e6d501-d28a-4a1f-8ba6-50d122daed89',
        after : 'https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/before-and-after%2Fafter1.png?alt=media&token=728ed386-dc70-4155-9b3c-12e02448fd1e',
    },
    {
        alt   : '',
        before: 'https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/before-and-after%2Fbefore1.png?alt=media&token=95e6d501-d28a-4a1f-8ba6-50d122daed89',
        after : 'https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/before-and-after%2Fafter1.png?alt=media&token=728ed386-dc70-4155-9b3c-12e02448fd1e',
    },
    {
        alt   : '',
        before: 'https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/before-and-after%2Fbefore1.png?alt=media&token=95e6d501-d28a-4a1f-8ba6-50d122daed89',
        after : 'https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/before-and-after%2Fafter1.png?alt=media&token=728ed386-dc70-4155-9b3c-12e02448fd1e',
    },
    {
        alt   : '',
        before: 'https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/before-and-after%2Fbefore1.png?alt=media&token=95e6d501-d28a-4a1f-8ba6-50d122daed89',
        after : 'https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/before-and-after%2Fafter1.png?alt=media&token=728ed386-dc70-4155-9b3c-12e02448fd1e',
    },
]
// Faq

