import React, { Component } from "react";
import "./App.css";
import Page from "./Page";
import beach from "./beach2.jpg"
import snow from "./snow2.jpg"


class Home extends Component {
    render() {
        return (
            <div >
                {/* <div class="container"> */}
                <img src={beach} style={{ height: "100%", width: "100%", opacity: 0.8 }} />
                {/* <div class="container"> */}
                <p class="line-1 anim-typewriter"> Welcome! </p>
                {/* <div class="container"> */}
                <p class="intro">
                    I'm Hannah, a computer scientist and UI/UX designer studying at Brown University. Check out some of my work or learn more about me!
                    </p>
                {/* </div> */}
            </div>
        );
    }
}

export default Home;
