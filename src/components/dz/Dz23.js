import React from 'react'
import Main from '../games/main/Main'
import Slova from '../games/slova/Slova'
import Drvo from '../games/drvo/Drvo'
import DrvoSlova from "../games/drvo/SlovaCc"
import Tabla from "../games/tabla/Tabla"
import Skrivalice from "../games/skrivalice/Skrivalice"
import SlovaSkrivalice from '../games/skrivalice/SlovaA'
import bg1 from '../games/skrivalice/bg-pecina.jpg'
import Karte from "../games/karte/Karte"
import KarteCc from "../games/karte/KarteCc";
import Reci from "../games/reci/Reci"
import ReciCc from "../games/reci/ReciCc"
import Deca from '../games/deca/Deca'
import DecaReci from '../games/deca/ReciCC'
import Video from '../games/video/Video'
import Spajanje from "../games/spajanje/Spajanje"
import PojmoviCc from "../games/spajanje/PojmoviCc";
import SlikaIRec from "../games/slika-i-rec/SlikaIRec"
import RecPec from "../games/slika-i-rec/RecPec";
import RecKuca from "../games/slika-i-rec/RecKuca";
import RecGace from "../games/slika-i-rec/RecGace";
import RecSmece from "../games/slika-i-rec/RecSmece";
import RecDrvece from "../games/slika-i-rec/RecDrvece";
import RecMisici from "../games/slika-i-rec/RecMisici";
import Pravilna from "../games/pravilna-slova/Pravilna"
import SlovaDz23 from "../games/pravilna-slova/SlovaDz23"
import Opisivanje from "../games/opisivanje/Opisivanje"
import OpisDz23 from "../games/opisivanje/OpisDz23"
import Dzak from "../games/dzak/Dzak"
import Items23 from "../games/dzak/Items23"
import Leptiri from "../games/leptiri/Leptiri"
import Reci23 from "../games/leptiri/Reci23";
import Spirala from "../games/spirala/Spirala";
import SlovaC from "../games/spirala/SlovaC";
import RecenicaC from "../games/spirala/RecenicaC";
import Pojmovi from "../games/pojmovi/Pojmovi";
import pojmovi from "../games/pojmovi/PojmoviCc"
import Povezivanje from "../games/povezivanje/Povezivanje";
import povezivanje from "../games/povezivanje/PojmoviCc"
import Slagalica from "../games/slagalica/Slagalica";
import SlagalicaNoc from "../games/slagalica/SlagalicaNoc";
import SlagalicaVoce from "../games/slagalica/SlagalicaVoce";
import SlagalicaCilim from "../games/slagalica/SlagalicaCilim";
import SlagalicaPilici from "../games/slagalica/SlagalicaPilici";
import SlagalicaOdeca from "../games/slagalica/SlagalicaOdeca";
import Puzle from "../games/puzle/Puzle";
import puzle from "../games/puzle/PuzleDz23a";
import puzle2 from "../games/puzle/PuzleDz23b";
import puzle3 from "../games/puzle/PuzleDz23c";


import '../../App.css';
import '../../bootstrap.css'

const audioTabla = '16 hajde sada ti napisi nas enovo slovo Cc.mp3'
const letter = "radno-45.png"

class Dz23 extends React.Component {
    state = {
        slide: 1
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    backToMain = () => this.setState({ slide:0})

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slovo={27} bg={5} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slova={DrvoSlova} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla audio={audioTabla} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte cards={KarteCc} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slova={SlovaSkrivalice} bg={bg1} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Reci reci={ReciCc} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Deca reci={DecaReci} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Spajanje game={PojmoviCc} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <SlikaIRec rec={RecPec} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <SlikaIRec rec={RecKuca} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <SlikaIRec rec={RecGace} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <SlikaIRec rec={RecSmece} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <SlikaIRec rec={RecDrvece} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <SlikaIRec rec={RecMisici} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Pravilna slova={SlovaDz23} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Opisivanje opis={OpisDz23} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Dzak items={Items23} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 19 ? <Leptiri reci={Reci23} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 20 ? <Spirala slova={SlovaC} recenica={RecenicaC} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 21 ? <Pojmovi pojmovi={pojmovi} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 22 ? <Povezivanje povezivanje={povezivanje} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 23 ? <Slagalica slagalica={SlagalicaNoc} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 24 ? <Slagalica slagalica={SlagalicaVoce} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 25 ? <Slagalica slagalica={SlagalicaCilim} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 26 ? <Slagalica slagalica={SlagalicaPilici} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 27 ? <Slagalica slagalica={SlagalicaOdeca} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 28 ? <Puzle game={puzle} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 29 ? <Puzle game={puzle2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 30 ? <Puzle game={puzle3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 31 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 32 ? <Video end={this.backToMain}/> : null}
            </div>
        );
    }
}

export default Dz23;