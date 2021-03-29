import React from 'react'
import PreloadImage from "react-preload-image";

import SlovaSh from "./SlovaSh"
import RecenicaSh from "./RecenicaSh"
import SlovaP from "./SlovaP"
import RecenicaP from "./RecenicaP"
import SlovaK from "./SlovaK"
import RecenicaK from "./RecenicaK"
import SlovaL from "./SlovaL"
import RecenicaL from "./RecenicaL"
import SlovaLj from "./SlovaLj"
import RecenicaLj from "./RecenicaLj"

import bg from './bg-spirala.jpg'
import SlovaB from "./SlovaB";
import RecenicaB from "./RecenicaB";
import SlovaV from "./SlovaV";
import RecenicaV from "./RecenicaV";
import SlovaZ from "./SlovaZ";
import RecenicaZ from "./RecenicaZ";
import SlovaD from "./SlovaD";
import RecenicaD from "./RecenicaD";
import SlovaG from "./SlovaG";
import RecenicaG from "./RecenicaG";
import SlovaCh from "./SlovaCh";
import RecenicaCh from "./RecenicaCh";
import SlovaF from "./SlovaF";
import RecenicaF from "./RecenicaF";
import SlovaZh from "./SlovaZh";
import RecenicaZh from "./RecenicaZh";
import RecenicaH from "./RecenicaH";
import SlovaH from "./SlovaH";

class Spirala extends React.Component {
    state = {
        slova: SlovaSh,
        recenica: RecenicaSh,
        image: bg,
        order: 1,
        complete : true
    }

    componentDidMount() {
        // DZ 07
        if(this.props.slide === "sh"){
            this.setState({ slova: SlovaSh, recenica: RecenicaSh })
        }
        // DZ 08
        if(this.props.slide === "p"){
            this.setState({ slova: SlovaP, recenica: RecenicaP })
        }
        // DZ 09
        if(this.props.slide === "k"){
            this.setState({ slova: SlovaK, recenica: RecenicaK })
        }
        // DZ 10
        if(this.props.slide === "l"){
            this.setState({ slova: SlovaL, recenica: RecenicaL })
        }
        // DZ 11
        if(this.props.slide === "lj"){
            this.setState({ slova: SlovaLj, recenica: RecenicaLj })
        }
        // DZ 12
        if(this.props.slide === "b"){
            this.setState({ slova: SlovaB, recenica: RecenicaB })
        }
        // DZ 13
        if(this.props.slide === "v"){
            this.setState({ slova: SlovaV, recenica: RecenicaV })
        }
        // DZ 14
        if(this.props.slide === "z"){
            this.setState({ slova: SlovaZ, recenica: RecenicaZ })
        }
        // DZ 15
        if(this.props.slide === "d"){
            this.setState({ slova: SlovaD, recenica: RecenicaD })
        }
        // DZ 16
        if(this.props.slide === "g"){
            this.setState({ slova: SlovaG, recenica: RecenicaG })
        }
        // DZ 17
        if(this.props.slide === "ch"){
            this.setState({ slova: SlovaCh, recenica: RecenicaCh })
        }
        // DZ 18
        if(this.props.slide === "h"){
            this.setState({ slova: SlovaH, recenica: RecenicaH })
        }
        // DZ 19
        if(this.props.slide === "f"){
            this.setState({ slova: SlovaF, recenica: RecenicaF })
        }
        // DZ 20
        if(this.props.slide === "zh"){
            this.setState({ slova: SlovaZh, recenica: RecenicaZh })
        }
    }

    handleClick = (e) => {
        let order = e.target.attributes.order.value
        let {recenica} = this.state
        recenica[order - 1].found = true
        this.setState(prevState => {return {order: prevState.order +1, recenica: recenica}})
        this.complete()
    }

    complete = () => {
        let {recenica, order} = this.state
        if(recenica.length === order){
            this.setState({complete: true})
        }
    }


    render() {
        let {order} = this.state
        return(
            <div className={'main'} style={{textAlign:"center"}}>
                {this.state.complete ? <img src={"./slides/button.png"} alt="btn" className="main-button" style={{marginTop:"17.7%", right:"26%"}} onClick={this.props.nextSlide}/> : null}

                {this.state.recenica.map( (slovo, i) =>
                    <div key={i}
                         style={{
                             width:"4.5vw",
                             height:"4.5vw",
                             position:"absolute",
                             border: "5px solid",
                             borderColor: slovo.color,
                             marginTop:slovo.top, left:slovo.left,
                             zIndex: "2"
                         }}>
                        {slovo.found ?  <img
                            src={"./slides/" + slovo.image}
                            alt={"A"}
                            name={slovo.name}
                            style={{width:"100%", position:"relative"}}
                        /> : null}

                    </div>

                    )}

                <PreloadImage
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '50vw',
                        backgroundColor: '#fff',

                    }}
                    innerStyle={{
                        backgroundSize: "contain",
                        backgroundPosition: 'right',
                        backgroundRepeat: 'no-repeat'
                    }}
                    src={this.state.image}
                    duration={"1500ms"}
                />
                {this.state.slova.map( (slovo, i) =>
                    <img key={i}
                         src={"./slides/" + slovo.image}
                         alt={"A"}
                         order={slovo.order ? slovo.order : 0}
                         name={slovo.name}
                         style={{width:"5%", position:"absolute", marginTop:slovo.top, left:slovo.left}}
                         onClick={slovo.order === order ? this.handleClick : null}
                    /> )}
            </div>
        )
    }
}

export default Spirala