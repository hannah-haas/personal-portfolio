import React, { Component, rgb } from 'react';
import About from "./About";
import Home from "./home";
import Development from "./Development";
import Redesign from "./Redesign";
import HAB from "./HAB";
import Iterative from "./Iterative";
import Work from "./work";
import Art from "./art";


class Page extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currPage: <Home />,
            isAll: true,
            isMy: false,
            isGallery: false,
            allColor: true,
            myColor: false,
            galleryColor: false,
            allHover: false,
            myHover: false,
            galleryHover: false,
            artColor: false,
            artHover: false,
        };
    }
    clicked(a) {
        if (a === "home") {
            this.setState({
                currPage: <Home />,
                allColor: true,
                myColor: false,
                galleryColor: false,
                artColor: false,

            })
        } else if (a === "work") {
            this.setState({
                currPage: <Work items={{ state: this.handler.bind(this) }} />,
                allColor: false,
                myColor: true,
                galleryColor: false,
                artColor: false,
            })
        } else if (a === "about me") {
            this.setState({
                currPage: <About />,
                allColor: false,
                myColor: false,
                galleryColor: true,
                artColor: false,
            })
        } else if (a === "art") {
            this.setState({
                currPage: <Art />,
                allColor: false,
                myColor: false,
                galleryColor: false,
                artColor: true,
            })
        }
    }

    handler(a) {
        if (a === "iterative") {
            this.setState({
                currPage: <Iterative />,
            })
        } else if (a === "redesign") {
            console.log("work clicked")
            this.setState({
                currPage: <Redesign />,
            })
        } else if (a === "hab") {
            this.setState({
                currPage: <HAB />,
            })
        } else if (a === "development") {
            this.setState({
                currPage: <Development />,
            })
        }
    }

    render() {
        return (
            <div className="Page" >
                <div id="topBar">
                    <div id="hannah">
                        Hannah Haas
                    </div>
                    <div id="navBar" >

                        <div style={{ fontFamily: "fantasy", color: (this.state.allColor || this.state.allHover) === true ? '#00B1E1' : 'grey' }} onMouseOver={() => this.setState({ allHover: true })} onMouseLeave={() => this.setState({ allHover: false })} className="navElement" onClick={() => this.clicked("home")}>
                            home
                        </div>
                        <div style={{ fontFamily: "fantasy", color: 'grey', font: '20px', paddingLeft: '8px', paddingRight: '8px' }} >
                            |
                        </div>
                        <div style={{ fontFamily: "fantasy", color: (this.state.myColor || this.state.myHover) === true ? '#00B1E1' : 'grey' }} onMouseOver={() => this.setState({ myHover: true })} onMouseLeave={() => this.setState({ myHover: false })} onClick={() => this.clicked("work")}>
                            work
                        </div>
                        <div style={{ fontFamily: "fantasy", color: 'grey', font: '20px', paddingLeft: '8px', paddingRight: '8px' }} >
                            |
                        </div>
                        <div style={{ fontFamily: "fantasy", color: (this.state.artColor || this.state.artHover) === true ? '#00B1E1' : 'grey' }} onMouseOver={() => this.setState({ artHover: true })} onMouseLeave={() => this.setState({ artHover: false })} onClick={() => this.clicked("art")}>
                            art
                        </div>
                        <div style={{ fontFamily: "fantasy", color: 'grey', font: '20px', paddingLeft: '8px', paddingRight: '8px' }} >
                            |
                        </div>
                        <div style={{ fontFamily: "fantasy", color: (this.state.galleryColor || this.state.galleryHover) === true ? '#00B1E1' : 'grey' }} onMouseOver={() => this.setState({ galleryHover: true })} onMouseLeave={() => this.setState({ galleryHover: false })} className="navElement" onClick={() => this.clicked("about me")}>
                            about me
                        </div>
                    </div>
                </div>
                <div>
                    {this.state.currPage}
                </div>
            </div >
        );
    }
}

export default Page;




