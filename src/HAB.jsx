import React, { Component } from "react";
import "./work.css";
import oldBajas from "./oldBajas.jpg"
import low from "./low.jpg"
import habHigh from "./habHigh.jpg"


class HAB extends Component {
    render() {
        return (
            <div >
                <div align="left" id="fonts">Hack@Brown Project - Focal Point@Brown</div>
                <p align="left" id="projInfo">
                    Personal Project developed at Hack@Brown
                   <br />
                    February 2019
                    <br />
                    Tools used: Figma, React
                </p>
                <p align="left" id="mainBody">
                    <div align="left" id="headers"> Intro: </div>
                    During the Hackathon at Brown, a team of 4 other students and I redesigned the focal point tool at Brown. As many of us were sophomores and currently in the process of choosing our concentrations, we were frustrated with the tool and thought that is had room for improvement! Many were frustrated with the poor design and lack of organization, and wished for the option to see required/available classes, and to be able to compare concentrations side by side. Using these ideas and our own, we began to design and create some mockups. The high fidelity mockups we created using balsamiq can be seen below!
                    <div align="left" id="headers"> Prototyping </div>
                    My group and I went around to other groups at the hackathon to get their opinions of Focal Point and to learn more about what they would want out of the tool.
                    <img src={habHigh} class="center" />
                    <div align="left" id="headers"> Developing: </div>
                    My group and I then coded this project using React! We added features that allow you to input the classes you are taking and then recommend concentrations based on that, the ability to compare concentrations side by side, and lists a variety of useful pieces of information.
                    <br />
                    <br />
                    Check out the deployed website <a href="http://stanleyyip.com/hab_2019/" target="_blank">here!</a>
                </p>
            </div >
        );
    }
}

export default HAB;
