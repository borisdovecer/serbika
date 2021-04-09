import React from 'react'
import Main from '../games/main/Main'
import Slova from '../games/slova/Slova'
import Drvo from '../games/drvo/Drvo'
import Tabla from "../games/tabla/Tabla"
import Skrivalice from "../games/skrivalice/Skrivalice"
import SlovaSkrivalice from '../games/skrivalice/SlovaA'
import bg1 from '../games/skrivalice/bg-farma.jpg'

import Karte from "../games/karte/Karte"
import KarteCh from "../games/karte/KarteCh";

import Reci from "../games/reci/Reci"
import ReciCh3 from "../games/reci/ReciCh";
import Deca from '../games/deca/Deca'
import DecaReci from '../games/deca/ReciCh'

import Video from '../games/video/Video'

import Spajanje from "../games/spajanje/Spajanje"
import PojmoviCh from "../games/spajanje/PojmoviCh";

import SlikaIRec from "../games/slika-i-rec/SlikaIRec"
import RecMac from "../games/slika-i-rec/RecMac";
import RecCaj from "../games/slika-i-rec/RecCaj";
import RecDecak from "../games/slika-i-rec/RecDecak";
import RecCarapa from "../games/slika-i-rec/RecCarapa";
import RecCizme from "../games/slika-i-rec/RecCizme";
import RecZvecka from "../games/slika-i-rec/RecZvecka";

import Pravilna from "../games/pravilna-slova/Pravilna"
import SlovaDz17 from "../games/pravilna-slova/SlovaDz17"

import Opisivanje from "../games/opisivanje/Opisivanje"
import OpisDz17 from "../games/opisivanje/OpisDz17"

import Dzak from "../games/dzak/Dzak"
import Items17 from "../games/dzak/Items17"
import Leptiri from "../games/leptiri/Leptiri"

import '../../App.css';
import '../../bootstrap.css'
import Spirala from "../games/spirala/Spirala";
import Povezivanje from "../games/povezivanje/Povezivanje";
import Slagalica from "../games/slagalica/Slagalica";
import Pojmovi from "../games/pojmovi/Pojmovi";
import Reci17 from "../games/leptiri/Reci17";

const audioTabla = '16 hajde sada ti napisi nas enovo slovo Ch.mp3'
const letter = "radno-51.png"

class Dz17 extends React.Component {
    state = {
        slide: 1
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    backToMain = () => this.setState({ slide:0})

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slide={"ch"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slide={"ch"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla audio={audioTabla} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte cards={KarteCh} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slova={SlovaSkrivalice} bg={bg1} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Reci reci={ReciCh3} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Deca reci={DecaReci} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Spajanje game={PojmoviCh} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <SlikaIRec rec={RecMac} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <SlikaIRec rec={RecCaj} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <SlikaIRec rec={RecDecak} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <SlikaIRec rec={RecCarapa} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <SlikaIRec rec={RecCizme} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <SlikaIRec rec={RecZvecka} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Pravilna slova={SlovaDz17} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Opisivanje opis={OpisDz17} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Dzak items={Items17} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 19 ? <Leptiri reci={Reci17} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 20 ? <Spirala slide={"ch"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 21 ? <Pojmovi slide={"ch"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 22 ? <Povezivanje slide={"ch"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 23 ? <Slagalica slide={"cep"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 24 ? <Slagalica slide={"pevac"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 25 ? <Slagalica slide={"cesalj"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 26 ? <Slagalica slide={"casa"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 27 ? <Slagalica slide={"cips"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 28 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 29 ? <Video end={this.backToMain}/> : null}
            </div>
        );
    }
}

export default Dz17;