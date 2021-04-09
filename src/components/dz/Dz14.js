import React from 'react'
import Main from '../games/main/Main'
import Slova from '../games/slova/Slova'
import Drvo from '../games/drvo/Drvo'
import Tabla from "../games/tabla/Tabla"
import Skrivalice from "../games/skrivalice/Skrivalice"
import SlovaSkrivalice from '../games/skrivalice/SlovaA'
import bg1 from '../games/skrivalice/bg-vozic.jpg'

import Karte from "../games/karte/Karte"
import KarteZ from "../games/karte/KarteZ";

import Reci from "../games/reci/Reci"
import ReciZ3 from "../games/reci/ReciZ"

import Deca from '../games/deca/Deca'
import DecaReci from '../games/deca/ReciZ'

import Video from '../games/video/Video'

import Spajanje from "../games/spajanje/Spajanje"
import PojmoviZ from "../games/spajanje/PojmoviZ";

import SlikaIRec from "../games/slika-i-rec/SlikaIRec"
import RecZub from "../games/slika-i-rec/RecZub";
import RecZvono from "../games/slika-i-rec/RecZvono";
import RecZebra from "../games/slika-i-rec/RecZebra";
import RecVitez from "../games/slika-i-rec/RecVitez";
import RecBizon from "../games/slika-i-rec/RecBizon";
import RecKavez from "../games/slika-i-rec/RecKavez";

import Pravilna from "../games/pravilna-slova/Pravilna"
import SlovaDz14 from "../games/pravilna-slova/SlovaDz14"

import Opisivanje from "../games/opisivanje/Opisivanje"
import OpisDz14 from "../games/opisivanje/OpisDz14"

import Dzak from "../games/dzak/Dzak"
import Items14 from "../games/dzak/Items14";

import Leptiri from "../games/leptiri/Leptiri"
import Spirala from "../games/spirala/Spirala";
import Povezivanje from "../games/povezivanje/Povezivanje";
import Slagalica from "../games/slagalica/Slagalica";
import Pojmovi from "../games/pojmovi/Pojmovi";

import '../../App.css';
import '../../bootstrap.css'
import Reci14 from "../games/leptiri/Reci14";

const audioTabla = '16 hajde sada ti napisi nas enovo slovo Z.mp3'
const letter = "radno-17.png"

class Dz14 extends React.Component {
    state = {
        slide: 1
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    backToMain = () => this.setState({ slide:0})

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slide={"z"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slide={"z"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla audio={audioTabla} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte cards={KarteZ} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slova={SlovaSkrivalice} bg={bg1} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Reci reci={ReciZ3} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Deca reci={DecaReci} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Spajanje game={PojmoviZ} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <SlikaIRec rec={RecZub} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <SlikaIRec rec={RecZvono} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <SlikaIRec rec={RecZebra} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <SlikaIRec rec={RecVitez} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <SlikaIRec rec={RecBizon} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <SlikaIRec rec={RecKavez} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Pravilna slova={SlovaDz14} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Opisivanje opis={OpisDz14} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Dzak items={Items14} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 19 ? <Leptiri reci={Reci14} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 20 ? <Spirala slide={"z"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 21 ? <Pojmovi slide={"z"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 22 ? <Povezivanje slide={"z"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 23 ? <Slagalica slide={"zmaj"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 24 ? <Slagalica slide={"azbuka"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 25 ? <Slagalica slide={"zastava"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 26 ? <Slagalica slide={"puzle"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 27 ? <Slagalica slide={"muzika"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 28 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 29 ? <Video end={this.backToMain}/> : null}
            </div>
        );
    }
}

export default Dz14;
