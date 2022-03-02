import './App.css';
import './blog.css';
import './index';
import './server';
import './data/dogodki-js'
import './data/zanimivosti-storage';
// import './firebase';
// import './server';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Zgodovina from './pages/Zgodovina';
import Dogodki from './pages/Dogodki';
import Clani from './pages/Clani';
import Fotogralerija from './pages/Fotogalerija';
import Domov from './pages/Domov';
import ErrorPage from './pages/ErrorPage';
import Kontakt from './pages/Kontakt';
import Editor from './pages/Editor';
import Zanimivosti from './pages/Zanimivosti';
import CarouselButton from "./pages/CarouselButton";
import EmblaCarousel from "./pages/EmblaCarousel"
import { ExternalLink } from 'react-external-link';
import ODogodkih from './pages/ODogodkih';
import MetaTags from 'react-meta-tags';

<script src="https://kit.fontawesome.com/d36fb56bf7.js" crossorigin="anonymous"></script>


function App() {
  return (
    <Router>
        <MetaTags>
          <title>Čebelarsko Društvo Radovljica</title>
          <meta name="description" content="Čebelarsko društvo Radovljica se ponaša z dolgoletno tradicijo aktivnega delovanja na področju čebelarstva. V društvo je vključenih 110 čebelarjev in čebelark, ki čebelarijo s približno 1500 čebeljimi družinami. Predsednik društva je Tomaž Gregorc, tajnica društva pa dr. Petra Bole, direktorica Muzejev radovljiške občine." />
          <meta property="og:title" content="Čebelarsko društvo Radovljica" />
          <meta name="keywords" content="Čebelarsko društvo, Čebelarsko društvo Radovljica, Radovljica, Radovljica pristno sladka, Čebelarstvo, Čebelarske zanimivosti, Čebelarski dogodki, Čebelarska zveza Slovenije, Čebele, Čebelji pik" />
          <meta name="copyright" content="Čebelarsko društvo Radovljica" />
      </MetaTags>
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
          <li><Link className='nav-link kontakt' to='/kontakt'>Kontakt</Link></li>
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
        <Route path='/dogodki/odogodkih' element={<ODogodkih />} />
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
