import React from 'react'

class Pojmovi extends React.Component {
    state = {
        pojmovi: [],
        selected: "",
        guessed: "",
        order: 0,
        complete : true,
        loading: true
    }

    componentDidMount() {
        const {pojmovi} = this.props
        this.setState({pojmovi, loading: false})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.compare(this.state.order)
    }

    handleClick = (e) => {
        let id = e.target.attributes.id.value
        let o = e.target.attributes.order.value
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
        const {pojmovi, complete, loading} = this.state
        return(
            loading ? null :
            <div className={'main'} style={{textAlign:"center"}}>
                {complete ? <img src={"./slides/button.png"} alt="btn" className="main-button"  onClick={this.props.nextSlide}/> : null}
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