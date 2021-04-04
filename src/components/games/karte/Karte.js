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
        this.setState({
            karte: cards.sort(() => Math.random() - 0.5),
            back: cards[0].image,
        })
    }

    flip = (e) => {
        let id = e.target.attributes.id.value
        let card = this.state.karte
        let arr = this.state.arr
        if(!card[id].ck && arr.length<2 ){
            card[id].animation = "flip-vertical-right"
            card[id].ck = true
            card[id].image = card[id].front
            arr.push(card[id])
            this.setState( {karte: card, arr: arr} )
            this.compare()
        }
    }

    compare = () => {
        let card = this.state.karte
        let arr = this.state.arr
        let bakimg = this.state.back

        if(arr.length === 2){
            if(arr[0].name === arr[1].name){

                card.forEach( function (crd){
                    if(crd.name === arr[0].name){
                        crd.animation = "pulsate-bck"
                        crd.found = true
                    }
                })
                this.setState({arr:[]})
                this.setState({ sc: true })
                setTimeout( () => {
                    this.setState({sc: false})
                }, 1500 )
            }else{
                this.setState({ err: true })
                setTimeout( () => {
                card.forEach( function (crd){
                    if(!crd.found){
                        crd.image = bakimg
                        crd.ck = false
                        crd.animation = ""
                    }
                })
                this.setState({arr:[], err: false})
                }, 2500 )
            }
        }
        this.complete()
    }

    complete = () => {
        let arr = []
        this.state.karte.forEach( crd => {
            if(crd.found){
                arr.push(true)
            }
        })

        if(arr.length === this.state.karte.length){
            this.setState({ complete: true })
        }
    }

    render() {
        return(
            <div className={"main color-change-2x"} style={{height:"100vh"}}>
                <audio
                    autoPlay
                    src={"./audio/" + this.state.audio}
                />
                {this.state.err ? <audio
                    autoPlay
                    src={"./audio/HAJDE PROBAJ JOS JEDNOM.mp3"}
                /> : null}
                {this.state.sc && !this.state.complete ? <audio
                    autoPlay
                    src={"./audio/BRAVO.mp3"}
                /> : null}
                {this.state.complete ? <audio
                    autoPlay
                    src={"./audio/FENOMENALNO.mp3"}
                /> : null}
                {this.state.complete ? <img src={"./slides/button.png"} alt="btn" className="main-button" style={{marginTop: "20%", right:"0%"}} onClick={this.props.nextSlide}/> : null}
                <div className="row text-center justify-content-center"  style={{marginLeft: 0, marginRight: 0}} >
                        {this.state.karte.map( (card, i) =>
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
