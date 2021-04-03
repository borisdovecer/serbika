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
import RecHor from "./RecHor";
import RecOrah from "./RecOrah";
import RecHokej from "./RecHokej";
import RecHotdog from "./RecHotdog";
import RecHaljina from "./RecHaljina";
import RecFen from "./RecFen";
import RecLift from "./RecLift";
import RecKofer from "./RecKofer";
import RecParfem from "./RecParfem";
import RecFarma from "./RecFarma";
import RecFudbal from "./RecFudba";
import RecZir from "./RecZir";
import RecMreza from "./RecMreza";
import RecPlaza from "./RecPlaza";
import RecZmurke from "./RecZmurke";
import RecZaba from "./RecZaba";
import RecVuk from "./RecVuk";
import RecMravi from "./RecMravi";
import RecTrava from "./RecTrava";
import RecBreskva from "./RecBreskva";
import RecSveska from "./RecSveska";
import RecLav from "./ReciLav";
import RecZub from "./RecZub";
import RecZvono from "./RecZvono";
import RecZebra from "./RecZebra";
import RecVitez from "./RecVitez";
import RecBizon from "./RecBizon";
import RecKavez from "./RecKavez";
import RecDva from "./RecDva";
import RecDusek from "./RecDusek";
import RecLabud from "./RecLabud";
import RecDrvo from "./RecDrvo";
import RecDoktor from "./RecDoktor";
import RecZvezda from "./RecZvezda";
import RecTeg from "./RecTeg";
import RecGlobus from "./RecGlobus";
import RecGrad from "./RecGrad";
import RecTegla from "./RecTegla";
import RecLego from "./RecLego";
import RecGnezdo from "./RecGnezdo";
import RecMac from "./RecMac";
import RecCaj from "./RecCaj";
import RecDecak from "./RecDecak";
import RecCarapa from "./RecCarapa";
import RecZvecka from "./RecZvecka";
import RecCizme from "./RecCizme";

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
        if(this.props.slide === "hor"){
            this.setState({ rec: RecHor })
        }
        if(this.props.slide === "orah"){
            this.setState({ rec: RecOrah })
        }
        if(this.props.slide === "hokej"){
            this.setState({ rec: RecHokej })
        }
        if(this.props.slide === "hotdog"){
            this.setState({ rec: RecHotdog })
        }
        if(this.props.slide === "haljina"){
            this.setState({ rec: RecHaljina })
        }
        if(this.props.slide === "fen"){
            this.setState({ rec: RecFen })
        }
        if(this.props.slide === "lift"){
            this.setState({ rec: RecLift })
        }
        if(this.props.slide === "kofer"){
            this.setState({ rec: RecKofer })
        }
        if(this.props.slide === "parfem"){
            this.setState({ rec: RecParfem })
        }
        if(this.props.slide === "farma"){
            this.setState({ rec: RecFarma })
        }
        if(this.props.slide === "fudbal"){
            this.setState({ rec: RecFudbal })
        }
        if(this.props.slide === "zir"){
            this.setState({ rec: RecZir })
        }
        if(this.props.slide === "zaba"){
            this.setState({ rec: RecZaba })
        }
        if(this.props.slide === "mreza"){
            this.setState({ rec: RecMreza })
        }
        if(this.props.slide === "plaza"){
            this.setState({ rec: RecPlaza })
        }
        if(this.props.slide === "zmurke"){
            this.setState({ rec: RecZmurke })
        }
        if(this.props.slide === "vuk"){
            this.setState({ rec: RecVuk })
        }
        if(this.props.slide === "mravi"){
            this.setState({ rec: RecMravi })
        }
        if(this.props.slide === "trava"){
            this.setState({ rec: RecTrava })
        }
        if(this.props.slide === "breskva"){
            this.setState({ rec: RecBreskva })
        }
        if(this.props.slide === "lav"){
            this.setState({ rec: RecLav })
        }
        if(this.props.slide === "sveska"){
            this.setState({ rec: RecSveska })
        }
        if(this.props.slide === "zub"){
            this.setState({ rec: RecZub })
        }
        if(this.props.slide === "zvono"){
            this.setState({ rec: RecZvono })
        }
        if(this.props.slide === "zebra"){
            this.setState({ rec: RecZebra })
        }
        if(this.props.slide === "vitez"){
            this.setState({ rec: RecVitez })
        }
        if(this.props.slide === "bizon"){
            this.setState({ rec: RecBizon })
        }
        if(this.props.slide === "kavez"){
            this.setState({ rec: RecKavez })
        }
        if(this.props.slide === "dva"){
            this.setState({ rec: RecDva })
        }
        if(this.props.slide === "dusek"){
            this.setState({ rec: RecDusek })
        }
        if(this.props.slide === "labud"){
            this.setState({ rec: RecLabud })
        }
        if(this.props.slide === "drvo"){
            this.setState({ rec: RecDrvo })
        }
        if(this.props.slide === "doktor"){
            this.setState({ rec: RecDoktor })
        }
        if(this.props.slide === "zvezda"){
            this.setState({ rec: RecZvezda })
        }
        if(this.props.slide === "teg"){
            this.setState({ rec: RecTeg })
        }
        if(this.props.slide === "grad"){
            this.setState({ rec: RecGrad })
        }
        if(this.props.slide === "globus"){
            this.setState({ rec: RecGlobus })
        }
        if(this.props.slide === "lego"){
            this.setState({ rec: RecLego })
        }
        if(this.props.slide === "gnezdo"){
            this.setState({ rec: RecGnezdo })
        }
        if(this.props.slide === "tegla"){
            this.setState({ rec: RecTegla })
        }
        if(this.props.slide === "mac"){
            this.setState({ rec: RecMac })
        }
        if(this.props.slide === "caj"){
            this.setState({ rec: RecCaj })
        }
        if(this.props.slide === "decak"){
            this.setState({ rec: RecDecak })
        }
        if(this.props.slide === "carapa"){
            this.setState({ rec: RecCarapa })
        }
        if(this.props.slide === "cizme"){
            this.setState({ rec: RecCizme })
        }
        if(this.props.slide === "zvecka"){
            this.setState({ rec: RecZvecka })
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
                                alt={'slika'}
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