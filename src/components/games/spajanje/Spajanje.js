import React from 'react'
import { DragDropContext, Draggable, Droppable  } from 'react-beautiful-dnd'

class Spajanje extends React.Component{
    state = {
        pojmovi: [],
        random: [],
        arr:[],
        complete: true
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
                arr.push(p)
                this.setState({pojmovi, arr})
            }
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        this.complete()
    }

    complete = () => {
        let { pojmovi, arr } = this.state
        if(arr.length === pojmovi.length){
            setTimeout( () => {
                this.setState({ complete: true })
            }, 200 )
        }
    }

    render() {
        const {pojmovi,random, complete} = this.state
        return(
            <div className={"main"}>
                {complete ? <img src={"./slides/button.png"} alt="btn" className="main-button" onClick={this.props.nextSlide}/> : null}
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <div className="row text-center justify-content-center"  style={{marginLeft: 0, marginRight: 0}} >
                    {pojmovi.map((s, i) =>
                        <div key={i}>
                        <h1 style={{ color: s.color}}>{s.name}</h1>
                        <Droppable droppableId={"droppable"+s.name } index={s.id} >
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className={"slagalica-box"}
                                    style={{width: "200px", height: "200px", margin:"5vh", backgroundColor: s.color, borderRadius: "25px"}}
                                >
                                    {s.found ? <img
                                        src={"./slides/" + s.image}
                                        alt={"A"}
                                        style={{width:"90%", position:"absolute",top:"5%", left:"5%"}}
                                    /> :  null}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                        </div>
                    )}
                    </div>
                    <div className="row text-center justify-content-center"  style={{marginLeft: 0, marginRight: 0}} >
                        <Droppable droppableId="droppable2">
                            {(provided, snapshot) => (
                                <div {...provided.droppableProps} ref={provided.innerRef} >
                                    {random.map((item, index) => (
                                        <div key={item.id} style={{display:"inline-block"}} >
                                            <Draggable draggableId={"item-"+item.name} index={index} >
                                                {(provided, snapshot) => (
                                                    <div
                                                        key={item.id}
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className={"spajanje-ponudjena"}
                                                    >
                                                        {item.found ? null : <img
                                                            src={"./slides/" + item.image}
                                                            alt={"A"}
                                                            style={{width:"80%"}}
                                                        />}
                                                    </div>
                                                )}
                                            </Draggable>
                                        </div>
                                    ))}
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

export default Spajanje
