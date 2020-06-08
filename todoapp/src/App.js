import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddForm";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Buy some milk" },
      { id: 2, content: "Play mario kart" },
    ],
  };

  deleteTodo = (id) => {
    const newTodos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });

    this.setState({
      todos: newTodos,
    });
  };

  addTodo = (todo) => {
    todo.id = Math.random();
    let newTodos = [...this.state.todos, todo];

    this.setState({
      todos: newTodos,
    });
  };

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
