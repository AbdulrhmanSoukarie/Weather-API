import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Abdulrhman Soukarieh"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
       
      
        <Search handleInput={this.handleInputChange} />
        <SayHello color="black" name={this.state.name} />
        <SayHi />
      </div>
    );
  }
}

export default App;
