import React from "react"
import { DragDropContext, Draggable, Droppable  } from 'react-beautiful-dnd'
import Items06 from './Items06'
import Items07 from "./Items07"
import Items08 from "./Items08"
import Items09 from "./Items09"
import Items10 from "./Items10"
import Items11 from "./Items11"
import Items12 from "./Items12";
import Items13 from "./Items13";
import Items14 from "./Items14";
import Items15 from "./Items15";
import Items16 from "./Items16";
import Items17 from "./Items17";
import Items18 from "./Items18";
import Items19 from "./Items19";
import Items20 from "./Items20";

class Dzak extends React.Component {
    state = {
        items: [],
        arr: [],
        letter: "",
        complete: true
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
        if(this.props.slide === "dz12"){
            this.setState({ items: Items12, letter: "radno-03.png" })
        }
        if(this.props.slide === "dz13"){
            this.setState({ items: Items13, letter: "radno-05.png" })
        }
        if(this.props.slide === "dz14"){
            this.setState({ items: Items14, letter: "radno-17.png" })
        }
        if(this.props.slide === "dz15"){
            this.setState({ items: Items15, letter: "radno-09.png" })
        }
        if(this.props.slide === "dz16"){
            this.setState({ items: Items16, letter: "radno-07.png" })
        }
        if(this.props.slide === "dz17"){
            this.setState({ items: Items17, letter: "radno-55.png" })
        }
        if(this.props.slide === "dz18"){
            this.setState({ items: Items18, letter: "radno-51.png" })
        }
        if(this.props.slide === "dz19"){
            this.setState({ items: Items19, letter: "radno-49.png" })
        }
        if(this.props.slide === "dz20"){
            this.setState({ items: Items20, letter: "radno-15.png" })
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