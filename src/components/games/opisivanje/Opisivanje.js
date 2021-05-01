import React from 'react'

class Opisivanje extends React.Component {
    state = {
        opis: [],
        selected: "",
        guessed: "",
        complete: true,
        loading: true
    }

    componentDidMount() {
        this.setState({ opis: this.props.opis, loading: false})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.compare()
        this.complete()
    }

    handleClick = (e) => {
        let id = e.target.attributes.id.value
        let row = e.target.attributes.row.value
        if(row === "lower"){
            this.setState({ selected: id })
        }else{
            this.setState({ guessed: id })
        }
    }

    compare = () => {
        let { opis, selected, guessed } = this.state
        if(selected === guessed && guessed !== ""){
            setTimeout( () => {
                opis.forEach( function (p){
                    if(p.id === parseInt(selected)){
                        p.found = true
                    }
                })
                this.setState({opis:opis, selected: "", guessed: "" })
            }, 200 )
        }else if( guessed.length >0 ){
            setTimeout( () => {
                console.log("neee")
                this.setState({ selected: "", guessed: "" })
            }, 200 )
        }
    }

    complete = () => {
        let {opis} = this.state
        let count = 0
        opis.forEach(p => {
            if(p.found){
                count++
            }
        })
        if(count === 2){
            setTimeout( () => {
                console.log("pobeda")
                this.setState({ complete: true })
            }, 500 )
        }
    }

    render() {
        const {opis, complete, loading} = this.state
        return(
            loading ? null :
            <div className={'main'}>
                {complete ? <img src={"./slides/button.png"} alt="btn" className="main-button" onClick={this.props.nextSlide}/> : null}
                <div className="row justify-content-center "  style={{marginLeft: 0, marginRight: 0}} >
                    {opis.map((p,i) =>
                            <div key={i} className={"col-lg-4 col-md-5 col-sm-5"}>
                                <div >
                                    <h1 >{p.text}</h1>
                                </div>
                                <div onClick={this.handleClick}
                                     id={p.id}
                                     row="upper"
                                     style={{ width: "250px", height:"250px", border:"2px solid#ccc333", borderRadius: "25px", display:"inline-block", margin:"20px" }}
                                >
                                     {p.found ?
                                    <img
                                        style={{width:"80%", position:"relative", top:"5%", left:"10%"}}
                                        id={p.id}
                                        row="upper"
                                        alt={'card'}
                                        key={i}
                                        src={"./slides/" + p.image }
                                    /> : null }
                                </div>
                            </div>
                    )}
                </div>
                <div className="row text-center justify-content-center"  style={{marginLeft: 0, marginRight: 0}} >
                    {opis.map((p,i) =>
                        <div style={{width: "20%", height:"300px" }}>
                            {p.found ? null : <img
                                    style={{width:"100%"}}
                                    onClick={this.handleClick}
                                    id={p.id}
                                    row="lower"
                                    alt={'card'}
                                    key={i}
                                    src={"./slides/" + p.image }
                                /> }

                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Opisivanje