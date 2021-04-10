import React from 'react'
import Main from '../games/main/Main'
import Slova from '../games/slova/Slova'
import Drvo from '../games/drvo/Drvo'
import Tabla from "../games/tabla/Tabla"

import Skrivalice from "../games/skrivalice/Skrivalice"
import SlovaSkrivalice from '../games/skrivalice/SlovaA'
import bg1 from '../games/skrivalice/bg-cirkus.jpg'

import Karte from "../games/karte/Karte"
import KarteLJ from "../games/karte/KarteLJ";

import Reci from "../games/reci/Reci"
import ReciLJ3 from "../games/reci/ReciLJ3"

import Deca from '../games/deca/Deca'
import DecaReci from '../games/deca/ReciLJ'

import Video from '../games/video/Video'

import Spajanje from "../games/spajanje/Spajanje"
import PojmoviLJ from "../games/spajanje/PojmoviLJ";

import SlikaIRec from "../games/slika-i-rec/SlikaIRec"
import RecLjut from "../games/slika-i-rec/RecLjut";
import RecPolje from "../games/slika-i-rec/RecPolje";
import RecKosulja from "../games/slika-i-rec/RecKosulja";
import RecLjiljan from "../games/slika-i-rec/RecLjiljan";

import Pravilna from "../games/pravilna-slova/Pravilna"
import SlovaDz11 from "../games/pravilna-slova/SlovaDz11"

import Opisivanje from "../games/opisivanje/Opisivanje"
import OpisDz11 from "../games/opisivanje/OpisDz11"

import Dzak from "../games/dzak/Dzak"
import Items11 from "../games/dzak/Items11";

import Leptiri from "../games/leptiri/Leptiri"
import Spirala from "../games/spirala/Spirala"
import Povezivanje from "../games/povezivanje/Povezivanje";
import povezivanje from "../games/povezivanje/PojmoviLj"

import Slagalica from "../games/slagalica/Slagalica";
import Pojmovi from "../games/pojmovi/Pojmovi";
import pojmovi from "../games/pojmovi/PojmoviLj"

import '../../App.css';
import '../../bootstrap.css'
import Reci11 from "../games/leptiri/Reci11";
import SlovaLj from "../games/spirala/SlovaLj";
import RecenicaLj from "../games/spirala/RecenicaLj";
import SlagalicaLjut from "../games/slagalica/SlagalicaLjut";
import SlagalicaSolja from "../games/slagalica/SlagalicaSolja";
import SlagalicaSkoljka from "../games/slagalica/SlagalicaSkoljka";


const audioTabla = '16 hajde sada ti napisi nas enovo slovo LJ.mp3'
const letter = "radno-27.png"

class Dz11 extends React.Component {
    state = {
        slide: 1
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    backToMain = () => this.setState({ slide:0})

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slide={"lj"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slide={"lj"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla audio={audioTabla} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte cards={KarteLJ} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slova={SlovaSkrivalice} bg={bg1} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Reci reci={ReciLJ3} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Deca reci={DecaReci} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Spajanje game={PojmoviLJ} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <SlikaIRec rec={RecLjut} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <SlikaIRec rec={RecPolje} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <SlikaIRec rec={RecKosulja} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <SlikaIRec rec={RecLjiljan} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <Pravilna slova={SlovaDz11} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <Opisivanje opis={OpisDz11} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Dzak items={Items11} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Leptiri reci={Reci11} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Spirala slova={SlovaLj} recenica={RecenicaLj} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 19 ? <Pojmovi pojmovi={pojmovi} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 20 ? <Povezivanje povezivanje={povezivanje} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 21 ? <Slagalica slagalica={SlagalicaLjut} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 22 ? <Slagalica slagalica={SlagalicaSolja} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 23 ? <Slagalica slagalica={SlagalicaSkoljka} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 24 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 25 ? <Video end={this.backToMain}/> : null}
            </div>
        );
    }
}

export default Dz11;
