import React from 'react'
import Main from '../games/main/Main'
import Slova from '../games/slova/Slova'
import Drvo from '../games/drvo/Drvo'
import DrvoSlova from "../games/drvo/SlovaK"
import Tabla from "../games/tabla/Tabla"
import Skrivalice from "../games/skrivalice/Skrivalice"
import SlovaSkrivalice from '../games/skrivalice/SlovaA'
import bg1 from "../games/skrivalice/bg-vasar.jpg"
import Karte from "../games/karte/Karte"
import KarteK from "../games/karte/KarteK"
import Reci from "../games/reci/Reci"
import ReciK from "../games/reci/ReciK"
import ReciK3 from "../games/reci/ReciK3"
import Deca from '../games/deca/Deca'
import DecaReci from "../games/deca/ReciK"
import Video from '../games/video/Video'
import Spajanje from "../games/spajanje/Spajanje"
import PojmoviK from "../games/spajanje/PojmoviK"
import SlikaIRec from "../games/slika-i-rec/SlikaIRec"
import rec from '../games/slika-i-rec/RecDz09'
import Pravilna from "../games/pravilna-slova/Pravilna"
import SlovaDz09 from "../games/pravilna-slova/SlovaDz09"
import Opisivanje from "../games/opisivanje/Opisivanje"
import OpisDz09 from "../games/opisivanje/OpisDz09"
import Dzak from "../games/dzak/Dzak"
import Items09 from "../games/dzak/Items09";
import Leptiri from "../games/leptiri/Leptiri"
import Spirala from "../games/spirala/Spirala"
import slova from "../games/spirala/SlovaK";
import Povezivanje from "../games/povezivanje/Povezivanje"
import povezivanje from "../games/povezivanje/PojmoviK"
import Pojmovi from "../games/pojmovi/Pojmovi"
import pojmovi from "../games/pojmovi/PojmoviK"
import Reci09 from "../games/leptiri/Reci09";

const audioTabla = '05 hajde sada ti napisi nase slovo K.mp3'
const letter = "radno-23.png"

class Dz09 extends React.Component {
    state = {
        slide: 20
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slovo={13} bg={4} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slova={DrvoSlova} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla audio={audioTabla} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte cards={KarteK} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slova={SlovaSkrivalice} bg={bg1} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Reci reci={ReciK} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Reci reci={ReciK3} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Deca reci={DecaReci} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <Spajanje game={PojmoviK} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <SlikaIRec rec={rec[0]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <SlikaIRec rec={rec[1]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <SlikaIRec rec={rec[2]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <SlikaIRec rec={rec[3]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <SlikaIRec rec={rec[4]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Pravilna slova={SlovaDz09} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Opisivanje opis={OpisDz09} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Dzak items={Items09} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 19 ? <Leptiri reci={Reci09} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 20 ? <Spirala slova={slova.slova} recenica={slova.recenica} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 21 ? <Pojmovi pojmovi={pojmovi} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 22 ? <Povezivanje povezivanje={povezivanje} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 23 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 24 ? <Video /> : null}
            </div>
        );
    }
}

export default Dz09;
