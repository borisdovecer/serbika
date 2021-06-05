import React from 'react'
import Main from '../games/main/Main'
import Slova from '../games/slova/Slova'
import Drvo from '../games/drvo/Drvo'
import DrvoSlova from "../games/drvo/SlovaLJ"
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
import rec from '../games/slika-i-rec/RecDz11'
import Pravilna from "../games/pravilna-slova/Pravilna"
import SlovaDz11 from "../games/pravilna-slova/SlovaDz11"
import Opisivanje from "../games/opisivanje/Opisivanje"
import OpisDz11 from "../games/opisivanje/OpisDz11"
import Dzak from "../games/dzak/Dzak"
import Items11 from "../games/dzak/Items11";
import Leptiri from "../games/leptiri/Leptiri"
import Spirala from "../games/spirala/Spirala"
import slova from "../games/spirala/SlovaLj";
import Povezivanje from "../games/povezivanje/Povezivanje";
import povezivanje from "../games/povezivanje/PojmoviLj"
import Slagalica from "../games/slagalica/Slagalica";
import Pojmovi from "../games/pojmovi/Pojmovi";
import pojmovi from "../games/pojmovi/PojmoviLj"
import Reci11 from "../games/leptiri/Reci11";
import slagalica from "../games/slagalica/SlagalicaDz11";

const audioTabla = '16 hajde sada ti napisi nas enovo slovo LJ.mp3'
const letter = "radno-27.png"

class Dz11 extends React.Component {
    state = {
        slide: 18
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slovo={15} bg={4} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slova={DrvoSlova} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla audio={audioTabla} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte cards={KarteLJ} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slova={SlovaSkrivalice} bg={bg1} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Reci reci={ReciLJ3} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Deca reci={DecaReci} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Spajanje game={PojmoviLJ} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <SlikaIRec rec={rec[0]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <SlikaIRec rec={rec[1]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <SlikaIRec rec={rec[2]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <SlikaIRec rec={rec[3]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <Pravilna slova={SlovaDz11} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <Opisivanje opis={OpisDz11} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Dzak items={Items11} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Leptiri reci={Reci11} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Spirala slova={slova.slova} recenica={slova.recenica} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 19 ? <Pojmovi pojmovi={pojmovi} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 20 ? <Povezivanje povezivanje={povezivanje} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 21 ? <Slagalica slagalica={slagalica[0]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 22 ? <Slagalica slagalica={slagalica[1]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 23 ? <Slagalica slagalica={slagalica[2]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 24 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 25 ? <Video /> : null}
            </div>
        );
    }
}

export default Dz11;
