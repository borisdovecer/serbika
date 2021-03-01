import React from 'react'
import PojmoviR from "./PojmoviR";

// import bg1 from './balonihd.jpg'
// import PreloadImage from "react-preload-image";

class Spajanje extends React.Component{
    state = {
        pojmovi: [],
        selected: "",
        guessed: "",
        complete: false

    }

    componentDidMount() {
        if(this.props.slide === "r"){
            this.setState({ pojmovi: PojmoviR })
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
        let { pojmovi, selected, guessed } = this.state

        if(selected === guessed && guessed !== ""){
            setTimeout( () => {
                pojmovi.forEach( function (p){
                    if(p.id === parseInt(selected)){
                      //  p.color = "#46025f"
                        p.found = true
                    }
                })
                this.setState({pojmovi:pojmovi, selected: "", guessed: "" })
            }, 200 )
        }else if( guessed.length >0 ){
            setTimeout( () => {
                console.log("neee")
                this.setState({ selected: "", guessed: "" })
            }, 200 )
        }
    }

    complete = () => {
        let {pojmovi} = this.state
        let count = 0
        pojmovi.forEach(p => {
            if(p.found){
                count++
            }
        })
        if(count === 5){
            setTimeout( () => {
                console.log("pobeda")
                this.setState({ complete: true })
            }, 500 )
        }
    }

    render() {
        //const poj = this.state.pojmovi
        return(
            <div className={"main"}>
                <div className="row text-center justify-content-center"  style={{marginLeft: 0, marginRight: 0}} >
                    {this.state.pojmovi.map( (p, i) =>
                        <div key={i} className={"col-lg-2 col-md-2 col-sm-2"} style={{marginTop: "3%"}}>
                            <h1 style={{ color: p.color}}>{p.name}</h1>
                            <div onClick={this.handleClick}
                                 id={p.id}
                                 row="upper"
                                 style={{width: "200px", height: "200px", backgroundColor: p.color, borderRadius: "25px"}}
                            >
                                {p.found ?  <img
                                    id={p.id}
                                    src={'./slides/' + p.image}
                                    alt={'card'}
                                    row="lower"
                                    style={{width:"100%", zIndex:"-50"}}
                                    onClick={this.handleClick}
                                /> : null }

                            </div>
                        </div>
                    )}
                </div>
                {this.state.complete ? <img src={"./slides/button.png"} alt="btn" className="main-button" onClick={this.props.nextSlide}/> : null}
                <div className="row text-center justify-content-center"  style={{marginLeft: 0, marginRight: 0}} >


                    {this.state.pojmovi.map( (p, i) =>
                        <div key={i} className={"col-lg-2 col-md-2 col-sm-2"} style={{marginTop: "6%"}}>
                            {p.found ? null : <img
                                id={p.id}
                                src={'./slides/' + p.image}
                                alt={'card'}
                                row="lower"
                                style={{width:"100%", zIndex:"-50"}}
                                onClick={this.handleClick}
                            /> }
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Spajanje
