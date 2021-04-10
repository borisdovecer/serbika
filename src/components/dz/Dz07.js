import React from 'react'
import Main from '../games/main/Main'
import Slova from '../games/slova/Slova'
import Drvo from '../games/drvo/Drvo'
import DrvoSlova from "../games/drvo/SlovaSH"

import Tabla from "../games/tabla/Tabla"
import Skrivalice from "../games/skrivalice/Skrivalice"
import SlovaSkrivalice from '../games/skrivalice/SlovaA'
import bg1 from "../games/skrivalice/bg-bara.jpg"

import Karte from "../games/karte/Karte"
import KarteSH from "../games/karte/KarteSH";

import Reci from "../games/reci/Reci"
import ReciSh from "../games/reci/ReciSh"
import ReciSh3 from "../games/reci/ReciSh3"

import Deca from '../games/deca/Deca'
import DecaReci from "../games/deca/ReciSh"

import Video from '../games/video/Video'

import Spajanje from "../games/spajanje/Spajanje"
import PojmoviSh from "../games/spajanje/PojmoviSh"

import SlikaIRec from "../games/slika-i-rec/SlikaIRec"
import RecMis from "../games/slika-i-rec/RecMis"
import RecSator from "../games/slika-i-rec/RecSator"
import RecUsi from "../games/slika-i-rec/RecUsi"
import RecTasna from "../games/slika-i-rec/RecTasna"

import Pravilna from "../games/pravilna-slova/Pravilna"
import SlovaDz07 from "../games/pravilna-slova/SlovaDz07"

import Opisivanje from "../games/opisivanje/Opisivanje"
import OpisDz07 from "../games/opisivanje/OpisDz07"

import Dzak from "../games/dzak/Dzak"
import Items07 from "../games/dzak/Items07";

import Leptiri from "../games/leptiri/Leptiri"
import Reci07 from "../games/leptiri/Reci07";

import Spirala from "../games/spirala/Spirala"
import Pojmovi from "../games/pojmovi/Pojmovi"
import pojmovi from "../games/pojmovi/PojmoviSh"

import '../../App.css';
import '../../bootstrap.css'
import SlovaSh from "../games/spirala/SlovaSh";
import RecenicaSh from "../games/spirala/RecenicaSh";

const audioTabla = '05 hajde sada ti napisi nase slovo J.mp3'
const letter = "radno-59.png"

class Dz07 extends React.Component {
    state = {
        slide: 1
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    backToMain = () => this.setState({ slide:0})

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slovo={11} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slova={DrvoSlova} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla audio={audioTabla} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte cards={KarteSH} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slova={SlovaSkrivalice} bg={bg1} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Reci reci={ReciSh} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Reci reci={ReciSh3} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Deca bg={3} reci={DecaReci} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <Spajanje slide={"sh"} game={PojmoviSh} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <SlikaIRec rec={RecMis} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <SlikaIRec rec={RecSator} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <SlikaIRec rec={RecUsi} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <SlikaIRec rec={RecTasna} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <Pravilna slova={SlovaDz07} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Opisivanje opis={OpisDz07} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Dzak items={Items07} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Leptiri reci={Reci07} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 19 ? <Spirala slova={SlovaSh} recenica={RecenicaSh} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 20 ? <Pojmovi pojmovi={pojmovi} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 21 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 22 ? <Video end={this.backToMain}/> : null}

            </div>
        );
    }
}

export default Dz07;
