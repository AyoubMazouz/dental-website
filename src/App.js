import './App.css'
import 'swiper/css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
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
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute'
import Service01 from './pages/Services/Service01'

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
            <Route path='/service01' element={<Service01 />} />
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
