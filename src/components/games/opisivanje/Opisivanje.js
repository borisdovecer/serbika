import React from 'react'
import { DragDropContext, Draggable, Droppable  } from 'react-beautiful-dnd'

class Opisivanje extends React.Component {
    state = {
        pojmovi: [],
        random: [],
        arr:[],
        complete: true
    }

    componentDidMount() {
        const { opis } = this.props
        const random = [...opis].sort(() => Math.random() - 0.5)
        this.setState({ pojmovi: opis, random})
    }

    onDragEnd = (result) => {
        let { pojmovi, arr } = this.state
        if (!result.destination) {
            return;
        }
        pojmovi.forEach(p => {
            if(result.destination.droppableId ===  "droppable"+p.id && result.draggableId === "item-"+p.id){
                p.found = true
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
                                <h1 style={{ color: s.color}}>{s.text}</h1>
                                <Droppable droppableId={"droppable"+s.id } index={s.id} >
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
                                            <Draggable draggableId={"item-"+item.id} index={index} >
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

    // render() {
    //     const {opis, complete, loading} = this.state
    //     return(
    //         loading ? null :
    //         <div className={'main'}>
    //             {complete ? <img src={"./slides/button.png"} alt="btn" className="main-button" onClick={this.props.nextSlide}/> : null}
    //             <div className="row justify-content-center "  style={{marginLeft: 0, marginRight: 0}} >
    //                 {opis.map((p,i) =>
    //                         <div key={i} className={"col-lg-4 col-md-5 col-sm-5"}>
    //                             <div >
    //                                 <h1 >{p.text}</h1>
    //                             </div>
    //                             <div onClick={this.handleClick}
    //                                  id={p.id}
    //                                  row="upper"
    //                                  style={{ width: "250px", height:"250px", border:"2px solid#ccc333", borderRadius: "25px", display:"inline-block", margin:"20px" }}
    //                             >
    //                                  {p.found ?
    //                                 <img
    //                                     style={{width:"80%", position:"relative", top:"5%", left:"10%"}}
    //                                     id={p.id}
    //                                     row="upper"
    //                                     alt={'card'}
    //                                     key={i}
    //                                     src={"./slides/" + p.image }
    //                                 /> : null }
    //                             </div>
    //                         </div>
    //                 )}
    //             </div>
    //             <div className="row text-center justify-content-center"  style={{marginLeft: 0, marginRight: 0}} >
    //                 {opis.map((p,i) =>
    //                     <div style={{width: "20%", height:"300px" }}>
    //                         {p.found ? null : <img
    //                                 style={{width:"100%"}}
    //                                 onClick={this.handleClick}
    //                                 id={p.id}
    //                                 row="lower"
    //                                 alt={'card'}
    //                                 key={i}
    //                                 src={"./slides/" + p.image }
    //                             /> }
    //
    //                     </div>
    //                 )}
    //             </div>
    //         </div>
    //     )
    // }
}

export default Opisivanje
