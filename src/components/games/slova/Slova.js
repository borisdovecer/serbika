import React from 'react'
import Delay from 'react-delay-render'
import Slova01 from "./Slova01"

import bg1 from './bg-slova-1.jpg'
import bg2 from './bg-slova-2.2.jpg'
import bg3 from './bg-slova-3.jpg'
import bg4 from './bg-slova-4.jpg'

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
        const {slovo,bg} = this.props
        let bgg
        switch (bg) {
            case 2: bgg=bg2; break;
            case 3: bgg=bg3; break;
            case 4: bgg=bg4; break;
            default: bgg=bg1;
        }

        this.setState({
            image: bgg,
            audio: { upper: Slova01[slovo].audio1, lower:Slova01[slovo].audio2, delay: Slova01[slovo].delay },
            veliko:Slova01[slovo].veliko,
            malo: Slova01[slovo].malo
        })
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
                    duration={"1000ms"}
                    lazy={true}
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
