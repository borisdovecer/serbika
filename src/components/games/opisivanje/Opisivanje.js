import React from 'react'

import OpisDz06 from "./OpisDz06"
import OpisDz07 from "./OpisDz07"
import OpisDz08 from "./OpisDz08"
import OpisDz09 from "./OpisDz09"
import OpisDz10 from "./OpisDz10"
import OpisDz11 from "./OpisDz11"
import OpisDz12 from "./OpisDz12";
import OpisDz13 from "./OpisDz13";
import OpisDz14 from "./OpisDz14";
import OpisDz15 from "./OpisDz15";
import OpisDz16 from "./OpisDz16";
import OpisDz17 from "./OpisDz17";
import OpisDz19 from "./OpisDz19";
import OpisDz18 from "./OpisDz18";
import OpisDz20 from "./OpisDz20";

class Opisivanje extends React.Component {
    state = {
        opis: OpisDz06,
        selected: "",
        guessed: "",
        complete: true
    }

    componentDidMount() {
        if(this.props.slide === "dz06"){
            this.setState({ opis: OpisDz06 })
        }
        if(this.props.slide === "dz07"){
            this.setState({ opis: OpisDz07 })
        }
        if(this.props.slide === "dz08"){
            this.setState({ opis: OpisDz08 })
        }
        if(this.props.slide === "dz09"){
            this.setState({ opis: OpisDz09 })
        }
        if(this.props.slide === "dz10"){
            this.setState({ opis: OpisDz10 })
        }
        if(this.props.slide === "dz11"){
            this.setState({ opis: OpisDz11 })
        }
        if(this.props.slide === "dz12"){
            this.setState({ opis: OpisDz12 })
        }
        if(this.props.slide === "dz13"){
            this.setState({ opis: OpisDz13 })
        }
        if(this.props.slide === "dz14"){
            this.setState({ opis: OpisDz14 })
        }
        if(this.props.slide === "dz15"){
            this.setState({ opis: OpisDz15 })
        }
        if(this.props.slide === "dz16"){
            this.setState({ opis: OpisDz16 })
        }
        if(this.props.slide === "dz17"){
            this.setState({ opis: OpisDz17 })
        }
        if(this.props.slide === "dz18"){
            this.setState({ opis: OpisDz18 })
        }
        if(this.props.slide === "dz19"){
            this.setState({ opis: OpisDz19 })
        }
        if(this.props.slide === "dz20"){
            this.setState({ opis: OpisDz20 })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.compare()
        this.complete()
    }

    handleClick = (e) => {
        let id = e.target.attributes.id.value
        let row = e.target.attributes.row.value

        if(row === "lower"){
            this.setState({ selected: id })
        }else{
            this.setState({ guessed: id })
        }
    }

    compare = () => {
        let { opis, selected, guessed } = this.state

        if(selected === guessed && guessed !== ""){
            setTimeout( () => {
                opis.forEach( function (p){
                    if(p.id === parseInt(selected)){
                        p.found = true
                    }
                })
                this.setState({opis:opis, selected: "", guessed: "" })
            }, 200 )
        }else if( guessed.length >0 ){
            setTimeout( () => {
                console.log("neee")
                this.setState({ selected: "", guessed: "" })
            }, 200 )
        }
    }

    complete = () => {
        let {opis} = this.state
        let count = 0
        opis.forEach(p => {
            if(p.found){
                count++
            }
        })
        if(count === 2){
            setTimeout( () => {
                console.log("pobeda")
                this.setState({ complete: true })
            }, 500 )
        }
    }

    render() {
        const {opis} = this.state
        return(
            <div className={'main'}>
                {this.state.complete ? <img src={"./slides/button.png"} alt="btn" className="main-button" onClick={this.props.nextSlide}/> : null}
                <div className="row justify-content-center "  style={{marginLeft: 0, marginRight: 0}} >
                    {opis.map((p,i) =>
                            <div key={i} className={"col-lg-4 col-md-5 col-sm-5"}>
                                <div >
                                    <h1 >{p.text}</h1>
                                </div>
                                <div onClick={this.handleClick}
                                     id={p.id}
                                     row="upper"
                                     style={{ width: "250px", height:"250px", border:"2px solid#ccc333", borderRadius: "25px", display:"inline-block", margin:"20px" }}
                                >
                                     {p.found ?
                                    <img
                                        style={{width:"80%", position:"relative", top:"5%", left:"10%"}}
                                        id={p.id}
                                        row="upper"
                                        alt={'card'}
                                        key={i}
                                        src={"./slides/" + p.image }
                                    /> : null }
                                </div>
                            </div>
                    )}
                </div>
                <div className="row text-center justify-content-center"  style={{marginLeft: 0, marginRight: 0}} >
                    {opis.map((p,i) =>
                        <div style={{width: "20%", height:"300px" }}>
                            {p.found ? null : <img
                                    style={{width:"100%"}}
                                    onClick={this.handleClick}
                                    id={p.id}
                                    row="lower"
                                    alt={'card'}
                                    key={i}
                                    src={"./slides/" + p.image }
                                /> }

                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Opisivanje