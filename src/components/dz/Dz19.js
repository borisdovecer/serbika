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
import RecFen from "../games/slika-i-rec/RecFen";
import RecLift from "../games/slika-i-rec/RecLift";
import RecKofer from "../games/slika-i-rec/RecKofer";
import RecParfem from "../games/slika-i-rec/RecParfem";
import RecFarma from "../games/slika-i-rec/RecFarma";
import RecFudbal from "../games/slika-i-rec/RecFudba";

import Pravilna from "../games/pravilna-slova/Pravilna"
import SlovaDz19 from "../games/pravilna-slova/SlovaDz19"

import Opisivanje from "../games/opisivanje/Opisivanje"
import OpisDz19 from "../games/opisivanje/OpisDz19"

import Dzak from "../games/dzak/Dzak"
import Items19 from "../games/dzak/Items19"

import Leptiri from "../games/leptiri/Leptiri"
import Reci19 from "../games/leptiri/Reci19";

import Spirala from "../games/spirala/Spirala";
import SlovaF from "../games/spirala/SlovaF";
import RecenicaF from "../games/spirala/RecenicaF";

import Povezivanje from "../games/povezivanje/Povezivanje";
import povezivanje from "../games/povezivanje/PojmoviF"

import Slagalica from "../games/slagalica/Slagalica";
import Pojmovi from "../games/pojmovi/Pojmovi";
import pojmovi from "../games/pojmovi/PojmoviF"

import '../../App.css';
import '../../bootstrap.css'
import SlagalicaSef from "../games/slagalica/SlagalicaSef";
import SlagalicaSofa from "../games/slagalica/SlagalicaSofa";
import SlagalicaFlasa from "../games/slagalica/SlagalicaFlasa";
import SlagalicaMafin from "../games/slagalica/SlagalicaMafin";
import SlagalicaMikrofon from "../games/slagalica/SlagalicaMikrofon";

const audioTabla = '16 hajde sada ti napisi nas enovo slovo F.mp3'
const letter = "radno-49.png"

class Dz19 extends React.Component {
    state = {
        slide: 1
    };

    nextSlide = () => this.setState( prevState => {return { slide: prevState.slide + 1 }} )

    backToMain = () => this.setState({ slide:0})

    render() {
        return (
            <div style={{width: "100%"}} >
                { this.state.slide === 1 ? <Main slide={"main"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 2 ? <Slova slovo={23} bg={4} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 3 ? <Drvo slova={DrvoSlova} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 4 ? <Tabla audio={audioTabla} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 5 ? <Karte cards={KarteF} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 6 ? <Skrivalice slova={SlovaSkrivalice} bg={bg1} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 7 ? <Reci reci={ReciF3} bg={2} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 8 ? <Deca reci={DecaReci} bg={3} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 9 ? <Spajanje game={PojmoviF} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 10 ? <SlikaIRec rec={RecFen} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 11 ? <SlikaIRec rec={RecLift} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 12 ? <SlikaIRec rec={RecKofer} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 13 ? <SlikaIRec rec={RecParfem} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 14 ? <SlikaIRec rec={RecFarma} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 15 ? <SlikaIRec rec={RecFudbal} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 16 ? <Pravilna slova={SlovaDz19} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 17 ? <Opisivanje opis={OpisDz19} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 18 ? <Dzak items={Items19} letter={letter} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 19 ? <Leptiri reci={Reci19} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 20 ? <Spirala slova={SlovaF} recenica={RecenicaF} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 21 ? <Pojmovi pojmovi={pojmovi} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 22 ? <Povezivanje povezivanje={povezivanje} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 23 ? <Slagalica slagalica={SlagalicaSef} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 24 ? <Slagalica slagalica={SlagalicaSofa} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 25 ? <Slagalica slagalica={SlagalicaFlasa} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 26 ? <Slagalica slagalica={SlagalicaMafin} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 27 ? <Slagalica slagalica={SlagalicaMikrofon} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 28 ? <Main slide={"pehar"} nextSlide={this.nextSlide}/> : null}
                { this.state.slide === 29 ? <Video end={this.backToMain}/> : null}
            </div>
        );
    }
}

export default Dz19;
