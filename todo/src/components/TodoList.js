import React, { Component } from "react";
import { connect } from "react-redux";

import { newTodo, toggleComplete, deleteTodo } from "../actions";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodo: ""
    };
  }

  onChange = e => {
    this.setState({ newTodo: e.target.value });
  };

  newTodo = e => {
    e.preventDefault();
    const todo = {
      value: this.state.newTodo,
      completed: false
    };
    this.props.newTodo(todo);
    this.setState({ newTodo: "" });
  };

  toggleComplete = (e, index) => {
    this.props.toggleComplete(index);
  };

  render() {
    console.log(this.props.todos);
    return (
      <div>
        <h3>List of Todos</h3>
        {this.props.todos.map((todo, index) => (
          <li key={index}>
            <span
              onClick={e => this.toggleComplete(e, index)}
              className={todo.completed ? "completed" : null}
            >
              {todo.value}
            </span>
            <button onClick={() => this.props.deleteTodo(index)}>Delete</button>
          </li>
        ))}
        <form>
          <input
            type="text"
            placeholder="add todo"
            name="newTodo"
            value={this.state.newTodo}
            onChange={this.onChange}
          />
          <button onClick={this.newTodo}> Add todo </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  { newTodo, toggleComplete, deleteTodo }
)(TodoList);
