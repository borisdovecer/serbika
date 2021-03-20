import React from 'react'
import PojmoviSh from "./PojmoviSh"

class Pojmovi extends React.Component {
    state = {
        pojmovi: PojmoviSh,
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
        let {pojmovi} = this.state


        pojmovi[o].poj[id].found = true
        this.setState({pojmovi: pojmovi})

    }

    complete = () => {

    }

    render() {
        let pojmovi1 = this.state.pojmovi[0]
        let pojmovi2 = this.state.pojmovi[1]
        let pojmovi3 = this.state.pojmovi[2]
        let pojmovi4 = this.state.pojmovi[3]
        return(
            <div className={'main'} style={{textAlign:"center"}}>
                {this.state.complete ? <img src={"./slides/button.png"} alt="btn" className="main-button"  onClick={this.props.nextSlide}/> : null}
                <div style={{padding:"4%"}}>
                    <div style={{ width:"45%", height:"40vh",position:"relative",  display:"inline-block", border:"3px solid black", borderRadius:"25px", margin:"0 5px" }}>
                        {pojmovi1.poj.map( (p,i) =>
                            <img src={"./slides/" + p.image }
                                 key={i}
                                 id={i}
                                 className={ p.found ? "jello-horizontal" : null}
                                 alt={"A"}
                                 order={0}
                                 name={p.name}
                                 style={{width:"30%", position:"absolute", left:p.left, top:p.top}}
                                 onClick={this.handleClick}
                            />
                        )}
                    </div>
                    <div style={{ width:"45%", height:"40vh",position:"relative", display:"inline-block", border:"3px solid black", borderRadius:"25px" , margin:"0 5px"}}>
                        {pojmovi2.poj.map( (p,i) =>
                            <img src={"./slides/" + p.image }
                                 key={i}
                                 id={i}
                                 className={ p.found ? "jello-horizontal" : null}
                                 alt={"A"}
                                 order={1}
                                 name={p.name}
                                 style={{width:"30%", position:"absolute", left:p.left, top:p.top}}
                                 onClick={this.handleClick}
                            />
                        )}
                    </div>
                    <div style={{ width:"45%", height:"40vh",position:"relative",  display:"inline-block", border:"3px solid black", borderRadius:"25px", margin:"0 5px" }}>
                        {pojmovi3.poj.map( (p,i) =>
                            <img src={"./slides/" + p.image }
                                 key={i}
                                 id={i}
                                 className={ p.found ? "jello-horizontal" : null}
                                 alt={"A"}
                                 order={2}
                                 name={p.name}
                                 style={{width:"30%", position:"absolute", left:p.left, top:p.top}}
                                 onClick={this.handleClick}
                            />
                        )}
                    </div>
                    <div style={{ width:"45%", height:"40vh",position:"relative",  display:"inline-block", border:"3px solid black", borderRadius:"25px", margin:"0 5px" }}>
                        {pojmovi4.poj.map( (p,i) =>
                            <img src={"./slides/" + p.image }
                                 key={i}
                                 id={i}
                                 className={ p.found ? "jello-horizontal" : null}
                                 alt={"A"}
                                 order={3}
                                 name={p.name}
                                 style={{width:"30%", position:"absolute", left:p.left, top:p.top}}
                                 onClick={this.handleClick}
                            />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default Pojmovi