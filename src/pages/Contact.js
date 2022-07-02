// Components Imports.
import Hero from "../components/Hero"
import ContactForm from "../components/ContactForm"
import GoogleMaps from "../components/GoogleMaps"
// Data Imports.
import { info } from "../data"

export default function Contact() {
	const heroValues = {
		imgUrl:
			"https://firebasestorage.googleapis.com/v0/b/dental-website-347119.appspot.com/o/other-images%2Fcontact.jpg?alt=media&token=ebe43041-f8ef-41a0-b4e7-66df58be2999",
		title: "Contact",
		description:
			"La teinte et la forme des dents sont des éléments essentiels de l'esthétique dentaire. Deux techniques possibles : le blanchiment dentaire qui vise à éclaircir les dents dont la coloration est trop foncée ou les facettes dentaires qui permettent de les rendre plus blanches, mais aussi de modifier l'aspect général des dents (forme, alignement).",
	}
	return (
		<div>
			{/* Hero Section */}
			<Hero {...heroValues} />
			{/* Contact */}
			<ContactForm />
			{/* GooGle Maps */}
			<div className="h-[480px] w-full">
				<GoogleMaps location={info.location} />
			</div>
		</div>
	)
}
