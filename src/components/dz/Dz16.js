import React from 'react'
import Main from '../games/main/Main'
import Slova from '../games/slova/Slova'
import Drvo from '../games/drvo/Drvo'
import Tabla from "../games/tabla/Tabla"
import Skrivalice from "../games/skrivalice/Skrivalice"
import Karte from "../games/karte/Karte"
import Reci from "../games/reci/Reci"
import Deca from '../games/deca/Deca'
import Video from '../games/video/Video'

import Spajanje from "../games/spajanje/Spajanje"
import SlikaIRec from "../games/slika-i-rec/SlikaIRec"
import Pravilna from "../games/pravilna-slova/Pravilna"
import Opisivanje from "../games/opisivanje/Opisivanje"
import Dzak from "../games/dzak/Dzak"
import Leptiri from "../games/leptiri/Leptiri"

import '../../App.css';
import '../../bootstrap.css'
import Spirala from "../games/spirala/Spirala";
import Povezivanje from "../games/povezivanje/Povezivanje";
import Slagalica from "../games/slagalica/Slagalica";
import Pojmovi from "../games/pojmovi/Pojmovi";


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
                { this.state.slide === 2 ? <Slova slide={"g"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slide={"g"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla slide={"g"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte slide={"g"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slide={"g"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Reci slide={"g3"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Deca slide={"g"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Spajanje slide={"g"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <SlikaIRec slide={"teg"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <SlikaIRec slide={"grad"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <SlikaIRec slide={"globus"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <SlikaIRec slide={"lego"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <SlikaIRec slide={"gnezdo"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <SlikaIRec slide={"tegla"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Pravilna slide={"dz16"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Opisivanje slide={"dz16"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Dzak slide={"dz16"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 19 ? <Leptiri slide={"dz16"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 20 ? <Spirala slide={"g"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 21 ? <Pojmovi slide={"g"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 22 ? <Povezivanje slide={"g"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 23 ? <Slagalica slide={"gol"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 24 ? <Slagalica slide={"grana"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 25 ? <Slagalica slide={"glava"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 26 ? <Slagalica slide={"dugme"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 27 ? <Slagalica slide={"duga"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 28 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 29 ? <Video end={this.backToMain}/> : null}
            </div>
        );
    }
}

export default Dz16;
