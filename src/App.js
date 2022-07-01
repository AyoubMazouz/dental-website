// CSS Imports.
import "./App.css"
import "swiper/css"
// React Imports.
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// Components Imports.
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import PrivateRoute from "./components/PrivateRoute"
// Pages Imports.
import Home from "./pages/Home"
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import SignUp from "./pages/auth/SignUp"
import LogIn from "./pages/auth/LogIn"
import Blog from "./pages/Blog"
import EditPersonalInfo from "./pages/EditPersonalInfo"
import AddPersonalInfo from "./pages/AddPersonalInfo"
import PasswordReset from "./pages/auth/PasswordReset"
import Services from "./pages/Services"
import Service from "./pages/Services/Service"
import Page404 from "./pages/Page404"
import Admin from "./pages/admin"
// Context Imports.
import { AuthProvider } from "./contexts/AuthContext"
import { NotificationProvider } from "./contexts/NotificationContext"

const App = () => {
	return (
		<Router>
			<AuthProvider>
				<NotificationProvider>
					{/* NavBar */}
					<NavBar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/services" element={<Services />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/blog" element={<Blog />} />
						{/* Authentication */}
						<Route path="/signup" element={<SignUp />} />
						<Route path="/login" element={<LogIn />} />
						<Route path="/reset_password" element={<PasswordReset />} />
						{/* Services */}
						<Route path="/services" element={<Services />} />
						<Route path="/services/:serviceName" element={<Service />} />
						{/* Gallery */}
						<Route path="/gallery" element={<Gallery />} />
						<Route path="/gallery/:mediaPage" element={<Gallery />} />
						{/* Private Routes */}
						<Route element={<PrivateRoute />}>
							<Route path="/add-personal-info" element={<AddPersonalInfo />} />
							<Route
								path="/edit-personal-info"
								element={<EditPersonalInfo />}
							/>
							<Route path="/admin" element={<Admin />} />
							<Route path="/admin/:setting" element={<Admin />} />
						</Route>
						{/* 404 Page */}
						<Route path="*" element={<Page404 />} />
					</Routes>
					<Footer />
				</NotificationProvider>
			</AuthProvider>
		</Router>
	)
}

export default App
