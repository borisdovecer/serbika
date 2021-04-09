import React from 'react'
import Main from '../games/main/Main'
import Slova from '../games/slova/Slova'
import Drvo from '../games/drvo/Drvo'
import Tabla from "../games/tabla/Tabla"
import Skrivalice from "../games/skrivalice/Skrivalice"
import SlovaSkrivalice from '../games/skrivalice/SlovaA'
import SlovaSkrivalice2 from '../games/skrivalice/SlovaM'
import bg1 from "../games/skrivalice/bg-more.jpg";
import bg2 from '../games/skrivalice/bg-suma.jpg'

import Karte from "../games/karte/Karte"
import KarteJ from "../games/karte/KarteJ"
import KarteE from "../games/karte/KarteE"

import Reci from "../games/reci/Reci"
import ReciJE from "../games/reci/ReciJE";

import Deca from '../games/deca/Deca'
import DecaReci from "../games/deca/ReciJE";

import Video from '../games/video/Video'

import '../../App.css';
import '../../bootstrap.css'

const audioTabla = '05 hajde sada ti napisi nase slovo J.mp3'
const audioTabla2 = '16 hajde sada ti napisi nase slovo E.mp3'

class Dz05 extends React.Component {
    state = {
        slide: 1
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    backToMain = () => this.setState({ slide:0})

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slide={"j"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slide={"j"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla audio={audioTabla} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte cards={KarteJ} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slova={SlovaSkrivalice} bg={bg1} letter={"radno-21.png"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Main slide={"star"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Main slide={"train"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Slova slide={"e"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <Drvo slide={"e"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <Tabla audio={audioTabla2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <Karte slide={"e"} cards={KarteE} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <Skrivalice slova={SlovaSkrivalice2} bg={bg2} letter={"radno-13.png"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <Main slide={"medal"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <Reci reci={ReciJE} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Deca reci={DecaReci} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Video end={this.backToMain}/> : null}
            </div>
        );
    }
}

export default Dz05;
