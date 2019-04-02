import React, { Component } from "react";

import axios from "axios";

import Register from "../src/register";

class App extends Component {
  // initialize our state

  state = {
    data: [],

    id: 0,

    message: null,

    intervalIsSet: false,

    idToDelete: null,

    idToUpdate: null,

    objectToUpdate: null
  };

  render() {
    //const { data } = this.state;

    return <Register />;
  }
}

export default App;
