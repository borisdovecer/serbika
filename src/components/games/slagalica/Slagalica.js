import React from 'react'
import SlagalicaL from "./SlagalicaL"
import SlagalicaPlaneta from './SlagalicaPlaneta'

import { DragDropContext, Draggable, Droppable  } from 'react-beautiful-dnd'
import SlagalicaNebo from "./SlagalicaNebo";
import SlagalicaRiba from "./SlagalicaRiba";
import SlagalicaBalerina from "./SlagalicaBalerina";
import SlagalicaJabuka from "./SlagalicaJabuka";
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
    width: "30%",


    // change background colour if dragging
   // background: isDragging ? "lightgreen" : "grey",

    // styles we need to apply on draggables
    ...draggableStyle
});

const getListStyle = isDraggingOver => ({
  //  background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: 500,
    height: 500
});


class Slagalica extends React.Component {
    state = {
        slagalica: SlagalicaL,
        arr: [],
        complete: true
    }

    componentDidMount() {
        if(this.props.slide === 'planeta'){
            this.setState({ slagalica: SlagalicaPlaneta})
        }
        if(this.props.slide === 'l'){
            this.setState({ slagalica: SlagalicaL})
        }
        if(this.props.slide === 'nebo'){
            this.setState({ slagalica: SlagalicaNebo})
        }
        if(this.props.slide === 'riba'){
            this.setState({ slagalica: SlagalicaRiba})
        }
        if(this.props.slide === 'balerina'){
            this.setState({ slagalica: SlagalicaBalerina})
        }
        if(this.props.slide === 'jabuka'){
            this.setState({ slagalica: SlagalicaJabuka})
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

    };
    onDragEnd = (result) => {
        let {slagalica, arr} = this.state
        // dropped outside the list

        if (!result.destination) {
            return;
        }
        slagalica.word.forEach(s => {
            if(result.destination.droppableId ===  "droppable"+s.name && result.draggableId === "item-"+s.name){
                s.found = true
                slagalica.ponudjena.splice(result.source.index, 1)
                arr.push(s.id)
                this.setState({slagalica, arr})
            }else{
                return;
            }
        } )


        const slag = reorder(
            slagalica.ponudjena,
            result.source.index,
            result.destination.index
        );

        slagalica.ponudjena = slag
        this.setState({
            slagalica
        });

        if(this.state.arr.length === slagalica.word.length){
            this.setState({complete: true})
        }
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
                                {slagalica.ponudjena.map((item, index) => (
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