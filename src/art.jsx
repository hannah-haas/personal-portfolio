import React, { Component, View, Button } from 'react';
import "./work.css";
import comp2 from "./comp2.png";
import dogs from "./dogs.png";
import mayaBeach from "./mayaBeach.png";
import mayaOkemo from "./mayaOkemo.png";
import mom from "./mom.png";
import blue from "./blue.png";
import Rotational from "./Rotational.png";
import tcomp from "./tcomp.png";
import sleds from "./sleds.png";




class Art extends Component {

    handleClick = (project) => {
        this.props.items.state(project)

    }

    render() {
        return (
            <div>
                <div class="designSection">
                    <div class="designColumn">
                        <img src={comp2} class="designPic" />
                        <img src={mayaBeach} class="designPic" />
                        <img src={dogs} class="designPic" />
                    </div>

                    <div class="designColumn">
                        <img src={mayaOkemo} class="designPic" />
                        <img src={tcomp} class="designPic" />
                        <img src={Rotational} class="designPic" />
                    </div>

                    <div class="designColumn">
                        <img src={mom} class="designPic" />
                        <img src={blue} class="designPic" />
                        <img src={sleds} class="designPic" />
                    </div>
                </div>
            </div >
        );
    }
}


export default Art;
