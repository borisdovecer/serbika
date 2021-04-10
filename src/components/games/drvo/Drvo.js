import React from 'react'
import PreloadImage from "react-preload-image";

import bg1 from './drvo.jpg'
import bg2 from './drvo2.jpg'
import bg3 from './drvo3.png'

class Drvo extends React.Component {
    state = {
        image: bg1,
        audio1: "",
        audio2: "",
        slova: [],
        position: [],
        err: false,
        sc: false,
        upperComplete: false,
        lowerComplete: true,
        uparr: [],
        lowarr: []
    }

    componentDidMount() {
        const {slova,bg} = this.props
        let bgg
        switch (bg) {
            case 2: bgg=bg2; break;
            case 3: bgg=bg3; break;
            default: bgg=bg1;
        }
        let position = []
        slova.forEach( pos => {
            position.sort(() => Math.random() - 0.5).push({top: pos.top, left: pos.left})
        })

        this.setState({
            image: bgg,
            audio1: slova[0].audio1,
            audio2: slova[0].audio2,
            slova: slova.sort(() => Math.random() - 0.5),
            position: position
        })

    }



    handleClick = (e) => {
        let mee = this.state.slova
        let arr = this.state.uparr
        let arrlow = this.state.lowarr
        let t = e.target.attributes

        if(t.value.value === "upper" && mee[t.id.value].found === false){

            mee[t.id.value].hidden = "puff-out-center"
            mee[t.id.value].found = true
            arr.push(mee[t.id.value].found)
            this.setState({btn:mee, uparr:arr})

            this.setState({ sc: true })
            setTimeout( () => {
                this.setState({sc: false})
            }, 1500 )

        } else if(!this.state.upperComplete) {
            this.setState({ err: true })
            setTimeout( () => {
                this.setState({err:false})
            }, 2000 )
        }


        this.upperCheck()

        if(this.state.upperComplete){
            if(t.value.value === "lower" && mee[t.id.value].found === false){
                mee[t.id.value].hidden = "puff-out-center"
                mee[t.id.value].found = true
                arrlow.push(mee[t.id.value].found)
                this.setState({btn:mee, lowarr:arrlow})

                this.setState({ sc: true })
                setTimeout( () => {
                    this.setState({sc: false})
                }, 1500 )
            }
        }
        this.lowCheck()
    };

    upperCheck = () => {
        if(this.state.uparr.length === 4){
            this.setState({ upperComplete: true })
        }
    }

    lowCheck = () => {
        if(this.state.upperComplete && this.state.lowarr.length === 3){
            this.setState({ lowerComplete: true })
        }
    }

    render() {

        return(
            <div className={"main"} style={{textAlign:"center"}}>
                <PreloadImage
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '50vw',
                        backgroundColor: '#fff',

                    }}
                    innerStyle={{
                        backgroundSize: "contain",
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                    src={this.state.image}

                />

                {this.state.lowerComplete ? <img src={"./slides/button.png"} alt="btn" className="main-button"  onClick={this.props.nextSlide}/> : null}

                {this.state.slova.map( (slovo, i) =>
                    <img key={i}
                         src={"./slides/" + slovo.class}
                         className={slovo.hidden}
                         alt={"A"}
                         id={i}
                         value={slovo.value}
                         style={{width:"7%", position:"absolute", marginTop:this.state.position[i].top, left:this.state.position[i].left}}
                         onClick={this.handleClick}
                    /> )}
                <audio
                    autoPlay
                    src={"./audio/" + this.state.audio1}
                />
                {this.state.err ? <audio
                    autoPlay
                    src={"./audio/POKUSAJ JOS JEDANPUT.mp3"}
                /> : null}
                {this.state.sc && !this.state.lowerComplete ? <audio
                    autoPlay
                    src={"./audio/BRAVO.mp3"}
                /> : null}
                {this.state.upperComplete ? <audio
                    autoPlay
                    src={"./audio/" + this.state.audio2}
                /> : null}
                {this.state.lowerComplete ? <audio
                    autoPlay
                    src={"./audio/SJAJNO.mp3"}
                /> : null}
            </div>
        )
    }
}

export default Drvo
