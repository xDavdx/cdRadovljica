import React from 'react';
import { clani, claniByIndex, upravniOdbor } from '../data/clani';
import { ExternalLink } from 'react-external-link';
import ReactDOM from "react-dom";
import EmblaCarousel from './EmblaCarousel';
// import CarouselButton from "../pages/CarouselButton";
import {ReactTitle} from 'react-meta-tags';

const SLIDE_COUNT = 115;
const slides = Array.from(Array(SLIDE_COUNT).keys());


function Mailto({ email, ...props }) {
    return (
      <a href={`mailto:${email}`}>
        {props.children}
      </a>
    );
  }


        const Clani = () => {
            return (
                <div className='vw' style={dogodki.div} >
                    <ReactTitle title="ČDRadovljica | člani"/>
                        <h3>VSI ČLANI:</h3>
                        <EmblaCarousel slides={slides} />

                        <h3>UPRAVNI ODBOR:</h3>
                    <div className='clani-grid'>

                        {upravniOdbor.map((pClani, index) =>  (
                                <div key={index} className='clani-card'>
                                    <div className='w35 overflow'>
                                        <img className='dogodki-img' src={pClani.slika} alt="" />
                                    </div>
                                    <div className='w65 clani-text'>
                                        <h2>{pClani.ime}</h2>
                                        <p className='nazivi-clani'>{pClani.naziv}</p>
                                        <p>{pClani.besedilo}</p>
                                        <div className='bre'>
                                            <div>
                                                <Mailto email={pClani.mail} >
                                                    <i className="far fa-envelope"></i>
                                                </Mailto>
                                            </div>
                                            <div>
                                                <ExternalLink href="https://www.facebook.com/">
                                                    <i className="fab fa-facebook"></i>
                                                </ExternalLink>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )
                        )}
                     </div>
                </div> 
            )
        }

const dogodki = {
    div: {
        marginTop: '7em',
    }, 
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Clani />, rootElement);

export default Clani
