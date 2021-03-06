import React from 'react'
import Main from '../games/main/Main'
import Slova from '../games/slova/Slova'
import Drvo from '../games/drvo/Drvo'
import DrvoSlova from "../games/drvo/SlovaR"
import Tabla from "../games/tabla/Tabla"
import Skrivalice from "../games/skrivalice/Skrivalice"
import SlovaSkrivalice from '../games/skrivalice/SlovaA'
import bg1 from "../games/skrivalice/skrivalice-bg-6.jpg"
import Karte from "../games/karte/Karte"
import KarteR from "../games/karte/KarteR"
import Reci from "../games/reci/Reci"
import ReciR from "../games/reci/ReciR"
import ReciR3 from "../games/reci/ReciR3"
import Deca from '../games/deca/Deca'
import DecaReci from "../games/deca/Reci4"
import Video from '../games/video/Video'
import Spajanje from "../games/spajanje/Spajanje"
import PojmoviR from "../games/spajanje/PojmoviR"
import SlikaIRec from "../games/slika-i-rec/SlikaIRec"
import rec from '../games/slika-i-rec/RecDz06'
import Pravilna from "../games/pravilna-slova/Pravilna"
import SlovaDz06 from "../games/pravilna-slova/SlovaDz06"
import Opisivanje from "../games/opisivanje/Opisivanje"
import OpisDz06 from "../games/opisivanje/OpisDz06"
import Dzak from "../games/dzak/Dzak"
import Items06 from "../games/dzak/Items06";
import Leptiri from "../games/leptiri/Leptiri"
import Reci06 from "../games/leptiri/Reci06";

const audioTabla = '05 hajde sada ti napisi nase slovo J.mp3'
const letter = "radno-39.png"

class Dz06 extends React.Component {
    state = {
        slide: 1
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slovo={'r'} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slova={DrvoSlova} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla audio={audioTabla} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte cards={KarteR} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slova={SlovaSkrivalice} bg={bg1} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Reci reci={ReciR} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Reci reci={ReciR3} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Deca bg={3} reci={DecaReci} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <Spajanje game={PojmoviR} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <SlikaIRec rec={rec[0]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <SlikaIRec rec={rec[1]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <SlikaIRec rec={rec[2]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <Pravilna slova={SlovaDz06} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <Opisivanje opis={OpisDz06} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Dzak items={Items06} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Leptiri reci={Reci06} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 19 ? <Video /> : null}
            </div>
        );
    }
}

export default Dz06;
