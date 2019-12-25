import React, { Component } from "react";

import users from "./users";
import "./App.css";

import List from "./components/List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users,
      actives: [],
      inactives: []
    };
  }
  componentDidMount() {
    const { users } = this.state;
    const actives = [];
    const inactives = [];
    users.forEach(item => {
      if (item.isActive) {
        actives.push(item);
      } else {
        inactives.push(item);
      }
      this.setState({ actives, inactives });
    });
  }
  render() {
    const { actives, inactives } = this.state;
    return (
      <div className="App">
        <List title="Actives" list={actives} />
        <List title="InActives" list={inactives} />
      </div>
    );
  }
}

export default App;
