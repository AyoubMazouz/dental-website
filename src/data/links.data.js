import { info } from "./info.data"

export const links = {
	Accueil: "/",
	"À-propos": "/about",
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
			"Avant et aprés": "/gallery/before_and_after",
		},
	},
	Contact: "/contact",
}

export const socialLinks = {
	facebook: "https://web.facebook.com",
	instagram: "https://www.instagram.com",
	twitter: "https://www.twitter.com",
	youtube: "https://www.youtube.com",
	linkedin: "https://www.linkedin.com",
	whatsapp: `https://api.whatsapp.com/send?phone=${info.phone[0]}`,
}
