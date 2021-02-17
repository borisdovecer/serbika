import React from 'react'

//import ReciArr from "./ReciArr";
import ReciTO from './ReciTO'
import ReciSI from './ReciSI'
import ReciUN from './ReciUN'
import Delay from "react-delay-render";

import bg1 from './balonihd.jpg'
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
                {this.state.word === 8 ? <img src={"./slides/button.png"} alt="btn" className="main-button"  onClick={this.props.nextSlide}/> : null}
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
                {this.state.word === 1 ? <audio autoPlay src={"./audio/" + this.state.reci[1].audio} /> : null}
                {this.state.word === 2 ?  <audio autoPlay src={"./audio/" + this.state.reci[2].audio} /> : null}
                {this.state.word === 3 ?  <audio autoPlay src={"./audio/" + this.state.reci[3].audio} /> : null}
                {this.state.word === 4 ?  <audio autoPlay src={"./audio/" + this.state.reci[4].audio} /> : null}
                {this.state.word === 5 ?  <audio autoPlay src={"./audio/" + this.state.reci[5].audio} /> : null}
                {this.state.word === 6 ?  <audio autoPlay src={"./audio/" + this.state.reci[6].audio} /> : null}
                {this.state.word === 7 ?  <audio autoPlay src={"./audio/" + this.state.reci[7].audio} /> : null}
            </div>
        )
    }
}

export default Reci
