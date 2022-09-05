// CSS Imports.
import "./App.css"
import "swiper/css"
// React Imports.
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// Components Imports.
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
// Pages Imports.
import Home from "./pages/Home"
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import Services from "./pages/Services"
import Service from "./pages/Services/Service"
import Page404 from "./pages/Page404"
// Context Imports.
import { NotificationProvider } from "./contexts/NotificationContext"

const App = () => {
	return (
		<Router>
			<NotificationProvider>
				{/* NavBar */}
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/services" element={<Services />} />
					<Route path="/contact" element={<Contact />} />
					{/* Services */}
					<Route path="/services" element={<Services />} />
					<Route path="/services/:serviceId" element={<Service />} />
					{/* Gallery */}
					<Route path="/gallery" element={<Gallery />} />
					<Route path="/gallery/:mediaPage" element={<Gallery />} />
					{/* 404 Page */}
					<Route path="*" element={<Page404 />} />
				</Routes>
				<Footer />
			</NotificationProvider>
		</Router>
	)
}

export default App
