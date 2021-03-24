import React from 'react'
import PojmoviSh from "./PojmoviSh"

class Pojmovi extends React.Component {
    state = {
        pojmovi: PojmoviSh,
        selected: "",
        guessed: "",
        complete : true
    }

    componentDidMount() {
        // DZ 07
        if(this.props.slide === "sh"){
            this.setState({ })
        }

    }

    handleClick = (e) => {
        let id = e.target.attributes.id.value
        let o = e.target.attributes.order.value
        let name = e.target.attributes.name.value
        let {pojmovi, selected, guessed} = this.state


        if(!selected){
            this.setState({ selected: pojmovi[o].poj[id] })
        }else if(!guessed){
            this.setState({ guessed: pojmovi[o].poj[id] })

        }

        this.compare(o)


    }

    compare = (o) => {
        let {pojmovi, selected, guessed} = this.state

        if(selected.name === guessed.name && guessed){
            console.log("jeej!")
            pojmovi[o].poj.forEach(p =>{
                if(p.name === selected.name){
                    p.found = true
                }
            })

            // pojmovi[o].poj[id].found = true
            this.setState({pojmovi, selected: "", guessed: "" })
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
                                     order={ind}
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