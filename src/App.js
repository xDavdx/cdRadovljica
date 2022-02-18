import './App.css';
import './blog.css';
import './index';
import './server';
import './data/dogodki-js'
import './zanimivosti-storage';
// import './firebase';
// import './server';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Zgodovina from './Pages/Zgodovina';
import Dogodki from './Pages/Dogodki';
import Clani from './Pages/Clani';
import Fotogralerija from './Pages/Fotogalerija';
import Domov from './Pages/Domov';
import ErrorPage from './Pages/ErrorPage';
import Kontakt from './Pages/Kontakt';
import Editor from './Pages/Editor';
import Zanimivosti from './Pages/Zanimivosti';
import CarouselButton from "./Pages/CarouselButton";
import EmblaCarousel from "./Pages/EmblaCarousel"
import { ExternalLink } from 'react-external-link';

<script src="https://kit.fontawesome.com/d36fb56bf7.js" crossorigin="anonymous"></script>


function App() {
  return (
    <Router>
      <nav id='navBar'>
        <div className='logo-nav'>
          <Link to='/'><img src={require('./images/cdr-logo-02.png')} alt="" /></Link>
        </div>
        <ul className='nav-links'>
          <li><Link className='nav-link' to="/">Domov</Link></li>
          <li><Link className='nav-link' to="/dogodki">Dogodki</Link></li>
          <li><Link className='nav-link' to="/zanimivosti">Zanimivosti</Link></li>
          <li><Link className='nav-link' to="/fotogalerija">Fotogalerija</Link></li>
          <li><Link className='nav-link' to="/clani">Člani</Link></li>
          <li><Link className='nav-link kontakt' to='/clani'>Kontakt</Link></li>
        </ul>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Domov />} />
        <Route path="/zanimivosti/zgodovina" element={<Zgodovina />} />
        <Route path="/dogodki" element={<Dogodki />} />
        <Route path="/fotogalerija" element={<Fotogralerija />} />
        <Route path="/clani" element={<Clani />} />
        <Route path="/kontakt" element={<Kontakt />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="*" element={<ErrorPage />}/>
        <Route path='/zanimivosti' element={<Zanimivosti />} />
        <Route path='/emblacarousel' element={<EmblaCarousel />} />
      </Routes>
      <footer>
        <div className='center'>
          &copy; Čebelarsko društvo Radovljica - 2022
        </div>
      </footer>
    </Router>
  );
}



export default App;
