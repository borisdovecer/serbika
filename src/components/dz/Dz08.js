import React from 'react'
import Main from '../games/main/Main'
import Slova from '../games/slova/Slova'
import Drvo from '../games/drvo/Drvo'
import Tabla from "../games/tabla/Tabla"

import Skrivalice from "../games/skrivalice/Skrivalice"
import SlovaSkrivalice from '../games/skrivalice/SlovaA'
import bg1 from "../games/skrivalice/bg-zivotinjce.jpg"

import Karte from "../games/karte/Karte"
import KarteP from "../games/karte/KarteP"

import Reci from "../games/reci/Reci"
import ReciP from "../games/reci/ReciP"
import ReciP3 from "../games/reci/ReciP3"

import Deca from '../games/deca/Deca'
import DecaReci from "../games/deca/ReciP"

import Video from '../games/video/Video'

import Spajanje from "../games/spajanje/Spajanje"
import PojmoviP from "../games/spajanje/PojmoviP"

import SlikaIRec from "../games/slika-i-rec/SlikaIRec"
import RecSapun from "../games/slika-i-rec/RecSapun";
import RecPero from "../games/slika-i-rec/RecPero";
import RecPut from "../games/slika-i-rec/RecPut";
import RecPrase from "../games/slika-i-rec/RecPrase";
import RecPapir from "../games/slika-i-rec/RecPapir";

import Pravilna from "../games/pravilna-slova/Pravilna"
import SlovaDz08 from "../games/pravilna-slova/SlovaDz08"

import Opisivanje from "../games/opisivanje/Opisivanje"
import OpisDz08 from "../games/opisivanje/OpisDz08"

import Dzak from "../games/dzak/Dzak"
import Items08 from "../games/dzak/Items08";

import Leptiri from "../games/leptiri/Leptiri"
import Spirala from "../games/spirala/Spirala"
import Povezivanje from "../games/povezivanje/Povezivanje"
import povezivanje from "../games/povezivanje/PojmoviP"

import Pojmovi from "../games/pojmovi/Pojmovi";
import pojmovi from "../games/pojmovi/PojmoviP"

import '../../App.css';
import '../../bootstrap.css'
import Reci08 from "../games/leptiri/Reci08";
import SlovaP from "../games/spirala/SlovaP";
import RecenicaP from "../games/spirala/RecenicaP";

const audioTabla = '05 hajde sada ti napisi nase slovo P.mp3'
const letter = "radno-37.png"

class Dz08 extends React.Component {
    state = {
        slide: 1
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    backToMain = () => this.setState({ slide:0})

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slide={"p"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slide={"p"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla audio={audioTabla} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte cards={KarteP} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slova={SlovaSkrivalice} bg={bg1} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Reci reci={ReciP} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Reci reci={ReciP3} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Deca reci={DecaReci} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <Spajanje slide={"p"} game={PojmoviP} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <SlikaIRec rec={RecPut} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <SlikaIRec rec={RecPero} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <SlikaIRec rec={RecSapun} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <SlikaIRec rec={RecPrase} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <SlikaIRec rec={RecPapir} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Pravilna slova={SlovaDz08} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Opisivanje opis={OpisDz08} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Dzak items={Items08} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 19 ? <Leptiri reci={Reci08} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 20 ? <Spirala slova={SlovaP} recenica={RecenicaP} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 21 ? <Pojmovi pojmovi={pojmovi} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 22 ? <Povezivanje povezivanje={povezivanje} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 23 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 24 ? <Video end={this.backToMain}/> : null}
            </div>
        );
    }
}

export default Dz08;
