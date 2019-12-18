import React from "react";
import "./App.css";

import Column from "./components/Column";

const BASE_URL = "https://jsonplaceholder.typicode.com";

class App extends React.PureComponent {
  state = {
    isLoading: true,
    data: null
  };

  handleConvert = (item, list) => {
    const { id } = item;

    const newList = list.filter(elem => elem.id !== id);
    if (item.completed) {
      this.setState({
        completed: newList,
        toDo: [...this.state.toDo, { ...item, completed: false }]
      });
    } else {
      this.setState({
        toDo: newList,
        completed: [...this.state.completed, { ...item, completed: true }]
      });
    }
  };

  handleEdit = (newTitle, id, list, type) => {
    list.forEach(item => {
      if (item.id === id) {
        item.title = newTitle;
      }
    });
    console.log(type);
    type === "completed"
      ? this.setState({ completed: list })
      : this.setState({ toDo: list });
  };
  componentDidMount() {
    fetch(`${BASE_URL}/todos`)
      .then(res => res.json())
      .then(data => {
        const completed = [];
        const toDo = [];
        data.forEach(task => {
          if (task.completed) {
            completed.push(task);
          } else {
            toDo.push(task);
          }
        });
        this.setState({ isLoading: false, completed, toDo });
      });
  }
  render() {
    const { isLoading, completed, toDo } = this.state;
    if (isLoading) {
      return <h1>Loading...</h1>;
    }
    return (
      <div className="App">
        <Column
          title="todo"
          list={completed}
          handleConvert={this.handleConvert}
          handleEdit={this.handleEdit}
        />
        <Column
          title="completed"
          list={toDo}
          handleConvert={this.handleConvert}
        />
      </div>
    );
  }
}

export default App;
