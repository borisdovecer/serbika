import React from 'react'
import Main from '../games/main/Main'
import Slova from '../games/slova/Slova'
import Drvo from '../games/drvo/Drvo'
import DrvoSlova from "../games/drvo/SlovaT"
import DrvoSlova2 from "../games/drvo/SlovaO"
import Tabla from "../games/tabla/Tabla"
import Skrivalice from "../games/skrivalice/Skrivalice"
import SlovaSkrivalice from '../games/skrivalice/SlovaA'
import SlovaSkrivalice2 from '../games/skrivalice/SlovaM'
import bgT from '../games/skrivalice/skrivalice-bg-3.jpg'
import bgO from '../games/skrivalice/skrivalice-bg-4.jpg'
import Karte from "../games/karte/Karte"
import KarteT from "../games/karte/KarteT"
import KarteO from "../games/karte/KarteO"
import Reci from "../games/reci/Reci"
import ReciTO from "../games/reci/ReciTO";
import Deca from '../games/deca/Deca'
import DecaReci from "../games/deca/Reci";
import Video from '../games/video/Video'

const audioTabla = '05 hajde sada ti napisi nase slovo T.mp3'
const audioTabla2 = '16 hajde sada ti napisi nase slovo O.mp3'

class Dz02 extends React.Component {
    state = {
        slide: 1
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slovo={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slova={DrvoSlova} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla audio={audioTabla} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte slide={"t"} cards={KarteT}  nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slova={SlovaSkrivalice} bg={bgT}  letter={"radno-43.png"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Main slide={"star"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Main slide={"train"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Slova slovo={3} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <Drvo slova={DrvoSlova2} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <Tabla audio={audioTabla2} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <Karte slide={"o"} cards={KarteO}  nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <Skrivalice slova={SlovaSkrivalice2} bg={bgO} letter={"radno-35.png"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <Main slide={"medal"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <Reci reci={ReciTO} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Deca reci={DecaReci} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Video /> : null}
            </div>
        );
    }
}

export default Dz02;
