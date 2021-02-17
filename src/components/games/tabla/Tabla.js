import React from 'react'
import CanvasDraw from "react-canvas-draw"

import bg1 from './bg-tabla-a.png'
import bg2 from './bg-tabla-m.png'
import PreloadImage from "react-preload-image";

class Tabla extends React.Component{
    state = {
        image: bg1,
        audio: ""
    }

    componentDidMount() {
        // DZ 01
        if(this.props.slide === "a"){
            this.setState({ image: bg1, audio:"05 hajde sada ti napisi nase slovo A.mp3"})
        }
        if(this.props.slide === "m"){
            this.setState({ image: bg2, audio:"16 hajde sada ti napisi nas enovo slovo M.mp3"})
        }
        // DZ 02
        if(this.props.slide === "t"){
            this.setState({ image: bg1, audio:"05 hajde sada ti napisi nase slovo T.mp3"})
        }
        if(this.props.slide === "o"){
            this.setState({ image: bg2, audio:"16 hajde sada ti napisi nase slovo O.mp3"})
        }
        // DZ 03
        if(this.props.slide === "i"){
            this.setState({ image: bg1, audio:"05 hajde sada ti napisi nase slovo I.mp3"})
        }
        if(this.props.slide === "s"){
            this.setState({ image: bg2, audio:"16 hajde sada ti napisi nase slovo S.mp3"})
        }
        // DZ 04
        if(this.props.slide === "u"){
            this.setState({ image: bg1, audio:"05 hajde sada ti napisi nase slovo U.mp3"})
        }
        if(this.props.slide === "n"){
            this.setState({ image: bg2, audio:"16 hajde sada ti napisi nase slovo N.mp3"})
        }
    }

    render() {
        return(
            <div className="main">
                <img src={"./slides/button.png"} alt="btn" className="main-button"  onClick={this.props.nextSlide}/>
                <img src={"./slides/clear.png"} alt="clr" onClick={() => { this.saveableCanvas.clear(); }}  className="main-button" style={{left:"9%", marginTop: "8%", width:"5%"}}  />
                <PreloadImage
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100vh',
                        backgroundColor: '#222222'
                    }}
                    src={this.state.image}
                />
                <CanvasDraw
                    ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
                    canvasWidth={"100%"}
                    canvasHeight={900}
                    brushColor={"#fff"}
                    margin={"auto"}
                    lazyRadius={1}
                />
                <audio autoPlay src={"./audio/" + this.state.audio} />
            </div>
        )
    }
}

export default Tabla
