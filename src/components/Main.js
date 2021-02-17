import React from "react";

function Main() {
    return (
        <div style={{ width: "100%", height: "100vh", backgroundColor:"#625a52"}}>
            <a href="/dz01"><img src={"./slides/dz01start.png"} alt="btn" className="main-button" style={{marginTop: "9%" ,left:"30%", width:"15%"}} /></a>
            <a href="/dz02"><img src={"./slides/dz02start.png"} alt="btn" className="main-button" style={{marginTop: "9%" ,left:"55%", width:"15%"}} /></a>
            <a href="/dz03"><img src={"./slides/dz03start.png"} alt="btn" className="main-button" style={{marginTop: "28%" ,left:"30%", width:"15%"}} /></a>
            <a href="/dz04"><img src={"./slides/dz04start.png"} alt="btn" className="main-button" style={{marginTop: "28%" ,left:"55%", width:"15%"}} /></a>
        </div>
    )
}

export default Main