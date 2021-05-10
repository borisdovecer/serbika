import React from "react"
import { DragDropContext, Draggable, Droppable  } from 'react-beautiful-dnd'

class Hrana extends React.Component {
    state = {
        items: [],
        arr: [],
        count: 0,
        title: "",
        complete: false
    }

    componentDidMount() {
        let count = 0
        this.props.hrana.forEach(i => {
            if(i.in === "red")
                count++
        })
        this.setState({ items: this.props.hrana, title: this.props.hrana[0].title, count })
    }

    onDragEnd = (result) => {
        let {items, arr, count} = this.state
        if (!result.destination) {
            return;
        }
        items.forEach(s => {
            if(result.destination.droppableId ===  "droppable-"+s.in && result.draggableId === "item-"+s.name ){
                s.found = true
                arr.push(s.name)
                items.splice(result.source.index, 1)
                this.setState({items, arr})
            }
        })
        if(arr.length === count){
            this.setState({complete: true})
        }
    }

    render() {
        const {items,title, complete} = this.state
        return(
            <div className={"main"}>
                {complete ? <img src={"./slides/button.png"} alt="btn" className="main-button"  onClick={this.props.nextSlide}/> : null}
                <h1 style={{position:"absolute", left: "50%"}}>{title}</h1>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId={"droppable-red" }
                               index={0}
                    >
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={{width:"50%",position:"relative" }}
                            >
                                <img
                                    src={"./slides/kuvari.jpg"}
                                    alt={"A"}
                                    style={{width:"100%", position:"relative",marginTop:"10%" ,left:"0%"}}
                                />
                                <ul style={{position:"absolute", top:"50%", left:"32%"}}>
                                    {this.state.arr.map((h, i) => (
                                        <li style={{fontSize:"24px"}} key={i}>{h}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </Droppable>
                    <Droppable droppableId="droppable2" >
                        {(provided, snapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={{width:"33%", position:"absolute", top: "15%", right:"0"}}
                            >
                                {items.map((item, index) => (
                                    <div key={item.id} >
                                        <Draggable  draggableId={"item-"+item.name} index={index} >
                                            {(provided, snapshot) => (
                                                <div ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    className={"hrana-ponudjena"}
                                                >
                                                    <h3>{item.name}</h3>
                                                </div>
                                            )}
                                        </Draggable>
                                    </div>
                                ))}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        )
    }
}

export default Hrana