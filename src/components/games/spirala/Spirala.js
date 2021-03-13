import React from 'react'
import PreloadImage from "react-preload-image";
import SlovaSh from "./SlovaSh"


import bg from './bg-spirala.jpg'

class Spirala extends React.Component {
    state = {
        slova: SlovaSh,
        image: bg,
        complete : true
    }

    handleClick = (e) => {
        let name = e.target.attributes.order.value
        console.log(name)

    }

    render() {
        return(
            <div className={'main'} style={{textAlign:"center"}}>
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
                    duration={"1500ms"}
                />
                {this.state.slova.map( (slovo, i) =>
                    <img key={i}
                         src={"./slides/" + slovo.image}
                         alt={"A"}
                         order={slovo.order ? slovo.order : 0}
                         name={slovo.name}
                         style={{width:"5%", position:"absolute", marginTop:slovo.top, left:slovo.left}}
                         onClick={this.handleClick}
                    /> )}
            </div>
        )
    }
}

export default Spirala