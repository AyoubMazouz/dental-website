var regionsJson

fetch("./regions.json")
	.then((response) => response.json())
	.then((data) => {
		regionsJson = data
	})
	.catch((error) => console.log(error))

export const getRegions = () =>
	regionsJson && regionsJson.map((region) => region.name)
export const getCities = (r) =>
	regionsJson &&
	regionsJson.filter((region) => region.name === r)[0].cities_list

export const SERVICES_MD_URL =
	"https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/services%2Ftext%2Findex.md?alt=media&token=0156b3fe-14ac-49cf-bb6a-e5875e53a9de"
export const VIDEO_URL = ""
export const US_IMG =
	"https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/other-images%2Fus.jpg?alt=media&token=a70dcfaf-e08a-4da3-a9a2-0723f0cd797b"
export const SLIDESHOW_IMGS = [
	"https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/slideshow%2F01.jpg?alt=media&token=cc95b09d-55ca-4681-9ef7-c540d4779771",
	"https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/slideshow%2F02.jpg?alt=media&token=0cb45d22-84a7-429b-94dd-a94591e93801",
	"https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/slideshow%2F03.png?alt=media&token=6300dbd7-3c69-49c1-8970-eb898c2db87f",
	"https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/slideshow%2F04.jpg?alt=media&token=fb32ccdd-eb99-4663-9550-a3e2f456a964",
	"https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/slideshow%2F05.jpg?alt=media&token=28dc4c5f-1dba-44ae-8343-0621255584da",
	"https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/slideshow%2F06.jpg?alt=media&token=42d8364d-e67d-4ebf-8d14-c5c7fe4e5009",
]

export const links = {
	Home: "/",
	About: "/about",
	Services: {
		link: "/services",
		subLinks: {
			"Soins Dentaires": "/services/soins_dentaires",
			Pédodontie: "/services/pedodontie",
			Orthodontie: "/services/orthodontie",
			"Prothèses et implants dentaires":
				"/services/protheses_et_implants_dentaires",
			"Esthétique dentaire": "/services/esthetique_dentaire",
			"Radiologie dentaire": "/services/radiologie_dentaire",
			"Urgence dentaire": "/services/urgence_dentaire",
		},
	},
	Gallery: {
		link: "/gallery",
		subLinks: {
			Photos: "/gallery/photos",
			Videos: "/gallery/videos",
			"Before and after comparison": "/gallery/before_and_after",
		},
	},
	Contact: "/contact",
	Blog: "/blog",
}

export const info = {
	image:
		"https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/other-images%2Fus.jpg?alt=media&token=a70dcfaf-e08a-4da3-a9a2-0723f0cd797b",
	alt: "",
	phone: ["0555663829", "0555736252"],
	email: ["dentistemail@gmail.com"],
	address: "441, 2ème Etage Lot La Colline Californie, Casablanca",
	location: "",
	workHours: {
		lundi: "8:30 am - 6:00 pm",
		mardi: "8:30 am - 6:00 pm",
		mercredi: "8:30 am - 6:00 pm",
		jeudi: "8:30 am - 6:00 pm",
		vendredi: "8:30 am - 6:00 pm",
		samedi: "8:30 am - 6:00 pm",
	},
}

export const socialLinks = {
	facebook: "https://web.facebook.com",
	instagram: "https://www.instagram.com",
	twitter: "https://www.twitter.com",
	youtube: "https://www.youtube.com",
	linkedin: "https://www.linkedin.com",
	whatsapp: `https://api.whatsapp.com/send?phone=${info.phone[0]}`,
}

export const servicesData = {
	soins_dentaires: {
		imgUrl:
			"https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/services%2Fimages%2Fsoin-dentaire.jpg?alt=media&token=7ac38148-d3fd-4503-b52a-99f5f3144741",
		alt: "",
		currentPage: {
			parent: {
				label: "Services",
				link: "/services",
			},
			label: "Soins Dentaire",
		},
		title: "Soins dentaires",
		description:
			"Les soins dentaires sont multiples et variés et ont pour objectif de prévenir les maladies des dents et des gencives et/ou de les traiter pour conserver une bouche saine. En fonction de vos besoins, les tarifs des soins dentaires sont différents et un devis sera établi au préalable de manière transparente.",
		textUrl:
			"https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/services%2Ftext%2Fsoins_dentaires.md?alt=media&token=3df5431a-48bd-4c29-9d1d-812ea280b92b",
	},
	pedodontie: {
		imgUrl:
			"https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/services%2Fimages%2Fpedodontie.jpg?alt=media&token=c47b0297-4a34-413c-af43-299f3e31c4dc",
		alt: "",
		currentPage: {
			parent: {
				label: "Services",
				link: "/services",
			},
			label: "Pédodontie",
		},
		title: "Pédodontie",
		description:
			"La pédodontie est la dentisterie pédiatrique, c'est-à-dire la prise en charge des enfants qui nécessitent des soins dentaires.",
		textUrl:
			"https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/services%2Ftext%2Fpedodontie.md?alt=media&token=2016e441-396f-4dec-830b-9aba32c99b86",
	},
	orthodontie: {
		imgUrl:
			"https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/services%2Fimages%2Forthodontie.jpg?alt=media&token=dd3ca391-0f76-49cc-88a0-fc9aa2448f08",
		alt: "",
		currentPage: {
			parent: {
				label: "Services",
				link: "/services",
			},
			label: "Orthodontie",
		},
		title: "Orthodonties",
		description:
			"Nos praticiens assurent des traitements d'orthodontie qui consistent à déplacer les dents afin de retrouver un alignement harmonieux et corriger les dysfonctionnements incommodants au quotidien.",
		textUrl:
			"https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/services%2Ftext%2Forthodontie.md?alt=media&token=9cb2a58e-09b9-4dcd-a749-9058f5f98f7a",
	},
	protheses_et_implants_dentaires: {
		imgUrl:
			"https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/services%2Fimages%2Fprotheses-et-implants-dentaires.jpg?alt=media&token=5f4ac245-23ba-41c2-9d88-ac576d2fad8f",
		alt: "",
		currentPage: {
			parent: {
				label: "Services",
				link: "/services",
			},
			label: "Prothèses et implants_dentaires",
		},
		title: "Prothèses et implants dentaires",
		description:
			"Les prothèses et implants dentaires sont une solution qui permet de remplacer les dents abîmées ou manquantes, sur le long terme, afin de retrouver le confort et les propriétés esthétiques d'une bonne dentition. Des chirurgiens spécialistes vous accueillent dans tous nos centres dentaires pour vous conseiller et réaliser ces interventions.",
		textUrl:
			"https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/services%2Ftext%2Fprotheses_et_implants_dentaires.md?alt=media&token=8f325cf4-6c3b-447a-90e1-d3600cde16fa",
	},
	esthetique_dentaire: {
		imgUrl:
			"https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/services%2Fimages%2Festhetique_dentaire.jpg?alt=media&token=81d43630-01f6-432d-844f-bf8a340b609d",
		alt: "",
		currentPage: {
			parent: {
				label: "Services",
				link: "/services",
			},
			label: "Esthétique dentaire",
		},
		title: "Esthétique dentaire",
		description:
			"La radiologie est un complément d'examen indispensable à la disposition de votre chirurgien-dentiste.",
		textUrl:
			"https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/services%2Ftext%2Festhetique_dentaire.md?alt=media&token=96e7e761-8d79-48f4-9eff-6dc6dc995719",
	},
	radiologie_dentaire: {
		imgUrl:
			"https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/services%2Fimages%2Fradiologie%20dentaire.jpg?alt=media&token=904804ca-716c-40ec-bb75-4594d5c06326",
		alt: "",
		currentPage: {
			parent: {
				label: "Services",
				link: "/services",
			},
			label: "Radiologie dentaire",
		},
		title: "Radiologie dentaire",
		description:
			"La teinte et la forme des dents sont des éléments essentiels de l'esthétique dentaire. Deux techniques possibles : le blanchiment dentaire qui vise à éclaircir les dents dont la coloration est trop foncée ou les facettes dentaires qui permettent de les rendre plus blanches, mais aussi de modifier l'aspect général des dents (forme, alignement).",
		textUrl:
			"https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/services%2Ftext%2Fradiologie_dentaire.md?alt=media&token=68b08df2-98d7-4a2d-b941-3636a496a81a",
	},
	urgence_dentaire: {
		imgUrl:
			"https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/services%2Fimages%2Furgence-dentaire.jpg?alt=media&token=4e4e3626-4d66-41fc-abbe-056ab8471d54",
		alt: "",
		currentPage: {
			parent: {
				label: "Services",
				link: "/services",
			},
			label: "Urgence dentaire",
		},
		title: "Urgence dentaire",
		description:
			"Une urgence dentaire ne prévient pas quand elle arrive. Les centres de santé dentaires Clinadent présentent un service d'urgence dentaire et orthodontique sur rendez-vous du lundi au vendredi de 9h00 à 19h00, afin de traiter vos douleurs dentaires. Nos équipes de dentistes disponibles vous apporteront les soins afin de traiter votre infection et soulager votre douleur. Afin de limiter votre attente en fonction de la disponibilité et en accord avec les dentistes présents, nous vous conseillons de prendre rendez-vous par téléphone, sur notre site Clinadent ou via doctolib.",
		textUrl:
			"https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/services%2Ftext%2Furgence_dentaire.md?alt=media&token=53aa0ae6-407d-4746-8c9f-3282cf595450",
	},
}

export const stats = {
	home: [
		{
			title: "Dentistes et Assistantes dentaires",
			record: 1297,
		},
		{
			title: "Centres",
			record: 73,
		},
		{
			title: "Patients reçus",
			record: 891,
		},
		{
			title: "Note de satisfaction de nos patients",
			record: 9,
			after: "/10",
		},
	],
	about: [
		{
			title: "Dentistes et Assistantes dentaires",
			record: 1297,
		},
		{
			title: "Collaborateurs",
			record: 99,
		},
		{
			title: "Centres",
			record: 56,
		},
		{
			title: "Heures de formation avec l'Académie Dentego",
			record: 1980,
		},
		{
			title: "Rendez-vous en 2021",
			record: 840,
		},
		{
			title: "Note de satisfaction de nos patients",
			record: 9,
			after: "/10",
		},
	],
}
