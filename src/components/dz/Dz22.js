import React from 'react'
import Main from '../games/main/Main'
import Slova from '../games/slova/Slova'
import Drvo from '../games/drvo/Drvo'
import DrvoSlova from "../games/drvo/SlovaNj"
import Tabla from "../games/tabla/Tabla"
import Skrivalice from "../games/skrivalice/Skrivalice"
import SlovaSkrivalice from '../games/skrivalice/SlovaA'
import bg1 from '../games/skrivalice/bg-njiva.jpg'
import Karte from "../games/karte/Karte"
import KarteNj from "../games/karte/KarteNj";
import Reci from "../games/reci/Reci"
import ReciNj from "../games/reci/ReciNj"
import Deca from '../games/deca/Deca'
import DecaReci from '../games/deca/ReciNj'
import Video from '../games/video/Video'
import Spajanje from "../games/spajanje/Spajanje"
import PojmoviNj from "../games/spajanje/PojmoviNj";
import SlikaIRec from "../games/slika-i-rec/SlikaIRec"
import RecPanj from "../games/slika-i-rec/RecPanj";
import RecDinja from "../games/slika-i-rec/RecDinja";
import RecMunja from "../games/slika-i-rec/RecMunja";
import RecToranj from "../games/slika-i-rec/RecToranj";
import RecJahanje from "../games/slika-i-rec/RecJahanje";
import RecLokvanj from "../games/slika-i-rec/RecLokvanj";
import Pravilna from "../games/pravilna-slova/Pravilna"
import SlovaDz22 from "../games/pravilna-slova/SlovaDz22"
import Opisivanje from "../games/opisivanje/Opisivanje"
import OpisDz22 from "../games/opisivanje/OpisDz22"
import Dzak from "../games/dzak/Dzak"
import Items22 from "../games/dzak/Items22"
import Leptiri from "../games/leptiri/Leptiri"
import Reci22 from "../games/leptiri/Reci22";
import Spirala from "../games/spirala/Spirala";
import SlovaC from "../games/spirala/SlovaC";
import RecenicaC from "../games/spirala/RecenicaC";
import Pojmovi from "../games/pojmovi/Pojmovi";
import pojmovi from "../games/pojmovi/PojmoviNj"
import Povezivanje from "../games/povezivanje/Povezivanje";
import povezivanje from "../games/povezivanje/PojmoviNj"
import Slagalica from "../games/slagalica/Slagalica";
import SlagalicaKonj from "../games/slagalica/SlagalicaKonj";
import SlagalicaNjiva from "../games/slagalica/SlagalicaNjiva";
import SlagalicaBubanj from "../games/slagalica/SlagalicaBubanj";
import SlagalicaTresnja from "../games/slagalica/SlagalicaTresnja";
import SlagalicaNjuska from "../games/slagalica/SlagalicaNjuska";


import '../../App.css';
import '../../bootstrap.css'

const audioTabla = '16 hajde sada ti napisi nas enovo slovo Nj.mp3'
const letter = "radno-33.png"

class Dz22 extends React.Component {
    state = {
        slide: 1
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    backToMain = () => this.setState({ slide:0})

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slovo={26} bg={5} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slova={DrvoSlova} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla audio={audioTabla} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte cards={KarteNj} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slova={SlovaSkrivalice} bg={bg1} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Reci reci={ReciNj} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Deca reci={DecaReci} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Spajanje game={PojmoviNj} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <SlikaIRec rec={RecPanj} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <SlikaIRec rec={RecDinja} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <SlikaIRec rec={RecMunja} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <SlikaIRec rec={RecToranj} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <SlikaIRec rec={RecJahanje} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <SlikaIRec rec={RecLokvanj} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Pravilna slova={SlovaDz22} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Opisivanje opis={OpisDz22} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Dzak items={Items22} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 19 ? <Leptiri reci={Reci22} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 20 ? <Spirala slova={SlovaC} recenica={RecenicaC} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 21 ? <Pojmovi pojmovi={pojmovi} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 22 ? <Povezivanje povezivanje={povezivanje} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 23 ? <Slagalica slagalica={SlagalicaKonj} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 24 ? <Slagalica slagalica={SlagalicaNjiva} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 25 ? <Slagalica slagalica={SlagalicaBubanj} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 26 ? <Slagalica slagalica={SlagalicaTresnja} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 27 ? <Slagalica slagalica={SlagalicaNjuska} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 28 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 29 ? <Video end={this.backToMain}/> : null}
            </div>
        );
    }
}

export default Dz22;