import React from 'react'
import Main from '../games/main/Main'
import Slova from '../games/slova/Slova'
import Drvo from '../games/drvo/Drvo'
import Tabla from "../games/tabla/Tabla"

import Skrivalice from "../games/skrivalice/Skrivalice"
import SlovaSkrivalice from '../games/skrivalice/SlovaA'
import bg10 from '../games/skrivalice/bg-more.jpg'

import Karte from "../games/karte/Karte"
import KarteL from "../games/karte/KarteL"

import Reci from "../games/reci/Reci"
import ReciL from "../games/reci/ReciL"
import ReciL3 from "../games/reci/ReciL3"

import Deca from '../games/deca/Deca'
import DecaReci from '../games/deca/ReciL'

import Video from '../games/video/Video'

import Spajanje from "../games/spajanje/Spajanje"
import PojmoviL from "../games/spajanje/PojmoviL"

import SlikaIRec from "../games/slika-i-rec/SlikaIRec"
import RecSal from "../games/slika-i-rec/SlikaSal"
import RecPajp from "../games/slika-i-rec/RecPajp"
import RecLutka from "../games/slika-i-rec/RacLutka"
import RecPalma from "../games/slika-i-rec/RecPalma"
import RecPoklon from "../games/slika-i-rec/RecPoklon"

import Pravilna from "../games/pravilna-slova/Pravilna"
import SlovaDz10 from "../games/pravilna-slova/SlovaDz10"

import Opisivanje from "../games/opisivanje/Opisivanje"
import OpisDz10 from "../games/opisivanje/OpisDz10"

import Dzak from "../games/dzak/Dzak"
import Items10 from "../games/dzak/Items10";

import Leptiri from "../games/leptiri/Leptiri"
import Spirala from "../games/spirala/Spirala"
import Slagalica from "../games/slagalica/Slagalica"
import Povezivanje from "../games/povezivanje/Povezivanje"
import povezivanje from "../games/povezivanje/PojmoviL"

import '../../App.css';
import '../../bootstrap.css'
import Pojmovi from "../games/pojmovi/Pojmovi"
import pojmovi from "../games/pojmovi/PojmoviL"

import Reci10 from "../games/leptiri/Reci10";
import SlovaL from "../games/spirala/SlovaL";
import RecenicaL from "../games/spirala/RecenicaL";
import SlagalicaL from "../games/slagalica/SlagalicaL";
import SlagalicaPlaneta from "../games/slagalica/SlagalicaPlaneta";

const audioTabla = '16 hajde sada ti napisi nas enovo slovo L.mp3'
const letter = "radno-25.png"

class Dz10 extends React.Component {
    state = {
        slide: 1
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    backToMain = () => this.setState({ slide:0})

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slide={"l"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slide={"l"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla audio={audioTabla} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte cards={KarteL} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slova={SlovaSkrivalice} bg={bg10} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Reci reci={ReciL} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Reci bg={2} reci={ReciL3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Deca bg={3} reci={DecaReci} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <Spajanje game={PojmoviL} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <SlikaIRec rec={RecSal} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <SlikaIRec rec={RecPajp} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <SlikaIRec rec={RecLutka} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <SlikaIRec rec={RecPalma} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <SlikaIRec rec={RecPoklon} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Pravilna slova={SlovaDz10} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Opisivanje opis={OpisDz10} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Dzak items={Items10} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 19 ? <Leptiri reci={Reci10} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 20 ? <Spirala slova={SlovaL} recenica={RecenicaL} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 21 ? <Pojmovi pojmovi={pojmovi} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 22 ? <Povezivanje povezivanje={povezivanje} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 23 ? <Slagalica slagalica={SlagalicaL} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 24 ? <Slagalica slagalica={SlagalicaPlaneta} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 25 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 26 ? <Video end={this.backToMain}/> : null}
            </div>
        );
    }
}

export default Dz10;
