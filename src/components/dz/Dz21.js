import React from 'react'
import Main from '../games/main/Main'
import Slova from '../games/slova/Slova'
import Drvo from '../games/drvo/Drvo'
import DrvoSlova from "../games/drvo/SlovaC"
import Tabla from "../games/tabla/Tabla"
import Skrivalice from "../games/skrivalice/Skrivalice"
import SlovaSkrivalice from '../games/skrivalice/SlovaA'
import bg1 from '../games/skrivalice/bg-cirkus.jpg'
import Karte from "../games/karte/Karte"
import KarteC from "../games/karte/KarteC";
import Reci from "../games/reci/Reci"
import ReciC from "../games/reci/ReciC"
import Deca from '../games/deca/Deca'
import DecaReci from '../games/deca/ReciC'
import Video from '../games/video/Video'
import Spajanje from "../games/spajanje/Spajanje"
import PojmoviC from "../games/spajanje/PojmoviC";
import SlikaIRec from "../games/slika-i-rec/SlikaIRec"
import RecCrv from "../games/slika-i-rec/RecCrv";
import RecCvet from "../games/slika-i-rec/RecCvet";
import RecDeca from "../games/slika-i-rec/RecDeca";
import RecMesec from "../games/slika-i-rec/RecMesec";
import RecDvorac from "../games/slika-i-rec/RecDvorac";
import RecCamac from "../games/slika-i-rec/RecCamac";
import Pravilna from "../games/pravilna-slova/Pravilna"
import SlovaDz21 from "../games/pravilna-slova/SlovaDz21"
import Opisivanje from "../games/opisivanje/Opisivanje"
import OpisDz21 from "../games/opisivanje/OpisDz21"
import Dzak from "../games/dzak/Dzak"
import Items21 from "../games/dzak/Items21"
import Leptiri from "../games/leptiri/Leptiri"
import Reci21 from "../games/leptiri/Reci21";
import Spirala from "../games/spirala/Spirala";
import SlovaC from "../games/spirala/SlovaC";
import RecenicaC from "../games/spirala/RecenicaC";
import Povezivanje from "../games/povezivanje/Povezivanje";
import povezivanje from "../games/povezivanje/PojmoviC"
import Slagalica from "../games/slagalica/Slagalica";
import SlagalicaCrv from "../games/slagalica/SlagalicaCrv";
import SlagalicaSrce from "../games/slagalica/SlagalicaSrce";
import SlagalicaPtica from "../games/slagalica/SlagalicaPtica";
import SlagalicaMesec from "../games/slagalica/SlagalicaMesec";
import SlagalicaUlica from "../games/slagalica/SlagalicaUlica";
import Pojmovi from "../games/pojmovi/Pojmovi";
import pojmovi from "../games/pojmovi/PojmoviC"

import '../../App.css';
import '../../bootstrap.css'
import Puzle from "../games/puzle/Puzle";
import puzle from "../games/puzle/PuzleDz21a";
import puzle2 from "../games/puzle/PuzleDz21b";
import puzle3 from "../games/puzle/PuzleDz21c";

const audioTabla = '16 hajde sada ti napisi nas enovo slovo C.mp3'
const letter = "radno-53.png"

class Dz21 extends React.Component {
    state = {
        slide: 1
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    backToMain = () => this.setState({ slide:0})

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slovo={25} bg={5} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slova={DrvoSlova} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla audio={audioTabla} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte cards={KarteC} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slova={SlovaSkrivalice} bg={bg1} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Reci reci={ReciC} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Deca reci={DecaReci} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Spajanje game={PojmoviC} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <SlikaIRec rec={RecCrv} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <SlikaIRec rec={RecCvet} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <SlikaIRec rec={RecDeca} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <SlikaIRec rec={RecMesec} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <SlikaIRec rec={RecDvorac} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <SlikaIRec rec={RecCamac} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Pravilna slova={SlovaDz21} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Opisivanje opis={OpisDz21} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Dzak items={Items21} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 19 ? <Leptiri reci={Reci21} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 20 ? <Spirala slova={SlovaC} recenica={RecenicaC} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 21 ? <Pojmovi pojmovi={pojmovi} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 22 ? <Povezivanje povezivanje={povezivanje} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 23 ? <Slagalica slagalica={SlagalicaCrv} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 24 ? <Slagalica slagalica={SlagalicaSrce} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 25 ? <Slagalica slagalica={SlagalicaPtica} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 26 ? <Slagalica slagalica={SlagalicaMesec} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 27 ? <Slagalica slagalica={SlagalicaUlica} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 28 ? <Puzle game={puzle} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 29 ? <Puzle game={puzle2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 30 ? <Puzle game={puzle3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 31 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 32 ? <Video end={this.backToMain}/> : null}
            </div>
        );
    }
}

export default Dz21;
