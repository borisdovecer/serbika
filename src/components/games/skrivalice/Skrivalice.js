import React from 'react'
import SlovaI from './SlovaI'
import bg1 from './skrivalice-bg-1.jpg'

import PreloadImage from "react-preload-image";

class Skrivalice extends React.Component{
    state = {
        image: bg1,
        audio: "07 sakrila se nasa nestasna slova pritisni svako slovo koje pronadjes.mp3",
        slovoImg: "",
        slova: SlovaI,
        completearr: [],
        sc: false,
        complete: true
    }
    componentDidMount() {
        this.setState({image:this.props.bg, slovoImg: this.props.letter, slova:this.props.slova})
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
