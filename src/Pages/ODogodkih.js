import React from 'react'
import { VsiDogodki } from '../data/dogodki-js';
import {ReactTitle} from 'react-meta-tags';

const ODogodkih = () => {
  return (
    <div className='ODogodkih-grid mt7'>
      <ReactTitle title="ČDRadovljica | o dogodkih"/>
        {VsiDogodki.map((Vdogodki, index) => 
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
        )}
    </div>
  )
};

export default ODogodkih