import React from 'react'
import PreloadImage from "react-preload-image";


import bg from './bg-spirala.jpg'

class Spirala extends React.Component {
    state = {
        slova: [],
        recenica: [],
        image: bg,
        order: 1,
        complete : true
    }

    componentDidMount() {
        const {slova, recenica} = this.props
        this.setState({slova, recenica})


    }

    handleClick = (e) => {
        let order = e.target.attributes.order.value
        let {recenica} = this.state
        recenica[order - 1].found = true
        this.setState(prevState => {return {order: prevState.order +1, recenica: recenica}})
        this.complete()
    }

    complete = () => {
        let {recenica, order} = this.state
        if(recenica.length === order){
            this.setState({complete: true})
        }
    }


    render() {
        let {order} = this.state
        return(
            <div className={'main'} style={{textAlign:"center"}}>
                {this.state.complete ? <img src={"./slides/button.png"} alt="btn" className="main-button" style={{marginTop:"17.7%", right:"26%"}} onClick={this.props.nextSlide}/> : null}

                {this.state.recenica.map( (slovo, i) =>
                    <div key={i}
                         style={{
                             width:"4.5vw",
                             height:"4.5vw",
                             position:"absolute",
                             border: "5px solid",
                             borderColor: slovo.color,
                             marginTop:slovo.top, left:slovo.left,
                             zIndex: "2"
                         }}>
                        {slovo.found ?  <img
                            src={"./slides/" + slovo.image}
                            alt={"A"}
                            name={slovo.name}
                            style={{width:"100%", position:"relative"}}
                        /> : null}

                    </div>

                    )}

                <PreloadImage
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '50vw',
                        backgroundColor: '#fff',

                    }}
                    innerStyle={{
                        backgroundSize: "contain",
                        backgroundPosition: 'right',
                        backgroundRepeat: 'no-repeat'
                    }}
                    src={this.state.image}
                />
                {this.state.slova.map( (slovo, i) =>
                    <img key={i}
                         src={"./slides/" + slovo.image}
                         alt={"A"}
                         order={slovo.order ? slovo.order : 0}
                         name={slovo.name}
                         style={{width:"5%", position:"absolute", marginTop:slovo.top, left:slovo.left}}
                         onClick={slovo.order === order ? this.handleClick : null}
                    /> )}
            </div>
        )
    }
}

export default Spirala