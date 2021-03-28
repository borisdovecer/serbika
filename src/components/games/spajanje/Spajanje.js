import React from 'react'
import PojmoviR from "./PojmoviR"
import PojmoviSh from './PojmoviSh'
import PojmoviP from "./PojmoviP"
import PojmoviK from "./PojmoviK"
import PojmoviL from "./PojmoviL"
import PojmoviLJ from "./PojmoviLJ"
import PojmoviB from "./PojmoviB"
import PojmoviV from "./PojmoviV";
import PojmoviZ from "./PojmoviZ";
import PojmoviD from "./PojmoviD";
import PojmoviG from "./PojmoviG";
import PojmoviCh from "./PojmoviCh";
import PojmoviH from "./PojmoviH";
import PojmoviF from "./PojmoviF";
import PojmoviZh from "./PojmoviZh";

class Spajanje extends React.Component{
    state = {
        pojmovi: [],
        selected: "",
        guessed: "",
        complete: true
    }

    componentDidMount() {
        if(this.props.slide === "r"){
            this.setState({ pojmovi: PojmoviR })
        }
        if(this.props.slide === "sh"){
            this.setState({ pojmovi: PojmoviSh })
        }
        if(this.props.slide === "p"){
            this.setState({ pojmovi: PojmoviP })
        }
        if(this.props.slide === "k"){
            this.setState({ pojmovi: PojmoviK })
        }
        if(this.props.slide === "l"){
            this.setState({ pojmovi: PojmoviL })
        }
        if(this.props.slide === "lj"){
            this.setState({ pojmovi: PojmoviLJ })
        }
        if(this.props.slide === "b"){
            this.setState({ pojmovi: PojmoviB })
        }
        if(this.props.slide === "v"){
            this.setState({ pojmovi: PojmoviV })
        }
        if(this.props.slide === "z"){
            this.setState({ pojmovi: PojmoviZ })
        }
        if(this.props.slide === "d"){
            this.setState({ pojmovi: PojmoviD })
        }
        if(this.props.slide === "g"){
            this.setState({ pojmovi: PojmoviG })
        }
        if(this.props.slide === "ch"){
            this.setState({ pojmovi: PojmoviCh })
        }
        if(this.props.slide === "h"){
            this.setState({ pojmovi: PojmoviH })
        }
        if(this.props.slide === "f"){
            this.setState({ pojmovi: PojmoviF })
        }
        if(this.props.slide === "zh"){
            this.setState({ pojmovi: PojmoviZh })
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
                        p.found = true
                    }
                })
                this.setState({pojmovi:pojmovi, selected: "", guessed: "" })
            }, 200 )
        }else if( guessed.length >0 ){
            setTimeout( () => {
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
        if(count === pojmovi.length){
            setTimeout( () => {
                this.setState({ complete: true })
            }, 200 )
        }
    }

    render() {
        const {pojmovi, complete} = this.state
        return(
            <div className={"main"}>
                <div className="row text-center justify-content-center"  style={{marginLeft: 0, marginRight: 0}} >
                    {pojmovi.map( (p, i) =>
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
                {complete ? <img src={"./slides/button.png"} alt="btn" className="main-button" onClick={this.props.nextSlide}/> : null}
                <div className="row text-center justify-content-center"  style={{marginLeft: 0, marginRight: 0}} >


                    {pojmovi.map( (p, i) =>
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
