import React from 'react'
import { Link } from 'react-router-dom'
import {ReactTitle} from 'react-meta-tags';

const ErrorPage = () => {
    return (
        <div className='error-grid'>
            <ReactTitle title="ČDRadovljica | napaka!"/>
            <div className='error-text center'>
                <div>
                    <h1 className='font110 mb0'> <strong>Oooops!</strong></h1>
                    <h3 className='font24 mt0'>zdi se, da ne moremo najti strani, ki jo iščete.</h3>
                    <Link to='/'><button className='font20'><i className="fas fa-chevron-left"></i> Nazaj domov</button></Link>
                </div>
            </div>

            <div className='error-slika center'>
                <img src={require('../images/error.png')} alt=""  width={'80%'}/>
            </div>     
        </div>
    )
}



export default ErrorPage
