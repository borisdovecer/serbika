import React from "react"

class Dzak extends React.Component {
    state = {
        complete: true

    }

    render() {
        return(
            <div className={"main"}>
                {this.state.complete ? <img src={"./slides/button.png"} alt="btn" className="main-button" onClick={this.props.nextSlide}/> : null}
                <div className="row text-center justify-content-center"  style={{marginLeft: 0, marginRight: 0}} >
                    <div>
                        <img src={"./slides/slika-nar.jpg"} alt={"dzak"}/>
                        <img src={"./slides/slika-jaje.jpg"} alt={"dzak"}/>
                        <img src={"./slides/slika-brokoli.jpg"} alt={"dzak"}/>
                        <img src={"./slides/slika-sargarepa.jpg"} alt={"dzak"}/>
                        <img src={"./slides/slika-hleb.jpg"} alt={"dzak"}/>
                    </div>
                    <div>
                        <img src={"./slides/dzak-r.jpg"} alt={"dzak"}/>
                        <img src={"./slides/dzak-x.jpg"} alt={"dzak"}/>
                    </div>

                </div>
            </div>
        )
    }


}

export default Dzak