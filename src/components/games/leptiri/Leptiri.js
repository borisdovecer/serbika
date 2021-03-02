import React from "react"
import Reci06 from "./Reci06"

class Leptiri extends React.Component {
    state = {
        reci: Reci06,
        complete: true
    }

    render() {
        return(
            <div className={"main"}>
                {this.state.complete ? <img src={"./slides/button.png"} alt="btn" className="main-button" onClick={this.props.nextSlide}/> : null}
                <div className="row text-center justify-content-center"  style={{marginLeft: 0, marginRight: 0}} >
                    <h2>Leptirii</h2>
                </div>
            </div>
        )
    }
}

export default Leptiri