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


class Dz19 extends React.Component {
    state = {
        slide: 1
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    backToMain = () => this.setState({ slide:0})

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slide={"f"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slide={"f"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla slide={"f"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte slide={"f"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slide={"f"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Reci slide={"f3"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Deca slide={"f"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Spajanje slide={"f"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <SlikaIRec slide={"fen"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <SlikaIRec slide={"lift"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <SlikaIRec slide={"kofer"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <SlikaIRec slide={"parfem"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <Pravilna slide={"dz19"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <Opisivanje slide={"dz19"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Dzak slide={"dz19"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Leptiri slide={"dz19"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Spirala slide={"f"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 19 ? <Povezivanje slide={"f"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 22 ? <Slagalica slide={"sef"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 23 ? <Slagalica slide={"flasa"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 19 ? <Video end={this.backToMain}/> : null}
            </div>
        );
    }
}

export default Dz19;
