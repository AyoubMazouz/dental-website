import './App.css'
import Header from './components/NavBar'
import Home from './components/Home'
import Services from './components/Services'
import Team from './components/Team'
import Review from './components/Review'
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="font-['Poppins']">

      <Header />

      <Home />

      <Services />

      <Team />

      <Review />

      <Gallery />

    </div>
  );
}

export default App;
