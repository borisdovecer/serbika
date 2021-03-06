import React from 'react'
import LineTo from 'react-lineto'

class Povezivanje extends React.Component {
    state = {
        pojmovi: [],
        arr: [],
        selected: "",
        guessed: "",
        complete: true
    }

    componentDidMount() {
        this.setState({pojmovi: this.props.povezivanje.sort(() => Math.random() - 0.5)})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.compare()
    }

    handleClick = (e) => {
        let localName = e.target.localName
        let id = e.target.attributes.id.value
        if(localName === "img"){
            this.setState({selected: id})
        }
        if(localName === "h1"){
            this.setState({guessed: id})
        }
    }

    compare = () => {
        let {pojmovi, arr, selected, guessed} = this.state
        if(selected === guessed && guessed !== ""){
            setTimeout( () => {
                pojmovi.forEach( function (p){
                    if(p.id === parseInt(selected)){
                        p.found = true
                        arr.push(p)
                    }
                })
                this.complete()
                this.setState({pojmovi, selected: "", guessed: "" })
            }, 200 )
        }else if( guessed.length >0 ){
            setTimeout( () => {
                this.setState({ selected: "", guessed: "" })
            }, 200 )
        }
    }

    complete = () => {
        let { pojmovi, arr } = this.state
        if(arr.length === pojmovi.length){
            this.setState({ complete: true })
        }
    }

    render() {
        const {pojmovi, complete} = this.state
        return (
            <div className={"main text-center"} >
                {complete ? <img src={"./slides/button.png"} alt="btn" className="main-button" style={{marginTop: "20%"}} onClick={this.props.nextSlide}/> : null}
                {pojmovi.map((p, i) =>
                    <div key={i}>
                        {p.found ?  <LineTo from={p.name} to={p.id} /> : null}
                        <img src={"./slides/" + p.image }
                             id={p.id}
                             className={p.name}
                             alt={"A"}
                             name={p.name}
                             style={{width:"10%", position:"absolute", left:p.left, marginTop:p.top  }}
                             onClick={this.handleClick}
                        />
                    </div>
                )}
                <div style={{paddingTop: "5%"}}>
                    {pojmovi.map((p, i) =>
                        <h1 key={i}
                            style={ p.found ? {margin:"30px", textShadow:"1px 1px 30px " + p.color + ", 0 0 25px " + p.color + ", 0 0 20px " + p.color} : {margin: "30px"}}
                            id={p.id}
                            className={p.id}
                            name={p.name}
                            onClick={this.handleClick}
                        > {p.name}
                        </h1>
                    )}
                </div>
            </div>
        )
    }
}

export default Povezivanje