// CSS Imports.
import './App.css'
import 'swiper/css'
// React Imports.
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// Pages Imports.
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import SignUp from './pages/SignUp'
import LogIn from './pages/LogIn'
import Blog from './pages/Blog'
import Page404 from './pages/Page404'
import Profile from './pages/Profile'
import PersonalInfo from './pages/PersonalInfo'
import PasswordReset from './pages/PasswordReset'
// Services.
import Service from './pages/Services/Service'
// Components Imports.
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'

// Context Imports.
import { AuthProvider } from './contexts/AuthContext'
import { AlertProvider } from './contexts/AlertContext'

const App = () => {
  return (
  <Router>
    <AuthProvider>
      <AlertProvider>
        {/* NavBar */}
        <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/blog' element={<Blog />} />
            {/* Authentication */}
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/reset_password' element={<PasswordReset />} />
            {/* Services */}
            <Route path='/services' element={<Services />} />
            <Route path='/services/:serviceName' element={<Service />} />
            {/* Private Routes */}
            <Route element={<PrivateRoute />}>
              <Route path='/personal-info' element={<PersonalInfo />} />
              <Route path='/profile' element={<Profile />} />
            </Route>
            {/* 404 Page */}
            <Route path='*' element={<Page404 />} />
          </Routes>
        <Footer />
      </AlertProvider>
    </AuthProvider>
    </Router>
  );
}

export default App;
