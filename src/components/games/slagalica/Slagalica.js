import React from 'react'
import { DragDropContext, Draggable, Droppable  } from 'react-beautiful-dnd'

const grid = 8;

const getListStyle = isDraggingOver => ({
    padding: grid,
    width: 500,
    height: 500
});


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
                slagalica.ponudjena.splice(result.source.index, 1)
                arr.push(s.id)
                this.setState({slagalica, arr})
            }
        } )

    }

    render() {
        let {slagalica} = this.state
        return(
            <div className={'main text-center'}>
                {this.state.complete ? <img src={"./slides/button.png"} alt="btn" className="main-button"  onClick={this.props.nextSlide}/> : null}
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <img
                        src={"./slides/" + slagalica.image}
                        alt={"A"}
                        style={{width:"25%", position:"absolute", left:"38vw"}}
                    />
                    <Droppable droppableId="droppable2">
                        {(provided, snapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}
                            >
                                {slagalica?.ponudjena.map((item, index) => (
                                    <div style={{display:"inline-block"}} >
                                    <Draggable key={item.id} draggableId={"item-"+item.name} index={index} >
                                {(provided, snapshot) => (
                                    <div
                                    key={item.id}
                                    ref={provided.innerRef}
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

export default Slagalica