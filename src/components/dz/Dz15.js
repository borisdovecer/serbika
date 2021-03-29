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


class Dz15 extends React.Component {
    state = {
        slide: 1
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    backToMain = () => this.setState({ slide:0})

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slide={"d"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slide={"d"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla slide={"d"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte slide={"d"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slide={"d"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Reci slide={"d3"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Deca slide={"d"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Spajanje slide={"d"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <SlikaIRec slide={"dva"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <SlikaIRec slide={"dusek"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <SlikaIRec slide={"labud"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <SlikaIRec slide={"drvo"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <SlikaIRec slide={"doktor"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <SlikaIRec slide={"zvezda"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Pravilna slide={"dz15"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Opisivanje slide={"dz15"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Dzak slide={"dz15"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 19 ? <Leptiri slide={"dz15"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 20 ? <Spirala slide={"d"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 21 ? <Povezivanje slide={"d"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 22 ? <Slagalica slide={"dva"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 23 ? <Slagalica slide={"badem"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 24 ? <Slagalica slide={"medalja"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 25 ? <Slagalica slide={"devet"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 26 ? <Slagalica slide={"panda"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 27 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 28 ? <Video end={this.backToMain}/> : null}
            </div>
        );
    }
}

export default Dz15;
