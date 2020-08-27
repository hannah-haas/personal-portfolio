import React, { Component } from "react";
import "./work.css";
import oldBajas from "./oldBajas.jpg"
import low from "./low.jpg"
import high from "./high.jpg"


class Redesign extends Component {
    render() {
        return (
            <div >
                <div align="left" id="fonts">Bajas Redesign</div>
                <p align="left" id="projInfo">
                    Project for Course UI/UX
                   <br />
                    October 2019
                    <br />
                    Tools used: Figma, Balsamiq, HTML/CSS, JavaScript
                </p>
                <p align="left" id="mainBody">
                    <div align="left" id="headers"> Intro: </div>
                    I have redesigned a local restaurant’s website for an assignment for the class CS 1300: User Interfaces and User Experience. The assignment was to find a public interface that we thought needed improvements in usability, responsiveness, and visual aesthetics. I created low-fidelity mockups for 4 of the pages, a high-fidelity mockup for a single page, and further coded this page with responsiveness. As you can see in the image below, the current interface for Bajas is very frustrating and not appealing.
                    <img src={oldBajas} class="center" />
                    <div align="left" id="headers"> Low Fidelity Mockups: </div>
                    Using Balsamiq, I then created low fidelity mockups for four of the pages. However, I decided to focus on the gallery page for this assignment, so I am just including the mockup for that!
                    <img src={low} class="center" />
                    <div align="left" id="headers"> High Fidelity Mockups: </div>
                    Using Figma, I then created a high fidelity mockups that include color and visual aesthetic changes! In my redesign, I changed the color pallette, improved alignment, and improved readability. The main purpose of this page is the gallery, therefore I make this the main component. However, I still keep the navigation tab and filters at the top as those are the first things read by users and are important for navigation and the structure of the rest of the page. Additionally, I use a grid layout and treat equal elements (the photos) with equal space as discussed in lecture. I also use white text with a clear font against the green background to make the labels stand out more and improve readability. Finally, I changed the color pallette from having four main colors to just two. This use of two colors looks a lot cleaner, simpler, and ties in with Bajas’ green color. This change in color pallette improves readability and is more aesthetically pleasing. Overall, my changes make it a more effective, readable, and aesthetically pleasing interface.
                    Additionally, I designed the interface to be responsive for different screen sizes. Below are the mockups for both desktop and smartphone sizes!
                    <img src={high} class="center" />

                </p>
            </div >
        );
    }
}

export default Redesign;
