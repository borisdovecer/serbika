import React from 'react'
import Main from '../games/main/Main'
import Slova from '../games/slova/Slova'
import Drvo from '../games/drvo/Drvo'
import Tabla from "../games/tabla/Tabla"
import Skrivalice from "../games/skrivalice/Skrivalice"
import SlovaSkrivalice from '../games/skrivalice/SlovaA'
import SlovaSkrivalice2 from '../games/skrivalice/SlovaM'
import bg1 from "../games/skrivalice/skrivalice-bg-40.jpg";
import bg2 from '../games/skrivalice/skrivalice-bg-41.jpg'

import Karte from "../games/karte/Karte"
import KarteU from "../games/karte/KarteU";
import KarteN from "../games/karte/KarteN";

import Reci from "../games/reci/Reci"
import ReciUN from "../games/reci/ReciUN";

import Deca from '../games/deca/Deca'
import DecaReci from "../games/deca/Reci3";

import Video from '../games/video/Video'

import '../../App.css';
import '../../bootstrap.css'

const audioTabla = '05 hajde sada ti napisi nase slovo U.mp3'
const audioTabla2 = '16 hajde sada ti napisi nase slovo N.mp3'

class Dz04 extends React.Component {
    state = {
        slide: 1
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    backToMain = () => this.setState({ slide:0})

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slide={"u"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slide={"u"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla audio={audioTabla} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte cards={KarteU} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slova={SlovaSkrivalice} bg={bg1} letter={"radno-47.png"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Main slide={"star"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Main slide={"train"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Slova slide={"n"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <Drvo slide={"n"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <Tabla audio={audioTabla2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <Karte slide={"n"} cards={KarteN} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <Skrivalice slova={SlovaSkrivalice2} bg={bg2} letter={"radno-31.png"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <Main slide={"medal"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <Reci reci={ReciUN} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Deca reci={DecaReci} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Video end={this.backToMain}/> : null}
            </div>
        );
    }
}

export default Dz04;
