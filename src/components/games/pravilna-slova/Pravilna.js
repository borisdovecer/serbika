import React from 'react'

import SlovaDz06 from "./SlovaDz06";

class Pravilna extends React.Component {
    state = {
        slova: SlovaDz06,
        complete: false
    }

    handleClick = (e) => {
        let fake = e.target.attributes.class.value
        let {slova} = this.state

        if(fake === "fake"){
            console.log("ovaj je fake!")
            this.setState({complete: true})
        }
    }

    render() {
        const {slova} = this.state
        return(
            <div className={"main"}>
                {this.state.complete ? <img src={"./slides/button.png"} alt="btn" className="main-button" onClick={this.props.nextSlide}/> : null}
                <div className="row text-center justify-content-center"  style={{marginLeft: 0, marginRight: 0}} >
                    {slova.map((p,i) =>
                        <div style={{width: "15%", height:"300px" }}>
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
        )
    }
}

export default Pravilna