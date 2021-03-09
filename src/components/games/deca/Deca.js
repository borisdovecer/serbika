import React from 'react'
import Reci from "./Reci"
import Reci2 from "./Reci2"
import Reci3 from "./Reci3"
import Reci4 from "./Reci4"
import ReciJE from './ReciJE'
import ReciSh from './ReciSh'
import ReciP from './ReciP'

import bg1 from './decabg.jpg'
import bg2 from './decabg2.jpg'
import bg3 from './decabg3.jpg'
import PreloadImage from "react-preload-image";

class Deca extends React.Component{
    state = {
        reci: Reci,
        btn: true,
        image: bg1,
        animation: [
            { name : "", delay: 6000, audio: false },
            { name : "", delay: 12000, audio: false },
            { name : "", delay: 18000, audio: false},
            { name : "", delay: 24000, audio: false },
            { name : "", delay: 30000, audio: false },
            { name : "", delay: 36000, audio: false }
        ]
    }

    componentDidMount() {
        if(this.props.slide === "to"){
            this.setState({ reci: Reci })
        }
        if(this.props.slide === "si"){
            this.setState({ reci: Reci2 })
        }
        if(this.props.slide === "un"){
            this.setState({ reci: Reci3, image:bg2 })
        }
        if(this.props.slide === "je"){
            this.setState({ reci: ReciJE, image:bg3 })
        }
        if(this.props.slide === "r"){
            this.setState({ reci: Reci4, image:bg3 })
        }
        if(this.props.slide === "sh"){
            this.setState({ reci: ReciSh, image:bg3 })
        }
        if(this.props.slide === "p"){
            this.setState({ reci: ReciP, image:bg3 })
        }

        let ani = this.state.animation
        ani.forEach( a => {
            setTimeout( () => {
                a.name = "color-change-2x-text"
                a.audio = true
                this.setState({animation:ani})
            }, a.delay )
        })

    }

    render() {
        return(
            <div className={"main"}>
                <img src={"./slides/button.png"} alt="btn" className="main-button" style={{   marginTop: "32%"}} onClick={this.props.nextSlide}/>
                { this.state.animation[4].audio ? <img src={"./slides/button.png"} alt="btn" className="main-button" style={{   marginTop: "32%"}} onClick={this.props.nextSlide}/> : null}
                <PreloadImage
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '55vw',
                        backgroundColor: '#222222'
                    }}
                    innerStyle={{
                        backgroundSize: "contain",
                        backgroundPosition: 'center',
                        backgroundRepeat: 'repeat'
                    }}
                    src={this.state.image}
                    duration={"1000ms"}
                />
                {this.state.reci.map( (rec, i) =>
                    <h1 key={i}
                         className={this.state.animation[i].name}
                         id={i}
                         style={{fontSize: "3.2vw",fontWeight:"bold", position:"absolute", marginTop:rec.top, left:rec.left}}
                    >{rec.name}</h1>)}
                <audio autoPlay src={"./audio/31 nasi drugari su napisali nesto hajde procitaj.mp3"} />
                {this.state.animation[0].audio ? <audio autoPlay src={"./audio/" + this.state.reci[0].audio} /> : null}
                {this.state.animation[1].audio ? <audio autoPlay src={"./audio/" + this.state.reci[1].audio} /> : null}
                {this.state.animation[2].audio ? <audio autoPlay src={"./audio/" + this.state.reci[2].audio} /> : null}
                {this.state.animation[3].audio ? <audio autoPlay src={"./audio/" + this.state.reci[3].audio} /> : null}
                {this.state.animation[4].audio ? <audio autoPlay src={"./audio/" + this.state.reci[4].audio} /> : null}
                {this.state.animation[5].audio && this.state.reci.length > 5 ? <audio autoPlay src={"./audio/" + this.state.reci[5].audio} /> : null}

            </div>
        )
    }

}

export default Deca
