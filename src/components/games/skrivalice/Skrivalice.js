import React from 'react'
import PreloadImage from "react-preload-image";

class Skrivalice extends React.Component{
    state = {
        image: "",
        audio: "07 sakrila se nasa nestasna slova pritisni svako slovo koje pronadjes.mp3",
        slovoImg: "",
        slova: [],
        completearr: [],
        sc: false,
        complete: true,
        loading: true
    }
    componentDidMount() {
        const { bg, letter, slova } = this.props
        this.setState({image: bg, slovoImg: letter, slova: slova, loading: false})
    }

    click = (e) => {
        let id = e.target.attributes.id.value
        let { slova, completearr } = this.state
        if(slova[id].found === false) {
            slova[id].animation = "rotate-scale-up"
            slova[id].found = true
            completearr.push(slova[id])
            this.setState({ slova, sc: true  })
            setTimeout( () => {
                this.setState({sc: false})
            }, 1500 )
        }
        if(completearr.length === slova.length){
            this.setState({ complete: true })
        }
    };

    render() {
        const { slova, image, slovoImg, audio, complete, sc, loading } = this.state
        return(
            loading ? null :
            <div className={"main"}>
                <PreloadImage style={InnerStyle} src={image} />
                {sc && !complete ? <audio
                    autoPlay
                    src={"./audio/BRAVO.mp3"}
                /> : null}
                {complete ? <audio
                    autoPlay
                    src={"./audio/TO JE BILO ODLICNO.mp3"}
                /> : null}
                {complete ? <img src={"./slides/button.png"} alt="btn" className="main-button"  onClick={this.props.nextSlide}/> : null}
                {slova.map( (slovo, i) => <img
                    key={i}
                    src={"./slides/" + slovoImg}
                    alt={"slovo"}
                    className={slovo.animation}
                    id={i}
                    style={{width:"7%", position:"absolute", marginTop:slovo.top, left:slovo.left}}
                    onClick={this.click}
                /> )}
                <audio
                    autoPlay
                    src={"./audio/" + audio}
                />
            </div>
        )
    }
}
const InnerStyle = {
    position: 'absolute',
    width: '100%',
    height: '100vh'
}

export default Skrivalice
