import React from "react"
import { DragDropContext, Draggable, Droppable  } from 'react-beautiful-dnd'
import Items06 from './Items06'
import Items07 from "./Items07"
import Items08 from "./Items08"
import Items09 from "./Items09"
import Items10 from "./Items10"
import Items11 from "./Items11"

class Dzak extends React.Component {
    state = {
        items: [],
        arr: [],
        letter: "",
        complete: false
    }

    componentDidMount() {
        if(this.props.slide === "dz06"){
            this.setState({ items: Items06, letter: "radno-39.png" })
        }
        if(this.props.slide === "dz07"){
            this.setState({ items: Items07, letter: "radno-59.png" })
        }
        if(this.props.slide === "dz08"){
            this.setState({ items: Items08, letter: "radno-37.png" })
        }
        if(this.props.slide === "dz09"){
            this.setState({ items: Items09, letter: "radno-23.png" })
        }
        if(this.props.slide === "dz10"){
            this.setState({ items: Items10, letter: "radno-25.png" })
        }
        if(this.props.slide === "dz11"){
            this.setState({ items: Items11, letter: "radno-27.png" })
        }
    }

    onDragEnd = (result) => {
        let {items, arr} = this.state

        if (!result.destination) {
            return;
        }

        items.forEach(s => {
            if(result.destination.droppableId ===  "droppable-"+s.in && result.draggableId === "item-"+s.name ){
                s.found = true
                arr.push(s.id)
                items.splice(result.source.index, 1)
                this.setState({items, arr})
            }else{
                return;
            }
        })

        if(this.state.arr.length === 5){
            this.setState({complete: true})
        }
    }

    render() {
        const {items, complete} = this.state
        return(
            <div className={"main"}>
                {complete ? <img src={"./slides/button.png"} alt="btn" className="main-button" style={{marginTop:"0%"}} onClick={this.props.nextSlide}/> : null}
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="droppable2">
                        {(provided, snapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {items.map((item, index) => (
                                    <div style={{display:"inline-block"}} >
                                        <Draggable key={item.id} draggableId={"item-"+item.name} index={index} >
                                            {(provided, snapshot) => (
                                                <div
                                                    key={item.id}
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className={"dzak-ponudjena"}
                                                >
                                                    <img
                                                        src={"./slides/" + item.image}
                                                        alt={"A"}
                                                        style={{width:"70%"}}
                                                    />
                                                </div>
                                            )}
                                        </Draggable>
                                    </div>

                                ))
                                }
                            </div>
                        )}
                    </Droppable>
                    <Droppable droppableId={"droppable-red" }
                               index={0}
                    >
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={{width:"40%",position:"relative" ,marginTop:"20%" ,left:"15%"}}
                            >
                                <img
                                    src={"./slides/dzak.jpg"}
                                    alt={"A"}
                                    style={{width:"50%", position:"absolute"}}
                                />
                                <img
                                    src={"./slides/" + this.state.letter}
                                    alt={"A"}
                                    style={{width:"45%", position:"absolute"}}
                                />
                            </div>
                        )}
                    </Droppable>
                    <Droppable droppableId={"droppable-yellow" }
                               index={1}
                    >
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={{width:"40%",position:"relative" ,marginTop:"20%" ,left:"45%"}}
                            >
                                <img
                                    src={"./slides/dzak-x.jpg"}
                                    alt={"A"}
                                    style={{width:"50%", position:"absolute"}}
                                />
                                <img
                                    src={"./slides/" + this.state.letter}
                                    alt={"A"}
                                    style={{width:"45%", position:"absolute"}}
                                />
                                <img
                                    src={"./slides/dzak-x.png"}
                                    alt={"A"}
                                    style={{width:"20%", position:"absolute", marginTop:"15%", left:"15%"}}
                                />
                            </div>
                        )}
                    </Droppable>

                    {/*{slagalica.ponudjena.map((s, i) =>*/}
                    {/*    <img*/}
                    {/*        src={"./slides/" + s.image}*/}
                    {/*        alt={"A"}*/}
                    {/*        style={{width:"10%", position:"absolute",top:s.top, left:s.left}}*/}
                    {/*    />*/}
                    {/*)}*/}
                </DragDropContext>
            </div>
        )
    }


}

export default Dzak