import React from 'react'
import LineTo from 'react-lineto'
import PojmoviP from "./PojmoviP"
import PojmoviK from "./PojmoviK"
import PojmoviL from "./PojmoviL"
import PojmoviLj from "./PojmoviLj"
import PojmoviB from "./PojmoviB";
import PojmoviV from "./PojmoviV";
import PojmoviZ from "./PojmoviZ";
import PojmoviD from "./PojmoviD";
import PojmoviG from "./PojmoviG";
import PojmoviCh from "./PojmoviCh";
import PojmoviH from "./PojmoviH";
import PojmoviF from "./PojmoviF";
import PojmoviZh from "./PojmoviZh";



class Povezivanje extends React.Component {
    state = {
        pojmovi: PojmoviP,
        selected: "",
        guessed: "",
        complete: true
    }

    componentDidMount() {
        if(this.props.slide === "p") {
            this.setState({pojmovi: PojmoviP.sort(() => Math.random() - 0.5)})
        }
        if(this.props.slide === "k") {
            this.setState({pojmovi: PojmoviK.sort(() => Math.random() - 0.5)})
        }
        if(this.props.slide === "l") {
            this.setState({pojmovi: PojmoviL.sort(() => Math.random() - 0.5)})
        }
        if(this.props.slide === "lj") {
            this.setState({pojmovi: PojmoviLj.sort(() => Math.random() - 0.5)})
        }
        if(this.props.slide === "b") {
            this.setState({pojmovi: PojmoviB.sort(() => Math.random() - 0.5)})
        }
        if(this.props.slide === "v") {
            this.setState({pojmovi: PojmoviV.sort(() => Math.random() - 0.5)})
        }
        if(this.props.slide === "z") {
            this.setState({pojmovi: PojmoviZ.sort(() => Math.random() - 0.5)})
        }
        if(this.props.slide === "d") {
            this.setState({pojmovi: PojmoviD.sort(() => Math.random() - 0.5)})
        }
        if(this.props.slide === "g") {
            this.setState({pojmovi: PojmoviG.sort(() => Math.random() - 0.5)})
        }
        if(this.props.slide === "ch") {
            this.setState({pojmovi: PojmoviCh.sort(() => Math.random() - 0.5)})
        }
        if(this.props.slide === "h") {
            this.setState({pojmovi: PojmoviH.sort(() => Math.random() - 0.5)})
        }
        if(this.props.slide === "f") {
            this.setState({pojmovi: PojmoviF.sort(() => Math.random() - 0.5)})
        }
        if(this.props.slide === "zh") {
            this.setState({pojmovi: PojmoviZh.sort(() => Math.random() - 0.5)})
        }
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
        let {pojmovi, selected, guessed} = this.state
        if(selected === guessed && guessed !== ""){
            setTimeout( () => {
                pojmovi.forEach( function (p){
                    if(p.id === parseInt(selected)){
                        p.found = true
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
        let arr = []
        this.state.pojmovi.forEach( p => {
            if(p.found){
                arr.push(true)
            }
        })
        if(arr.length === this.state.pojmovi.length){
            this.setState({ complete: true })
        }
    }

    render() {
        const {pojmovi, complete} = this.state
        return (
            <div className={"main text-center"} >
                {complete ? <img src={"./slides/button.png"} alt="btn" className="main-button" style={{marginTop: "20%"}} onClick={this.props.nextSlide}/> : null}

                {pojmovi.map((p, i) =>
                    <div>
                        {p.found ?  <LineTo from={p.name} to={p.id} /> : null}
                        <img src={"./slides/" + p.image }
                             key={i}
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