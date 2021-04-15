import React from 'react'
import Main from '../games/main/Main'
import Slova from '../games/slova/Slova'
import Drvo from '../games/drvo/Drvo'
import DrvoSlova from "../games/drvo/SlovaB"

import Tabla from "../games/tabla/Tabla"
import Skrivalice from "../games/skrivalice/Skrivalice"
import SlovaSkrivalice from '../games/skrivalice/SlovaA'
import bg1 from '../games/skrivalice/bg-more.jpg'

import Karte from "../games/karte/Karte"
import KarteB from "../games/karte/KarteB";

import Reci from "../games/reci/Reci"
import ReciB3 from "../games/reci/ReciB3"

import Deca from '../games/deca/Deca'
import DecaReci from '../games/deca/ReciB'

import Video from '../games/video/Video'

import Spajanje from "../games/spajanje/Spajanje"
import PojmoviB from "../games/spajanje/PojmoviB"

import SlikaIRec from "../games/slika-i-rec/SlikaIRec"
import RecBik from "../games/slika-i-rec/RecBik";
import RecBure from "../games/slika-i-rec/RecBure";
import RecBalon from "../games/slika-i-rec/RecBalon";
import RecJabuka from "../games/slika-i-rec/RecJabuka";
import RecNebo from "../games/slika-i-rec/RecNebo";
import RecTabla from "../games/slika-i-rec/RecTabla";

import Pravilna from "../games/pravilna-slova/Pravilna"
import SlovaDz12 from "../games/pravilna-slova/SlovaDz12"

import Opisivanje from "../games/opisivanje/Opisivanje"
import OpisDz12 from "../games/opisivanje/OpisDz12"

import Dzak from "../games/dzak/Dzak"
import Items12 from "../games/dzak/Items12";

import Leptiri from "../games/leptiri/Leptiri"
import Spirala from "../games/spirala/Spirala";
import Povezivanje from "../games/povezivanje/Povezivanje";
import povezivanje from "../games/povezivanje/PojmoviB"

import Slagalica from "../games/slagalica/Slagalica";
import Pojmovi from "../games/pojmovi/Pojmovi";
import pojmovi from "../games/pojmovi/PojmoviB"

import '../../App.css';
import '../../bootstrap.css'
import Reci12 from "../games/leptiri/Reci12";
import SlovaB from "../games/spirala/SlovaB";
import RecenicaB from "../games/spirala/RecenicaB";
import SlagalicaNebo from "../games/slagalica/SlagalicaNebo";
import SlagalicaRiba from "../games/slagalica/SlagalicaRiba";
import SlagalicaBalerina from "../games/slagalica/SlagalicaBalerina";
import SlagalicaJabuka from "../games/slagalica/SlagalicaJabuka";
import Puzle from "../games/puzle/Puzle"
import puzle from "../games/puzle/PuzleDz12"
import puzle2 from "../games/puzle/PuzleDz12-2"

const audioTabla = '16 hajde sada ti napisi nas enovo slovo B.mp3'
const letter = "radno-03.png"

class Dz12 extends React.Component {
    state = {
        slide: 1
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    backToMain = () => this.setState({ slide:0})

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slovo={16} bg={4} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slova={DrvoSlova} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla audio={audioTabla} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte cards={KarteB} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slova={SlovaSkrivalice} bg={bg1} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Reci reci={ReciB3} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Deca reci={DecaReci} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Spajanje game={PojmoviB} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <SlikaIRec rec={RecBik} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <SlikaIRec rec={RecBure} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <SlikaIRec rec={RecBalon} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <SlikaIRec rec={RecJabuka} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <SlikaIRec rec={RecNebo} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <SlikaIRec rec={RecTabla} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Pravilna slova={SlovaDz12} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Opisivanje opis={OpisDz12} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Dzak items={Items12} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 19 ? <Leptiri reci={Reci12} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 20 ? <Spirala slova={SlovaB} recenica={RecenicaB} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 21 ? <Pojmovi pojmovi={pojmovi} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 22 ? <Povezivanje povezivanje={povezivanje} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 23 ? <Slagalica slagalica={SlagalicaNebo} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 24 ? <Slagalica slagalica={SlagalicaRiba} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 25 ? <Slagalica slagalica={SlagalicaBalerina} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 26 ? <Slagalica slagalica={SlagalicaJabuka} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 27 ? <Puzle game={puzle} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 28 ? <Puzle game={puzle2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 29 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 30 ? <Video end={this.backToMain}/> : null}
            </div>
        );
    }
}

export default Dz12;
