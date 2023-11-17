
import './App.css';
import NavBar from './Assets/Components/NavBar';
import Header from './Assets/Components/Header';
import Feature from './Assets/Components/Feature';
import Offer from './Assets/Components/Offer';
import About from './Assets/Components/About';
import Contact from './Assets/Components/Contact';
import { HashLink as Link } from 'react-router-hash-link';

function App() {
  return (
    <div className="App">
      <h1>hey boy</h1>
      <NavBar/>
     
      <Header/>
    
      <Feature/>
      
      <Offer/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
