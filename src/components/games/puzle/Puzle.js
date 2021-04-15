import React from 'react'
import { DragDropContext, Draggable, Droppable  } from 'react-beautiful-dnd'
import PreloadImage from "react-preload-image";
import ovir from './puzle-okvir.jpg'

const getListStyle = isDraggingOver => ({
    padding: 8,
});

class Puzle extends React.Component{
    state = {
        image:ovir,
        pojmovi: [],
        random: [],
        arr:[],
        complete: false
    }

    componentDidMount() {
        const pojmovi = this.props.game
        const random = [...pojmovi].sort(() => Math.random() - 0.5)

        this.setState({pojmovi, random})
    }

    onDragEnd = (result) => {
        let {pojmovi, arr} = this.state

        if (!result.destination) {
            return;
        }
        pojmovi.forEach(p => {
            if(result.destination.droppableId ===  "droppable"+p.name && result.draggableId === "item-"+p.name){
                p.found = true
                // pojmovi.splice(result.source.index, 1)
                arr.push(p.id)
                this.setState({pojmovi, arr})
            }else{
                return;
            }
        } )
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        this.complete()
    }

    complete = () => {
        let {pojmovi} = this.state
        let count = 0
        pojmovi.forEach(p => {
            if(p.found){
                count++
            }
        })
        if(count === pojmovi.length){
            setTimeout( () => {
                this.setState({ complete: true })
            }, 200 )
        }
    }

    render() {
        const {pojmovi,random, complete} = this.state

        return(
            <div className={"main"}>
                <PreloadImage
                    style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100vh',
                        backgroundColor: '#222222'
                    }}
                    src={this.state.image}
                    duration={"1000ms"}
                    lazy={true}
                />
                {complete ? <img src={"./slides/button.png"} alt="btn" className="main-button" onClick={this.props.nextSlide}/> : null}
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <div className="row text-center justify-content-center"  style={{marginLeft: 0, marginRight: 0}} >

                        {pojmovi.map((s, i) =>
                            <div style={{marginTop:"10%"}}>
                                <Droppable droppableId={"droppable"+s.name }
                                           key={i}
                                           index={s.id}
                                >
                                    {(provided, snapshot) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            className={"puzzle-box"}
                                            style={{width: "250px", height: "250px"}}

                                        >
                                            {s.found ? <div >
                                                <p style={{position:'relative', marginTop:"40%", zIndex:"14", fontSize:"25px"}}>{s.name}</p>
                                                <img
                                                    src={"./slides/" + s.image}
                                                    alt={"A"}
                                                    style={{width:"90%", position:"absolute",top:"5%", left:"5%"}}
                                                />
                                            </div> : null}


                                        </div>
                                    )}
                                </Droppable>
                            </div>
                        )}
                    </div>
                    <div className="row text-center justify-content-center"  style={{marginLeft: 0, marginRight: 0}} >
                        <Droppable droppableId="droppable2">
                            {(provided, snapshot) => (
                                <div
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                    style={getListStyle(snapshot.isDraggingOver)}
                                >
                                    {random.map((item, index) => (
                                        <div  style={{display:"inline-block"}} >
                                            {item.found ? null :  <Draggable key={item.id} draggableId={"item-"+item.name} index={index} >
                                                {(provided, snapshot) => (
                                                    <div
                                                        key={item.id}
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className={"spajanje-ponudjena"}
                                                    >
                                                         <div style={{position:"relative", width:"100%"}}>
                                                            <p style={{position:'relative', marginTop:"40%", zIndex:"14", fontSize:"25px"}}>{item.name}</p>
                                                            <img
                                                                src={"./slides/" + item.image}
                                                                alt={"A"}
                                                                style={{width:"90%",position:"absolute",top:"-83px", left:"5%"}}
                                                            />
                                                        </div>
                                                    </div>
                                                )}
                                            </Draggable>}
                                        </div>

                                    ))
                                    }
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </div>
                </DragDropContext>
            </div>
        )
    }
}

export default Puzle
