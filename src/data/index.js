var regionsJson
;(() => {
	fetch("./regions.json")
		.then((response) => response.json())
		.then((data) => (regionsJson = data))
		.catch((error) => console.warn(error))
})()

export const getRegions = () =>
	regionsJson ? regionsJson.map((region) => region.name) : []

export const getCities = (r) =>
	regionsJson
		? regionsJson.filter((region) => region.name === r)[0].cities_list
		: []

export const US_IMG = "assets/us.jpg"
export const SLIDESHOW_IMGS = [
	"/assets/slideshow/01.jpg",
	"/assets/slideshow/02.jpg",
	"/assets/slideshow/03.jpg",
	"/assets/slideshow/04.jpg",
	"/assets/slideshow/05.jpg",
	"/assets/slideshow/06.jpg",
]
export const VIDEO_URL = ""
export const videos = [
	"3wvVrkMKim8",
	"5foz3iEcWa8",
	"5iqacqOM7Vs",
	"CKTrZMrTXdo",
	"Dwd1kdQCxVM",
	"EhLx82GY2KU",
	"FWRzXI552qo",
	"G_lspojuA0U",
	"HnznMKZONno",
	"IFINj25t59w",
	"MPhZ8mkJZlM",
	"QSP3eNr-W9Y",
	"X04XNg99BlY",
	"ZtjYjc2lb0s",
	"aZK1PqWdrqk",
	"dty-NTBIbEI",
	"fGxsHwrcTg4",
	"gue-ECgoRTc",
	"kO_pRxqmGHI",
	"vb0pIE9OQGw",
]
export const photos = [
	"/assets/gallery/01.jpg",
	"/assets/gallery/02.jpg",
	"/assets/gallery/03.jpg",
	"/assets/gallery/04.jpg",
	"/assets/gallery/05.jpg",
	"/assets/gallery/06.jpg",
	"/assets/gallery/07.jpg",
	"/assets/gallery/08.jpg",
	"/assets/gallery/09.jpg",
	"/assets/gallery/10.jpg",
	"/assets/gallery/11.jpg",
	"/assets/gallery/12.jpg",
	"/assets/gallery/13.jpg",
	"/assets/gallery/14.jpg",
	"/assets/gallery/15.jpg",
	"/assets/gallery/16.jpg",
	"/assets/gallery/17.jpg",
	"/assets/gallery/18.jpg",
	"/assets/gallery/19.jpg",
	"/assets/gallery/20.jpg",
	"/assets/gallery/21.jpg",
	"/assets/gallery/22.jpg",
	"/assets/gallery/23.jpg",
	"/assets/gallery/24.jpg",
	"/assets/gallery/25.jpg",
	"/assets/gallery/26.jpg",
	"/assets/gallery/27.jpg",
	"/assets/gallery/28.jpg",
	"/assets/gallery/29.jpg",
	"/assets/gallery/30.jpg",
	"/assets/gallery/31.jpg",
	"/assets/gallery/32.jpg",
	"/assets/gallery/33.jpg",
	"/assets/gallery/34.jpg",
	"/assets/gallery/35.jpg",
	"/assets/gallery/36.jpg",
	"/assets/gallery/37.jpg",
	"/assets/gallery/38.jpg",
	"/assets/gallery/39.jpg",
	"/assets/gallery/40.jpg",
	"/assets/gallery/41.jpg",
	"/assets/gallery/42.jpg",
	"/assets/gallery/43.jpg",
	"/assets/gallery/44.jpg",
	"/assets/gallery/45.jpg",
	"/assets/gallery/46.jpg",
	"/assets/gallery/47.jpg",
	"/assets/gallery/48.jpg",
	"/assets/gallery/49.jpg",
	"/assets/gallery/50.jpg",
	"/assets/gallery/51.jpg",
	"/assets/gallery/52.jpg",
	"/assets/gallery/53.jpg",
]

export const beforeAndAfter = [
	[
		"/assets/before_and_after/before01.png",
		"/assets/before_and_after/after01.png",
	],
	[
		"/assets/before_and_after/before02.png",
		"/assets/before_and_after/after02.png",
	],
	[
		"/assets/before_and_after/before03.png",
		"/assets/before_and_after/after03.png",
	],
	[
		"/assets/before_and_after/before04.png",
		"/assets/before_and_after/after04.png",
	],
	[
		"/assets/before_and_after/before05.png",
		"/assets/before_and_after/after05.png",
	],
	[
		"/assets/before_and_after/before06.png",
		"/assets/before_and_after/after06.png",
	],
	[
		"/assets/before_and_after/before07.png",
		"/assets/before_and_after/after07.png",
	],
	[
		"/assets/before_and_after/before08.png",
		"/assets/before_and_after/after08.png",
	],
	[
		"/assets/before_and_after/before09.png",
		"/assets/before_and_after/after09.png",
	],
	[
		"/assets/before_and_after/before10.png",
		"/assets/before_and_after/after10.png",
	],
	[
		"/assets/before_and_after/before11.png",
		"/assets/before_and_after/after11.png",
	],
	[
		"/assets/before_and_after/before12.png",
		"/assets/before_and_after/after12.png",
	],
	[
		"/assets/before_and_after/before13.png",
		"/assets/before_and_after/after13.png",
	],
	[
		"/assets/before_and_after/before14.png",
		"/assets/before_and_after/after14.png",
	],
	[
		"/assets/before_and_after/before15.png",
		"/assets/before_and_after/after15.png",
	],
]

export const servicesData = {
	soins_dentaires: {
		imgUrl: "/assets/services/images/soins_dentaires.jpg",
		parent: "Services",
		title: "Soins dentaires",
		link: "soins_dentaires",
		description:
			"Les soins dentaires sont multiples et variés et ont pour objectif de prévenir les maladies des dents et des gencives et/ou de les traiter pour conserver une bouche saine. En fonction de vos besoins, les tarifs des soins dentaires sont différents et un devis sera établi au préalable de manière transparente.",
	},
	pedodontie: {
		imgUrl: "/assets/services/images/pedodontie.jpg",
		parent: "Services",
		title: "Pédodontie",
		link: "pedodontie",
		description:
			"La pédodontie est la dentisterie pédiatrique, c'est-à-dire la prise en charge des enfants qui nécessitent des soins dentaires.",
	},
	orthodontie: {
		imgUrl: "/assets/services/images/orthodonties.jpg",
		parent: "Services",
		link: "orthodonties",
		title: "Orthodonties",
		description:
			"Nos praticiens assurent des traitements d'orthodontie qui consistent à déplacer les dents afin de retrouver un alignement harmonieux et corriger les dysfonctionnements incommodants au quotidien.",
	},
	protheses_et_implants_dentaires: {
		imgUrl: "/assets/services/images/protheses_et_implants_dentaires.jpg",
		parent: "Services",
		title: "Prothèses et implants dentaires",
		link: "protheses_et_implants_dentaires",
		description:
			"Les prothèses et implants dentaires sont une solution qui permet de remplacer les dents abîmées ou manquantes, sur le long terme, afin de retrouver le confort et les propriétés esthétiques d'une bonne dentition. Des chirurgiens spécialistes vous accueillent dans tous nos centres dentaires pour vous conseiller et réaliser ces interventions.",
	},
	esthetique_dentaire: {
		imgUrl: "/assets/services/images/esthetique_dentaire.jpg",
		parent: "Services",
		title: "Esthétique dentaire",
		link: "esthetique_dentaire",
		description:
			"La radiologie est un complément d'examen indispensable à la disposition de votre chirurgien-dentiste.",
	},
	radiologie_dentaire: {
		imgUrl: "/assets/services/images/radiologie_dentaire.jpg",
		link: "radiologie_dentaire",
		parent: "Services",
		title: "Radiologie dentaire",
		description:
			"La teinte et la forme des dents sont des éléments essentiels de l'esthétique dentaire. Deux techniques possibles : le blanchiment dentaire qui vise à éclaircir les dents dont la coloration est trop foncée ou les facettes dentaires qui permettent de les rendre plus blanches, mais aussi de modifier l'aspect général des dents (forme, alignement).",
	},
	urgence_dentaire: {
		imgUrl: "/assets/services/images/urgence_dentaire.jpg",
		parent: "Services",
		title: "Urgence dentaire",
		link: "urgence_dentaire",
		description:
			"Une urgence dentaire ne prévient pas quand elle arrive. Les centres de santé dentaires Clinadent présentent un service d'urgence dentaire et orthodontique sur rendez-vous du lundi au vendredi de 9h00 à 19h00, afin de traiter vos douleurs dentaires. Nos équipes de dentistes disponibles vous apporteront les soins afin de traiter votre infection et soulager votre douleur. Afin de limiter votre attente en fonction de la disponibilité et en accord avec les dentistes présents, nous vous conseillons de prendre rendez-vous par téléphone, sur notre site Clinadent ou via doctolib.",
	},
}
