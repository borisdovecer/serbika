import React from 'react'
import Main from '../games/main/Main'
import Slova from '../games/slova/Slova'
import Drvo from '../games/drvo/Drvo'
import DrvoSlova from "../games/drvo/SlovaG"

import Tabla from "../games/tabla/Tabla"
import Skrivalice from "../games/skrivalice/Skrivalice"
import SlovaSkrivalice from '../games/skrivalice/SlovaA'
import bg1 from '../games/skrivalice/bg-neon-grad.jpg'

import Karte from "../games/karte/Karte"
import KarteG from "../games/karte/KarteG"

import Reci from "../games/reci/Reci"
import ReciG3 from "../games/reci/ReciG"

import Deca from '../games/deca/Deca'
import DecaReci from '../games/deca/ReciG'

import Video from '../games/video/Video'

import Spajanje from "../games/spajanje/Spajanje"
import PojmoviG from "../games/spajanje/PojmoviG"

import SlikaIRec from "../games/slika-i-rec/SlikaIRec"
import RecTeg from "../games/slika-i-rec/RecTeg";
import RecGrad from "../games/slika-i-rec/RecGrad";
import RecGlobus from "../games/slika-i-rec/RecGlobus";
import RecLego from "../games/slika-i-rec/RecLego";
import RecGnezdo from "../games/slika-i-rec/RecGnezdo";
import RecTegla from "../games/slika-i-rec/RecTegla";

import Pravilna from "../games/pravilna-slova/Pravilna"
import SlovaDz16 from "../games/pravilna-slova/SlovaDz16"

import Opisivanje from "../games/opisivanje/Opisivanje"
import OpisDz16 from "../games/opisivanje/OpisDz16"

import Dzak from "../games/dzak/Dzak"
import Items16 from "../games/dzak/Items16"
import Leptiri from "../games/leptiri/Leptiri"
import Spirala from "../games/spirala/Spirala";
import Povezivanje from "../games/povezivanje/Povezivanje";
import povezivanje from "../games/povezivanje/PojmoviG"

import Slagalica from "../games/slagalica/Slagalica";
import Pojmovi from "../games/pojmovi/Pojmovi";
import pojmovi from "../games/pojmovi/PojmoviG"

import '../../App.css';
import '../../bootstrap.css'
import Reci16 from "../games/leptiri/Reci16";
import SlovaG from "../games/spirala/SlovaG";
import RecenicaG from "../games/spirala/RecenicaG";
import SlagalicaGol from "../games/slagalica/SlagalicaGol";
import SlagalicaGrana from "../games/slagalica/SlagalicaGrana";
import SlagalicaGlava from "../games/slagalica/SlagalicaGlava";
import SlagalicaDugme from "../games/slagalica/SlagalicaDugme";
import SlagalicaDuga from "../games/slagalica/SlagalicaDuga";
import Puzle from "../games/puzle/Puzle";
import puzle from "../games/puzle/PuzleDz16a";
import puzle2 from "../games/puzle/PuzleDz16b";
import puzle3 from "../games/puzle/PuzleDz16c";

const audioTabla = '16 hajde sada ti napisi nas enovo slovo G.mp3'
const letter = "radno-07.png"

class Dz16 extends React.Component {
    state = {
        slide: 1
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    backToMain = () => this.setState({ slide:0})

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slovo={20} bg={4} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slova={DrvoSlova} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla audio={audioTabla} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte cards={KarteG} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slova={SlovaSkrivalice} bg={bg1} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Reci reci={ReciG3} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Deca reci={DecaReci} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Spajanje game={PojmoviG} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <SlikaIRec rec={RecTeg} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <SlikaIRec rec={RecGrad} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <SlikaIRec rec={RecGlobus} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <SlikaIRec rec={RecLego} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <SlikaIRec rec={RecGnezdo} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <SlikaIRec rec={RecTegla} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Pravilna slova={SlovaDz16} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Opisivanje opis={OpisDz16} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Dzak items={Items16} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 19 ? <Leptiri reci={Reci16} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 20 ? <Spirala slova={SlovaG} recenica={RecenicaG} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 21 ? <Pojmovi pojmovi={pojmovi} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 22 ? <Povezivanje povezivanje={povezivanje} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 23 ? <Slagalica slagalica={SlagalicaGol} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 24 ? <Slagalica slagalica={SlagalicaGrana} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 25 ? <Slagalica slagalica={SlagalicaGlava} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 26 ? <Slagalica slagalica={SlagalicaDugme} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 27 ? <Slagalica slagalica={SlagalicaDuga} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 28 ? <Puzle game={puzle} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 29 ? <Puzle game={puzle2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 30 ? <Puzle game={puzle3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 31 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 32 ? <Video end={this.backToMain}/> : null}
            </div>
        );
    }
}

export default Dz16;
