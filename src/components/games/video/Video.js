import React from 'react'

class Video extends React.Component{

    render() {
        return(
            <div className="main">
                <video
                    src="./a-s.mp4"
                    autoPlay
                    loop
                    style={{width:"100%", height:"100vh"}}
                />
                <a href="/"><img src={"./slides/button.png"} alt="btn" className="main-button" /></a>
            </div>
        )
    }
}

export default Video
