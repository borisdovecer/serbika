import React from 'react'

import ReciTO from './ReciTO'
import ReciSI from './ReciSI'
import ReciUN from './ReciUN'
import ReciJE from './ReciJE'
import ReciR from './ReciR'
import ReciR3 from './ReciR3'

import Delay from "react-delay-render";

import bg1 from './balonihd.jpg'
import bg2 from './vockice.jpg'
import PreloadImage from "react-preload-image";

class Reci extends React.Component{
    state = {
        image: bg1,
        reci: [],
        word: 0
    }

    componentDidMount() {
        if(this.props.slide === "to"){
            this.setState({ reci: ReciTO })
        }
        if(this.props.slide === "si"){
            this.setState({ reci: ReciSI })
        }
        if(this.props.slide === "un"){
            this.setState({ reci: ReciUN })
        }
        if(this.props.slide === "je"){
            this.setState({ reci: ReciJE })
        }
        if(this.props.slide === "r"){
            this.setState({ reci: ReciR })
        }
        if(this.props.slide === "r3"){
            this.setState({ reci: ReciR3, image:bg2 })
        }

    }

    handleClick = (e) => {
        let id = e.target.attributes.id.value
        let rec = this.state.reci
        if(!rec[id].found){
            rec[id].found = true
            rec[id].animation = "jello-horizontal"
            this.setState(prevState => {return { reci: rec, word: prevState.word + 1}})
        }
    }

    render() {
        const {reci} = this.state
        const Audio1 = () => <audio
            autoPlay
            src={"./audio/" + this.state.reci[0].audio}
        />
        const DelayedAudio = Delay({ delay: 5000 })(Audio1);

        return(
            <div className={"main"}>
                <PreloadImage
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '50vw',
                        backgroundColor: '#222222'
                    }}

                    src={this.state.image}
                />
                {this.state.word === 8 ? <audio
                    autoPlay
                    src={"./audio/FENOMENALNO.mp3"}
                /> : null}
                {this.state.word === reci.length ? <img src={"./slides/button.png"} alt="btn" className="main-button"  onClick={this.props.nextSlide}/> : null}
                {this.state.reci.map( (rec, i) =>
                    <img key={i}
                         src={"./slides/" + rec.image}
                         className={rec.animation}
                         alt={"A"}
                         id={i}
                         name={rec.name}
                         style={{width:"7%", position:"absolute", marginTop:rec.top, left:rec.left}}
                         onClick={ this.state.word === i ? this.handleClick : null}
                    /> )}

                    {this.state.word === 0 ? <audio
                        autoPlay
                        src={"./audio/20 sada kad znamo jos dva slova hajde da citamo.mp3"}
                    /> : null}


                {this.state.word === 0 ? <DelayedAudio/> : null}
                {reci.map((r, i) =>
                    this.state.word === r.id ? <audio autoPlay src={"./audio/" + r.audio} /> : null
                )}

            </div>
        )
    }
}

export default Reci
