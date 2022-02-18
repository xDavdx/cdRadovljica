import React from 'react'
import 'photoswipe/dist/photoswipe.css';
import 'photoswipe/dist/default-skin/default-skin.css';
import { Gallery, Item } from 'react-photoswipe-gallery';


const Fotogralerija = () => {
    const smallItemStyles = {
    cursor: 'pointer',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '100%',
  }
  return (
    <Gallery id="simple-gallery">
      <div className='gallery-grid-galerija'>
        <Item
          original={require('../images/dobra-slika.jfif')}
          thumbnail={require('../images/dobra-slika.jfif')}
          width="1600"
          height="1600"
          title="Author: Folkert Gorter"
          id="so-first"
        >
          {({ ref, open }) => (
            <img
              style={{ cursor: 'pointer' }}
              src={require('../images/dobra-slika.jfif')}
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
          title="Author: Samuel Rohl"
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
              original="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg"
              thumbnail="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg"
              width="1600"
              height="1066"
              title="Author: Ales Krivec"
            >
              {({ ref, open }) => (
                <img
                  style={smallItemStyles}
                  src="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg"
                  ref={ref}
                  alt=''
                  onClick={open}
                />
              )}
            </Item>
            <Item
              original="https://farm6.staticflickr.com/5584/14985868676_b51baa4071_h.jpg"
              thumbnail="https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg"
              width="1600"
              height="1066"
              title="Author: Michael Hull"
            >
              {({ ref, open }) => (
                <img
                  style={{ ...smallItemStyles, gridColumnStart: 2 }}
                  src="https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg"
                  ref={ref}
                  alt=''
                  onClick={open}
                />
              )}
            </Item>
            <Item
              original="https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg"
              thumbnail="https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg"
              width="1600"
              height="1066"
              title="Author: Thomas Lefebvre"
            >
              {({ ref, open }) => (
                <img
                  style={smallItemStyles}
                  src="https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg"
                  ref={ref}
                  alt=''
                  onClick={open}
                />
              )}
            </Item>       <Item
          original={require('../images/dobra-slika.jfif')}
          thumbnail={require('../images/dobra-slika.jfif')}
          width="1600"
          height="1600"
          title="Author: Folkert Gorter"
          id="so-first"
        >
          {({ ref, open }) => (
            <img
              style={{ cursor: 'pointer' }}
              src={require('../images/dobra-slika.jfif')}
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
          title="Author: Samuel Rohl"
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
              original="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg"
              thumbnail="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg"
              width="1600"
              height="1066"
              title="Author: Ales Krivec"
            >
              {({ ref, open }) => (
                <img
                  style={smallItemStyles}
                  src="https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg"
                  ref={ref}
                  alt=''
                  onClick={open}
                />
              )}
            </Item>
            <Item
              original="https://farm6.staticflickr.com/5584/14985868676_b51baa4071_h.jpg"
              thumbnail="https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg"
              width="1600"
              height="1066"
              title="Author: Michael Hull"
            >
              {({ ref, open }) => (
                <img
                  style={{ ...smallItemStyles, gridColumnStart: 2 }}
                  src="https://farm6.staticflickr.com/5584/14985868676_4b802b932a_m.jpg"
                  ref={ref}
                  alt=''
                  onClick={open}
                />
              )}
            </Item>
            <Item
              original="https://farm4.staticflickr.com/3920/15008465772_d50c8f0531_h.jpg"
              thumbnail="https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg"
              width="1600"
              height="1066"
              title="Author: Thomas Lefebvre"
            >
              {({ ref, open }) => (
                <img
                  style={smallItemStyles}
                  src="https://farm4.staticflickr.com/3920/15008465772_383e697089_m.jpg"
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
