import React from 'react'
import Main from '../games/main/Main'
import Slova from '../games/slova/Slova'
import Drvo from '../games/drvo/Drvo'
import Tabla from "../games/tabla/Tabla"
import Skrivalice from "../games/skrivalice/Skrivalice"
import SlovaSkrivalice from '../games/skrivalice/SlovaA'
import bg1 from '../games/skrivalice/bg-dino.jpg'

import Karte from "../games/karte/Karte"
import KarteD from "../games/karte/KarteD";

import Reci from "../games/reci/Reci"
import ReciD3 from "../games/reci/ReciD";

import Deca from '../games/deca/Deca'
import DecaReci from '../games/deca/ReciD'

import Video from '../games/video/Video'

import Spajanje from "../games/spajanje/Spajanje"
import PojmoviD from "../games/spajanje/PojmoviD";

import SlikaIRec from "../games/slika-i-rec/SlikaIRec"
import RecDva from "../games/slika-i-rec/RecDva";
import RecDusek from "../games/slika-i-rec/RecDusek";
import RecLabud from "../games/slika-i-rec/RecLabud";
import RecDrvo from "../games/slika-i-rec/RecDrvo";
import RecDoktor from "../games/slika-i-rec/RecDoktor";
import RecZvezda from "../games/slika-i-rec/RecZvezda";

import Pravilna from "../games/pravilna-slova/Pravilna"
import SlovaDz15 from "../games/pravilna-slova/SlovaDz15"

import Opisivanje from "../games/opisivanje/Opisivanje"
import OpisDz15 from "../games/opisivanje/OpisDz15"

import Dzak from "../games/dzak/Dzak"
import Items15 from "../games/dzak/Items15";

import Leptiri from "../games/leptiri/Leptiri"

import '../../App.css';
import '../../bootstrap.css'
import Spirala from "../games/spirala/Spirala";
import Povezivanje from "../games/povezivanje/Povezivanje";
import povezivanje from "../games/povezivanje/PojmoviD"

import Slagalica from "../games/slagalica/Slagalica";
import Pojmovi from "../games/pojmovi/Pojmovi";
import pojmovi from "../games/pojmovi/PojmoviD"

import Reci15 from "../games/leptiri/Reci15";
import SlovaD from "../games/spirala/SlovaD";
import RecenicaD from "../games/spirala/RecenicaD";
import SlagalicaDva from "../games/slagalica/SlagalicaDva";
import SlagalicaBadem from "../games/slagalica/SlagalicaBadem";
import SlagalicaMedalja from "../games/slagalica/SlagalicaMedalja";
import SlagalicaDevet from "../games/slagalica/SlagalicaDevet";
import SlagalicaPanda from "../games/slagalica/SlagalicaPanda";


const audioTabla = '16 hajde sada ti napisi nas enovo slovo D.mp3'
const letter = "radno-09.png"

class Dz15 extends React.Component {
    state = {
        slide: 1
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    backToMain = () => this.setState({ slide:0})

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slide={"d"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slide={"d"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla audio={audioTabla} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte cards={KarteD} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slova={SlovaSkrivalice} bg={bg1} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Reci reci={ReciD3} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Deca reci={DecaReci} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Spajanje game={PojmoviD} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <SlikaIRec rec={RecDva} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <SlikaIRec rec={RecDusek} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <SlikaIRec rec={RecLabud} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <SlikaIRec rec={RecDrvo} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <SlikaIRec rec={RecDoktor} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <SlikaIRec rec={RecZvezda} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Pravilna slova={SlovaDz15} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Opisivanje opis={OpisDz15} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Dzak items={Items15} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 19 ? <Leptiri reci={Reci15} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 20 ? <Spirala slova={SlovaD} recenica={RecenicaD} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 21 ? <Pojmovi pojmovi={pojmovi} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 22 ? <Povezivanje povezivanje={povezivanje} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 23 ? <Slagalica slagalica={SlagalicaDva} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 24 ? <Slagalica slagalica={SlagalicaBadem} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 25 ? <Slagalica slagalica={SlagalicaMedalja} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 26 ? <Slagalica slagalica={SlagalicaDevet} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 27 ? <Slagalica slagalica={SlagalicaPanda} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 28 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 29 ? <Video end={this.backToMain}/> : null}
            </div>
        );
    }
}

export default Dz15;
