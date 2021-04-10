import React from 'react'
import Main from '../games/main/Main'
import Slova from '../games/slova/Slova'
import Drvo from '../games/drvo/Drvo'
import DrvoSlova from "../games/drvo/SlovaI"
import DrvoSlova2 from "../games/drvo/SlovaS"

import Tabla from "../games/tabla/Tabla"

import Skrivalice from "../games/skrivalice/Skrivalice"
import SlovaSkrivalice from '../games/skrivalice/SlovaA'
import SlovaSkrivalice2 from '../games/skrivalice/SlovaM'
import bg1 from "../games/skrivalice/skrivalice-bg-1.jpg";
import bgLivada from '../games/skrivalice/bg-livada.jpg'

import Karte from "../games/karte/Karte"
import KarteI from "../games/karte/KarteI";
import KarteS from "../games/karte/KarteS";

import Reci from "../games/reci/Reci"
import ReciSI from "../games/reci/ReciSI";

import Deca from '../games/deca/Deca'
import DecaReci from "../games/deca/Reci2";

import Video from '../games/video/Video'

import '../../App.css';
import '../../bootstrap.css'


const audioTabla = '05 hajde sada ti napisi nase slovo I.mp3'
const audioTabla2 = '16 hajde sada ti napisi nase slovo S.mp3'

class Dz03 extends React.Component {
    state = {
        slide: 1
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    backToMain = () => this.setState({ slide:1})

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slovo={4} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slova={DrvoSlova} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla audio={audioTabla} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte cards={KarteI}  nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slova={SlovaSkrivalice} bg={bg1}  letter={"radno-19.png"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Main slide={"star"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Main slide={"train"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Slova slovo={5} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <Drvo slova={DrvoSlova2} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <Tabla audio={audioTabla2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <Karte cards={KarteS}  nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <Skrivalice slova={SlovaSkrivalice2} bg={bgLivada}  letter={"radno-41.png"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <Main slide={"medal"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <Reci reci={ReciSI} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Deca reci={DecaReci} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Video end={this.backToMain}/> : null}
            </div>
        );
    }
}

export default Dz03;
