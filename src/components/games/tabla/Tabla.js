import React from 'react'
import CanvasDraw from "react-canvas-draw"
import bg1 from './bg-tabla-a.jpg'
import bg2 from './bg-tabla-m.jpg'
import PreloadImage from "react-preload-image";

class Tabla extends React.Component{
    state = {
        image: bg1,
        audio: ""
    }

    componentDidMount() {
        this.setState({audio: this.props.audio})
        if(this.props.bg === 2){
            this.setState({image:bg2})
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
                    duration={"1000ms"}
                    lazy={true}
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
