import React, { Component } from "react";
import "./work.css";
import development from "./development.png"



class Development extends Component {
    render() {
        return (
            <div >
                <div align="left" id="fonts">Development - Ski Mountain Filter</div>
                <p align="left" id="projInfo">
                    Project for Course UI/UX
                   <br />
                    November 2019
                    <br />
                    Tools used: React
                </p>
                <p align="left" id="mainBody">
                    <div align="left" id="headers"> Intro: </div>
                    For a UI/UX project at school, we have the task of creating an interface that can be used to filter things! The goal of my application/interface was to provide an easy and effective way to display and categorize ski mountains. It is valueable to users as they can look up and filter mountains relating to them (ie if they are a beginner skier than they can filter by easy mountains) and also can easily save and view the mountains they have visited!

                    <div align="left" id="headers"> Designing: </div>
                    When designing this interface, I focused on simplicity, cohesion, and an intuitive design. I developed a color pallete focusing on white and blue. This color pallete is effective as it allows for cohesion and also relates to snow and skiing! Additionally, I only added few elements in the interface in order to remain simplistic. I added a navigation bar to clearly outline how to navigate pages and positioned the filters at the top of the page with labels to clearly show their purpose. Finally, I added some informational texts to assist the user in knowing how to use the interface! The mountains, their images, and their information is passed down from the app class to the page class, and then from there to the gallery page, filtered list page, and my list page. Additionally, a boolean prop is passed to the list item to handle clicking for the my list vs filtered list (there is a click event in my list but not in filtered list). User interactions trigger changes in the states of components in various ways. Clicking on the elements in the navigation bar at the top of the page triggers a change in the state of the page displayed (gallery, all mountains, my mountains). Furthermore, on the all mountains page the user triggers changes in the states by clicking on the different drop down menus, input textbox, and clear button. The user also triggers changes on this page and the my mountains page when hovering over the mountain box which changes the logo picture to a trail map picture. Finally, when the user clicks on mountains in the my mountain page, they trigger changes and add mountains to the list!                    {/* <img src={habHigh} class="center" /> */}
                    <img src={development} class="center" />
                    <div align="left" id="headers"> Developing: </div>
                    I developed my interface using React!
                    <br />
                    <br />
                    Check out the deployed website <a href="https://fierce-taiga-73062.herokuapp.com/" target="_blank">here!</a>
                </p>
            </div >
        );
    }
}

export default Development;
