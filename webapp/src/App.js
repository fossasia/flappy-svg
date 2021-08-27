import React, { Component } from "react";
import { Router, browserHistory, Route, Link } from "react-router";

import "./App.css";
import About from "./Components/About/About";
import Controls from "./Components/Controls/Controls";
import Download from "./Components/Download/Download";
import Home from "./Components/HomeFolder/Home";
import NavbarComponent from "./Components/NavbarFolder/NavbarComponent";

const Page = ({ title }) => (
  <div className="App">
    {/* <div className="App-header">
      <h2>{title}</h2>
    </div>
    <p className="App-intro">This is the {title} page.</p>
    <p>
      <Link to="/">Home</Link>
    </p>
    <p>
      <Link to="/about">About</Link>
    </p>
    <p>
      <Link to="/settings">Settings</Link>
    </p> */}
  </div>
);

// const Home = (props) => <Page title="Home" />;

// const About = (props) => <Page title="About" />;

const Settings = (props) => <Page title="Settings" />;

class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />
        <Router history={browserHistory}>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/downloads" component={Download} />
          <Route path="/controls" component={Controls} />
        </Router>
      </div>
    );
  }
}

export default App;
