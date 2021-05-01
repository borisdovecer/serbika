import React from 'react'
import Delay from "react-delay-render";
import bg1 from './balonihd.jpg'
import bg2 from './vockice.jpg'
import PreloadImage from "react-preload-image";

class Reci extends React.Component{
    state = {
        image: bg1,
        reci: [{}],
        word: 0,
        loading: true
    }

    componentDidMount() {
        this.setState({reci: this.props.reci, loading: false})
        if(this.props.bg === 2){
            this.setState({image: bg2})
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
        const {reci, word, image, loading} = this.state
        const DelayedAudio = Delay({ delay: 5000 })( () => <audio autoPlay src={"./audio/" + reci[0].audio} />);
        return(
            loading ? null :
            <div className={"main"}>
                <PreloadImage style={InnerStyle} src={image} />
                {word === 0 ? <audio autoPlay src={"./audio/20 sada kad znamo jos dva slova hajde da citamo.mp3"} /> : null}
                {word === reci.length ? <audio autoPlay src={"./audio/FENOMENALNO.mp3"} /> : null}
                {word === reci.length ? <img src={"./slides/button.png"} alt="btn" className="main-button"  onClick={this.props.nextSlide}/> : null}
                {reci.map( (rec, i) =>
                    <img key={i}
                         src={"./slides/" + rec.image}
                         className={rec.animation}
                         alt={"A"}
                         id={i}
                         name={rec.name}
                         style={{width:"7%", position:"absolute", marginTop:rec.top, left:rec.left}}
                         onClick={ word === i ? this.handleClick : null}
                    />)}
                {word === 0 ? <DelayedAudio/> : null}
                {reci.map((r, i) =>
                    word === r.id ? <audio autoPlay src={"./audio/" + r.audio} /> : null
                )}
            </div>
        )
    }
}
const InnerStyle = {
    position: 'absolute',
    width: '100%',
    height: '50vw',
    backgroundColor: '#222222'
}
export default Reci
