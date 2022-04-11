import './App.css'
import Header from './components/NavBar'
import Home from './components/Home'
import Services from './components/Services'
import Team from './components/Team'
import Review from './components/Review'

function App() {
  return (
    <div className="font-['Poppins']">

      <Header />

      <Home />

      <Services />

      <Team />

      <Review />

    </div>
  );
}

export default App;
