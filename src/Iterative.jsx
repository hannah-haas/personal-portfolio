import React, { Component } from "react";
import "./work.css";
import sketch1 from "./sketch1.jpg"
import sketch2 from "./sketch2.jpg"
import dex from "./dex.jpg"


class Iterative extends Component {
    render() {
        return (
            <div >
                <div align="left" id="fonts">Iterative Design + User Testing - Social Media App</div>
                <p align="left" id="projInfo">
                    Project for Course UI/UX
                   <br />
                    November 2019
                    <br />
                    Tools used: Balsamiq, Figma
                </p>
                <p align="left" id="mainBody">
                    <div align="left" id="headers"> Intro: </div>
                    The startup Dex is here to better connect the world by reminding users to reach out to people they haven’t been in contact with recently. Dex allows users to sync their contacts and calendars in order to keep track of their socialization with various people. It also helps users organize and keep track of their conversations, by allowing for note-taking based on previous conversations, life updates, and more. For a UI/UX project, my group and I chose to design a mobile app for smartphones, in order to easily sync with common phone features, such as contacts, calendars, text-messaging, and calling.

                    <div align="left" id="headers"> Low Fidelity Mockups: </div>
                    As we began to think about our interface, we made several different low fidelity sketches. See two of the ones we designed below!
                    <img src={sketch1} class="center" />
                    <img src={sketch2} class="center" />

                    <div align="left" id="headers"> High Fidelity Mockups: </div>
                    Using Balsamiq, we then created a high fidelity mockup for some of the different pages of the app.
                    <img src={dex} class="center" />

                    <div align="left" id="headers"> User Testing: </div>
                    In order to test our high-fidelity interface further, we posted our prototype to UserTesting.com. Below we
                    have outlined our hypotheses and intended user tasks, along with the results of these tests. Also linked
                    above, the interactive prototype we used for our user testing is located <a href="https://www.figma.com/proto/uPxQNqkCFWF00kaYINuiRB/DEX?node-id=313%3A31&scaling=scale-down&fbclid=IwAR1hwHOx0sJ9_NGDvwol8f8xQdz7e3fbdAlAFslFmiADDY57cskk6w4Jilo" target="_blank">here!</a>
                    <br />
                    <br />
                    Our Hypotheses:
                     <br />
                    1. Users can easily navigate through the app and identify more than half of the designed functionalities
                    as well as their corresponding features.
                    <br />
                    2. Users can successfully execute the task they wish to perform without any confusion or difficulty.
                    <br />
                    3. Users can complete all sub-tasks in less than 60 seconds
                    <div align="left" id="headers"> Results: </div>


                    - The testing was overall successful in that we managed both to acquire enough information to
                    sufficiently test the hypotheses we raised and to identify how we can improve the interface.
                    <br />
                    - The subtasks provided clear instructions for the users as well as sufficient information for us to test
                    our first two hypotheses.
                    <br />
                    - However, the task instruction for UserTesting could be made more precise so that it better relates to
                    the last hypothesis we planned to test. For instance, the last hypothesis, which measures the time it
                    takes for users to complete the tasks, is not accurately reflected by the test results. We initially
                    thought that the users would execute the task first and then move on to the explanation. But in reality,
                    all three test users were performing and explaining the task at the same time, resulting in longer Time
                    on Task measurements than real-life scenarios. Thus, for any hypothesis regarding Task on Time, we
                    should explicitly ask users to finish performing the tasks before explaining their thoughts.
                    <br />
                    - As for areas for improvement in our interface, we learn that “less is more” is essential in UI/UX design.
                    In order to reach the widest range of audience, we have to assume the minimal amount of memory
                    space required to use the app. It is important to make sure that our users don’t feel lost or confused
                    when they are looking for a certain feature that’s necessary to accomplish their goal.

                </p>
            </div >
        );
    }
}

export default Iterative;
