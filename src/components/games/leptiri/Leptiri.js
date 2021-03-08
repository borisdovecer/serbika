import React from "react"
import Reci06 from "./Reci06"
import Reci07 from "./Reci07"

class Leptiri extends React.Component {
    state = {
        reci: Reci06,
        selected: "",
        guessed: "",
        complete: true
    }

    componentDidMount() {
        if(this.props.slide === "dz06"){
            this.setState({ reci: Reci06 })
        }
        if(this.props.slide === "dz07"){
            this.setState({ reci: Reci07 })
        }

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.compare()
     //   this.complete()
    }

    handleClick = (e) => {
        let id = e.target.attributes.id.value
        let name = e.target.attributes.name.value
       // let {reci} = this.state
        console.log(id)
        if (name === "text"){
            this.setState({ guessed: id })
        }
        if (name === "img"){
            this.setState({ selected: id })
        }

    }

    compare = () => {
        let {reci, selected, guessed} = this.state

        if(selected === guessed && guessed !== ""){
            setTimeout( () => {
                reci.forEach( function (p){
                    if(p.id === parseInt(selected)){
                        p.found = true
                        p.slova = p.full
                    }
                })
                this.setState({reci:reci, selected: "", guessed: "" })
            }, 200 )
        }else if( guessed.length >0 ){
            setTimeout( () => {
                this.setState({ selected: "", guessed: "" })
            }, 200 )
        }
    }

    render() {
        const {reci, complete} = this.state
        return(
            <div className={"main"}>
                {complete ? <img src={"./slides/button.png"} alt="btn" className="main-button" onClick={this.props.nextSlide}/> : null}
                <div className="row text-center"  style={{marginLeft: 0, marginRight: 0, position:"relative"}} >
                    {reci.map((x,i) =>
                    <div style={{position:"absolute", marginTop:x.slovaTop, left:x.slovaLeft}}>
                        {x.slova.map((p,i) =>
                            <div
                                onClick={this.handleClick}
                                id={x.id}
                                name={"text"}
                                style={{width: "70px", height:"70px", backgroundColor:x.color, margin:"5px", borderRadius:"25px", display:"inline-block"}}
                            >
                                <h1 id={x.id} name={"text"} style={{position:"absolute", margin:"8px 22px"}}>{p}</h1>
                            </div>
                        )}
                    </div>
                    )}
                    {reci.map((x,i) =>

                    <div
                        onClick={this.handleClick}
                        id={x.id}
                        name={"img"}
                        style={{position:"absolute", marginTop:x.imgTop, left:x.imgLeft}}
                    >
                        <img
                            style={{width:"150px"}}
                            id={x.id}
                            name={"img"}
                            alt={'card'}
                            src={"./slides/" + x.image }
                        />
                        {x.correct.map((p,i) =>
                            <div id={x.id} name={"img"} style={{width: "70px", height:"70px", backgroundColor:x.color, margin:"5px", borderRadius:"25px", display:"inline-block"}}>
                                <h1 id={x.id} name={"img"} style={{position:"absolute", margin:"8px 24px"}}>{p}</h1>
                            </div>
                        )}
                    </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Leptiri