// CSS Imports.
import "./App.css"
import "swiper/css"
// React Imports.
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// Components Imports.
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import PrivateRoute from "./components/PrivateRoute"
import HideAuthRoute from "./components/HideAuthRoute"
// Pages Imports.
import Home from "./pages/Home"
import About from "./pages/About"
import Gallery from "./pages/Gallery"
import Contact from "./pages/Contact"
import SignUp from "./pages/auth/SignUp"
import LogIn from "./pages/auth/LogIn"
import EditPersonalInfo from "./pages/EditPersonalInfo"
import AddPersonalInfo from "./pages/auth/AddPersonalInfo"
import PasswordReset from "./pages/auth/PasswordReset"
import Services from "./pages/Services"
import Service from "./pages/Services/Service"
import Blogs from "./pages/Blogs"
import Blog from "./pages/Blogs/Blog"
import Admin from "./pages/admin"
import Page404 from "./pages/Page404"
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
						<Route path="/blogs" element={<Blogs />} />
						<Route path="/blogs/:blogParam" element={<Blog />} />
						{/* Services */}
						<Route path="/services" element={<Services />} />
						<Route path="/services/:serviceId" element={<Service />} />
						{/* Gallery */}
						<Route path="/gallery" element={<Gallery />} />
						<Route path="/gallery/:mediaPage" element={<Gallery />} />
						{/* Authentication */}
						<Route path="/reset_password" element={<PasswordReset />} />
						{/* Hidden Routes after Auth */}
						<Route element={<HideAuthRoute />}>
							<Route path="/signup" element={<SignUp />} />
							<Route path="/login" element={<LogIn />} />
						</Route>
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
