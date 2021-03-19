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
import Spirala from "../games/spirala/Spirala"

import '../../App.css';
import '../../bootstrap.css'
import Slagalica from "../games/slagalica/Slagalica"


class Dz10 extends React.Component {
    state = {
        slide: 0
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    backToMain = () => this.setState({ slide:0})

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 0 ? <Slagalica slide={"l"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slide={"l"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slide={"l"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla slide={"l"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte slide={"l"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slide={"l"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Reci slide={"l"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Reci slide={"l3"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Deca slide={"l"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <Spajanje slide={"l"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <SlikaIRec slide={"sal"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <SlikaIRec slide={"pajp"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <SlikaIRec slide={"lutka"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <SlikaIRec slide={"palma"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <SlikaIRec slide={"poklon"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Pravilna slide={"dz10"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Opisivanje slide={"dz10"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Dzak slide={"dz10"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 19 ? <Leptiri slide={"dz10"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 20 ? <Spirala slide={"l"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 21 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 22 ? <Video end={this.backToMain}/> : null}
            </div>
        );
    }
}

export default Dz10;
