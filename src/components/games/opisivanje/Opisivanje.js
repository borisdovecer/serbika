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
                <div className="row justify-content-center "  style={{marginLeft: 0, marginRight: 0}} >
                    {opis.map((p,i) =>
                            <div key={i} className={"col-lg-7 col-md-5 col-sm-5"} style={{width: "100%" }}>
                                <h1 style={{ width: "50%", display:"inline-block" }}>{p.text}</h1>
                                <div style={{ width: "250px", height:"250px", border:"2px solid#ccc333", borderRadius: "25px", display:"inline-block", margin:"20px" }}>
                                    <img
                                        style={{width:"100%"}}
                                        onClick={this.handleClick}
                                        alt={'card'}
                                        key={i}
                                        src={"./slides/" + p.image }
                                    />
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
                                alt={'card'}
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