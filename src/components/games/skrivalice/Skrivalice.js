import React from 'react'

import SlovaA from './SlovaA'
import SlovaM from "./SlovaM"

import SlovaJ from './SlovaJ'
import SlovaE from './SlovaE'

import SlovaI from './SlovaI'
import SlovaS from "./SlovaS"

import SlovaP from "./SlovaP"


import bg1 from './skrivalice-bg-1.jpg'
import bg2 from './bg-livada.jpg'
import bg3 from './bg-livada.jpg'
import bg4 from './bg-most.jpg'
import bg5 from './skrivalice-bg-3.jpg'
import bg6 from './skrivalice-bg-4.jpg'
import bg7 from './skrivalice-bg-40.jpg'
import bg8 from './skrivalice-bg-41.jpg'
import bg9 from './skrivalice-bg-6.jpg'
import bg10 from './bg-more.jpg'
import bg11 from './bg-suma.jpg'
import bg12 from './bg-bara.jpg'
import bg13 from "./bg-zivotinjce.jpg"
import bg14 from './bg-vasar.jpg'
import bg15 from './bg-cirkus.jpg'
import bg16 from './bg-soba.jpg'
import bg17 from './bg-kamin.jpg'
import bgZivotinjice from './bg-zivotinjce2.jpg'
import bgGrad from './bg-neon-grad.jpg'
import bgDino from './bg-dino.jpg'
import bgVozic from './bg-vozic.jpg'
import bgFarma from './bg-farma.jpg'


import PreloadImage from "react-preload-image";


class Skrivalice extends React.Component{
    state = {
        image: bg1,
        audio: "",
        slovoImg: "",
        slova: SlovaI,
        completearr: [],
        sc: false,
        complete: true
    }
    componentDidMount() {
        // DZ 01
        if(this.props.slide === "a"){
            this.setState({ image: bg3, audio:"07 sakrila se nasa nestasna slova pritisni svako slovo koje pronadjes.mp3", slovoImg: "a.png", slova:SlovaA })
        }
        if(this.props.slide === "m"){
            this.setState({ image: bg4, audio:"18 nasa slova bas vole da se igraju zmurke pritisni svako slovo koje vidis.mp3", slovoImg: "m.png", slova:SlovaM })
        }
        // DZ 02
        if(this.props.slide === "t"){
            this.setState({ image: bg5, audio:"07 sakrila se nasa nestasna slova pritisni svako slovo koje pronadjes.mp3", slovoImg: "radno-43.png", slova:SlovaA })
        }
        if(this.props.slide === "o"){
            this.setState({ image: bg6, audio:"18 nasa slova bas vole da se igraju zmurke pritisni svako slovo koje vidis.mp3", slovoImg: "radno-35.png", slova:SlovaM })
        }
        // DZ 03
        if(this.props.slide === "i"){
            this.setState({ image: bg1, audio:"07 sakrila se nasa nestasna slova pritisni svako slovo koje pronadjes.mp3", slovoImg: "radno-19.png", slova:SlovaI })
        }
        if(this.props.slide === "s"){
            this.setState({ image: bg2, audio:"18 nasa slova bas vole da se igraju zmurke pritisni svako slovo koje vidis.mp3", slovoImg: "radno-41.png", slova:SlovaS })
        }
        // DZ 04
        if(this.props.slide === "u"){
            this.setState({ image: bg7, audio:"07 sakrila se nasa nestasna slova pritisni svako slovo koje pronadjes.mp3", slovoImg: "radno-47.png", slova:SlovaI })
        }
        if(this.props.slide === "n"){
            this.setState({ image: bg8, audio:"18 nasa slova bas vole da se igraju zmurke pritisni svako slovo koje vidis.mp3", slovoImg: "radno-31.png", slova:SlovaS })
        }
        // DZ 05
        if(this.props.slide === "j"){
            this.setState({ image: bg10, audio:"07 sakrila se nasa nestasna slova pritisni svako slovo koje pronadjes.mp3", slovoImg: "radno-21.png", slova:SlovaJ })
        }
        if(this.props.slide === "e"){
            this.setState({ image: bg11, audio:"18 nasa slova bas vole da se igraju zmurke pritisni svako slovo koje vidis.mp3", slovoImg: "radno-13.png", slova:SlovaE })
        }
        // DZ 06
        if(this.props.slide === "r"){
            this.setState({ image: bg9, audio:"07 sakrila se nasa nestasna slova pritisni svako slovo koje pronadjes.mp3", slovoImg: "radno-39.png", slova:SlovaI })
        }
        // DZ 07
        if(this.props.slide === "sh"){
            this.setState({ image: bg12, audio:"07 sakrila se nasa nestasna slova pritisni svako slovo koje pronadjes.mp3", slovoImg: "radno-59.png", slova:SlovaI })
        }
        // DZ 08
        if(this.props.slide === "p"){
            this.setState({ image: bg13, audio:"07 sakrila se nasa nestasna slova pritisni svako slovo koje pronadjes.mp3", slovoImg: "radno-37.png", slova:SlovaP })
        }
        // DZ 09
        if(this.props.slide === "k"){
            this.setState({ image: bg14, audio:"07 sakrila se nasa nestasna slova pritisni svako slovo koje pronadjes.mp3", slovoImg: "radno-23.png", slova:SlovaP })
        }
        // DZ 10
        if(this.props.slide === "l"){
            this.setState({ image: bg10, audio:"07 sakrila se nasa nestasna slova pritisni svako slovo koje pronadjes.mp3", slovoImg: "radno-25.png", slova:SlovaP })
        }
        // DZ 11
        if(this.props.slide === "lj"){
            this.setState({ image: bg15, audio:"07 sakrila se nasa nestasna slova pritisni svako slovo koje pronadjes.mp3", slovoImg: "radno-27.png", slova:SlovaP })
        }
        // DZ 12
        if(this.props.slide === "b"){
            this.setState({ image: bg10, audio:"07 sakrila se nasa nestasna slova pritisni svako slovo koje pronadjes.mp3", slovoImg: "radno-03.png", slova:SlovaP })
        }
        // DZ 13
        if(this.props.slide === "v"){
            this.setState({ image: bgZivotinjice, audio:"07 sakrila se nasa nestasna slova pritisni svako slovo koje pronadjes.mp3", slovoImg: "radno-05.png", slova:SlovaP })
        }
        // DZ 14
        if(this.props.slide === "z"){
            this.setState({ image: bgVozic, audio:"07 sakrila se nasa nestasna slova pritisni svako slovo koje pronadjes.mp3", slovoImg: "radno-17.png", slova:SlovaP })
        }
        // DZ 15
        if(this.props.slide === "d"){
            this.setState({ image: bgDino, audio:"07 sakrila se nasa nestasna slova pritisni svako slovo koje pronadjes.mp3", slovoImg: "radno-09.png", slova:SlovaP })
        }
        // DZ 16
        if(this.props.slide === "g"){
            this.setState({ image: bgGrad, audio:"07 sakrila se nasa nestasna slova pritisni svako slovo koje pronadjes.mp3", slovoImg: "radno-07.png", slova:SlovaP })
        }
        // DZ 17
        if(this.props.slide === "ch"){
            this.setState({ image: bgFarma, audio:"07 sakrila se nasa nestasna slova pritisni svako slovo koje pronadjes.mp3", slovoImg: "radno-55.png", slova:SlovaP })
        }
        // DZ 18
        if(this.props.slide === "h"){
            this.setState({ image: bg16, audio:"07 sakrila se nasa nestasna slova pritisni svako slovo koje pronadjes.mp3", slovoImg: "radno-51.png", slova:SlovaP })
        }
        // DZ 19
        if(this.props.slide === "f"){
            this.setState({ image: bg17, audio:"07 sakrila se nasa nestasna slova pritisni svako slovo koje pronadjes.mp3", slovoImg: "radno-49.png", slova:SlovaP })
        }
        // DZ 20
        if(this.props.slide === "zh"){
            this.setState({ image: bg9, audio:"07 sakrila se nasa nestasna slova pritisni svako slovo koje pronadjes.mp3", slovoImg: "radno-15.png", slova:SlovaP })
        }
    }

    click = (e) => {
        let s = e.target.attributes
        let Slova = this.state.slova

        if(Slova[s.id.value].found === false) {
            Slova[s.id.value].animation = "rotate-scale-up"
            Slova[s.id.value].found = true
            this.state.completearr.push(Slova[s.id.value])
            this.setState({slova: Slova})

            this.setState({ sc: true })
            setTimeout( () => {
                this.setState({sc: false})
            }, 1500 )
        }
        this.complete()
    };

    complete = () => {
        const {completearr, slova} = this.state
        if(completearr.length === slova.length){
            this.setState({ complete: true })
        }
    }

    render() {
        return(
            <div className={"main"}>
                <PreloadImage
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100vh',
                        backgroundColor: '#222222'
                    }}
                    src={this.state.image}
                />
                {this.state.sc && !this.state.complete ? <audio
                    autoPlay
                    src={"./audio/BRAVO.mp3"}
                /> : null}
                {this.state.complete ? <audio
                    autoPlay
                    src={"./audio/TO JE BILO ODLICNO.mp3"}
                /> : null}
                {this.state.complete ? <img src={"./slides/button.png"} alt="btn" className="main-button"  onClick={this.props.nextSlide}/> : null}
                {this.state.slova.map( (slovo, i) => <img
                    key={i}
                    src={"./slides/" + this.state.slovoImg}
                    alt={"slovo"}
                    className={slovo.animation}
                    id={i}
                    style={{width:"7%", position:"absolute", marginTop:slovo.top, left:slovo.left}}
                    onClick={this.click}
                /> )}
                <audio
                    autoPlay
                    src={"./audio/" + this.state.audio}
                />
            </div>
        )
    }
}

export default Skrivalice
