import React from 'react'
import Main from '../games/main/Main'
import Slova from '../games/slova/Slova'
import Drvo from '../games/drvo/Drvo'
import DrvoSlova from "../games/drvo/SlovaDj"
import Tabla from "../games/tabla/Tabla"
import Skrivalice from "../games/skrivalice/Skrivalice"
import SlovaSkrivalice from '../games/skrivalice/SlovaA'
import bg1 from '../games/skrivalice/bg-pecina.jpg'
import Karte from "../games/karte/Karte"
import karte from "../games/karte/KarteDj";
import Reci from "../games/reci/Reci"
import reci from "../games/reci/ReciDj"
import Deca from '../games/deca/Deca'
import DecaReci from '../games/deca/ReciDj'
import Video from '../games/video/Video'
import Spajanje from "../games/spajanje/Spajanje"
import pojmoviSpajanje from "../games/spajanje/PojmoviDj";
import SlikaIRec from "../games/slika-i-rec/SlikaIRec"
import rec from '../games/slika-i-rec/ReciDz24';
import Pravilna from "../games/pravilna-slova/Pravilna"
import pravilna from "../games/pravilna-slova/SlovaDz24"
import Opisivanje from "../games/opisivanje/Opisivanje"
import opisivanje from "../games/opisivanje/OpisDz24"
import Dzak from "../games/dzak/Dzak"
import Items from "../games/dzak/Items24"
import Leptiri from "../games/leptiri/Leptiri"
import leptiri from "../games/leptiri/Reci24";
import Spirala from "../games/spirala/Spirala";
import slova from "../games/spirala/SlovaDj";
import Pojmovi from "../games/pojmovi/Pojmovi";
import pojmovi from "../games/pojmovi/PojmoviDj"
import Povezivanje from "../games/povezivanje/Povezivanje";
import povezivanje from "../games/povezivanje/PojmoviCc"
import Slagalica from "../games/slagalica/Slagalica";
import slagalica from "../games/slagalica/SlagalicaDz23";
import Puzle from "../games/puzle/Puzle";
import puzle from "../games/puzle/PuzleDz23";
import Hrana from "../games/hrana/Hrana";
import hrana from "../games/hrana/HranaDz23";
import Sifra from "../games/sifra/Sifra";
import kod from "../games/sifra/SifraDz23";
import Zoo from "../games/zoo/Zoo";
import zoo from "../games/zoo/ZooDz23";
import Broj from "../games/broj-slova/Broj";
import broj from "../games/broj-slova/Broj23";
import Ukrstenica from "../games/ukrstenica/Ukrstenica";
import uReci from "../games/ukrstenica/Reci23";

const audioTabla = '16 hajde sada ti napisi nas enovo slovo Dj.mp3'
const letter = "radno-11.png"

class Dz24 extends React.Component {
    state = {
        slide: 10
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slovo={28} bg={5} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slova={DrvoSlova} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla audio={audioTabla} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte cards={karte} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slova={SlovaSkrivalice} bg={bg1} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Reci reci={reci} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Deca reci={DecaReci} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Spajanje game={pojmoviSpajanje} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <SlikaIRec rec={rec[0]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <SlikaIRec rec={rec[1]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <SlikaIRec rec={rec[2]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <SlikaIRec rec={rec[3]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <SlikaIRec rec={rec[4]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <SlikaIRec rec={rec[5]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Pravilna slova={pravilna} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Opisivanje opis={opisivanje} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Dzak items={Items} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 19 ? <Leptiri reci={leptiri} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 20 ? <Spirala slova={slova.slova} recenica={slova.recenica} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 21 ? <Pojmovi pojmovi={pojmovi} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 22 ? <Povezivanje povezivanje={povezivanje} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 23 ? <Slagalica slagalica={slagalica[0]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 24 ? <Slagalica slagalica={slagalica[1]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 25 ? <Slagalica slagalica={slagalica[2]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 26 ? <Slagalica slagalica={slagalica[3]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 27 ? <Slagalica slagalica={slagalica[4]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 28 ? <Puzle game={puzle[0]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 29 ? <Puzle game={puzle[1]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 30 ? <Puzle game={puzle[2]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 31 ? <Zoo animals={zoo} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 32 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 33 ? <Hrana hrana={hrana.dorucak} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 34 ? <Hrana hrana={hrana.rucak} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 35 ? <Hrana hrana={hrana.vecera} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 36 ? <Sifra sifra={kod} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 37 ? <Broj items={broj} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 38 ? <Ukrstenica words={uReci} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 39 ? <Video /> : null}
            </div>
        );
    }
}

export default Dz24;
