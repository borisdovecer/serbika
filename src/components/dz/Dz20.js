import React from 'react'
import Main from '../games/main/Main'
import Slova from '../games/slova/Slova'
import Drvo from '../games/drvo/Drvo'
import DrvoSlova from "../games/drvo/SlovaZh"

import Tabla from "../games/tabla/Tabla"
import Skrivalice from "../games/skrivalice/Skrivalice"
import SlovaSkrivalice from '../games/skrivalice/SlovaA'
import bg1 from '../games/skrivalice/skrivalice-bg-6.jpg'

import Karte from "../games/karte/Karte"
import KarteZh from "../games/karte/KarteZh";

import Reci from "../games/reci/Reci"
import ReciZh3 from "../games/reci/ReciZh"

import Deca from '../games/deca/Deca'
import DecaReci from '../games/deca/ReciZh'

import Video from '../games/video/Video'

import Spajanje from "../games/spajanje/Spajanje"
import PojmoviZh from "../games/spajanje/PojmoviZh";

import SlikaIRec from "../games/slika-i-rec/SlikaIRec"
import RecZir from "../games/slika-i-rec/RecZir";
import RecZaba from "../games/slika-i-rec/RecZaba";
import RecMreza from "../games/slika-i-rec/RecMreza";
import RecPlaza from "../games/slika-i-rec/RecPlaza";
import RecZmurke from "../games/slika-i-rec/RecZmurke";

import Pravilna from "../games/pravilna-slova/Pravilna"
import SlovaDz20 from "../games/pravilna-slova/SlovaDz20"

import Opisivanje from "../games/opisivanje/Opisivanje"
import OpisDz20 from "../games/opisivanje/OpisDz20"

import Dzak from "../games/dzak/Dzak"
import Items20 from "../games/dzak/Items20"

import Leptiri from "../games/leptiri/Leptiri"
import Reci20 from "../games/leptiri/Reci20";

import Spirala from "../games/spirala/Spirala";
import SlovaZh from "../games/spirala/SlovaZh";
import RecenicaZh from "../games/spirala/RecenicaZh";

import Povezivanje from "../games/povezivanje/Povezivanje";
import povezivanje from "../games/povezivanje/PojmoviZh"
import Slagalica from "../games/slagalica/Slagalica";
import Pojmovi from "../games/pojmovi/Pojmovi";
import pojmovi from "../games/pojmovi/PojmoviZh"

import '../../App.css';
import '../../bootstrap.css'
import SlagalicaJez from "../games/slagalica/SlagalicaJez";
import SlagalicaRaza from "../games/slagalica/SlagalicaRaza";
import SlagalicaZvaka from "../games/slagalica/SlagalicaZvaka";
import SlagalicaZirafa from "../games/slagalica/SlagalicaZirafa";
import Puzle from "../games/puzle/Puzle";
import puzle from "../games/puzle/PuzleDz20a";
import puzle2 from "../games/puzle/PuzleDz20b";
import puzle3 from "../games/puzle/PuzleDz20c";
import Hrana from "../games/hrana/Hrana";
import hrana from "../games/hrana/HranaDz20";



const audioTabla = '16 hajde sada ti napisi nas enovo slovo Zh.mp3'
const letter = "radno-15.png"

class Dz20 extends React.Component {
    state = {
        slide: 1
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    backToMain = () => this.setState({ slide:0})

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slovo={24} bg={5} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slova={DrvoSlova} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla audio={audioTabla} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte cards={KarteZh} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slova={SlovaSkrivalice} bg={bg1} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Reci reci={ReciZh3} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Deca reci={DecaReci} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Spajanje game={PojmoviZh} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <SlikaIRec rec={RecZir} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <SlikaIRec rec={RecZaba} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <SlikaIRec rec={RecMreza} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <SlikaIRec rec={RecPlaza} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <SlikaIRec rec={RecZmurke} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <Pravilna slova={SlovaDz20} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Opisivanje opis={OpisDz20} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Dzak items={Items20} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Leptiri reci={Reci20} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 19 ? <Spirala slova={SlovaZh} recenica={RecenicaZh} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 20 ? <Pojmovi pojmovi={pojmovi} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 21 ? <Povezivanje povezivanje={povezivanje} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 22 ? <Slagalica slagalica={SlagalicaJez} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 23 ? <Slagalica slagalica={SlagalicaRaza} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 24 ? <Slagalica slagalica={SlagalicaZvaka} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 25 ? <Slagalica slagalica={SlagalicaZirafa} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 26 ? <Puzle game={puzle} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 27 ? <Puzle game={puzle2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 28 ? <Puzle game={puzle3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 29 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 30 ? <Hrana hrana={hrana.dorucak} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 31 ? <Hrana hrana={hrana.rucak} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 32 ? <Hrana hrana={hrana.vecera} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 33 ? <Video end={this.backToMain}/> : null}
            </div>
        );
    }
}

export default Dz20;
