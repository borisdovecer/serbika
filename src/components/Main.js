import React from "react";
import Dz01 from './dz/Dz01'

import Dz02 from './dz/Dz02'
import Dz03 from './dz/Dz03'
import Dz04 from './dz/Dz04'
import Dz05 from './dz/Dz05'
import Dz06 from './dz/Dz06'
import Dz07 from './dz/Dz07'
import Dz08 from "./dz/Dz08"
import Dz09 from "./dz/Dz09"
import Dz10 from "./dz/Dz10"
import Dz11 from './dz/Dz11'
import Dz12 from "./dz/Dz12";

class Main extends React.Component {
    state = {
            dz: 0
    }

    SelectDz = (e) => {
            let dz = e.target.attributes.name.value
            this.setState({dz:parseInt(dz)})
    }

    render() {
        let {dz} = this.state
        return (
            <div style={{width: "100%"}} >
              {dz === 0 ? <div style={{ width: "100%", height: "100vh", backgroundColor:"#625a52"}}>
                  <img src={"./slides/dz01start.png"} alt="btn" name={1} className="main-button" style={{marginTop: "4%" ,left:"2%", width:"10%"}} onClick={this.SelectDz} />
                  <img src={"./slides/dz02start.png"} alt="btn" name={2} className="main-button" style={{marginTop: "4%" ,left:"14%", width:"10%"}} onClick={this.SelectDz} />
                  <img src={"./slides/dz03start.png"} alt="btn" name={3} className="main-button" style={{marginTop: "4%" ,left:"26%", width:"10%"}} onClick={this.SelectDz} />
                  <img src={"./slides/dz04start.png"} alt="btn" name={4} className="main-button" style={{marginTop: "4%" ,left:"38%", width:"10%"}} onClick={this.SelectDz} />
                  <img src={"./slides/dz05start.png"} alt="btn" name={5} className="main-button" style={{marginTop: "4%" ,left:"50%", width:"10%"}} onClick={this.SelectDz} />
                  <img src={"./slides/dz06start.png"} alt="btn" name={6} className="main-button" style={{marginTop: "4%" ,left:"62%", width:"10%"}} onClick={this.SelectDz} />

                  <img src={"./slides/dz07start.png"} alt="btn" name={7} className="main-button" style={{marginTop: "14%" ,left:"2%", width:"10%"}} onClick={this.SelectDz} />
                  <img src={"./slides/dz08start.png"} alt="btn" name={8} className="main-button" style={{marginTop: "14%" ,left:"14%", width:"10%"}} onClick={this.SelectDz} />
                  <img src={"./slides/dz09start.png"} alt="btn" name={9} className="main-button" style={{marginTop: "14%" ,left:"26%", width:"10%"}} onClick={this.SelectDz} />
                  <img src={"./slides/dz10start.png"} alt="btn" name={10} className="main-button" style={{marginTop: "14%" ,left:"38%", width:"10%"}} onClick={this.SelectDz} />
                  <img src={"./slides/dz11start.png"} alt="btn" name={11} className="main-button" style={{marginTop: "14%" ,left:"50%", width:"10%"}} onClick={this.SelectDz} />
                  <img src={"./slides/dz12start.png"} alt="btn" name={12} className="main-button" style={{marginTop: "14%" ,left:"62%", width:"10%"}} onClick={this.SelectDz} />

                  {/*<a href="/"><img src={"./slides/play.png"} alt="btn" className="main-button" style={{marginTop: "24%" ,left:"2%", width:"10%"}} /></a>*/}
                  {/*<a href="/"><img src={"./slides/play.png"} alt="btn" className="main-button" style={{marginTop: "24%" ,left:"14%", width:"10%"}} /></a>*/}
                  {/*<a href="/"><img src={"./slides/play.png"} alt="btn" className="main-button" style={{marginTop: "24%" ,left:"26%", width:"10%"}} /></a>*/}
                  {/*<a href="/"><img src={"./slides/play.png"} alt="btn" className="main-button" style={{marginTop: "24%" ,left:"38%", width:"10%"}} /></a>*/}
                  {/*<a href="/"><img src={"./slides/play.png"} alt="btn" className="main-button" style={{marginTop: "24%" ,left:"50%", width:"10%"}} /></a>*/}
                  {/*<a href="/"><img src={"./slides/play.png"} alt="btn" className="main-button" style={{marginTop: "24%" ,left:"62%", width:"10%"}} /></a>*/}

                  {/*<a href="/"><img src={"./slides/play.png"} alt="btn" className="main-button" style={{marginTop: "34%" ,left:"2%", width:"10%"}} /></a>*/}
                  {/*<a href="/"><img src={"./slides/play.png"} alt="btn" className="main-button" style={{marginTop: "34%" ,left:"14%", width:"10%"}} /></a>*/}
                  {/*< href="/"><img src={"./slides/play.png"} alt="btn" className="main-button" style={{marginTop: "34%" ,left:"26%", width:"10%"}} /></a>*/}
                  {/*<a href="/"><img src={"./slides/play.png"} alt="btn" className="main-button" style={{marginTop: "34%" ,left:"38%", width:"10%"}} /></a>*/}
                  {/*<a href="/"><img src={"./slides/play.png"} alt="btn" className="main-button" style={{marginTop: "34%" ,left:"50%", width:"10%"}} /></a>*/}
                  {/*<a href="/"><img src={"./slides/play.png"} alt="btn" className="main-button" style={{marginTop: "34%" ,left:"62%", width:"10%"}} /></a>*/}
              </div> : null}
              {dz === 1 ? <Dz01 /> : null }
              {dz === 2 ? <Dz02 /> : null }
              {dz === 3 ? <Dz03 /> : null }
              {dz === 4 ? <Dz04 /> : null }
              {dz === 5 ? <Dz05 /> : null }
              {dz === 6 ? <Dz06 /> : null }
              {dz === 7 ? <Dz07 /> : null }
              {dz === 8 ? <Dz08 /> : null }
              {dz === 9 ? <Dz09 /> : null }
              {dz === 10 ? <Dz10 /> : null }
              {dz === 11 ? <Dz11 /> : null }
              {dz === 12 ? <Dz12 /> : null }
            </div>
        )
    }
}

export default Main