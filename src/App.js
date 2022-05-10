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
import PasswordReset from './pages/PasswordReset'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

import { AuthProvider } from './contexts/AuthContext'

const App = () => {
  return (
    <Router>
      {/* NavBar */}
      <NavBar />
      <AuthProvider>
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
          {/* root */}
          <Route path='/root' element={<Root />} />
        </Routes>
      </AuthProvider>
      <Footer />
    </Router>
  );
}

export default App;
