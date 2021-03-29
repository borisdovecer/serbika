import React from 'react'

import SlovaDz06 from "./SlovaDz06"
import SlovaDz07 from "./SlovaDz07"
import SlovaDz08 from "./SlovaDz08"
import SlovaDz09 from "./SlovaDz09"
import SlovaDz10 from "./SlovaDz10"
import SlovaDz11 from "./SlovaDz11"
import SlovaDz12 from "./SlovaDz12"
import SlovaDz13 from "./SlovaDz13";
import SlovaDz14 from "./SlovaDz14";
import SlovaDz15 from "./SlovaDz15";
import SlovaDz16 from "./SlovaDz16";
import SlovaDz17 from "./SlovaDz17";
import SlovaDz19 from "./SlovaDz19";
import SlovaDz20 from "./SlovaDz20";
import SlovaDz18 from "./SlovaDz18";

class Pravilna extends React.Component {
    state = {
        slova: [],
        arr: [],
        complete: true
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
        if(this.props.slide === 'dz13'){
            this.setState({slova: SlovaDz13})
        }
        if(this.props.slide === 'dz14'){
            this.setState({slova: SlovaDz14})
        }
        if(this.props.slide === 'dz15'){
            this.setState({slova: SlovaDz15})
        }
        if(this.props.slide === 'dz16'){
            this.setState({slova: SlovaDz16})
        }
        if(this.props.slide === 'dz17'){
            this.setState({slova: SlovaDz17})
        }
        if(this.props.slide === 'dz18'){
            this.setState({slova: SlovaDz18})
        }
        if(this.props.slide === 'dz19'){
            this.setState({slova: SlovaDz19})
        }
        if(this.props.slide === 'dz20'){
            this.setState({slova: SlovaDz20})
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