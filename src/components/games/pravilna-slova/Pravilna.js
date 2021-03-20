import React from 'react'

import SlovaDz06 from "./SlovaDz06";

class Pravilna extends React.Component {
    state = {
        slova: SlovaDz06,
        arr: [],
        complete: false
    }

    handleClick = (e) => {
        let fake = e.target.attributes.class.value
        let name = e.target.attributes.name.value
        let {arr} = this.state

        if(fake !== "fake"){
            arr.push(name)
            this.setState({arr})
            this.complete()
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
                                onClick={this.handleClick}
                                key={i}
                                className={p.fake ? "fake" : ""}
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