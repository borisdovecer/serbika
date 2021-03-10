import React from 'react'

import RecMore from './RecMore'
import RecSirena from "./RecSirena"
import RecMotor from "./RecMotor"
import RecMis from "./RecMis"
import RecSator from "./RecSator"
import RecUsi from "./RecUsi"
import RecTasna from "./RecTasna"
import RecPut from "./RecPut"
import RecPero from "./RecPero"
import RecSapun from "./RecSapun"
import RecPrase from "./RecPrase"
import RecPapir from "./RecPapir"
import RecKisa from "./RecKisa"
import RecPauk from "./RecPauk"
import RecRaketa from "./RecRaketa"
import RecKasika from "./RecKasika"
import RecKamion from "./RecKamion"

class SlikaIRec extends React.Component {
    state = {
        rec: {
            id: 0,
            image: "",
            slova: [],
            correct: "",
            ponudjena: []
        },
        complete: true
    }

    componentDidMount() {
        if(this.props.slide === "more"){
            this.setState({ rec: RecMore })
        }
        if(this.props.slide === "sirena"){
            this.setState({ rec: RecSirena })
        }
        if(this.props.slide === "motor"){
            this.setState({ rec: RecMotor })
        }
        if(this.props.slide === "mis"){
            this.setState({ rec: RecMis })
        }
        if(this.props.slide === "sator"){
            this.setState({ rec: RecSator })
        }
        if(this.props.slide === "usi"){
            this.setState({ rec: RecUsi })
        }
        if(this.props.slide === "tasna"){
            this.setState({ rec: RecTasna })
        }
        if(this.props.slide === "put"){
            this.setState({ rec: RecPut })
        }
        if(this.props.slide === "pero"){
            this.setState({ rec: RecPero })
        }
        if(this.props.slide === "sapun"){
            this.setState({ rec: RecSapun })
        }
        if(this.props.slide === "prase"){
            this.setState({ rec: RecPrase })
        }
        if(this.props.slide === "papir"){
            this.setState({ rec: RecPapir })
        }
        if(this.props.slide === "kisa"){
            this.setState({ rec: RecKisa })
        }
        if(this.props.slide === "pauk"){
            this.setState({ rec: RecPauk })
        }
        if(this.props.slide === "raketa"){
            this.setState({ rec: RecRaketa })
        }
        if(this.props.slide === "kasika"){
            this.setState({ rec: RecKasika })
        }
        if(this.props.slide === "kamion"){
            this.setState({ rec: RecKamion })
        }


    }

    handleClick = (e) => {
        let value = e.target.attributes.name.value
        let {rec} = this.state

        if(value === rec.correct){
            for(let i=0; i<rec.slova.length; i++){
                if(rec.slova[i] === ""){
                    rec.slova[i] = rec.correct
                }
            }
            this.setState({ rec: rec, complete: true})
        }
    }

    render() {
        const { rec } = this.state
        return(
            <div className={'main'}>
                {this.state.complete ? <img src={"./slides/button.png"} alt="btn" className="main-button" onClick={this.props.nextSlide}/> : null}

                <div className="row text-center justify-content-center"  style={{marginLeft: 0, marginRight: 0}} >
                    <img src={"./slides/" + rec.image }  alt={'card'}   width={"500px"} />
                    {rec.ponudjena.map((p,i) =>
                        <div style={{width: "200px", height:"200px" }}>
                            <img
                                style={{width:"100%"}}
                                onClick={this.handleClick}
                                key={i}
                                alt={'card'}
                                name={p}
                                src={"./slides/" + p }
                            />
                        </div>


                    )}

                </div>
                <div className="row text-center justify-content-center"  style={{marginLeft: 0, marginRight: 0}} >
                    {rec.slova.map((s,i) =>
                        <div style={{width: "200px", height:"200px", backgroundColor: "#628ba5", margin: "20px", borderRadius: "25px"}}>
                            {s !== "" ? <img
                                style={{width:"100%"}}
                                onClick={this.handleClick}
                                key={i}
                                alt={'card'}
                                name={s}
                                src={"./slides/" + s }
                                /> : null }

                        </div>
                    )}
                </div>

            </div>
        )
    }

}

export default SlikaIRec