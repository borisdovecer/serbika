import React from 'react'

class SlikaIRec extends React.Component {
    state = {
        rec: {},
        complete: true,
        loading: true
    }

    componentDidMount() {
        this.setState({rec: this.props.rec, loading:false })
    }

    handleClick = (e) => {
        let value = e.target.attributes.name.value
        let {rec} = this.state
        if(value === rec.correct){
            for(let i=0; i<rec.slova.length; i++){
                if(rec.slova[i] === ""){
                    rec.slova[i] = rec.correct
                }
            }
            this.setState({ rec: rec, complete: true})
        }
    }

    render() {
        const { rec, loading, complete } = this.state
        return(
            loading ? null :
                <div className={'main'}>
                {complete ? <img src={"./slides/button.png"} alt="btn" className="main-button" onClick={this.props.nextSlide}/> : null}
                <div className="row text-center justify-content-center"  style={{marginLeft: 0, marginRight: 0}} >
                    <img src={"./slides/" + rec.image }  alt={'card'} style={{height:"35vh"}}/>
                    {rec.ponudjena.map((p,i) =>
                        <div key={i} style={{width: "10vw", height:"10vw" }}>
                            <img
                                style={{width:"100%"}}
                                onClick={this.handleClick}
                                alt={'slika'}
                                name={p}
                                src={"./slides/" + p }
                            />
                        </div>
                    )}
                </div>
                <div className="row text-center justify-content-center"  style={{marginLeft: 0, marginRight: 0}} >
                    {rec.slova.map((s,i) =>
                        <div style={{width: "10vw", height:"10vw", backgroundColor: "#8fafc3", margin: "20px", borderRadius: "25px"}}>
                            {s !== "" ? <img
                                style={{width:"100%"}}
                                onClick={this.handleClick}
                                key={i}
                                alt={'card'}
                                name={s}
                                src={"./slides/" + s }
                            /> : null }
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default SlikaIRec