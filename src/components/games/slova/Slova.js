import React from 'react'
import Delay from 'react-delay-render'

import bg1 from './bg-slova-1.png'
import bg2 from './bg-slova-2.2.png'
import bg3 from './bg-slova-3.png'

import PreloadImage from "react-preload-image";

class Slova extends React.Component{
    state = {
        btn: true,
        image: bg1,
        audio: {
            upper: "",
            lower: "",
            delay: 0
        },
        veliko: "",
        malo: ""
    }

    componentDidMount() {
        // DZ 01
        if(this.props.slide === "a"){
            this.setState({
                image: bg1,
                audio: { upper: "01 nase novo slovo je slovo A kazi A.mp3", lower:"02 ovo je nase malo slovo A kazi A.mp3", delay: 8000 },
                veliko:"radno-01.png",
                malo: "radno-02.png"
            })
        }
        if(this.props.slide === "m"){
            this.setState({
                image: bg2,
                audio: { upper: "12 nase novo slovo je slovo M kazi M.mp3", lower:"13 ovo je nase malo slovo M kazi M.mp3", delay: 8000 },
                veliko:"radno-29.png",
                malo: "radno-30.png"
            })
        }
        // DZ 02
        if(this.props.slide === "t"){
            this.setState({
                image: bg1,
                audio: { upper: "01 nase novo slovo je slovo T kazi T.mp3", lower:"02 ovo je nase malo slovo T kazi T.mp3", delay: 8000 },
                veliko:"radno-43.png",
                malo: "radno-44.png"
            })
        }
        if(this.props.slide === "o"){
            this.setState({
                image: bg2,
                audio: { upper: "12 nase novo slovo je slovo O kazi O.mp3", lower:"13 a ovo je nase malo slovo O kazi O.mp3", delay: 8000 },
                veliko:"radno-35.png",
                malo: "radno-36.png"
            })
        }
        // DZ 03
        if(this.props.slide === "i"){
            this.setState({
                image: bg1,
                audio: { upper: "01 nase novo slovo je slovo I kazi I.mp3", lower:"02 ovo je nase malo slovo I kazi I.mp3", delay: 8000 },
                veliko:"radno-19.png",
                malo: "radno-20.png"
            })
        }
        if(this.props.slide === "s"){
            this.setState({
                image: bg2,
                audio: { upper: "12 nase novo slovo je slovo S kazi S.mp3", lower:"13 a ovo je nase malo slovo S kazi S.mp3", delay: 8000 },
                veliko:"radno-41.png",
                malo: "radno-42.png"
            })
        }
        // DZ 04
        if(this.props.slide === "u"){
            this.setState({
                image: bg1,
                audio: { upper: "01 nase novo slovo je slovo U kazi U.mp3", lower:"02 ovo je nase malo slovo U kazi U.mp3", delay: 8000 },
                veliko:"radno-47.png",
                malo: "radno-48.png"
            })
        }
        if(this.props.slide === "n"){
            this.setState({
                image: bg2,
                audio: { upper: "12 nase novo slovo je slovo N kazi N.mp3", lower:"13 a ovo je nase malo slovo N kazi N.mp3", delay: 8000 },
                veliko:"radno-31.png",
                malo: "radno-32.png"
            })
        }
        // DZ 05
        if(this.props.slide === "j"){
            this.setState({
                image: bg1,
                audio: { upper: "01 nase novo slovo je slovo U kazi U.mp3", lower:"02 ovo je nase malo slovo U kazi U.mp3", delay: 8000 },
                veliko:"radno-21.png",
                malo: "radno-22.png"
            })
        }
        if(this.props.slide === "e"){
            this.setState({
                image: bg2,
                audio: { upper: "12 nase novo slovo je slovo N kazi N.mp3", lower:"13 a ovo je nase malo slovo N kazi N.mp3", delay: 8000 },
                veliko:"radno-13.png",
                malo: "radno-14.png"
            })
        }
        // DZ 06
        if(this.props.slide === "r"){
            this.setState({
                image: bg3,
                audio: { upper: "01 nase novo slovo je slovo R kazi R.mp3", lower:"02 ovo je nase malo slovo R kazi R.mp3", delay: 8000 },
                veliko:"radno-39.png",
                malo: "radno-40.png"
            })
        }
    }

    render() {
        const Veliko = () => <img src={'./slides/' + this.state.veliko} alt={"veliko"} className='veliko-slovo'/>
        const DelayedVeliko = Delay({ delay: 3000 })(Veliko);

        const Malo = () => <img src={'./slides/' + this.state.malo} alt={"malo"} className='malo-slovo'/>
        const DelayedMalo = Delay({ delay: 8000 })(Malo);

        const Audio2 = () => <audio autoPlay src={"./audio/" + this.state.audio.lower} />
        const DelayedAudio = Delay({ delay: this.state.audio.delay })(Audio2);

        const Btn = () => <img src={"./slides/button.png"} alt="btn" className="main-button"  onClick={this.props.nextSlide}/>
        const DelayedBtn = Delay({ delay: 500})(Btn)
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
                    duration={"1500ms"}
                />
                <DelayedBtn />
                <DelayedVeliko />
                <DelayedMalo />
                <audio autoPlay src={"./audio/" + this.state.audio.upper} />
                <DelayedAudio />
            </div>
        )
    }
}

export default Slova
