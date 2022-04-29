import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import NavBarFull from './components/NavBarFull'
import NavBarSmall from './components/NavBarSmall'
import Footer from './components/Footer'

const App = () => {
  return (
    <Router>
      {/* NavBar */}
      <NavBarFull />
      <NavBarSmall />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
