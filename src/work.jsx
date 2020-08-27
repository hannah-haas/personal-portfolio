import React, { Component, View, Button } from 'react';
import "./work.css";
import bajas from "./bajas.png";
import development from "./development.png";
import dex from "./dex.png";
import focal from "./focal.png";


class Work extends Component {

    handleClick = (project) => {
        this.props.items.state(project)

    }

    render() {
        return (
            <div id="flexWork">
                <div class="workPiece1">
                    <div class="container" onClick={() => this.handleClick("redesign")}>
                        <img class="image" src={bajas} />
                        <div class="middle">
                            <div class="workText">Redesign</div>
                        </div>
                    </div>
                </div >
                <div class="workPiece2" >
                    <div class="container" onClick={() => this.handleClick("development")}>
                        <img class="image" src={development} />
                        <div class="middle">
                            <div class="workText">Development</div>
                        </div>
                    </div>
                </div >
                <div class="workPiece3" >
                    <div class="container" onClick={() => this.handleClick("iterative")}>
                        <img class="image" src={dex} />
                        <div class="middle">
                            <div class="workText">Iterative Design</div>
                        </div>
                    </div>
                </div >
                <div class="workPiece4" >
                    <div class="container" onClick={() => this.handleClick("hab")}>
                        <img class="image" src={focal} />
                        <div class="middle">
                            <div class="workText">Hack@Brown</div>
                        </div>
                    </div>
                </div >
            </div>
        );
    }
}


export default Work;
