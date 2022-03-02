import React from 'react';
import { Link } from 'react-router-dom';
import { blog1, blog2, blog3, blog4, blog5, blog6 } from '../data/zanimivosti-storage';
import {ReactTitle} from 'react-meta-tags';


const Zanimivosti = () => {
    return (
        <div style={domacaStran.div}>
            <ReactTitle title="ČDRadovljica | zanimivosti"/>
            {/* <Link to='zgodovina'>
                sdafsd
            </Link> */}
            <div className='zanimivosti-grid overflow'>


                <div className='zanimivosti-zgodovina overflow'>
                    <h2>Zanimivosti</h2>
                    <h4 className='mb2'>Zgodovina društva in čebelarstva nasplošno</h4>
                    <div className='zanimivosti-zgodovina-card flex'>
                        <div className='w35'>
                            <img src={require('../images/dobra-slika.jfif')} alt=""  width={'100%'}/>
                        </div>
                        <div className='w65 zgodovina-card-text center'>
                            <div>
                                <p className='nazivi mt0'><i className="far fa-calendar-alt"></i> 6.2.2022 </p>
                                <h1 className='mt0 mb0'>Zgodovina čebelarstva</h1>
                                <p className='grey'>
                                Ljubezen do čebel ima na Slovenskem dolgo tradicijo. Pravzaprav bi skoraj z 
                                gotovostjo lahko trdili, da na svetu težko najdemo deželo s tako bogato naravno 
                                in kulturno dediščino, tako vsestransko in raznoliko prepleteno s čebelarstvom, 
                                kot je naša. 
                                </p>
                                <Link to='zgodovina'>
                                    <button>  Beri več <i className="fas fa-chevron-right"></i></button>
                                </Link>
                        </div>
                        </div>
                    </div>
                </div>


                <div className='zanimivosti-2-text'>
                    <h2>Ostale zanimivosti</h2>
                    <p>asd.msdmsfklsklad jlksdfsd sadfnsdfsdfklsd</p>
                </div>



                <div className='zanimivosti-3'>
                <div className='vh3 blur-zan'>
                        <img className='center' src={blog4.slika} alt=""/>
                    </div>
                    <div className='vh65 gaba2 black zan-text-index'>
                        <h4 className='white'>{blog2.naslov1}</h4>
                        <p className='white'>
                            {blog2.okvirno}
                        </p>
                    <button>Beri več <i className="fas fa-chevron-right"></i></button>

                    </div>
                </div>
                    
                <div className='zanimivosti-4'>
                <div className='vh3 blur-zan'>
                        <img className='center' src={blog4.slika} alt=""/>
                    </div>
                    <div className='vh65 gaba2 black zan-text-index'>
                        <h4 className='white'>{blog1.naslov1}</h4>
                        <p className='white'>
                            {blog1.okvirno}
                        </p>
                    <button>Beri več <i className="fas fa-chevron-right"></i></button>

                    </div>
                </div>
                <div className='zanimivosti-5'>
                <div className='vh3 blur-zan'>
                        <img className='center' src={blog4.slika} alt=""/>
                    </div>
                    <div className='vh65 gaba2 black zan-text-index'>
                        <h4 className='white'>{blog4.naslov1}</h4>
                        <p className='white'>
                            {blog4.okvirno}
                        </p>
                    <button>Beri več <i className="fas fa-chevron-right"></i></button>

                    </div>
                </div>
                <div className='zanimivosti-6'>
                <div className='vh3 blur-zan'>
                        <img className='center' src={blog4.slika} alt=""/>
                    </div>
                    <div className='vh65 gaba2 black zan-text-index'>
                        <h4 className='white'>{blog5.naslov1}</h4>
                        <p className='white'>
                            {blog5.okvirno}
                        </p>
                    <button>Beri več <i className="fas fa-chevron-right"></i></button>

                    </div>
                </div>


                <div className='zanimivosti-7'>
                    <div className='vh3 blur-zan'>
                        <img className='center' src={blog4.slika} alt=""/>
                    </div>
                    <div className='vh65 gaba2 black zan-text-index'>
                        <h4 className='white'>{blog6.naslov1}</h4>
                        <p className='white'>
                            {blog6.okvirno}
                        </p>
                    <button>Beri več <i className="fas fa-chevron-right"></i></button>

                    </div>
                </div>


            </div>
        </div>
    );
};


const domacaStran = {
    div: {
        marginTop: '7em',
    }, 
  }


export default Zanimivosti;
