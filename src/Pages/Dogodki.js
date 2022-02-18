import React from 'react';
import { ambMasa, dubaiCebela, medRastline, hisaKranjskaCebela, debateObKavi } from '../data/dogodki-js';
import { Link } from 'react-router-dom';




const Dogodki = () => {
    return (
        <div className='dog-grid'>
                <div className='naslouna'>
                {/* <img src={require('../images/naslovi.jpg')} alt="" width={'100%'} />
                    <h1 className='naslovi'>DOGODKI</h1> */}
                    <h1>DOGODKI:</h1>
                </div>

                {/* 1 */}

                <div className='dog-card-bre dog-card-1'>
                    <div className='gaba blur'>
                        <img src={ambMasa.slika} alt="" width={'100%'}/>
                    </div>
                    <div className='vh65 gaba2 dogodkiText white'>
                        <p className='nazivi mt0 sabas'><i className="far fa-calendar-alt"></i> 6.2.2022  </p>
                        <h3 className='mb0'>{ambMasa.ime}</h3>
                        <h5 className='mt0'>{ambMasa.naKratko}</h5>
                        <Link to='/#basic'>
                            <button>Beri več <i className="fas fa-chevron-right"></i></button>
                        </Link>
                    </div>
                </div>

                {/* 2 */}

                <div className='dog-card-bre dog-card-2'>
                    <div className='gaba blur'>
                        <img className='center' src={dubaiCebela.slika} alt="" />
                    </div>
                    <div className='vh65 gaba2 dogodkiText white'>
                        <p className='nazivi mt0 sabas'><i className="far fa-calendar-alt"></i> 6.2.2022  </p>
                        <h3 className='mb0'>{dubaiCebela.ime}</h3>
                        <h5 className='mt0'>{dubaiCebela.naKratko}</h5>
                        <Link to={'domov'}>
                            <button>Beri več <i className="fas fa-chevron-right"></i></button>
                        </Link>
                    </div>
                </div>

                {/* 3 */}

                <div className='dog-card-bre dog-card-3'>
                    <div className='gaba blur'>
                        <img className='center' src={medRastline.slika} alt=""/>
                    </div>
                    <div className='vh65 gaba2 dogodkiText white'>
                        <p className='nazivi mt0 sabas'><i className="far fa-calendar-alt"></i> 6.2.2022  </p>
                        <h3 className='mb0'>{medRastline.ime}</h3>
                        <h5 className='mt0'>{medRastline.naKratko}</h5>
                        <Link to={'domov'}>
                            <button>Beri več <i className="fas fa-chevron-right"></i></button>
                        </Link>
                    </div>
                </div>

                {/* 4 */}

                <div className='dog-card-bre dog-card-4'>
                    <div className='gaba blur'>
                        <img className='center' src={hisaKranjskaCebela.slika} alt="" />
                    </div>
                    <div className='vh65 gaba2 dogodkiText white'>
                        <p className='nazivi mt0 sabas'><i className="far fa-calendar-alt"></i> 6.2.2022  </p>
                        <h3 className='mb0'>{hisaKranjskaCebela.ime}</h3>
                        <h5 className='mt0'>{hisaKranjskaCebela.naKratko}</h5>
                        <Link to={'domov'}>
                            <button>Beri več <i className="fas fa-chevron-right"></i></button>
                        </Link>
                    </div>
                </div>

                {/* 4 */}

                <div className='dog-card-bre dog-card-5'>
                    <div className='vh35 gaba blur'>
                        <img className='center' src={debateObKavi.slika} alt="" width={'100%'}/>
                    </div>
                    <div className='vh65 gaba2 dogodkiText white'>
                        <p className='nazivi mt0 sabas'><i className="far fa-calendar-alt"></i> 6.2.2022  </p>
                        <h3 className='mb0'>{debateObKavi.ime}</h3>
                        <h5 className='mt0'>{debateObKavi.naKratko}</h5>
                        <Link to={'domov'}>
                            <button>Beri več <i className="fas fa-chevron-right"></i></button>
                        </Link>
                    </div>
                </div>
        </div>
    )
}




export default Dogodki
