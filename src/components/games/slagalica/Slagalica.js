import React from 'react'
import SlagalicaL from "./SlagalicaL"
import { DragDropContext, Draggable, Droppable  } from 'react-beautiful-dnd'

// fake data generator
const getItems = count =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        id: `item-${k}`,
        content: `item ${k}`
    }));

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const grid = 8;

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,

    // change background colour if dragging
    background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: 250
});


class Slagalica extends React.Component {
    state = {
        items: getItems(10),
        slagalica: SlagalicaL,
        complete: false
    }

    componentDidMount() {
        if(this.props.slide === 'l'){
            this.setState({ slagalica: SlagalicaL })
        }
    }

    onBeforeCapture = () => {
        /*...*/
    };

    onBeforeDragStart = () => {
        /*...*/
    };

    onDragStart = () => {
        /*...*/
    };
    onDragUpdate = () => {
        /*...*/
    };
    onDragEnd = (result) => {
        let {slagalica} = this.state
        // dropped outside the list
        if (!result.destination) {
            return;
        }


        if(result.destination.index ===  0){
            console.log(result)

            slagalica.word[result.source.index].found = true
            this.setState({slagalica})
        }


        // const slag = reorder(
        //     slagalica.ponudjena,
        //     result.source.index,
        //     result.destination.index
        // );
        //
        // slagalica.ponudjena = slag
        // this.setState({
        //     slagalica
        // });
    }

    render() {
        let {slagalica} = this.state
        return(
            <div className={'main text-center'}>
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
                                {this.state.slagalica.ponudjena.map((item, index) => (
                                    <Draggable key={item.id} draggableId={"item-"+item.id} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                key={item.id}
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                style={getItemStyle(
                                                    snapshot.isDragging,
                                                    provided.draggableProps.style
                                                )}
                                            >
                                                    <img
                                                        src={"./slides/" + item.image}
                                                        alt={"A"}
                                                        style={{width:"30%"}}
                                                    />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    {slagalica.word.map((s, i) =>
                    <Droppable droppableId={"droppable"+s.id }
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