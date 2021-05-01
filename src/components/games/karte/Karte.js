import React from 'react'

class Karte extends React.Component{
    state = {
        karte: [],
        audio: "06 sada cemo da igramo igru memorije pronadji dva ista slova.mp3",
        back: "",
        arr: [],
        err: false,
        sc: false,
        complete: true,
        completearr: []
    }

    componentDidMount() {
        const cards = this.props.cards
        this.setState({ karte: cards.sort(() => Math.random() - 0.5), back: cards[0].image })
    }

    flip = (e) => {
        let id = e.target.attributes.id.value
        let {karte, arr } = this.state
        if(!karte[id].ck && arr.length<2 ){
            karte[id].animation = "flip-vertical-right"
            karte[id].ck = true
            karte[id].image = karte[id].front
            arr.push(karte[id])
            this.setState( {karte, arr} )
        }
        // eslint-disable-next-line no-unused-expressions
        arr.length === 2 ? this.compare() : null
    }

    compare = () => {
        let {karte, arr, back, completearr} = this.state
        if(arr[0].name === arr[1].name){
            karte.forEach( function (crd){
                if(crd.name === arr[0].name){
                    crd.animation = "pulsate-bck"
                    crd.found = true
                    completearr.push(crd)
                }
            })
            this.setState({arr:[],  sc: true, completearr})
            setTimeout( () => {
                this.setState({sc: false})
            }, 1500 )
        }else{
            this.setState({ err: true })
            setTimeout( () => {
                karte.forEach( function (crd){
                if(!crd.found){
                    crd.image = back
                    crd.ck = false
                    crd.animation = ""
                }
            })
            this.setState({arr:[], err: false})
            }, 2000 )
        }
        // eslint-disable-next-line no-unused-expressions
        completearr.length === karte.length ? this.setState({ complete: true }) : null
    }

    render() {
        const {karte, complete, err, sc, audio} = this.state
        return(
            <div className={"main color-change-2x"} style={{height:"100vh"}}>
                <audio
                    autoPlay
                    src={"./audio/" + audio}
                />
                {err ? <audio
                    autoPlay
                    src={"./audio/HAJDE PROBAJ JOS JEDNOM.mp3"}
                /> : null}
                {sc && !complete ? <audio
                    autoPlay
                    src={"./audio/BRAVO.mp3"}
                /> : null}
                {complete ? <audio
                    autoPlay
                    src={"./audio/FENOMENALNO.mp3"}
                /> : null}
                {complete ? <img src={"./slides/button.png"} alt="btn" className="main-button" style={{marginTop: "20%", right:"0%"}} onClick={this.props.nextSlide}/> : null}
                <div className="row text-center justify-content-center"  style={{marginLeft: 0, marginRight: 0}} >
                        {karte.map( (card, i) =>
                            <div key={i} className={"col-lg-3 col-md-3 col-sm-3"} style={{marginTop: "3%"}}>
                                <img
                                     id={i}
                                     name={card.name}
                                     src={card.found ? './slides/' + card.front : './slides/' + card.image}
                                     alt={'card'}
                                     className={card.animation}
                                     style={{width:"35%"}}
                                     onClick={this.flip}
                                />
                            </div>
                        )}
                </div>
            </div>
            )
    }
}

export default Karte