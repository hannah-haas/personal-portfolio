import React, { Component } from 'react';
import Work from "./work";




class WorkHome extends Component {
    constructor(props) {
        super(props);

        console.log("Wshkdjge")
        this.state = {
            currPage: <Work items={{ state: this.props.items.state }} />,
            isAll: true,
            isMy: false,
            isGallery: false,
            // thing: this.props.props.reset,
            // curr: "home",

        };
    }


    render() {
        // console.log(this.state.thing)
        // console.log(this.state.curr)
        // if (this.state.thing === true && this.state.curr !== "home") {
        //     this.setState({
        //         currPage: <Work items={{ state: this.handler.bind(this) }} />,
        //         curr: "home"
        //     });
        // }

        var div = (
            <div className="Page" >
                <div>
                    {this.state.currPage}
                </div>
            </div >
        );

        // console.log("state", this.state.thing)
        // console.log("props", this.props.props.reset)

        // if (this.state.thing === true) {
        //     console.log("true")
        // } else {
        //     console.log("false!")
        //     // this.setState({

        //     // })
        // }
        // if (this.state.thing === false) {
        //     this.setState({
        //         thing: true,
        //     });
        // }
        return div;
    }
}
export default WorkHome;







