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


class Dz07 extends React.Component {
    state = {
        slide: 1
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    backToMain = () => this.setState({ slide:0})

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slide={"sh"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slide={"sh"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla slide={"sh"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte slide={"sh"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slide={"sh"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Reci slide={"sh"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Reci slide={"sh3"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Deca slide={"sh"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <Spajanje slide={"sh"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <SlikaIRec slide={"mis"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <SlikaIRec slide={"sator"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <SlikaIRec slide={"usi"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <SlikaIRec slide={"tasna"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <Pravilna slide={"dz07"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Opisivanje slide={"dz07"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Dzak slide={"dz07"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Leptiri slide={"dz07"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 19 ? <Spirala slide={"sh"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 20 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 21 ? <Video end={this.backToMain}/> : null}

            </div>
        );
    }
}

export default Dz07;
