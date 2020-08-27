import React, { Component } from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import "./App.css";
import Page from "./Page";
// const Page = () => <Page />



class App extends Component {

  // render() {
  //   return (
  //     <div className="App" >
  //       <Page />
  //     </div>
  //   );
  // }
  render() {
    return (
      <HashRouter basename='/'>
        <div>
          {/* <ul> */}
          {/* <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li> */}
          <Route exact path="/" component={Page} />
          {/* </ul> */}
          {/* <hr /> */}
          {/* <Route exact path="/" component={Home} />
          <Route path="/about" component={About} /> */}
        </div>
      </HashRouter>
    );
  }
}


export default App;
