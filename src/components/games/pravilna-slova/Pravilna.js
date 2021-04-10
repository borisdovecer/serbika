import React from 'react'


class Pravilna extends React.Component {
    state = {
        slova: [],
        arr: [],
        complete: true
    }

    componentDidMount() {
        this.setState({ slova: this.props.slova })

    }

    handleClick = (e) => {
        let fake = e.target.attributes.fake?.value
        let id = e.target.attributes.id.value
        let {slova, arr} = this.state

        if(fake !== "fake"){
            arr.push(id)
            slova.forEach(s =>{
                if(s.id === parseInt(id)){
                    s.found = true
                }
                this.setState({slova})
            })
            this.setState({arr})
            this.complete()
            console.log(slova)
        }
    }

    complete = () => {
        const {arr} = this.state
        if(arr.length >= 5) {
            this.setState({complete: true})
        }
    }

    render() {
        const {slova, complete} = this.state
        return(
            <div className={"main"}>
                {complete ? <img src={"./slides/button.png"} alt="btn" className="main-button" onClick={this.props.nextSlide}/> : null}
                <div className={'container'}>
                    <div className="row text-center justify-content-center"  style={{marginLeft: 0, marginRight: 0}} >
                    {slova.map((p,i) =>
                        <div style={{width: "20%", height:"300px" }}>
                            <img
                                style={{width:"100%"}}
                                onClick={p.found ? null : this.handleClick}
                                key={i}
                                id={p.id}
                                fake={p.fake ? "fake" : "" }
                                className={p.found ? "jello-horizontal" : null + p.fake ? " fake" : ""  }
                                name={p.name}
                                src={"./slides/" + p.image }
                                alt={"ee"}
                            />
                        </div>
                    )}

                </div>
                </div>
            </div>
        )
    }
}

export default Pravilna