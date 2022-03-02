import React, { useRef  } from 'react'
import {ReactTitle} from 'react-meta-tags';
import { Link } from 'react-router-dom';
import { ExternalLink } from 'react-external-link';
import emailjs from 'emailjs-com';


export const Kontakt = () => {
    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  
    return (
            <div>
                <ReactTitle title="ČDRadovljica | kontakt"/>
                <div className='bg-kontkat center'>
                    {/* <div className='bgb-kontakt'></div> */}
                    <div className='kontakt-box'>
                        <div className='asdklfj'>
                            <div>
                            <h2 className='ja'>Piši nam!</h2>
                            <form id='formInput' ref={form} onSubmit={sendEmail}>
                                <div className='formBox ja'>
                                    <input type="name" placeholder='ime...' required/>
                                </div>
                                <div className='formBox ja'>
                                    <input type="email" placeholder='E-mail...' required/>
                                </div>
                                <div className='formBox ja'>
                                    <input type="text" placeholder='besedilo...' required/>
                                </div>
                                <button className='poslji' type="submit" value="Send">Pošlji</button>
                            </form>
                            </div>
                        </div>
                        <div className='dve'>
                            <div className='jaa'>
                                <div className='kontakt-info'>
                                    <h2>Kontaktni podatki</h2>
                                    <h4><i class="fas fa-envelope"></i> E-mail: cdr@info.com</h4>
                                    <h4><i class="fas fa-phone-alt"></i> 041-521-724</h4>
                                    <h4><i class="fas fa-map-marker-alt"></i> Občina Radovljica</h4>
                                    <ExternalLink href='https://www.facebook.com/%C4%8Cebelarsko-dru%C5%A1tvo-Radovljica-112122538037995'> <h3 className='white12'><i class="fab fa-facebook"></i></h3></ExternalLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
  };


export default Kontakt
