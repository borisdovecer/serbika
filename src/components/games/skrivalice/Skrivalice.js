import React from 'react'

import SlovaA from './SlovaA'
import SlovaM from "./SlovaM"

import SlovaJ from './SlovaJ'
import SlovaE from './SlovaE'

import SlovaI from './SlovaI'
import SlovaS from "./SlovaS"

import bg1 from './skrivalice-bg-1.jpg'
import bg2 from './skrivalice-bg-2.png'
import bg3 from './bg-livada.png'
import bg4 from './bg-most.png'
import bg5 from './skrivalice-bg-3.jpg'
import bg6 from './skrivalice-bg-4.jpg'
import bg7 from './skrivalice-bg-40.jpg'
import bg8 from './skrivalice-bg-41.jpg'
import bg9 from './skrivalice-bg-6.jpg'
import bg10 from './bg-more.png'
import bg11 from './bg-suma.png'


import PreloadImage from "react-preload-image";


class Skrivalice extends React.Component{
    state = {
        image: bg1,
        audio: "",
        slovoImg: "",
        slova: SlovaI,
        completearr: [],
        sc: false,
        complete: false
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
