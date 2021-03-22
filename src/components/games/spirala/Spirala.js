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

class Spirala extends React.Component {
    state = {
        slova: SlovaSh,
        recenica: RecenicaSh,
        image: bg,
        order: 1,
        complete : false
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
                {this.state.complete ? <img src={"./slides/button.png"} alt="btn" className="main-button"  onClick={this.props.nextSlide}/> : null}

                {this.state.recenica.map( (slovo, i) =>
                    <div key={i}
                         style={{
                             width:"100px",
                             height:"100px",
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