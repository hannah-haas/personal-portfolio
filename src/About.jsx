import React, { Component, View } from 'react';
import me from "./me.jpg"
import test from "./4c4a4c42c9887180b1aed65bdfceb4f90d7b7cdd37f1dab345c170045f942bd2.jpg"
import "./About.css";
import linkedin from "./linkedin.jpg"
import mail from "./mail.jpg"
import github from "./github.jpg"
import resume from "./resume.jpg"

class About extends Component {
    render() {
        return (
            <div id="flexAbout">
                <p class="text" > Hi! My name is Hannah Haas!<br />
                    <br />
                    I am currently a Junior studying Computer Science at Brown University. <br />
                    <br />
                    I started UI/UX this year through a UI/UX course with Professor Huang at Brown. Since then, I have developed a variety of different interfaces and continue to explore new ways to express my creativity! <br />
                    <br />
                    When I’m not coding, you can find me exploring the outdoors, spending time with my family and friends, or cooking something new!
                    <br />
                    <br />
                    <br />
                    Connect with me below!
                    <br />
                    <br />
                    <div id="buttons">
                        <a href="https://www.linkedin.com/in/hannah-haas-bba921170/" target="_blank" >
                            <img src={linkedin} id="button" />
                        </a>
                        <a href="mailto: hannah_haas@brown.edu" target="_blank" >
                            <img src={mail} id="button" />
                        </a>
                        <a href="https://github.com/hannah-haas" target="_blank" >
                            <img src={github} id="button" />
                        </a>
                        <a href="https://drive.google.com/file/d/1zbUNLhmg6XH5OOofjLGEBaK2x0R_3PPW/view" target="_blank" >
                            <img src={resume} id="button" />
                        </a>
                    </div>
                </p >
                <div class="pic" >
                    <img id="mePic" src={me} />
                    <img id="mePic" src={test} />
                </div >
            </div>
        )
    }
}

export default About;
