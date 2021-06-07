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
import rec from '../games/slika-i-rec/RecDz13'
import Pravilna from "../games/pravilna-slova/Pravilna"
import SlovaDz13 from "../games/pravilna-slova/SlovaDz13"
import Opisivanje from "../games/opisivanje/Opisivanje"
import OpisDz13 from "../games/opisivanje/OpisDz13"
import Dzak from "../games/dzak/Dzak"
import Items13 from "../games/dzak/Items13";
import Leptiri from "../games/leptiri/Leptiri"
import Spirala from "../games/spirala/Spirala";
import slova from "../games/spirala/SlovaV";
import Povezivanje from "../games/povezivanje/Povezivanje";
import povezivanje from "../games/povezivanje/PojmoviV"
import Slagalica from "../games/slagalica/Slagalica";
import slagalica from "../games/slagalica/SlagalicaDz13"
import Pojmovi from "../games/pojmovi/Pojmovi";
import pojmovi from "../games/pojmovi/PojmoviV"
import Reci13 from "../games/leptiri/Reci13";
import Puzle from "../games/puzle/Puzle"
import puzle from "../games/puzle/PuzleDz13"

const audioTabla = '16 hajde sada ti napisi nas enovo slovo V.mp3'
const letter = "radno-05.png"

class Dz13 extends React.Component {
    state = {
        slide: 1
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slovo={'v'} bg={4} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slova={DrvoSlova} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla audio={audioTabla} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte cards={KarteV} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slova={SlovaSkrivalice} bg={bg1} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Reci reci={ReciV3} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Deca reci={DecaReci} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Spajanje game={PojmoviV} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <SlikaIRec rec={rec[0]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <SlikaIRec rec={rec[1]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <SlikaIRec rec={rec[2]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <SlikaIRec rec={rec[3]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <SlikaIRec rec={rec[4]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <SlikaIRec rec={rec[5]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Pravilna slova={SlovaDz13} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Opisivanje opis={OpisDz13} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Dzak items={Items13} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 19 ? <Leptiri reci={Reci13} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 20 ? <Spirala slova={slova.slova} recenica={slova.recenica} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 21 ? <Pojmovi pojmovi={pojmovi} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 22 ? <Povezivanje povezivanje={povezivanje} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 23 ? <Slagalica slagalica={slagalica[0]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 24 ? <Slagalica slagalica={slagalica[1]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 25 ? <Slagalica slagalica={slagalica[2]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 26 ? <Slagalica slagalica={slagalica[3]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 27 ? <Slagalica slagalica={slagalica[4]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 28 ? <Puzle game={puzle[0]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 29 ? <Puzle game={puzle[1]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 30 ? <Puzle game={puzle[2]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 31 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 32 ? <Video /> : null}
            </div>
        );
    }
}

export default Dz13;
