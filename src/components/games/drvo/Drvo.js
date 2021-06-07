import React from 'react'
import PreloadImage from "react-preload-image";

import bg1 from './drvo.jpg'
import bg2 from './drvo2.jpg'
import bg3 from './drvo3.png'

class Drvo extends React.Component {
    state = {
        image: bg1,
        slova: [],
        position: [],
        err: false,
        sc: false,
        upperComplete: false,
        lowerComplete: true,
        arr: [],
        loading: true
    }

    componentDidMount() {
        const {slova,bg} = this.props
        const position = [...slova]
        let bgg
        switch (bg) {
            case 2: bgg=bg2; break;
            case 3: bgg=bg3; break;
            default: bgg=bg1;
        }
        console.log(position);
        this.setState({
            image: bgg,
            slova: slova.sort(() => Math.random() - 0.5),
            position: position
        })
    }

    handleClick = (e) => {
        let { slova, arr, upperComplete } = this.state
        let id = e.target.attributes.id.value
        let val = e.target.attributes.value.value

        if(!slova[id].found){
            if(val === 'upper' || upperComplete){
                slova[id].hidden = "puff-out-center"
                slova[id].found = true
                arr.push(slova[id])
                this.setState({ arr, sc: true })
                setTimeout( () => {
                    this.setState({sc: false})
                }, 1500 )
            }
            arr.length === 4 ? this.setState({ upperComplete: true }) : this.complete()
        }
    };

    complete = () => {
        if(this.state.upperComplete && this.state.arr.length === 7){
            this.setState({ lowerComplete: true })
        }
    }

    render() {
        let { slova, image, position, upperComplete, lowerComplete, err, sc} = this.state
        return(
            <div className={"main"} >
                {lowerComplete ? <img src={"./slides/button.png"} alt="btn" className="main-button"  onClick={this.props.nextSlide}/> : null}
                <PreloadImage
                    style={PreloadStyle}
                    innerStyle={InnerStyle}
                    src={image}
                />
                {slova.map( (slovo, i) =>
                    <img key={i}
                         src={"./slides/" + slovo.class}
                         className={slovo.hidden}
                         alt={"A"}
                         id={i}
                         value={slovo.value}
                         style={{width:"7%", position:"absolute", marginTop:position[i].top, left:position[i].left}}
                         onClick={this.handleClick}
                    />
                )}
                {/*<audio autoPlay src={"./audio/" + position[0].audio1} />*/}
                {err ? <audio autoPlay src={"./audio/POKUSAJ JOS JEDANPUT.mp3"} /> : null}
                {sc && !lowerComplete ? <audio autoPlay src={"./audio/BRAVO.mp3"} /> : null}
                {upperComplete ? <audio autoPlay src={"./audio/" + position[0].audio2} /> : null}
                {lowerComplete ? <audio autoPlay src={"./audio/SJAJNO.mp3"} /> : null}
            </div>
        )
    }
}

const PreloadStyle = {
    position: 'absolute',
    width: '100%',
    height: '50vw',
    backgroundColor: '#fff'
}
const InnerStyle = {
    backgroundSize: "contain",
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
}

export default Drvo
