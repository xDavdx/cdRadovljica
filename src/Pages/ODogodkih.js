import React from 'react'
import { VsiDogodki } from '../data/dogodki-js';
import {ReactTitle} from 'react-meta-tags';
import { ambMasa, dubaiCebela, medRastline, hisaKranjskaCebela, debateObKavi } from '../data/dogodki-js';

const ODogodkih = () => {
  return (
    <div className='ODogodkih-grid mt7'>
      <ReactTitle title="ČDRadovljica | o dogodkih"/>
        {/* {VsiDogodki.map((Vdogodki, index) => 
            <div key={index}>
                <div>
                    <p className='nazivi'>{Vdogodki.datum}</p>
                    <h1 className='mt0'>{Vdogodki.ime}</h1>
                    <p className='grey'>{Vdogodki.oDogodku}</p>
                    <p className='grey'>{Vdogodki.oDogodku2}</p>
                    <p className='grey'>{Vdogodki.oDogodku3}</p>
                    <p className='grey'>{Vdogodki.oDogodku4}</p>
                    <p className='grey'>{Vdogodki.oDogodku5}</p>
                    <img src={Vdogodki.slika} alt="" width={'60%'}/>
                    <hr className='asdf'/>
                </div>
            </div>
        )} */}

        <div>
          <div className='flex' id='ambMasa'>
            
          <img src={ambMasa.slika} alt="ambroževa maša" width={'40%'} />
            <div className='odogodkih-text center'>
              <div>
              <p className="nazivi">{ambMasa.datum}</p>
              <h1 className="mt0">{ambMasa.ime}</h1>
              <p className="grey">{ambMasa.oDogodku}</p>
              </div>
            </div>
          </div>

          <hr className='asdf'/>

          <div className='flex' id='dubaiCebela'>
          <img src={dubaiCebela.slika} alt="ambroževa maša" width={'40%'} />
            <div className='odogodkih-text center'>
              <div>
              <p className="nazivi">{dubaiCebela.datum}</p>
              <h1 className="mt0">{dubaiCebela.ime}</h1>
              <p className="grey">{dubaiCebela.oDogodku}</p>
              </div>
            </div>
          </div>

          <hr className='asdf'/>

          <div className='flex' id='medRastline'>
          <img src={medRastline.slika} alt="ambroževa maša" width={'30%'} />
            <div className='odogodkih-text center'>
              <div>
                <p className="nazivi">{medRastline.datum}</p>
                <h1 className="mt0">{medRastline.ime}</h1>
                <p className="grey">{medRastline.oDogodku1}</p>
                <p className="grey">{medRastline.oDogodku2}</p>
                <p className="grey">{medRastline.oDogodku3}</p>
                <p className="grey">{medRastline.oDogodku4}</p>
                <p className="grey">{medRastline.oDogodku5}</p>
                </div>
              </div>
          </div>

          <hr className='asdf'/>


          <div className='flex' id='hisaKranjskaCebela'>
          <img src={hisaKranjskaCebela.slika} alt="ambroževa maša" width={'50%'} />
            <div className='odogodkih-text center'>
              <div>
              <p className="nazivi">{hisaKranjskaCebela.datum}</p>
              <h1 className="mt0">{hisaKranjskaCebela.ime}</h1>
              <p className="grey">{hisaKranjskaCebela.oDogodku}</p>
              </div>
            </div>
          </div>

          <hr className='asdf'/>

          <div className='flex' id='debateObKavi'>
          <img src={debateObKavi.slika} alt="ambroževa maša" width={'20%'} />
            <div className='odogodkih-text center'>
              <div>
              <p className="nazivi">{debateObKavi.datum}</p>
              <h1 className="mt0">{debateObKavi.ime}</h1>
              <p className="grey">{debateObKavi.oDogodku}</p>
              </div>
            </div>
          </div>

          <hr className='asdf'/>

        </div>
    </div>
  )
};

export default ODogodkih