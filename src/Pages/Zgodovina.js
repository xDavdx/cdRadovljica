import React from 'react'
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Zgodovina = () => {
    return (
        <div className='zgodovina-grid'>
            <div className='zgodovina-naslov center'>
                <img src={require('../images/naslovi.jpg')} alt="" width={'100%'} />
                <h1 className='naslovi'>ZGODOVINA</h1>
            </div>
            <div className='zgodovina-slika'>
                <img className='naslovi-slika' src={require('../images/Blog-single-img12.jpg')} alt="" width={'100%'} />
            </div>
            <div className='zgodovina-random najnovejse'>
                <h3>Najnovejše</h3>
                <hr />
                <p className='grey'>SLOVENCI V DUBAJ PRIPELJALI NAJVEČJO ČEBELO NA SVETU - Skoraj pet tisoč kilometrov nas loči do arabskega mesta Dubaj...</p>
                <p className='grey'>ČEBELARJI POČASTILI SVOJEGA ZAVETNIKA - </p>
                <p className='grey'>Odprta kuhna 2022 / Začetek 10. sezone Odprte kuhne v Ljubljani bo v petek, 18.3.2022</p>
                <p className='grey'>Odprta kuhna 2022 / Začetek 10. sezone Odprte kuhne v Ljubljani bo v petek, 18.3.2022</p>
            </div>
            <div className='nazaj-klik'>
                <Link className='link' to='/zanimivosti'><i className="fas fa-chevron-left"> Nazaj na zanimivosti</i></Link>
            </div>
            <div className='zgodovina-text1'>
                <h3 className='datum nazivi mb0'><i className="far fa-calendar-alt"></i> JAN 6, 2022 </h3>
                <h1 className='m0'>ČEBELARSTVO NA SLOVENSKEM</h1>
                <p className='font20'>
                    Ljubezen do čebel ima na Slovenskem dolgo tradicijo. Pravzaprav bi skoraj z 
                    gotovostjo lahko trdili, da na svetu težko najdemo deželo s tako bogato naravno 
                    in kulturno dediščino, tako vsestransko in raznoliko prepleteno s čebelarstvom, 
                    kot je naša. V Sloveniji se ljudje zelo dobro zavedajo izjemnega poslanstva čebel, 
                    zato je čebelarstvo močno zasidrano v slovensko tradicijo. Slovensko čebelarstvo 
                    odlikuje večstoletna in svetovno znana tradicija. Temu priča tudi dejstvo, da je bil 20.
                    maj, rojstni dan slovenskega čebelarja <strong> Antona Janše</strong>, leta 2017 razglašen za 
                    <strong> svetovni dan čebel.</strong>
                    <br /> <br />
                    Slovenski cvetoči travniki in gozdovi so domovanje kranjske sivke, avtohtone slovenske
                    podvrste čebele. Odlikujejo jo lastnosti, kot so krotkost, delavnost, skromnost in odličen
                    smisel za orientacijo.
                </p>
            </div>
            <div className='zgodovina-slike'>
                {/* Za prve 2 slike (width 50%) */}
                <div>
                    <img className='naslovi-slika' src={require('../images/Blog-single-img12.jpg')} alt="" width={'30%'} />
                    <img className='naslovi-slika' src={require('../images/Blog-single-img12.jpg')} alt="" width={'30%'} />
                    <img className='naslovi-slika' src={require('../images/Blog-single-img12.jpg')} alt="" width={'30%'} />
                </div>
            </div>
            <div className='zgodovina-text2'>
                <h1 className='m0'>ZGODOVINA ČEBELARSTVA</h1>
                <p className='font20'>
                    Čebelarjenje sega v čas po zadnji ledeni dobi, saj so se takrat razvile prve pasme medonosne čebele. Prve dokaze o 
                    ukvarjanju s čebelami najdemo na jamskih slikah pred več kot 10.000 let pred našim štetjem. Začetki čebelarstva so se
                    pričeli z odtujevanjem medu čebelam, saj je človek pričel med uporabljati kot posladek. Sčasoma ljudje čebel niso več
                    uničevali, da bi prišli do medu, pač pa so odvzeli le del sladkih zalog. Najprej so ljudje pričeli s prenosom čebel iz njihovega
                    doma v bližino naselij. S tem so čebele postale spremljevalec ljudi, ki so jih odnesli s sabo na novo osvojena ozemlja. 
                    Čebelarstvo se je razvijalo skupaj z naprednimi civilizacijami, večinoma v mediteranskem krogu (Egipt, Grčija, Rim). Tu so
                    nastali tudi prvi od človeka narejeni panji. Osnovni material je bilo blato, včasih tudi glina. Panji so bili valjaste oblike, 
                    uporabljali so jih v ležečem položaju. Ti panji so že omogočali odvzem medu in voska brez ubijanja čebel. Podobne panje 
                    so uporabljali tudi v antični Grčiji.
                        <br /> <br />
                    V naših krajih je čebelarstvo ubralo drugačno pot, ki ji je botrovala naselitev Slovanov. Za Slovane je bil značilen poseben
                    odnos do čebel. Slovanski panji so dejansko bili panji oziroma drevesna dupla, v katera so naseljevali čebele. Panje so 
                    čebelarji postavljali po gozdu, kar so začetki pašnega reda. Tak način gozdnega čebelarjenja se je obdržal približno do 18. 
                    stoletja. Vseskozi ga je od postavitve prvih žag v 13. stoletju izpodrivalo čebelarjenje v panjih iz žaganega lesa. Tako je prišlo 
                    do razvoja kranjiča, majhnega panja, ki je omogočal zlaganje v skladovnice, namestitev v čebelnjake in prevoze na pašo.
                    Majhni panji so bili idealni za pridobivanje čebeljih rojev, ki so jih trgovci prodajali širom po svetu. Trgovina s čebelami je 
                    dobro uspevala do konca prve svetovne vojne, delno uspevala v kraljevini Jugoslaviji in zamrla po drugi svetovni vojni.
                    Danes je v Sloveniji aktivnih kar okoli 8.000 čebelarjev.
                        <br /> <br />
                    Zgodovino slovenskega čebelarstva sta zaznamovala dva pomembna moža, ki sta naredila ogromno na področju 
                    čebelarstva tudi v svetovnem merilu: Anton Janša in Peter Pavel Glavar.
                        <br /> <br />
                    ANTON JANŠA (1734 - 1773) se je rodil 20. maja 1734 na Breznici pri Žirovnici. Leta 1770 je postal cesarsko-kraljevi učitelj 
                    čebelarstva na Dunaju. Poleg poučevanja je čebelaril na vrtu cesarice, potoval po Spodnji Avstriji, Moravski, Češki in
                    predstavljal svoja odkritja povezana s prevažanjem čebel na ajdovo pašo

                </p>
            </div>
        </div>
    )
}

export default Zgodovina;
