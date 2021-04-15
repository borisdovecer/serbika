import React from 'react'
import Main from '../games/main/Main'
import Slova from '../games/slova/Slova'
import Drvo from '../games/drvo/Drvo'
import DrvoSlova from "../games/drvo/SlovaV"

import Tabla from "../games/tabla/Tabla"
import Skrivalice from "../games/skrivalice/Skrivalice"
import SlovaSkrivalice from '../games/skrivalice/SlovaA'
import bg1 from '../games/skrivalice/bg-zivotinjce2.jpg'

import Karte from "../games/karte/Karte"
import KarteV from "../games/karte/KarteV";

import Reci from "../games/reci/Reci"
import ReciV3 from "../games/reci/ReciV3"

import Deca from '../games/deca/Deca'
import DecaReci from '../games/deca/ReciV'

import Video from '../games/video/Video'

import Spajanje from "../games/spajanje/Spajanje"
import PojmoviV from "../games/spajanje/PojmoviV";

import SlikaIRec from "../games/slika-i-rec/SlikaIRec"
import RecVuk from "../games/slika-i-rec/RecVuk";
import RecMravi from "../games/slika-i-rec/RecMravi";
import RecTrava from "../games/slika-i-rec/RecTrava";
import RecBreskva from "../games/slika-i-rec/RecBreskva";
import RecLav from "../games/slika-i-rec/ReciLav";
import RecSveska from "../games/slika-i-rec/RecSveska";

import Pravilna from "../games/pravilna-slova/Pravilna"
import SlovaDz13 from "../games/pravilna-slova/SlovaDz13"

import Opisivanje from "../games/opisivanje/Opisivanje"
import OpisDz13 from "../games/opisivanje/OpisDz13"

import Dzak from "../games/dzak/Dzak"
import Items13 from "../games/dzak/Items13";

import Leptiri from "../games/leptiri/Leptiri"
import Spirala from "../games/spirala/Spirala";
import Povezivanje from "../games/povezivanje/Povezivanje";
import povezivanje from "../games/povezivanje/PojmoviV"
import Slagalica from "../games/slagalica/Slagalica";
import Pojmovi from "../games/pojmovi/Pojmovi";
import pojmovi from "../games/pojmovi/PojmoviV"
import '../../App.css';
import '../../bootstrap.css'
import Reci13 from "../games/leptiri/Reci13";
import SlovaV from "../games/spirala/SlovaV";
import RecenicaV from "../games/spirala/RecenicaV";
import SlagalicaSova from "../games/slagalica/SlagalicaSova";
import SlagalicaOlovka from "../games/slagalica/SlagalicaOlovka";
import SlagalicaMravi from "../games/slagalica/SlagalicaMravi";
import SlagalicaKlovn from "../games/slagalica/SlagalicaKlovn";
import SlagalicaSljiva from "../games/slagalica/SlagalicaSljiva";
import Puzle from "../games/puzle/Puzle"
import puzle from "../games/puzle/PuzleDz13"
import puzle2 from "../games/puzle/PuzleDz13b"
import puzle3 from "../games/puzle/PuzleDz13c"

const audioTabla = '16 hajde sada ti napisi nas enovo slovo V.mp3'
const letter = "radno-05.png"

class Dz13 extends React.Component {
    state = {
        slide: 1
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    backToMain = () => this.setState({ slide:0})

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slovo={17} bg={4} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slova={DrvoSlova} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla audio={audioTabla} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte cards={KarteV} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slova={SlovaSkrivalice} bg={bg1} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Reci reci={ReciV3} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Deca reci={DecaReci} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Spajanje game={PojmoviV} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <SlikaIRec rec={RecVuk} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <SlikaIRec rec={RecMravi} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <SlikaIRec rec={RecTrava} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <SlikaIRec rec={RecBreskva} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <SlikaIRec rec={RecLav} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <SlikaIRec rec={RecSveska} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Pravilna slova={SlovaDz13} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Opisivanje opis={OpisDz13} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Dzak items={Items13} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 19 ? <Leptiri reci={Reci13} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 20 ? <Spirala slova={SlovaV} recenica={RecenicaV} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 21 ? <Pojmovi pojmovi={pojmovi} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 22 ? <Povezivanje povezivanje={povezivanje} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 23 ? <Slagalica slagalica={SlagalicaSova} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 24 ? <Slagalica slagalica={SlagalicaOlovka} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 25 ? <Slagalica slagalica={SlagalicaMravi} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 26 ? <Slagalica slagalica={SlagalicaKlovn} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 27 ? <Slagalica slagalica={SlagalicaSljiva} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 28 ? <Puzle game={puzle} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 29 ? <Puzle game={puzle2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 30 ? <Puzle game={puzle3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 31 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 32 ? <Video end={this.backToMain}/> : null}
            </div>
        );
    }
}

export default Dz13;
