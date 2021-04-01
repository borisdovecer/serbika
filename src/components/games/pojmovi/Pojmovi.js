import React from 'react'
import PojmoviSh from "./PojmoviSh"
import PojmoviP from "./PojmoviP";
import PojmoviK from "./PojmoviK";
import PojmoviL from "./PojmoviL";
import PojmoviB from "./PojmoviB";
import PojmoviLJ from "./PojmoviLj";
import PojmoviZ from "./PojmoviZ";
import PojmoviV from "./PojmoviV";
import PojmoviD from "./PojmoviD";
import PojmoviG from "./PojmoviG";
import PojmoviCh from "./PojmoviCh";
import PojmoviH from "./PojmoviH";
import PojmoviF from "./PojmoviF";
import PojmoviZh from "./PojmoviZh";

class Pojmovi extends React.Component {
    state = {
        pojmovi: PojmoviSh,
        selected: "",
        guessed: "",
        order: 0,
        complete : true
    }

    componentDidMount() {
        // DZ 07
        if(this.props.slide === "sh"){
            this.setState({ pojmovi: PojmoviSh })
        }
        // DZ 08
        if(this.props.slide === "p"){
            this.setState({ pojmovi: PojmoviP })
        }
        // DZ 09
        if(this.props.slide === "k"){
            this.setState({ pojmovi: PojmoviK })
        }
        // DZ 10
        if(this.props.slide === "l"){
            this.setState({ pojmovi: PojmoviL })
        }
        // DZ 11
        if(this.props.slide === "lj"){
            this.setState({ pojmovi: PojmoviLJ })
        }
        // DZ 12
        if(this.props.slide === "b"){
            this.setState({ pojmovi: PojmoviB })
        }
        // DZ 13
        if(this.props.slide === "z"){
            this.setState({ pojmovi: PojmoviZ })
        }
        // DZ 14
        if(this.props.slide === "v"){
            this.setState({ pojmovi: PojmoviV })
        }
        // DZ 15
        if(this.props.slide === "d"){
            this.setState({ pojmovi: PojmoviD })
        }
        // DZ 16
        if(this.props.slide === "g"){
            this.setState({ pojmovi: PojmoviG })
        }
        // DZ 17
        if(this.props.slide === "ch"){
            this.setState({ pojmovi: PojmoviCh })
        }
        // DZ 18
        if(this.props.slide === "h"){
            this.setState({ pojmovi: PojmoviH })
        }
        // DZ 19
        if(this.props.slide === "f"){
            this.setState({ pojmovi: PojmoviF })
        }
        // DZ 20
        if(this.props.slide === "zh"){
            this.setState({ pojmovi: PojmoviZh })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.compare(this.state.order)
    }

    handleClick = (e) => {
        let id = e.target.attributes.id.value
        let o = e.target.attributes.order.value
      //  let name = e.target.attributes.name.value
        let {pojmovi, selected, guessed} = this.state

        if(!selected){
            this.setState({ selected: pojmovi[o].poj[id],order: parseInt(o)  })
        }else if(!guessed){
            this.setState({ guessed: pojmovi[o].poj[id],order: parseInt(o) })

        }

    }

    compare = (o) => {
        let { pojmovi, selected, guessed } = this.state

        if(selected && guessed && selected.name === guessed.name){
            setTimeout( () => {
                pojmovi[o].poj.forEach( function (p){
                    if(p.name === selected.name && p.order === o){
                        p.found = true
                    }
                })
                this.setState({pojmovi:pojmovi, selected: "", guessed: "", order:0 })
            }, 200 )
        }  else

        if(guessed?.name) {
            setTimeout( () => {
                this.setState({ selected: "", guessed: "", order:0 })
            }, 200 )
        }
    }


    complete = () => {

    }

    render() {
        const {pojmovi} = this.state

        return(
            <div className={'main'} style={{textAlign:"center"}}>
                {this.state.complete ? <img src={"./slides/button.png"} alt="btn" className="main-button"  onClick={this.props.nextSlide}/> : null}
                <div style={{padding:"4%"}}>
                    {pojmovi.map((poj, ind) =>
                        <div style={{ width:"45%", height:"40vh",position:"relative",  display:"inline-block", border:"3px solid black", borderRadius:"25px", margin:"0 5px" }}>
                            {poj.poj.map( (p,i) =>
                                <img src={"./slides/" + p.image }
                                     key={i}
                                     id={i}
                                     className={ p.found ? "jello-horizontal" : null}
                                     alt={"A"}
                                     order={p.order}
                                     name={p.name}
                                     style={{width:"30%", position:"absolute", left:p.left, top:p.top}}
                                     onClick={this.handleClick}
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Pojmovi