import './App.css'
import Header from './components/NavBar'
import Home from './components/Home'
import Services from './components/Services'
import Team from './components/Team'

function App() {
  return (
    <div className="font-['Poppins']">

      <Header />

      <Home />

      <Services />

      <Team />

    </div>
  );
}

export default App;
