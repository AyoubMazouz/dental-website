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
import Root from './pages/Root'
import Profile from './pages/Profile'
import PersonalInfo from './pages/PersonalInfo'
import PasswordReset from './pages/PasswordReset'
// Services.
import Soins_dentaires from './pages/Services/Soins_dentaires'
import Pedodontie from './pages/Services/Pedodontie'
import Orthodontie from './pages/Services/Orthodontie'
import Protheses_et_implants_dentaires from './pages/Services/Protheses_et_implants_dentaires'
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
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/reset_password' element={<PasswordReset />} />
            {/* Services */}
            <Route path='/services/soins_dentaires' element={<Soins_dentaires />} />
            <Route path='/services/pedodontie' element={<Pedodontie />} />
            <Route path='/services/orthodontie' element={<Orthodontie />} />
            <Route path='/services/orthodontie' element={<Orthodontie />} />
            <Route path='/services/protheses_et_implants_dentaires' element={<Protheses_et_implants_dentaires />} />
            {/* Private Routes */}
            <Route element={<PrivateRoute />}>
              <Route path='/personal-info' element={<PersonalInfo />} />
              <Route path='/profile' element={<Profile />} />
            </Route>
            {/* root */}
            <Route path='/root' element={<Root />} />
          </Routes>
        <Footer />
      </AlertProvider>
    </AuthProvider>
    </Router>
  );
}

export default App;
