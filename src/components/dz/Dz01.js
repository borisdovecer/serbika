import React from 'react'
import Main from '../games/main/Main'
import Slova from '../games/slova/Slova'
import Drvo from '../games/drvo/Drvo'
import Tabla from "../games/tabla/Tabla"
import Skrivalice from "../games/skrivalice/Skrivalice"
import Karte from "../games/karte/Karte"
import Video from '../games/video/Video'

import '../../App.css';
import '../../bootstrap.css'

class Dz01 extends React.Component {
    state = {
        slide: 1
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    backToMain = () => this.setState({ slide:0})

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slide={"a"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slide={"a"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla slide={"a"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte slide={"a"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slide={"a"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Main slide={"star"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Main slide={"train"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Slova slide={"m"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <Drvo slide={"m"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <Tabla slide={"m"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <Karte slide={"m"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <Skrivalice slide={"m"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <Main slide={"medal"} nextSlide={this.nextSlide}/> : null}


                { this.state.slide === 15 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Video end={this.backToMain}/> : null}
            </div>
        );
    }
}

export default Dz01;
