import React from 'react'
import { DragDropContext, Draggable, Droppable  } from 'react-beautiful-dnd'

import SlagalicaL from "./SlagalicaL"
import SlagalicaPlaneta from './SlagalicaPlaneta'
import SlagalicaNebo from "./SlagalicaNebo";
import SlagalicaRiba from "./SlagalicaRiba";
import SlagalicaBalerina from "./SlagalicaBalerina";
import SlagalicaJabuka from "./SlagalicaJabuka";
import SlagalicaLjut from "./SlagalicaLjut";
import SlagalicaSolja from "./SlagalicaSolja";
import SlagalicaSkoljka from "./SlagalicaSkoljka";
import SlagalicaSova from "./SlagalicaSova";
import SlagalicaOlovka from "./SlagalicaOlovka";
import SlagalicaMravi from "./SlagalicaMravi";
import SlagalicaKlovn from "./SlagalicaKlovn";
import SlagalicaSljiva from "./SlagalicaSljiva";
import SlagalicaZmaj from "./SlagalicaZmaj";
import SlagalicaAzbuka from "./SlagalicaAzbuka";
import SlagalicaZastava from "./SlagalicaZastava";
import SlagalicaPuzle from "./SlagalicaPuzle";
import SlagalicaMuzika from "./SlagalicaMuzika";
import SlagalicaDva from "./SlagalicaDva";
import SlagalicaBadem from "./SlagalicaBadem";
import SlagalicaMedalja from "./SlagalicaMedalja";
import SlagalicaPanda from "./SlagalicaPanda";
import SlagalicaDevet from "./SlagalicaDevet";
import SlagalicaGol from "./SlagalicaGol";
import SlagalicaGlava from "./SlagalicaGlava";
import SlagalicaGrana from "./SlagalicaGrana";
import SlagalicaDugme from "./SlagalicaDugme";
import SlagalicaDuga from "./SlagalicaDuga";
import SlagalicaCep from "./SlagalicaCep";
import SlagalicaCesalj from "./SlagalicaCesalj";
import SlagalicaPevac from "./SlagalicaPevac";
import SlagalicaCasa from "./SlagalicaCasa";
import SlagalicaCips from "./SlagalicaCips";
import SlagalicaSah from "./SlagalicaSah";
import SlagalicaOsmeh from "./SlagalicaOsmeh";
import SlagalicaHleb from "./SlagalicaHleb";
import SlagalicaHrcak from "./SlagalicaHrcak";
import SlagalicaSef from "./SlagalicaSef";
import SlagalicaSofa from "./SlagalicaSofa";
import SlagalicaFlasa from "./SlagalicaFlasa";
import SlagalicaMafin from "./SlagalicaMafin";
import SlagalicaHemijska from "./SlagalicaHemijska";
import SlagalicaMikrofon from "./SlagalicaMikrofon";
import SlagalicaZirafa from "./SlagalicaZirafa";
import SlagalicaZvaka from "./SlagalicaZvaka";
import SlagalicaRaza from "./SlagalicaRaza";
import SlagalicaJez from "./SlagalicaJez";

// const reorder = (list, startIndex, endIndex) => {
//     const result = Array.from(list);
//     const [removed] = result.splice(startIndex, 1);
//     result.splice(endIndex, 0, removed);
//
//     return result;
// };

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
        // DZ10
        if(this.props.slide === 'planeta'){
            this.setState({ slagalica: SlagalicaPlaneta})
        }
        if(this.props.slide === 'l'){
            this.setState({ slagalica: SlagalicaL})
        }
        // DZ11
        if(this.props.slide === 'ljut'){
            this.setState({ slagalica: SlagalicaLjut})
        }
        if(this.props.slide === 'solja'){
            this.setState({ slagalica: SlagalicaSolja})
        }
        if(this.props.slide === 'skoljka'){
            this.setState({ slagalica: SlagalicaSkoljka})
        }
        // DZ12
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
        // DZ13
        if(this.props.slide === 'sova'){
            this.setState({ slagalica: SlagalicaSova})
        }
        if(this.props.slide === 'olovka'){
            this.setState({ slagalica: SlagalicaOlovka})
        }
        if(this.props.slide === 'mravi'){
            this.setState({ slagalica: SlagalicaMravi})
        }
        if(this.props.slide === 'klovn'){
            this.setState({ slagalica: SlagalicaKlovn})
        }
        if(this.props.slide === 'sljiva'){
            this.setState({ slagalica: SlagalicaSljiva})
        }
        // DZ14
        if(this.props.slide === 'zmaj'){
            this.setState({ slagalica: SlagalicaZmaj})
        }
        if(this.props.slide === 'azbuka'){
            this.setState({ slagalica: SlagalicaAzbuka})
        }
        if(this.props.slide === 'zastava'){
            this.setState({ slagalica: SlagalicaZastava})
        }
        if(this.props.slide === 'puzle'){
            this.setState({ slagalica: SlagalicaPuzle})
        }
        if(this.props.slide === 'muzika'){
            this.setState({ slagalica: SlagalicaMuzika})
        }
        // DZ15
        if(this.props.slide === 'dva'){
            this.setState({ slagalica: SlagalicaDva})
        }
        if(this.props.slide === 'badem'){
            this.setState({ slagalica: SlagalicaBadem})
        }
        if(this.props.slide === 'medalja'){
            this.setState({ slagalica: SlagalicaMedalja})
        }
        if(this.props.slide === 'panda'){
            this.setState({ slagalica: SlagalicaPanda})
        }
        if(this.props.slide === 'devet'){
            this.setState({ slagalica: SlagalicaDevet})
        }
        // DZ16
        if(this.props.slide === 'gol'){
            this.setState({ slagalica: SlagalicaGol})
        }
        if(this.props.slide === 'glava'){
            this.setState({ slagalica: SlagalicaGlava})
        }
        if(this.props.slide === 'grana'){
            this.setState({ slagalica: SlagalicaGrana})
        }
        if(this.props.slide === 'dugme'){
            this.setState({ slagalica: SlagalicaDugme})
        }
        if(this.props.slide === 'duga'){
            this.setState({ slagalica: SlagalicaDuga})
        }
        // DZ17
        if(this.props.slide === 'cep'){
            this.setState({ slagalica: SlagalicaCep})
        }
        if(this.props.slide === 'cesalj'){
            this.setState({ slagalica: SlagalicaCesalj})
        }
        if(this.props.slide === 'pevac'){
            this.setState({ slagalica: SlagalicaPevac})
        }
        if(this.props.slide === 'casa'){
            this.setState({ slagalica: SlagalicaCasa})
        }
        if(this.props.slide === 'cips'){
            this.setState({ slagalica: SlagalicaCips})
        }
        // DZ18
        if(this.props.slide === 'shah'){
            this.setState({ slagalica: SlagalicaSah})
        }
        if(this.props.slide === 'osmeh'){
            this.setState({ slagalica: SlagalicaOsmeh})
        }
        if(this.props.slide === 'hleb'){
            this.setState({ slagalica: SlagalicaHleb})
        }
        if(this.props.slide === 'hrcak'){
            this.setState({ slagalica: SlagalicaHrcak})
        }
        if(this.props.slide === 'hemijska'){
            this.setState({ slagalica: SlagalicaHemijska })
        }
        // DZ19
        if(this.props.slide === 'sef'){
            this.setState({ slagalica: SlagalicaSef})
        }
        if(this.props.slide === 'sofa'){
            this.setState({ slagalica: SlagalicaSofa})
        }
        if(this.props.slide === 'flasa'){
            this.setState({ slagalica: SlagalicaFlasa})
        }
        if(this.props.slide === 'mafin'){
            this.setState({ slagalica: SlagalicaMafin })
        }
        if(this.props.slide === 'mikrofon'){
            this.setState({ slagalica: SlagalicaMikrofon })
        }
        // DZ20
        if(this.props.slide === 'jez'){
            this.setState({ slagalica: SlagalicaJez})
        }
        if(this.props.slide === 'raza'){
            this.setState({ slagalica: SlagalicaRaza})
        }
        if(this.props.slide === 'zvaka'){
            this.setState({ slagalica: SlagalicaZvaka})
        }
        if(this.props.slide === 'zirafa'){
            this.setState({ slagalica: SlagalicaZirafa })
        }
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
            }else{
                return;
            }
        } )
        //
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
        //
        // if(this.state.arr.length === slagalica.word.length){
        //     this.setState({complete: true})
        // }
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