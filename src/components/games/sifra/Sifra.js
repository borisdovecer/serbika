import React from "react"

class Sifra extends React.Component {
    state = {
        arr1: ["a", "a", "a", "a"],
        arr2: ["s", "o", "a","d"],
        arr3: ["l", "b", "o", "g","d","s","a"],
        c: 0,
        hint: [],
        simbols: [],
        complete: true
    }

    componentDidMount() {
        let sifra = this.props.sifra
        this.setState({arr1: sifra.pocetna, arr2: sifra.tacna, arr3:sifra.ponudjena, hint:sifra.hint, simbols:sifra.simbols })
    }


    hadleClick = (e) => {
        let {arr1,arr2, arr3, c} = this.state
        let id = e.target.attributes.id.value
        let pos = e.target.attributes.pos.value

        if(pos === 'next'){
            c++
            if(c>arr3.length-1){
                c=0
            }
            arr1[id] = arr3[c]
            this.setState( { arr1, c } )
        }
        if(pos === 'prev'){
            c--
            if(c<0){
                c=arr3.length-1
            }
            arr1[id] = arr3[c]
            this.setState( { arr1, c } )
        }
        if(JSON.stringify(arr1) === JSON.stringify(arr2)){
            this.setState({complete: true})
        }
    }

    render() {
        const { simbols, complete, arr1, hint } = this.state
        return(
            <div className={"main"} >
                {complete ? <img src={"./slides/button.png"} alt="btn" className="main-button" onClick={this.props.nextSlide}/> : null}
                <img src={"./slides/devojcica-sifra.jpg"}  alt={'sifra'} width={"35%"} style={{position:"absolute", zIndex:-1, padding:"2%" }} />
                <div style={{position:"absolute", right:"40%", top:"10%"}}>
                    {simbols.map((s, i) =>
                        <div key={i} >
                            <img style={{width:"50%", display:"inline-block"}} src={"./slides/"+s.image } alt={"simbol"}/>
                            <h1 style={{display:"inline-block"}}> - {s.text}</h1>
                        </div>
                    )}
                </div>
                <div style={{paddingLeft:"8%", paddingTop:"32%"}}>
                    {hint.map((a, i) =>
                        <div key={i} style={{display:"inline-block", width:"50px"}}>
                            <img style={{width:"100%"}} src={"./slides/"+a } alt={"simbol"}/>
                        </div>
                    )}
                </div>
                <div style={{paddingLeft:"8%"}}>
                    {arr1.map((a, i) =>
                        <div key={i} style={{display:"inline-block", paddingRight:"20px", paddingLeft:"19px"}}>
                            <h3 onClick={this.hadleClick} id={i} pos={"next"} >+</h3>
                            <h3>{a}</h3>
                            <h3 onClick={this.hadleClick}  id={i} pos={"prev"}>-</h3>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Sifra
