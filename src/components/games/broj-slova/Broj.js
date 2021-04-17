import React from "react"
import { DragDropContext, Draggable, Droppable  } from 'react-beautiful-dnd'

class Broj extends React.Component {
    state = {
        items: [],
        arr: [],
        complete: false
    }

    componentDidMount() {
        this.setState({ items: this.props.items})
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
                    <div style={{position:"relative", height:"600px"}}>
                    <Droppable droppableId={"droppable-red" }
                               index={0}
                    >
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={{width:"40%",position:"relative" ,left:"15%"}}
                            >
                                <img
                                    src={"./slides/polica1.jpg"}
                                    alt={"A"}
                                    style={{width:"50%", position:"absolute"}}
                                />
                                {items.map((a,i) =>
                                    <img
                                        key={i}
                                        src={a.found ? "./slides/" + a.image : null}
                                        alt={" "}
                                        style={{width:"20%", position:"absolute", marginTop:"20%", left:(i*5)+"%"}}
                                    />

                                )}
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
                                style={{width:"40%",position:"relative" ,left:"40%"}}
                            >
                                <img
                                    src={"./slides/polica2.jpg"}
                                    alt={"A"}
                                    style={{width:"50%", position:"absolute"}}
                                />
                            </div>
                        )}
                    </Droppable>
                    <Droppable droppableId={"droppable-blue" }
                               index={1}
                    >
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={{width:"40%",position:"relative" ,left:"65%"}}
                            >
                                <img
                                    src={"./slides/polica3.jpg"}
                                    alt={"A"}
                                    style={{width:"50%", position:"absolute"}}
                                />
                            </div>
                        )}
                    </Droppable>
                    </div>
                    <div style={{position:"relative"}}>
                    <Droppable droppableId="droppable2">
                        {(provided, snapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {items.map((item, index) => (
                                    <div style={{display:"inline-block", width:"15%"}} >
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
                                                        style={{width:"80%"}}
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
                    </div>
                </DragDropContext>
            </div>
        )
    }


}

export default Broj