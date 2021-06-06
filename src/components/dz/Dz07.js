import React from 'react'
import Main from '../games/main/Main'
import Slova from '../games/slova/Slova'
import Drvo from '../games/drvo/Drvo'
import DrvoSlova from "../games/drvo/SlovaSH"
import Tabla from "../games/tabla/Tabla"
import Skrivalice from "../games/skrivalice/Skrivalice"
import SlovaSkrivalice from '../games/skrivalice/SlovaA'
import bg1 from "../games/skrivalice/bg-bara.jpg"
import Karte from "../games/karte/Karte"
import KarteSH from "../games/karte/KarteSH";
import Reci from "../games/reci/Reci"
import ReciSh from "../games/reci/ReciSh"
import ReciSh3 from "../games/reci/ReciSh3"
import Deca from '../games/deca/Deca'
import DecaReci from "../games/deca/ReciSh"
import Video from '../games/video/Video'
import Spajanje from "../games/spajanje/Spajanje"
import PojmoviSh from "../games/spajanje/PojmoviSh"
import SlikaIRec from "../games/slika-i-rec/SlikaIRec"
import rec from '../games/slika-i-rec/RecDz07'
import Pravilna from "../games/pravilna-slova/Pravilna"
import SlovaDz07 from "../games/pravilna-slova/SlovaDz07"
import Opisivanje from "../games/opisivanje/Opisivanje"
import OpisDz07 from "../games/opisivanje/OpisDz07"
import Dzak from "../games/dzak/Dzak"
import Items07 from "../games/dzak/Items07";
import Leptiri from "../games/leptiri/Leptiri"
import Reci07 from "../games/leptiri/Reci07";
import Spirala from "../games/spirala/Spirala"
import slova from "../games/spirala/SlovaSh";
import Pojmovi from "../games/pojmovi/Pojmovi"
import pojmovi from "../games/pojmovi/PojmoviSh"

const audioTabla = '05 hajde sada ti napisi nase slovo J.mp3'
const letter = "radno-59.png"

class Dz07 extends React.Component {
    state = {
        slide: 19
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slovo={'sh'} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slova={DrvoSlova} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla audio={audioTabla} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte cards={KarteSH} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slova={SlovaSkrivalice} bg={bg1} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Reci reci={ReciSh} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Reci reci={ReciSh3} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Deca bg={3} reci={DecaReci} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <Spajanje game={PojmoviSh} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <SlikaIRec rec={rec[0]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <SlikaIRec rec={rec[1]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <SlikaIRec rec={rec[2]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <SlikaIRec rec={rec[3]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <Pravilna slova={SlovaDz07} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Opisivanje opis={OpisDz07} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Dzak items={Items07} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Leptiri reci={Reci07} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 19 ? <Spirala slova={slova.slova} recenica={slova.recenica} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 20 ? <Pojmovi pojmovi={pojmovi} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 21 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 22 ? <Video end={this.backToMain}/> : null}
            </div>
        );
    }
}

export default Dz07;
