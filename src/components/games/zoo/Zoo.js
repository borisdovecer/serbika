import React from "react"

class Zoo extends React.Component {
    state = {
        animals: [],
        count: 0,
        arr:[],
        complete: false
    }

    componentDidMount() {
        let {animals} = this.props
        let count = 0
        animals.forEach(a => {
            if(a.move){
                count++
            }
        })
        this.setState({animals, count})
    }

    hadleClick = (e) => {
        let {animals,arr, count} = this.state
        let id = e.target.attributes.id.value
        if(animals[id].move){
            animals[id].found=true
            arr.push(animals[id].name)
        }
        this.setState({animals,arr })
        if(arr.length === count){
            this.setState({complete: true})
        }
    }

    render() {
        let {animals, complete} = this.state
        return(
            <div className={"main"}>
                {complete ? <img src={"./slides/button.png"} alt="btn" className="main-button" onClick={this.props.nextSlide}/> : null}
                <div style={{width:"40%", position:"absolute"}}>
                    {animals.map((a, i) =>
                        <div style={a.found ? {
                            transform: `translate(${a.movex}px, ${a.movey}px)`,
                            transition: 'transform 2s'
                        } : null}>
                            <img onClick={this.hadleClick} key={i} id={i} src={"./slides/"+a.image}  alt={'sifra'} style={{width:"30%", position:"absolute", marginTop:a.top, left:a.left }} />
                        </div>
                    )}
                </div>
                <img src={"./slides/zoo.jpg"}  alt={'sifra'} style={{width:"50%", position:"absolute", zIndex:-1, marginTop:"5%", right:"2%" }} />
            </div>
        )
    }
}

export default Zoo