import React, { Component } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <h1>todo</h1>
        <TodoList />
      </div>
    );
  }
}

export default App;
