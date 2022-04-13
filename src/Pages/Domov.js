import React from 'react'
import { ExternalLink } from 'react-external-link';
import { Link } from 'react-router-dom'
// import Dogodki from './Dogodki'
import EmblaCarousel from './EmblaCarousel';
import { dubaiCebela, debateObKavi, ambMasa, medRastline, hisaKranjskaCebela } from '../data/dogodki-js';
import {ReactTitle} from 'react-meta-tags';
import SimpleImageSlider from "react-simple-image-slider";

const SLIDE_COUNT = 115;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const images = [
    { url: require("../images/galerija/DSCN0199.JPG") },
    { url: require("../images/skupinska-slika.jpg") },
  ];

const Domov = () => {
    return (
        <body style={domacaStran.div}>
            <ReactTitle title="Čebelarsko Društvo Radovljica"/>
            <div className='home-grid'>
                <div className='roza1'><img src={require('../images/roza1.png')} alt="" width={'100%'}/></div>
                <div className='text-home'>
                    {/* slika cebele */}

                    <div className='center'>
                        {/* za text */}
                        <div> 
                            <img className='absolute' src={require('../images/cebela1-02.png')} alt="" />
                            <h2 className='font38 m0'>ČEBELARSKO DRUŠTVO</h2>
                            <h1 className='font110 m0'>RADOVLJICA</h1>
                            <p className='font20 m0'>Čebelarsko društvo Radovljica se ponaša z dolgoletno tradicijo aktivnega delovanja na
                            področju <strong className='strong-gold'>čebelarstva</strong>. V društvo je vključenih <strong className='strong-gold'>110 čebelarjev</strong> in čebelark, ki čebelarijo s
                            približno 1500 čebeljimi družinami. Predsednik društva je Tomaž Gregorc, tajnica društva pa
                            dr. Petra Bole, direktorica Muzejev radovljiške občine.</p>
                            <p className='font24'><strong className='strong-gold'>Naj medi!</strong></p>
                        </div>
                    </div>
                </div>
                <div className='slika-home center obro'>
                    <img className='obro' src={require('../images/skupinska-slika.jpg')} alt="" width={'100%'}/>
                    {/* <SimpleImageSlider 
                        width={896}
                        height={504}
                        images={images}
                        showBullets={true}
                        showNavs={false}
                        autoPlay={true}
                    /> */}
                </div>
                <div className='roza2'>
                    <img src={require('../images/roza2.png')} alt="" width={'100%'}/>
                </div>
                <div className='poskrolaj center'>
                    <p> Poskrkolaj navzdol <br />
                        <i className="fas fa-chevron-down"></i></p>
                </div>
                <div className='socialsi'>
                    <div className='socialsi-grid'>
                            <ExternalLink href='https://www.facebook.com/%C4%8Cebelarsko-dru%C5%A1tvo-Radovljica-112122538037995' className='fb center'><i class="fab fa-facebook"></i> <br /></ExternalLink>
                            <ExternalLink href='https://www.facebook.com/%C4%8Cebelarsko-dru%C5%A1tvo-Radovljica-112122538037995' className='ig center'><i class="fab fa-instagram"></i> <br /></ExternalLink>
                    </div>
                </div>
            </div>




            <div className='domov-pomembn-dogodk'>
                <div className='slika123 center'>
                    <img src={require('../images/kavaVsakDan-dog4.jpg')} alt=""  width={'80%'}/>
                </div>
                <div className='slika1234 center'>
                    <img src={require('../images/cebelaDubai-dog1.jpg')} alt=""  width={'80%'}/>
                </div>
                <div className='tekst123 center domov-text-dogodki-p'>
                    <div>
                        <p className='nazivi'><i className="far fa-calendar-alt"></i> 7.12.2021</p>
                        <h1 className='mt0'>{debateObKavi.ime}</h1>
                        <p>{debateObKavi.naKratko}</p>
                        <Link to="dogodki">
                            <button>Beri več <i className="fas fa-chevron-right"></i></button>
                        </Link>
                    </div>
                </div>

                <div className='tekst1234 center domov-text-dogodki-p'>
                    <div>
                        <p className='nazivi'><i className="far fa-calendar-alt"></i> 7.12.2021</p>
                        <h1 className='mt0'>{dubaiCebela.ime}</h1>
                        <p>{dubaiCebela.naKratko}</p>
                        <Link to="dogodki">
                            <button>Beri več <i className="fas fa-chevron-right"></i></button>
                        </Link>
                    </div>

                </div>
            </div>





            <div id='basic'>
                <div className='slika-basic'>
                    <img src={require('../images/tomaz-cebenjak.jpg')} alt="" width={'100%'}/>
                </div>
                
                <div className='text-basic'>
                    <div>
                    <h3 className='mb0 nazivi'>Predsednik društva</h3>
                    <h1 className='font38 mb0'>Tomaž Gregorc</h1>
                    <p className='font20'>Čebelariti je pričel že pri bratu Alešu, sam pa leta 1990, ko mu je bilo 23 let, ves
                        čas v AŽ panjih. Leta 1997 je tudi formalno postal član čebelarskega društva. Sedaj Čebelari
                        na mestu v okolici Radovljice, glavnina njegovega čebelarjenja pa je s prevoznim čebelnjakom
                        in 64 panji na tovornjaku. Toči predvsem gozdni in cvetlični med, kadar zamedi ajda, pa pelje 
                        čebela na ajdovo pašo in toči ajdov med.
                        V letu 2021 postane predsednik čebelarskega društva.
                    </p>
                    <div className='flex tc'>
                        <p className='font20'>
                            Št. Panjev <br /> 120
                        </p>
                        <p className='font20'>
                            Let V ČDR <br /> 25
                        </p>
                    </div>
                    </div>
                </div>
                <div className='dogodki-basic'>
                    <img className='dogodki-img' src={require('../images/tomaz_gregorc.jpg')} alt="" width={'100%'}/>
                </div>
                <div className='dogodki-manjsa-slika center'>
                    <img src={require('../images/tomaz_gregorc – manjsa.jpg')} alt="" width={'100%'}/>
                </div>
            </div>


            <div className='random-home'>
                {/* <div className='slika-zravn center'>
                    <img src={require('../images/cebela-footer-08.png')} alt="" width={'100%'}/>
                </div> */}
                <div className='slika-zravn-2'>
                    <img src={require('../images/random-vector.png')} alt="" width={'100%'}/>
                </div>
                <div className='slika-zravn-3'>
                    <img src={require('../images/random-vector2.png')} alt="" width={'100%'}/>
                </div>
                <div className='random-text'>
                    <h1 className='mb0'>DOGODKI</h1>
                    <h3 className='m0'>Pomembni pretekli dogodki</h3>
                </div>

                <div className='d1 center'>
                        <div className='w35 for-w-s'><img src={require('../images/d1.png')} alt="" width={'100%'}/></div>
                        <div className='w65 for-w'>
                            <div>
                            <h3 className='m0 nazivi'> <i className="far fa-calendar-alt"></i> 7.12.2021</h3>
                            <h1 className='m0 d-naslov'>Ambroževa maša</h1>
                            <p className='m0 dog-phone-domov'>{ambMasa.naKratko}
                            </p>
                            <Link to="dogodki">
                                <button className='d-button'>Beri več <i className="fas fa-chevron-right"></i></button>
                            </Link>
                            </div>
                        </div>
                </div>
                <div className='d2 center'>
                <div className='w35 for-w-s'><img src={require('../images/d2.png')} alt="" width={'100%'}/></div>
                        <div className='w65 for-w'>
                            <div>
                            <h3 className='m0 nazivi'> <i className="far fa-calendar-alt"></i> 4.11.2021</h3>
                            <h1 className='m0 d-naslov'>4. Seja in srečanje</h1>
                            <p className='m0 dog-phone-domov'> z najstarejšim članom ČD Severinom Frolnomojm</p>
                            <Link to="dogodki">
                                <button className='d-button'>Beri več <i className="fas fa-chevron-right"></i></button>
                            </Link>
                            </div>
                        </div>
                </div>
                <div className='d3 center'>
                <div className='w35 for-w-s'><img src={require('../images/d3.png')} alt="" width={'100%'}/></div>
                        <div className='w65 for-w'>
                            <div>
                            <h3 className='m0 nazivi'> <i className="far fa-calendar-alt"></i> 26.3.2021</h3>
                            <h1 className='m0 d-naslov'>Srečanje čebelarjev</h1>
                            <p className='m0 dog-phone-domov'>vse Slovensko srečanje na Lovrencu na Pohorju
                            </p>
                            <Link to="dogodki">
                                <button className='d-button'>Beri več <i className="fas fa-chevron-right"></i></button>
                            </Link>
                            </div>
                        </div>
                </div>
                <div className='d4 center'>
                <div className='w35 for-w-s'><img src={require('../images/d4.png')} alt="" width={'100%'}/></div>
                        <div className='w65 for-w'>
                            <div>
                            <h3 className='m0 nazivi'> <i className="far fa-calendar-alt"></i> 6.5.2021</h3>
                            <h1 className='m0 d-naslov'>Novi oddelki</h1>
                            <p className='m0 dog-phone-domov'>Novi upravni oddelki ČD Radovljica
                            </p>
                            <Link to="dogodki">
                                <button className='d-button'>Beri več <i className="fas fa-chevron-right"></i></button>
                            </Link>
                            </div>
                        </div>
                </div>
            </div>


            <div className='domov-clani'>
                <div className='sdasd'>
                    <h1 className='center'>Člani:</h1>
                    <EmblaCarousel slides={slides} />
                </div>
            </div>
        </body>
    )
}

const domacaStran = {
    div: {
        height: 'auto',
        backgroundColor: '#FAF9F0',
    }, velkTexst: {
        fontSize: '5em',
    }
  }


export default Domov



