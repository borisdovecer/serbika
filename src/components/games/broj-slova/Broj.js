import React from "react"
import { DragDropContext, Draggable, Droppable  } from 'react-beautiful-dnd'

class Broj extends React.Component {
    state = {
        items: [],
        arr: [],
        list: [],
        count: 0,
        complete: false
    }

    componentDidMount() {
        let {items} = this.props
        let count = items.length
        this.setState({ items: items, list:items[0].list, count})
    }

    onDragEnd = (result) => {
        let {items, arr, count} = this.state

        if (!result.destination) {
            return;
        }

        items.forEach(s => {
            if(result.destination.droppableId ===  "droppable-"+s.in && result.draggableId === "item-"+s.name ){
                s.found = true
                arr.push(s)
                items.splice(result.source.index, 1)
                this.setState({items, arr})
            }
        })

        if(arr.length === count){
            this.setState({complete: true})
        }
    }

    render() {
        const {items,arr,list, complete} = this.state
        return(
            <div className={"main"}>
                {complete ? <img src={"./slides/button.png"} alt="btn" className="main-button" style={{marginTop:"25%"}} onClick={this.props.nextSlide}/> : null}
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <div style={{position:"relative",height:"500px", padding:"2% 5%"}}>
                    <Droppable droppableId={"droppable-red" }
                               index={0}
                    >
                        {(provided, snapshot) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                style={{width:"33%",position:"relative",display:"inline-block" }}
                            >
                                <img
                                    src={"./slides/polica1.jpg"}
                                    alt={"A"}
                                    style={{width:"75%", position:"relative"}}
                                />
                                <h1 style={{position:"absolute", left:"25%"}}>{list[0]} slova</h1>
                                {arr.map((a,i) => {
                                    return(
                                        a.in==="red" ?
                                        <img
                                            key={i}
                                            src={"./slides/" + a.image}
                                            alt={"broj"}
                                            style={{
                                                width: "30%",
                                                position: "absolute",
                                                marginTop: "20%",
                                                left: (i * 6) + "%"
                                            }}
                                        /> : null
                                    )
                                })}
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
                                style={{width:"33%",position:"relative",display:"inline-block" }}
                            >
                                <img
                                    src={"./slides/polica2.jpg"}
                                    alt={"A"}
                                    style={{width:"75%", position:"relative"}}
                                />
                                <h1 style={{position:"absolute", left:"25%"}}>{list[1]} slova</h1>
                                {arr.map((a,i) => {
                                    return(
                                        a.in==="yellow" ?
                                            <img
                                                key={i}
                                                src={"./slides/" + a.image}
                                                alt={"broj"}
                                                style={{
                                                    width: "30%",
                                                    position: "absolute",
                                                    marginTop: "16%",
                                                    left: (i * 6) + "%"
                                                }}
                                            /> : null
                                    )
                                })}
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
                                style={{width:"33%",position:"relative",display:"inline-block"}}
                            >
                                <img
                                    src={"./slides/polica3.jpg"}
                                    alt={"A"}
                                    style={{width:"75%", position:"relative"}}
                                />
                                <h1 style={{position:"absolute", left:"25%"}}>{list[2]} slova</h1>
                                {arr.map((a,i) => {
                                    return(
                                        a.in==="blue" ?
                                            <img
                                                key={i}
                                                src={"./slides/" + a.image}
                                                alt={"broj"}
                                                style={{
                                                    width: "30%",
                                                    position: "absolute",
                                                    marginTop: "18%",
                                                    left: (i * 8) + "%"
                                                }}
                                            /> : null
                                    )
                                })}

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