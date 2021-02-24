import React from 'react'

import OpisDz06 from "./OpisDz06"

class Opisivanje extends React.Component {
    state = {
        opis: OpisDz06,
        complete: true
    }

    componentDidMount() {

    }

    handleClick = (e) => {

    }

    render() {
        const {opis} = this.state
        return(
            <div className={'main'}>
                {this.state.complete ? <img src={"./slides/button.png"} alt="btn" className="main-button" onClick={this.props.nextSlide}/> : null}
                <div className="row text-center justify-content-center"  style={{marginLeft: 0, marginRight: 0}} >
                    {opis.map((p,i) =>
                        <div key={i} style={{width: "100%" }}>
                            <h1>{p.text}</h1>
                            <div style={{ width: "200px", height:"200px", border:"2px solid#ccc333", borderRadius: "25px"  }}>

                            </div>
                        </div>
                    )}
                </div>
                <div className="row text-center justify-content-center"  style={{marginLeft: 0, marginRight: 0}} >
                    {opis.map((p,i) =>
                        <div style={{width: "20%", height:"300px" }}>
                            <img
                                style={{width:"100%"}}
                                onClick={this.handleClick}
                                key={i}
                                src={"./slides/" + p.image }
                            />
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Opisivanje