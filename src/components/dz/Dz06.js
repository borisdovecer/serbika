import React from 'react'
import Main from '../games/main/Main'
// import Slova from '../games/slova/Slova'
// import Drvo from '../games/drvo/Drvo'
// import Tabla from "../games/tabla/Tabla"
// import Skrivalice from "../games/skrivalice/Skrivalice"
// import Karte from "../games/karte/Karte"
// import Reci from "../games/reci/Reci"
// import Deca from '../games/deca/Deca'
// import Video from '../games/video/Video'

import Spajanje from "../games/spajanje/Spajanje"
import SlikaIRec from "../games/slika-i-rec/SlikaIRec"
import Pravilna from "../games/pravilna-slova/Pravilna"
import Opisivanje from "../games/opisivanje/Opisivanje"
import Dzak from "../games/dzak/Dzak"
import Leptiri from "../games/leptiri/Leptiri"

import '../../App.css';
import '../../bootstrap.css'

class Dz06 extends React.Component {
    state = {
        slide: 1
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    backToMain = () => this.setState({ slide:0})

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Spajanje slide={"r"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <SlikaIRec slide={"more"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <SlikaIRec slide={"sirena"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <SlikaIRec slide={"motor"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Pravilna slide={"dz06"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Opisivanje slide={"dz06"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Dzak slide={"dz06"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Leptiri slide={"dz06"} nextSlide={this.nextSlide}/> : null}

            </div>
        );
    }
}

export default Dz06;
