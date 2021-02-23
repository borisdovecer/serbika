import React from 'react'

import RecMore from './RecMore'

class SlikaIRec extends React.Component {
    state = {
        rec: RecMore,
        complete: false
    }

    componentDidMount() {
        
    }

    handleClick = (e) => {
        let value = e.target.attributes.name.value
        console.log(value);
        if(value === this.state.rec.correct){
            this.setState({complete: true})
        }

    }

    render() {
        const { rec } = this.state
        return(
            <div className={'main'}>
                {this.state.complete ? <img src={"./slides/button.png"} alt="btn" className="main-button" onClick={this.props.nextSlide}/> : null}

                <div className="row text-center justify-content-center"  style={{marginLeft: 0, marginRight: 0}} >
                    <img src={"./slides/" + rec.image } />
                    {rec.ponudjena.map((p,i) =>
                        <div style={{width: "200px", height:"200px" }}>
                            <img
                                style={{width:"100%"}}
                                onClick={this.handleClick}
                                key={i}
                                name={p}
                                src={"./slides/" + p }
                            />
                        </div>


                    )}

                </div>
                <div className="row text-center justify-content-center"  style={{marginLeft: 0, marginRight: 0}} >
                    {rec.slova.map((s,i) =>
                        <div style={{width: "200px", height:"200px" }}>
                            <img
                                style={{width:"100%"}}
                                onClick={this.handleClick}
                                key={i}
                                name={s}
                                src={"./slides/" + s }
                            />
                        </div>
                    )}
                </div>

            </div>
        )
    }

}

export default SlikaIRec