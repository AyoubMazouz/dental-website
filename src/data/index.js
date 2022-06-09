
export const regions = require('./regions.json')
export const getRegions = regions.map(region => [region.name, region.name])
export const getCities = (r) => {
    const region = regions.filter(region => (region.name === r))
    return region[0].cities_list.map(city => [city, city])
}

export const VIDEO_URL = ''
export const ABOUT_HERO_IMG = 'https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/other-images%2Fabout_hero.png?alt=media&token=ca1ac0e0-92ae-405a-aacc-6005e2828742'
export const ABOUT_US_IMG = 'https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/other-images%2Fus.jpg?alt=media&token=a70dcfaf-e08a-4da3-a9a2-0723f0cd797b'
export const SLIDESHOW_IMGS = [
    'https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/slideshow%2Fimg1.png?alt=media&token=b148c61a-e82d-4cc3-a9c9-59d95524092b',
    'https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/slideshow%2Fimg2.png?alt=media&token=1409d12d-82a6-48dd-b9ac-22f92d7d992c',
]

export const links = {
    "Home": '/',
    "About": '/about',
    "Services": {
        link: '/services',
        subLinks: {
            "Soins Dentaires": '/services/soins_dentaires',
            "Pédodontie": '/services/pedodontie',
            "Orthodontie": '/services/orthodontie',
            "Prothèses et implants dentaires": '/services/protheses_et_implants_dentaires',
            "Esthétique dentaire": '/services/esthetique_dentaire',
        }
    },
    "Gallery": '/gallery',
    "Contact": '/contact',
    "Blog": '/blog',
}

export const socialLinks = {
    facebook: '#',
    instagram: '#',
    twitter: '#',
    youtube: '#',
    linkedin: '#',
    whatsapp: '#',
}

export const info = {
    image: 'https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/other-images%2Fus.jpg?alt=media&token=a70dcfaf-e08a-4da3-a9a2-0723f0cd797b',
    alt: '',
    phone: ['0555663829', '0555736252'],
    email: ['dentistemail@gmail.com'],
    address: '441, 2ème Etage Lot La Colline Californie, Casablanca',
    location: '',
    workHours: {
        "lundi": '8:30 am - 6:00 pm',
        "mardi": '8:30 am - 6:00 pm',
        "mercredi": '8:30 am - 6:00 pm',
        "jeudi": '8:30 am - 6:00 pm',
        "vendredi": '8:30 am - 6:00 pm',
        "samedi": '8:30 am - 6:00 pm',
    }
}

export const servicesData = {
    "soins_dentaires": {
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/services%2Fsoin-dentaire.jpg?alt=media&token=2d1bf996-2aad-4533-8bdf-2089f4939ff0',
        alt: '',
        currentPage: {
            parent: {
                label: 'Services',
                link: '/services',
            }, 
            label: 'Soins Dentaire',
        },
        title: 'Soins dentaires',
        description: "Les soins dentaires sont multiples et variés et ont pour objectif de prévenir les maladies des dents et des gencives et/ou de les traiter pour conserver une bouche saine. En fonction de vos besoins, les tarifs des soins dentaires sont différents et un devis sera établi au préalable de manière transparente.",
        textUrl: "https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/services%2Ftext%2Fsoins_dentaires.md?alt=media&token=3df5431a-48bd-4c29-9d1d-812ea280b92b" 
    },
    "pedodontie": {
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/services%2Fpedodontie.png?alt=media&token=d20d10fe-467f-43d9-826e-f1945309c712',
        alt: '',
        currentPage: {
            parent: {
                label: 'Services',
                link: '/services',
            }, 
            label: 'Pédodontie',
        },
        title: 'Pédodontie',
        description: "La pédodontie est la dentisterie pédiatrique, c'est-à-dire la prise en charge des enfants qui nécessitent des soins dentaires.",
        textUrl: "https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/services%2Ftext%2Fpedodontie.md?alt=media&token=2016e441-396f-4dec-830b-9aba32c99b86"
    },
    "orthodontie": {
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/services%2Forthodontie.jpg?alt=media&token=167787b4-57d6-4828-b862-c40ea9583d09',
        alt: '',
        currentPage: {
            parent: {
                label: 'Services',
                link: '/services',
            }, 
            label: 'Orthodontie',
        },
        title: 'Orthodonties',
        description: "Nos praticiens assurent des traitements d'orthodontie qui consistent à déplacer les dents afin de retrouver un alignement harmonieux et corriger les dysfonctionnements incommodants au quotidien.",
        textUrl: "https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/services%2Ftext%2Forthodontie.md?alt=media&token=9cb2a58e-09b9-4dcd-a749-9058f5f98f7a"
    },
    "protheses_et_implants_dentaires": {
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/services%2Fprotheses-et-implants-dentaires.jpg?alt=media&token=46fc5b1d-8b31-4168-9ecf-11ca54898636',
        alt: '',
        currentPage: {
            parent: {
                label: 'Services',
                link: '/services',
            }, 
            label: 'Prothèses et implants_dentaires',
        },
        title: 'Prothèses et implants dentaires',
        description: "Les prothèses et implants dentaires sont une solution qui permet de remplacer les dents abîmées ou manquantes, sur le long terme, afin de retrouver le confort et les propriétés esthétiques d'une bonne dentition. Des chirurgiens spécialistes vous accueillent dans tous nos centres dentaires pour vous conseiller et réaliser ces interventions.",
        textUrl: "https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/services%2Ftext%2Fprotheses_et_implants_dentaires.md?alt=media&token=8f325cf4-6c3b-447a-90e1-d3600cde16fa"
    },
    "esthetique_dentaire": {
        imgUrl: 'https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/services%2Fimages%2Festhetique_dentaire.jpg?alt=media&token=6fe8d90c-d00f-4849-aa51-8878bad513b9',
        alt: '',
        currentPage: {
            parent: {
                label: 'Services',
                link: '/services',
            }, 
            label: 'Esthétique dentaire',
        },
        title: 'Esthétique dentaire',
        description: "La teinte et la forme des dents sont des éléments essentiels de l'esthétique dentaire. Deux techniques possibles : le blanchiment dentaire qui vise à éclaircir les dents dont la coloration est trop foncée ou les facettes dentaires qui permettent de les rendre plus blanches, mais aussi de modifier l'aspect général des dents (forme, alignement).",
        textUrl: "https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/services%2Ftext%2Festhetique_dentaire.md?alt=media&token=96e7e761-8d79-48f4-9eff-6dc6dc995719"
    },
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