import React from "react"
import { DragDropContext, Draggable, Droppable  } from 'react-beautiful-dnd'

class Dzak extends React.Component {
    state = {
        items: [],
        arr: [],
        letter: "",
        complete: true
    }

    componentDidMount() {
        this.setState({ items: this.props.items, letter: this.props.letter })
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
            }
        })
        if(arr.length === 5){
            this.setState({complete: true})
        }
    }

    render() {
        const {items, complete} = this.state
        return(
            <div className={"main"}>
                {complete ? <img src={"./slides/button.png"} alt="btn" className="main-button" style={{marginTop:"20%"}} onClick={this.props.nextSlide}/> : null}
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="droppable2">
                        {(provided, snapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={{ height:'40vh' }}
                            >
                                {items.map((item, index) => (
                                    <div style={{display:"inline-block", width:"20%"}} >
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
                                ))}
                            </div>
                        )}
                    </Droppable>
                    <Droppable droppableId={"droppable-red" } index={0} >
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={{width:"40%",position:"relative" ,marginTop:"10%" ,left:"15%"}}
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
                    <Droppable droppableId={"droppable-yellow" } index={1} >
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={{width:"40%",position:"relative" ,marginTop:"10%" ,left:"45%"}}
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
                </DragDropContext>
            </div>
        )
    }
}

export default Dzak
