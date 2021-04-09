import React from 'react'
import Main from '../games/main/Main'
import Slova from '../games/slova/Slova'
import Drvo from '../games/drvo/Drvo'
import Tabla from "../games/tabla/Tabla"
import Skrivalice from "../games/skrivalice/Skrivalice"
import SlovaSkrivalice from '../games/skrivalice/SlovaA'
import bg1 from '../games/skrivalice/bg-soba.jpg'

import Karte from "../games/karte/Karte"
import KarteH from "../games/karte/KarteH";

import Reci from "../games/reci/Reci"
import ReciH3 from "../games/reci/ReciH3"

import Deca from '../games/deca/Deca'
import DecaReci from '../games/deca/ReciH'

import Video from '../games/video/Video'

import Spajanje from "../games/spajanje/Spajanje"
import PojmoviH from "../games/spajanje/PojmoviH";

import SlikaIRec from "../games/slika-i-rec/SlikaIRec"
import RecHor from "../games/slika-i-rec/RecHor";
import RecOrah from "../games/slika-i-rec/RecOrah";
import RecHotdog from "../games/slika-i-rec/RecHotdog";
import RecHokej from "../games/slika-i-rec/RecHokej";
import RecHaljina from "../games/slika-i-rec/RecHaljina";

import Pravilna from "../games/pravilna-slova/Pravilna"
import SlovaDz18 from "../games/pravilna-slova/SlovaDz18"

import Opisivanje from "../games/opisivanje/Opisivanje"
import OpisDz18 from "../games/opisivanje/OpisDz18"

import Dzak from "../games/dzak/Dzak"
import Items18 from "../games/dzak/Items18"

import Leptiri from "../games/leptiri/Leptiri"
import Spirala from "../games/spirala/Spirala";
import Povezivanje from "../games/povezivanje/Povezivanje";
import Slagalica from "../games/slagalica/Slagalica";
import Pojmovi from "../games/pojmovi/Pojmovi";
import '../../App.css';
import '../../bootstrap.css'
import Reci18 from "../games/leptiri/Reci18";

const audioTabla = '16 hajde sada ti napisi nas enovo slovo H.mp3'
const letter = "radno-51.png"

class Dz18 extends React.Component {
    state = {
        slide: 1
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    backToMain = () => this.setState({ slide:0})

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slide={"h"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slide={"h"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla audio={audioTabla} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte cards={KarteH} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slova={SlovaSkrivalice} bg={bg1} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Reci reci={ReciH3} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Deca reci={DecaReci} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Spajanje game={PojmoviH} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <SlikaIRec rec={RecHor} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <SlikaIRec rec={RecOrah} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <SlikaIRec rec={RecHotdog} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <SlikaIRec rec={RecHokej} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <SlikaIRec rec={RecHaljina} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <Pravilna slova={SlovaDz18} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Opisivanje opis={OpisDz18} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Dzak items={Items18} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Leptiri reci={Reci18} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 19 ? <Spirala slide={"h"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 20 ? <Pojmovi slide={"h"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 21 ? <Povezivanje slide={"h"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 22 ? <Slagalica slide={"shah"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 23 ? <Slagalica slide={"osmeh"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 24 ? <Slagalica slide={"hleb"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 25 ? <Slagalica slide={"hrcak"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 26 ? <Slagalica slide={"hemijska"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 27 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 28 ? <Video end={this.backToMain}/> : null}
            </div>
        );
    }
}

export default Dz18;
