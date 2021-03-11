import React from 'react'

import KarteA from "./KarteA"
import KarteM from "./KarteM"

import KarteT from "./KarteT"
import KarteO from "./KarteO"

import KarteI from "./KarteI"
import KarteS from "./KarteS"

import KarteU from "./KarteU"
import KarteN from "./KarteN"

import KarteJ from "./KarteJ"
import KarteE from "./KarteE"

import KarteR from "./KarteR"
import KarteSH from "./KarteSH"
import KarteP from "./KarteP"
import KarteK from "./KarteK"
import KarteL from "./KarteL"
import KarteLJ from "./KarteLJ"

class Karte extends React.Component{
    state = {
        karte: [],
        audio: "",
        back: "",
        a: "",
        m: "",
        t: "",
        o: "",
        i: "",
        s: "",
        u: "",
        n: "",
        e: "",
        j: "",
        r: "",
        sh: "",
        p: "",
        k: "",
        l: "",
        lj: "",
        arr: [],
        err: false,
        sc: false,
        complete: true,
        completearr: []
    }

    componentDidMount() {
        let arrA = KarteA
        let arrM = KarteM
        let arrT = KarteT
        let arrO = KarteO
        let arrI = KarteI
        let arrS = KarteS
        let arrU = KarteU
        let arrN = KarteN
        let arrJ = KarteJ
        let arrE = KarteE
        let arrR = KarteR
        let arrSH= KarteSH
        let arrP = KarteP
        let arrK = KarteK
        let arrL = KarteL
        let arrLJ = KarteLJ

        // DZ 01
        if(this.props.slide === "a"){
            this.setState({
                karte: arrA.sort(() => Math.random() - 0.5),
                audio: "06 sada cemo da igramo igru memorije pronadji dva ista slova.mp3",
                back:"karta-back-ljubicasta.png",
                a: "karta-front-a.png",
                m: "karta-front-malo-a.png"
            })
        }
        if(this.props.slide === "m"){
            this.setState({
                karte: arrM.sort(() => Math.random() - 0.5),
                audio: "17 opet igramo igru memorije pronadji dva ista slova.mp3",
                back:"karta-back-oranz.png",
                a: "karta-front-a.png",
                m: "karta-front-m.png",
            })
        }
        // DZ 02
        if(this.props.slide === "t"){
            this.setState({
                karte: arrT.sort(() => Math.random() - 0.5),
                audio: "06 sada cemo da igramo igru memorije pronadji dva ista slova.mp3",
                back:"karta-back-pink.png",
                a: "karta-front-a.png",
                m: "karta-front-m.png",
                t: "karta-front-t.png"
            })
        }
        if(this.props.slide === "o"){
            this.setState({
                karte: arrO.sort(() => Math.random() - 0.5),
                audio: "17 opet igramo igru memorije pronadji dva ista slova.mp3",
                back:"karta-back-ljubicasta.png",
                a: "karta-front-i.png",
                m: "karta-front-s.png",
                t: "karta-front-t.png",
                o: "karta-front-o.png"
            })
        }
        // DZ 03
        if(this.props.slide === "i"){
            this.setState({
                karte: arrI.sort(() => Math.random() - 0.5),
                audio: "06 sada cemo da igramo igru memorije pronadji dva ista slova.mp3",
                back:"karta-back-zuta.png",
                a: "karta-front-a.png",
                m: "karta-front-m.png",
                t: "karta-front-t.png",
                i: "karta-front-i.png"
            })
        }
        if(this.props.slide === "s"){
            this.setState({
                karte: arrS.sort(() => Math.random() - 0.5),
                audio: "17 opet igramo igru memorije pronadji dva ista slova.mp3",
                back:"karta-back-ljubicasta.png",
                i: "karta-front-i.png",
                s: "karta-front-s.png",
                o: "karta-front-t.png",
                t: "karta-front-o.png"
            })
        }
        // DZ 04
        if(this.props.slide === "u"){
            this.setState({
                karte: arrU.sort(() => Math.random() - 0.5),
                audio: "06 sada cemo da igramo igru memorije pronadji dva ista slova.mp3",
                back:"karta-back-oranz.png",
                u: "karta-front-u.png",
                m: "karta-front-m.png",
                s: "karta-front-s.png",
                t: "karta-front-t.png",
                i: "karta-front-i.png"
            })
        }
        if(this.props.slide === "n"){
            this.setState({
                karte: arrN.sort(() => Math.random() - 0.5),
                audio: "17 opet igramo igru memorije pronadji dva ista slova.mp3",
                back:"karta-back-pink.png",
                u: "karta-front-u.png",
                n: "karta-front-n.png",
                s: "karta-front-s.png",
                a: "karta-front-a.png",
                m: "karta-front-m.png"
            })
        }
        // DZ 05
        if(this.props.slide === "j"){
            this.setState({
                karte: arrJ.sort(() => Math.random() - 0.5),
                audio: "06 sada cemo da igramo igru memorije pronadji dva ista slova.mp3",
                back:"karta-back-zuta.png",
                j: "karta-front-j.png",
                t: "karta-front-t.png",
                o: "karta-front-o.png",
                m: "karta-front-m.png",
                a: "karta-front-a.png",
                u: "karta-front-u.png"
            })
        }
        if(this.props.slide === "e"){
            this.setState({
                karte: arrE.sort(() => Math.random() - 0.5),
                audio: "17 opet igramo igru memorije pronadji dva ista slova.mp3",
                back:"karta-back-ljubicasta.png",
                j: "karta-front-j.png",
                e: "karta-front-e.png",
                u: "karta-front-u.png",
                n: "karta-front-n.png",
                i: "karta-front-i.png",
                s: "karta-front-s.png"
            })
        }
        // DZ 06
        if(this.props.slide === "r"){
            this.setState({
                karte: arrR.sort(() => Math.random() - 0.5),
                audio: "06 sada cemo da igramo igru memorije pronadji dva ista slova.mp3",
                back:"karta-back-pink.png",
                r: "karta-front-r.png",
                j: "karta-front-j.png",
                i: "karta-front-i.png",
                s: "karta-front-s.png",
                u: "karta-front-u.png",
                t: "karta-front-t.png"
            })
        }
        // DZ 07
        if(this.props.slide === "sh"){
            this.setState({
                karte: arrSH.sort(() => Math.random() - 0.5),
                audio: "06 sada cemo da igramo igru memorije pronadji dva ista slova.mp3",
                back:"karta-back-pink.png",
                r: "karta-front-r.png",
                sh: "karta-front-sh.png",
                m: "karta-front-m.png",
                s: "karta-front-s.png",
                u: "karta-front-u.png",
                t: "karta-front-t.png"
            })
        }
        // DZ 08
        if(this.props.slide === "p"){
            this.setState({
                karte: arrP.sort(() => Math.random() - 0.5),
                audio: "06 sada cemo da igramo igru memorije pronadji dva ista slova.mp3",
                back:"karta-back-pink.png",
                p: "karta-front-p.png",
                sh: "karta-front-sh.png",
                r: "karta-front-r.png",
                i: "karta-front-i.png",
                j: "karta-front-j.png",
                n: "karta-front-n.png"
            })
        }
        // DZ 09
        if(this.props.slide === "k"){
            this.setState({
                karte: arrK.sort(() => Math.random() - 0.5),
                audio: "06 sada cemo da igramo igru memorije pronadji dva ista slova.mp3",
                back:"karta-back-pink.png",
                p: "karta-front-p.png",
                sh: "karta-front-sh.png",
                k: "karta-front-k.png",
                i: "karta-front-i.png",
                r: "karta-front-r.png",
                n: "karta-front-n.png"
            })
        }
        // DZ 10
        if(this.props.slide === "l"){
            this.setState({
                karte: arrL.sort(() => Math.random() - 0.5),
                audio: "06 sada cemo da igramo igru memorije pronadji dva ista slova.mp3",
                back:"karta-back-pink.png",
                p: "karta-front-p.png",
                sh: "karta-front-sh.png",
                k: "karta-front-k.png",
                l: "karta-front-l.png",
                r: "karta-front-r.png",
                e: "karta-front-e.png"
            })
        }
        // DZ 11
        if(this.props.slide === "lj"){
            this.setState({
                karte: arrLJ.sort(() => Math.random() - 0.5),
                audio: "06 sada cemo da igramo igru memorije pronadji dva ista slova.mp3",
                back:"karta-back-pink.png",
                p: "karta-front-p.png",
                sh: "karta-front-sh.png",
                k: "karta-front-k.png",
                l: "karta-front-l.png",
                r: "karta-front-r.png",
                lj: "karta-front-lj.png"
            })
        }
    }

    flip = (e) => {
        let id = e.target.attributes.id.value
        let card = this.state.karte
        let arr = this.state.arr
        if(!card[id].ck && arr.length<2 ){
            card[id].animation = "flip-vertical-right"
            card[id].ck = true
            arr.push(card[id])
            this.setState( {karte: card, arr: arr} )
            if(card[id].name === "a"){
                card[id].image = this.state.a
            }
            if(card[id].name === "m"){
                card[id].image = this.state.m
            }
            if(card[id].name === "t"){
                card[id].image = this.state.t
            }
            if(card[id].name === "o"){
                card[id].image = this.state.o
            }
            if(card[id].name === "i"){
                card[id].image = this.state.i
            }
            if(card[id].name === "s"){
                card[id].image = this.state.s
            }
            if(card[id].name === "u"){
                card[id].image = this.state.u
            }
            if(card[id].name === "n"){
                card[id].image = this.state.n
            }
            if(card[id].name === "j"){
                card[id].image = this.state.j
            }
            if(card[id].name === "e"){
                card[id].image = this.state.e
            }
            if(card[id].name === "r"){
                card[id].image = this.state.r
            }
            if(card[id].name === "sh"){
                card[id].image = this.state.sh
            }
            if(card[id].name === "p"){
                card[id].image = this.state.p
            }
            if(card[id].name === "k"){
                card[id].image = this.state.k
            }
            if(card[id].name === "l"){
                card[id].image = this.state.l
            }
            if(card[id].name === "lj"){
                card[id].image = this.state.lj
            }
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
                                     src={'./slides/' + card.image}
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
