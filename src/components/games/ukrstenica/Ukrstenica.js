import React from 'react'
import { DragDropContext, Draggable, Droppable  } from 'react-beautiful-dnd'

const getListStyle = isDraggingOver => ({
    width: 600,
    position:"absolute",
    left:"50%"
});

class Ukrstenica extends React.Component {
    state = {
        arr: [],
        words: [],
        random:[],
        complete: false
    }

    componentDidMount() {
        let words = this.props.words
        let random = [...words]
        this.setState({words, random: random.sort(() => Math.random() - 0.5)})

    }

    onDragEnd = (result) => {
        let {words,random, arr} = this.state
        if (!result.destination) {
            return;
        }
        words.forEach(s => {
            if(result.destination.droppableId ===  "droppable"+s.name && result.draggableId === "item-"+s.name){
                s.found = true
                random.splice(result.source.index, 1)
                arr.push(s.id)
                if(arr.length === 4){
                    this.setState({complete:true})
                }
                this.setState({words, arr})
            }
        })
    }

    render() {
        let { words, random, complete} = this.state
        return(
            <div className={'main'} style={{padding:"3%"}}>
                {complete ? <img src={"./slides/button.png"} alt="btn" className="main-button"  onClick={this.props.nextSlide}/> : null}
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="droppable2">
                        {(provided, snapshot) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}
                            >
                                {random.map((item, index) => (
                                        <Draggable key={item.id} draggableId={"item-"+item.name} index={index} >
                                            {(provided, snapshot) => (
                                                <div
                                                    key={item.id}
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    {item.name.map((x, i) =>
                                                        <div key={i} style={{display:"inline-block",width:"100px",
                                                            height:"100px",
                                                            margin:"1px 0",
                                                            border:"2px solid black"}}>
                                                            <h1 style={{
                                                                textAlign:"center",
                                                                paddingTop:"20%"
                                                            }} >{x}</h1>
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                    {words.map((s, i) =>
                        <Droppable droppableId={"droppable"+s.name }
                                   key={i}
                                   index={s.id}
                        >
                            {(provided, snapshot) => (
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                >
                                    {s.name.map((x, i) =>
                                        <div key={i} style={{display:"inline-block",width:"100px",
                                            height:"100px",
                                            margin:"1px 0",
                                            border:"2px solid black"}}>
                                                <h1  style={{
                                                    textAlign:"center",
                                                    paddingTop:"20%"
                                                }} > {s.found ? s.name[i]  :  null}</h1>
                                        </div>
                                    )}
                                </div>
                            )}
                        </Droppable>
                    )}
                </DragDropContext>
            </div>
        )
    }
}

export default Ukrstenica