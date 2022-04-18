import './App.css'
import Header from './components/NavBar'
import Home from './components/Home'
import Services from './components/Services'
import About from './components/About'
import Review from './components/Reviews'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import BeforeAndAfter from './components/BeforeAndAfter'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className="font-[Montserrat]">

      <Header />

      <Home />

      <Services />

      <About />

      <Review />

      <Gallery />

      <Contact />

      <BeforeAndAfter />

      <Footer />

    </div>
  );
}

export default App;
