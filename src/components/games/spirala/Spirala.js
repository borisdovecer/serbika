import React from 'react'
import PreloadImage from "react-preload-image";
import bg from './bg-spirala.jpg'

class Spirala extends React.Component {
    state = {
        slova: [],
        recenica: [],
        image: bg,
        order: 1,
        complete : true,
        loading: true
    }

    componentDidMount() {
        const {slova, recenica} = this.props
        this.setState({slova, recenica})
        setTimeout( () => {
            this.setState({ loading:false })
        }, 300)
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
        let {order, slova, recenica, complete, image, loading} = this.state
        return(
            <div className={'main'} style={{textAlign:"center"}}>
                {complete ? <img src={"./slides/button.png"} alt="btn" className="main-button" style={{marginTop:"17.7%", right:"26%"}} onClick={this.props.nextSlide}/> : null}
                {recenica.map( (slovo, i) =>
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
                    src={image}
                />
                {loading ? null :
                <span>
                {slova.map( (slovo, i) =>
                    <p key={i}
                        order={slovo.order ? slovo.order : 0}
                        name={slovo.name}
                        style={{ color:slovo.color, fontSize: '3.8vw', position:"absolute", marginTop:slovo.top, left:slovo.left }}
                        onClick={slovo.order === order ? this.handleClick : null}
                    >
                        { slovo.name }
                    </p>
                    // <img key={i}
                    //      src={"./slides/" + slovo.image}
                    //      alt={"A"}
                    //      order={slovo.order ? slovo.order : 0}
                    //      name={slovo.name}
                    //      style={{width:"5%", position:"absolute", marginTop:slovo.top, left:slovo.left}}
                    //      onClick={slovo.order === order ? this.handleClick : null}
                    // />
                )}
                </span>}
            </div>
        )
    }
}

export default Spirala
