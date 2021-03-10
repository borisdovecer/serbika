import React from "react"
import Items06 from './Items06'
import Items07 from "./Items07"
import Items08 from "./Items08"
import Items09 from "./Items09"

import Draggable from 'react-draggable';

class Dzak extends React.Component {
    state = {
        items: [],
        complete: true

    }

    componentDidMount() {
        if(this.props.slide === "dz06"){
            this.setState({ items: Items06 })
        }
        if(this.props.slide === "dz07"){
            this.setState({ items: Items07  })
        }
        if(this.props.slide === "dz08"){
            this.setState({ items: Items08  })
        }
        if(this.props.slide === "dz09"){
            this.setState({ items: Items09  })
        }
    }

    eventControl = (event, info) => {
        console.log('Event name: ', event.type);
        console.log( info);
    }

    render() {
        const {items, complete} = this.state
        return(
            <div className={"main"}>
                {complete ? <img src={"./slides/button.png"} alt="btn" className="main-button" onClick={this.props.nextSlide}/> : null}
                <div className="row text-center justify-content-center"  style={{marginLeft: 0, marginRight: 0}} >
                    <div>
                        {items.map((item,i) =>

                            <Draggable
                            onDrag={this.eventControl}
                            onStart={this.eventControl}
                            onStop={this.eventControl}
                            onMouseDown={this.eventControl}
                            onMouseUp={this.eventControl}
                            onTouchStart={this.eventControl}
                            onTouchEnd={this.eventControl}>
                                <img key={i} src={"./slides/" + item.image } alt={"dzak"} style={{width:"300px"}}/>
                            </Draggable>
                        )}

                    </div>
                    <div>
                        <img src={"./slides/dzak-r.jpg"} alt={"dzak"} style={{width:"370px", margin: "100px"}}/>
                        <img src={"./slides/dzak-x.jpg"} alt={"dzak"} style={{width:"370px", margin: "100px"}}/>
                    </div>

                </div>
            </div>
        )
    }


}

export default Dzak