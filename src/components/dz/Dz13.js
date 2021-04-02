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


class Dz13 extends React.Component {
    state = {
        slide: 1
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    backToMain = () => this.setState({ slide:0})

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slide={"v"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slide={"v"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla slide={"v"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte slide={"v"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slide={"v"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Reci slide={"v3"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Deca slide={"v"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Spajanje slide={"v"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <SlikaIRec slide={"vuk"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <SlikaIRec slide={"mravi"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <SlikaIRec slide={"trava"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <SlikaIRec slide={"breskva"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <SlikaIRec slide={"lav"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <SlikaIRec slide={"sveska"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Pravilna slide={"dz13"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Opisivanje slide={"dz13"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Dzak slide={"dz13"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 19 ? <Leptiri slide={"dz13"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 20 ? <Spirala slide={"v"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 21 ? <Pojmovi slide={"v"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 22 ? <Povezivanje slide={"v"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 23 ? <Slagalica slide={"sova"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 24 ? <Slagalica slide={"olovka"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 25 ? <Slagalica slide={"mravi"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 26 ? <Slagalica slide={"klovn"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 27 ? <Slagalica slide={"sljiva"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 28 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 29 ? <Video end={this.backToMain}/> : null}
            </div>
        );
    }
}

export default Dz13;
