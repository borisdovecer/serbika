import React from 'react'
import Main from '../games/main/Main'
import Slova from '../games/slova/Slova'
import Drvo from '../games/drvo/Drvo'
import DrvoSlova from "../games/drvo/SlovaJ"
import DrvoSlova2 from "../games/drvo/SlovaE"
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

const audioTabla = '05 hajde sada ti napisi nase slovo J.mp3'
const audioTabla2 = '16 hajde sada ti napisi nase slovo E.mp3'

class Dz05 extends React.Component {
    state = {
        slide: 1
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slovo={8} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slova={DrvoSlova} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla audio={audioTabla} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte cards={KarteJ} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slova={SlovaSkrivalice} bg={bg1} letter={"radno-21.png"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Main slide={"star"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Main slide={"train"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Slova slovo={9} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <Drvo slova={DrvoSlova2} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <Tabla audio={audioTabla2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <Karte cards={KarteE} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <Skrivalice slova={SlovaSkrivalice2} bg={bg2} letter={"radno-13.png"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <Main slide={"medal"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <Reci reci={ReciJE} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Deca reci={DecaReci} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Video /> : null}
            </div>
        );
    }
}

export default Dz05;
