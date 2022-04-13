import React from 'react'
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import { Gallery, Item } from 'react-photoswipe-gallery';
import {ReactTitle} from 'react-meta-tags';


const Fotogralerija = () => {
    const smallItemStyles = {
    cursor: 'pointer',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '100%',
  }
  return (
    <Gallery id="simple-gallery">
      <ReactTitle title="ČDRadovljica | fotogalerija"/>
      <div className='gallery-grid-galerija'>
        <Item
          original={require('../images/podelitev-nagrad.jpg')}
          thumbnail={require('../images/podelitev-nagrad.jpg')}
          width="1600"
          height="1066"
          title="Avtor: /"
        >
          {({ ref, open }) => (
            <img
              style={{ cursor: 'pointer' }}
              src={require('../images/podelitev-nagrad.jpg')}
              ref={ref}
              alt=''
              onClick={open}
            />
          )}
        </Item>
        <Item
          original={require('../images/slovenski-zajtrk.jpg')}
          thumbnail={require('../images/slovenski-zajtrk.jpg')}
          width="1600"
          height="1066"
          title="Avtor: /"
            >
              {({ ref, open }) => (
                <img
                  style={smallItemStyles}
                  src={require('../images/slovenski-zajtrk.jpg')}
                  ref={ref}
                  alt=''
                  onClick={open}
                />
              )}
            </Item>
            <Item
              original={require('../images/precednikCDR-z-globocnikomjpg.jpg')}
              thumbnail={require('../images/precednikCDR-z-globocnikomjpg.jpg')}
              width="1600"
              height="1066"
              title="Avtor: /"
            >
              {({ ref, open }) => (
                <img
                  style={smallItemStyles}
                  src={require('../images/precednikCDR-z-globocnikomjpg.jpg')}
                  ref={ref}
                  alt=''
                  onClick={open}
                />
              )}
            </Item>
            <Item
              original={require('../images/galerija/DSCN0138.JPG')}
              thumbnail={require('../images/galerija/DSCN0138.JPG')}
              width="1600"
              height="1066"
              title="Avtor: /"
            >
              {({ ref, open }) => (
                <img
                  style={{ ...smallItemStyles, gridColumnStart: 2 }}
                  src={require('../images/galerija/DSCN0138.JPG')}
                  ref={ref}
                  alt=''
                  onClick={open}
                />
              )}
            </Item>
            <Item
              original={require('../images/galerija/DSCN0153.JPG')}
              thumbnail={require('../images/galerija/DSCN0153.JPG')}
              width="1600"
              height="1066"
              title="Avtor: /"
            >
              {({ ref, open }) => (
                <img
                  style={smallItemStyles}
                  src={require('../images/galerija/DSCN0153.JPG')}
                  ref={ref}
                  alt=''
                  onClick={open}
                />
              )}
            </Item>       <Item
          original={require('../images/galerija/DSCN0199.JPG')}
          thumbnail={require('../images/galerija/DSCN0199.JPG')}
          width="1600"
          height="1068"
          title="Avtor: /"
          id="so-first"
        >
          {({ ref, open }) => (
            <img
              style={{ cursor: 'pointer' }}
              src={require('../images/galerija/DSCN0199.JPG')}
              ref={ref}
              width="100%"
              alt=''
              onClick={open}
            />
          )}
        </Item>
        <Item
          original={require('../images/slovenski-zajtrk.jpg')}
          thumbnail={require('../images/slovenski-zajtrk.jpg')}
          width="1600"
          height="1068"
          title="Avtor: /"
            >
              {({ ref, open }) => (
                <img
                  style={smallItemStyles}
                  src={require('../images/slovenski-zajtrk.jpg')}
                  ref={ref}
                  alt=''
                  onClick={open}
                />
              )}
            </Item>
            <Item
              original={require('../images/piknik1.jpg')}
              thumbnail={require('../images/piknik1.jpg')}
              width="1600"
              height="1066"
              title="Avtor: /"
            >
              {({ ref, open }) => (
                <img
                  style={smallItemStyles}
                  src={require('../images/piknik1.jpg')}
                  ref={ref}
                  alt=''
                  onClick={open}
                />
              )}
            </Item>
            <Item
              original={require('../images/galerija/FINAL_Bees.jpg')}
              thumbnail={require('../images/galerija/FINAL_Bees.jpg')}
              width="1600"
              height="1066"
              title="Avtor: /"
            >
              {({ ref, open }) => (
                <img
                  style={smallItemStyles}
                  src={require('../images/galerija/FINAL_Bees.jpg')}
                  ref={ref}
                  alt=''
                  onClick={open}
                />
              )}
            </Item>

          </div>
        </Gallery>
      )
    }






























//     return (
//         <div className='gallery'>
//             <Gallery className >
//                 <Item className='pointer'
//                     original={require('../images/ambMasaSlika2.JPG')}
//                     thumbnail={require('../images/ambMasaSlika2.JPG')}
//                     width="1024"
//                     height="768"
//                     >
//                     {({ ref, open }) => (
//                         <img ref={ref} onClick={open} src={require('../images/ambMasaSlika2.JPG')} width={'30%'} alt='' />
//                     )}
//                 </Item>
//                 <Item className='pointer'
//                     original={require('../images/slovenski-zajtrk.jpg')}
//                     thumbnail={require('../images/slovenski-zajtrk.jpg')}
//                     width="1024"
//                     height="768"
//                     >
//                     {({ ref, open }) => (
//                             <img ref={ref} onClick={open} src={require('../images/slovenski-zajtrk.jpg')} width={'30%'} alt='' />
//                     )}
//                 </Item>
//                 <Item className='pointer'
//                     original={require('../images/precednikCDR-z-globocnikomjpg.jpg')}
//                     thumbnail={require('../images/precednikCDR-z-globocnikomjpg.jpg')}
//                     width="1024"
//                     height="768"
                    
//                     >
//                     {({ ref, open }) => (
//                         <img ref={ref} onClick={open} src={require('../images/precednikCDR-z-globocnikomjpg.jpg')} width={'30%'} alt='' />
//                     )}
//                 </Item>
//                 <Item className='pointer'
//                     original={require('../images/piknik1.jpg')}
//                     thumbnail={require('../images/piknik1.jpg')}
//                     width="1024"
//                     height="768"
//                     >
//                     {({ ref, open }) => (
//                         <img ref={ref} onClick={open} src={require('../images/piknik1.jpg')} width={'30%'} alt='' />
//                     )}
//                 </Item>
//                 <Item className='pointer'
//                 original={require('../images/podelitev-nagrad.jpg')}
//                 thumbnail={require('../images/podelitev-nagrad.jpg')}
//                 width="1024"
//                 height="768"
//                 >
//                 {({ ref, open }) => (
//                     <img ref={ref} onClick={open} src={require('../images/podelitev-nagrad.jpg')} width={'30%'} alt='' />
//                 )}
//                 </Item>
//                 <Item className='pointer'
//                     original={require('../images/ambMasaSlika2.JPG')}
//                     thumbnail={require('../images/ambMasaSlika2.JPG')}
//                     width="1024"
//                     height="768"
//                     >
//                     {({ ref, open }) => (
//                         <img ref={ref} onClick={open} src={require('../images/ambMasaSlika2.JPG')} width={'30%'} alt='' />
//                     )}
//                 </Item>
//                 <Item className='pointer'
//                     original={require('../images/slovenski-zajtrk.jpg')}
//                     thumbnail={require('../images/slovenski-zajtrk.jpg')}
//                     width="1024"
//                     height="768"
//                     >
//                     {({ ref, open }) => (
//                             <img ref={ref} onClick={open} src={require('../images/slovenski-zajtrk.jpg')} width={'30%'} alt='' />
//                     )}
//                 </Item>
//                 <Item className='pointer'
//                     original={require('../images/precednikCDR-z-globocnikomjpg.jpg')}
//                     thumbnail={require('../images/precednikCDR-z-globocnikomjpg.jpg')}
//                     width="1024"
//                     height="768"
                    
//                     >
//                     {({ ref, open }) => (
                    
//                         <img ref={ref} onClick={open} src={require('../images/podelitev-nagrad.jpg')} width={'30%'} alt='' />
//                     )}
//                 </Item>
//                 <Item className='pointer'
//                     original={require('../images/piknik1.jpg')}
//                     thumbnail={require('../images/piknik1.jpg')}
//                     width="1024"
//                     height="768"
//                     >
//                     {({ ref, open }) => (
                    
//                     <img ref={ref} onClick={open} src={require('../images/podelitev-nagrad.jpg')} width={'30%'} alt='' />
//                     )}
//                 </Item>
//                 <Item className='pointer'
//                 original={require('../images/podelitev-nagrad.jpg')}
//                 thumbnail={require('../images/podelitev-nagrad.jpg')}
//                 width="1024"
//                 height="768"
//                 >
//                 {({ ref, open }) => (
                    
//                         <img ref={ref} onClick={open} src={require('../images/podelitev-nagrad.jpg')} width={'30%'} alt='' />
//                 )}
//                 </Item>
//         </Gallery>
//     </div>
//     )
// }

export default Fotogralerija
