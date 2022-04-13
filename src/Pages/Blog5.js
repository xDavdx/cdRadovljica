import React from 'react'
import { blog5 } from '../data/zanimivosti-storage'
import {ReactTitle} from 'react-meta-tags';
import { Link } from 'react-router-dom';

const Blog5 = () => {
  return (
    <div className='zgodovina-grid'>
        <ReactTitle title="ČDRadovljica | ZDRAVILNI UČINKI MEDU"/>
        <div className='zgodovina-slika'>
            <img className='naslovi-slika' src={blog5.slika} alt="" width={'100%'} />
        </div>
        <div className='zgodovina-random najnovejse'>
                <h3>Najnovejše</h3>
                <hr />
                <Link to='/dogodki/odogodkih' className='grey link najnovejse-text'>SLOVENCI V DUBAJ PRIPELJALI NAJVEČJO ČEBELO NA SVETU - Skoraj pet tisoč kilometrov nas loči do arabskega mesta Dubaj...</Link>
                <Link to='/dogodki/odogodkih' className='grey link najnovejse-text'>ČEBELARJI POČASTILI SVOJEGA ZAVETNIKA - </Link>
                <Link to='/dogodki/odogodkih' className='grey link' najnovejse-text>Odprta kuhna 2022 / Začetek 10. sezone Odprte kuhne v Ljubljani bo v petek, 18.3.2022</Link>
                <Link to='/dogodki/odogodkih' className='grey link najnovejse-text'>Odprta kuhna 2022 / Začetek 10. sezone Odprte kuhne v Ljubljani bo v petek, 18.3.2022</Link>
        </div>
        <div className='nazaj-klik'>
                <Link className='link' to='/zanimivosti'><i className="fas fa-chevron-left"> Nazaj na zanimivosti</i></Link>
        </div>
        <div className='zgodovina-text1'>
            <h3 className='datum nazivi mb0'><i className="far fa-calendar-alt"></i> JAN 6, 2022 </h3>
            <h1 className='m0'>{blog5.naslov1}</h1>
            <p className='font16 grey'>
                {blog5.prviOdstavek}
            </p>
        </div>
        <div className='zgodovina-slike'>
            {/* Za prve 2 slike (width 50%) */}
            <div>
                <img className='naslovi-slika' src={require('../images/zdravilni-učinki-meda.jpg')} alt="" width={'30%'} />
                <img className='naslovi-slika' src={require('../images/honey-sweet.gif')} alt="" width={'30%'} />
                <img className='naslovi-slika' src={require('../images/download.jfif')} alt="" width={'30%'} />
            </div>
        </div>
        <div className='zgodovina-text2'>
            <h1 className='m0'>{blog5.naslov2}</h1>
            <p className='font16 grey'>
                {blog5.drugiOdstavek}
                    <br /> <br />
                {blog5.tretjiOdstavek}
                    <br /> <br />
                {blog5.cetrtiOdstavek}

            </p>
        </div>

    </div>
  )
}

export default Blog5