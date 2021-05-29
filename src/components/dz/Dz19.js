import React from 'react'
import Main from '../games/main/Main'
import Slova from '../games/slova/Slova'
import Drvo from '../games/drvo/Drvo'
import DrvoSlova from "../games/drvo/SlovaF"
import Tabla from "../games/tabla/Tabla"
import Skrivalice from "../games/skrivalice/Skrivalice"
import SlovaSkrivalice from '../games/skrivalice/SlovaA'
import bg1 from '../games/skrivalice/bg-kamin.jpg'
import Karte from "../games/karte/Karte"
import KarteF from "../games/karte/KarteF";
import Reci from "../games/reci/Reci"
import ReciF3 from "../games/reci/ReciF"
import Deca from '../games/deca/Deca'
import DecaReci from '../games/deca/ReciF'
import Video from '../games/video/Video'
import Spajanje from "../games/spajanje/Spajanje"
import PojmoviF from "../games/spajanje/PojmoviF";
import SlikaIRec from "../games/slika-i-rec/SlikaIRec"
import rec from '../games/slika-i-rec/RecDz19'
import Pravilna from "../games/pravilna-slova/Pravilna"
import SlovaDz19 from "../games/pravilna-slova/SlovaDz19"
import Opisivanje from "../games/opisivanje/Opisivanje"
import OpisDz19 from "../games/opisivanje/OpisDz19"
import Dzak from "../games/dzak/Dzak"
import Items19 from "../games/dzak/Items19"
import Leptiri from "../games/leptiri/Leptiri"
import Reci19 from "../games/leptiri/Reci19";
import Spirala from "../games/spirala/Spirala";
import slova from "../games/spirala/SlovaF";
import Povezivanje from "../games/povezivanje/Povezivanje";
import povezivanje from "../games/povezivanje/PojmoviF"
import Slagalica from "../games/slagalica/Slagalica";
import Pojmovi from "../games/pojmovi/Pojmovi";
import pojmovi from "../games/pojmovi/PojmoviF"
import SlagalicaSef from "../games/slagalica/SlagalicaSef"
import SlagalicaSofa from "../games/slagalica/SlagalicaSofa"
import SlagalicaFlasa from "../games/slagalica/SlagalicaFlasa"
import SlagalicaMafin from "../games/slagalica/SlagalicaMafin"
import SlagalicaMikrofon from "../games/slagalica/SlagalicaMikrofon"
import Puzle from "../games/puzle/Puzle"
import puzle from "../games/puzle/PuzleDz19a"
import puzle2 from "../games/puzle/PuzleDz19b"
import puzle3 from "../games/puzle/PuzleDz19c"
import Hrana from "../games/hrana/Hrana";
import hrana from "../games/hrana/HranaDz19";
import Sifra from "../games/sifra/Sifra";
import kod from "../games/sifra/SifraDz19";
import Zoo from "../games/zoo/Zoo";
import zoo from "../games/zoo/ZooDz19";

const audioTabla = '16 hajde sada ti napisi nas enovo slovo F.mp3'
const letter = "radno-49.png"

class Dz19 extends React.Component {
    state = {
        slide: 1
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slovo={23} bg={5} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slova={DrvoSlova} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla audio={audioTabla} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte cards={KarteF} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slova={SlovaSkrivalice} bg={bg1} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Reci reci={ReciF3} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Deca reci={DecaReci} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Spajanje game={PojmoviF} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <SlikaIRec rec={rec[0]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <SlikaIRec rec={rec[1]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <SlikaIRec rec={rec[2]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <SlikaIRec rec={rec[3]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <SlikaIRec rec={rec[4]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <SlikaIRec rec={rec[5]} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Pravilna slova={SlovaDz19} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Opisivanje opis={OpisDz19} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Dzak items={Items19} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 19 ? <Leptiri reci={Reci19} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 20 ? <Spirala slova={slova.slova} recenica={slova.recenica} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 21 ? <Pojmovi pojmovi={pojmovi} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 22 ? <Povezivanje povezivanje={povezivanje} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 23 ? <Slagalica slagalica={SlagalicaSef} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 24 ? <Slagalica slagalica={SlagalicaSofa} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 25 ? <Slagalica slagalica={SlagalicaFlasa} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 26 ? <Slagalica slagalica={SlagalicaMafin} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 27 ? <Slagalica slagalica={SlagalicaMikrofon} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 28 ? <Puzle game={puzle} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 29 ? <Puzle game={puzle2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 30 ? <Puzle game={puzle3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 31 ? <Zoo animals={zoo} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 32 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 33 ? <Hrana hrana={hrana.dorucak} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 34 ? <Hrana hrana={hrana.rucak} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 35 ? <Hrana hrana={hrana.vecera} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 36 ? <Sifra sifra={kod} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 37 ? <Video /> : null}
            </div>
        );
    }
}

export default Dz19;
