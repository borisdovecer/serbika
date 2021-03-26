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
import RecSal from "./SlikaSal"
import RecLutka from "./RacLutka"
import RecPalma from "./RecPalma"
import RecPajp from "./RecPajp"
import RecPoklon from "./RecPoklon"
import RecLjut from "./RecLjut"
import RecPolje from "./RecPolje"
import RecKosulja from "./RecKosulja"
import RecLjiljan from "./RecLjiljan"
import RecBik from './RecBik'
import RecBure from "./RecBure"
import RecBalon from "./RecBalon";
import RecJabuka from "./RecJabuka";
import RecNebo from "./RecNebo";
import RecTabla from "./RecTabla";

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
        if(this.props.slide === "sal"){
            this.setState({ rec: RecSal })
        }
        if(this.props.slide === "pajp"){
            this.setState({ rec: RecPajp })
        }
        if(this.props.slide === "lutka"){
            this.setState({ rec: RecLutka })
        }
        if(this.props.slide === "palma"){
            this.setState({ rec: RecPalma })
        }
        if(this.props.slide === "poklon"){
            this.setState({ rec: RecPoklon })
        }
        if(this.props.slide === "ljut"){
            this.setState({ rec: RecLjut })
        }
        if(this.props.slide === "polje"){
            this.setState({ rec: RecPolje })
        }
        if(this.props.slide === "kosulja"){
            this.setState({ rec: RecKosulja })
        }
        if(this.props.slide === "ljiljan"){
            this.setState({ rec: RecLjiljan })
        }
        if(this.props.slide === "bik"){
            this.setState({ rec: RecBik })
        }
        if(this.props.slide === "bure"){
            this.setState({ rec: RecBure })
        }
        if(this.props.slide === "balon"){
            this.setState({ rec: RecBalon })
        }
        if(this.props.slide === "jabuka"){
            this.setState({ rec: RecJabuka })
        }
        if(this.props.slide === "nebo"){
            this.setState({ rec: RecNebo })
        }
        if(this.props.slide === "tabla"){
            this.setState({ rec: RecTabla })
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