import React from 'react'

import SlovaDz06 from "./SlovaDz06"
import SlovaDz07 from "./SlovaDz07"
import SlovaDz08 from "./SlovaDz08"
import SlovaDz09 from "./SlovaDz09"
import SlovaDz10 from "./SlovaDz10"
import SlovaDz11 from "./SlovaDz11"
import SlovaDz12 from "./SlovaDz12"

class Pravilna extends React.Component {
    state = {
        slova: [],
        arr: [],
        complete: false
    }

    componentDidMount() {
        if(this.props.slide === 'dz06'){
            this.setState({slova: SlovaDz06})
        }
        if(this.props.slide === 'dz07'){
            this.setState({slova: SlovaDz07})
        }
        if(this.props.slide === 'dz08'){
            this.setState({slova: SlovaDz08})
        }
        if(this.props.slide === 'dz09'){
            this.setState({slova: SlovaDz09})
        }
        if(this.props.slide === 'dz10'){
            this.setState({slova: SlovaDz10})
        }
        if(this.props.slide === 'dz11'){
            this.setState({slova: SlovaDz11})
        }
        if(this.props.slide === 'dz12'){
            this.setState({slova: SlovaDz12})
        }
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
        const {slova} = this.state
        return(
            <div className={"main"}>
                {this.state.complete ? <img src={"./slides/button.png"} alt="btn" className="main-button" onClick={this.props.nextSlide}/> : null}
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