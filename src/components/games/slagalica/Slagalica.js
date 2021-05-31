import React from 'react'
import { DragDropContext, Draggable, Droppable  } from 'react-beautiful-dnd'

class Slagalica extends React.Component {
    state = {
        slagalica: {word:[], ponudjena:[]},
        arr: [],
        complete: true
    }

    componentDidMount() {
        this.setState({slagalica: this.props.slagalica})
    }

    onDragEnd = (result) => {
        let {slagalica, arr} = this.state
        if (!result.destination) {
            return;
        }
        slagalica.word.forEach(s => {
            if(result.destination.droppableId ===  "droppable"+s.name && result.draggableId === "item-"+s.name){
                s.found = true
                // slagalica.ponudjena.splice(result.source.index, 1)
                arr.push(s.id)
                this.setState({slagalica, arr})
            }
        })
        if(arr.length === slagalica.word.length){
            this.setState({complete: true})
        }
    }

    render() {
        let {slagalica, complete} = this.state
        return(
            <div className={'main text-center'}>
                {complete ? <img src={"./slides/button.png"} alt="btn" className="main-button"  onClick={this.props.nextSlide}/> : null}
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <img
                        src={"./slides/" + slagalica.image}
                        alt={"A"}
                        style={{height: "35vh", position:"absolute", left:"38vw"}}
                    />
                    <Droppable droppableId="droppable2">
                        {(provided, snapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={{ padding: 8, width: 500, height: 500}}
                            >
                                {slagalica?.ponudjena.map((item, index) => (
                                    <div key={index} style={{display:"inline-block"}} >
                                        <Draggable draggableId={"item-"+item.name} index={item.id} >
                                        {(provided, snapshot) => (
                                            <div ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className={"slagalica-ponudjena"}
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
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    {slagalica.word.map((s, i) =>
                    <Droppable droppableId={"droppable"+s.name }
                               key={i}
                               index={s.id}
                    >
                        {(provided, snapshot) => (
                                <div
                                     ref={provided.innerRef}
                                     {...provided.draggableProps}
                                     {...provided.dragHandleProps}
                                     className={"slagalica-box"}
                                >
                                    {s.found ? <img
                                        src={"./slides/" + s.image}
                                        alt={"A"}
                                        style={{width:"100%", position:"absolute", left:"0px"}}
                                    /> :  null}
                                    {provided.placeholder}
                                </div>
                            )}
                    </Droppable>
                    )}
                </DragDropContext>
            </div>
        )
    }
}

export default Slagalica
