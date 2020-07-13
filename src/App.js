import React from 'react';
import ReactDOM from "react-dom";

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import "./"

const duties = [
  {
    task: 'Learn HTML',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Learn CSS',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Learn JavaScript',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Learn React',
    id: Date.now(),
    completed: false
  },
  {
    task: 'Learn Backend',
    id: Date.now(),
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      duties: duties
    };
  }

  addTodo = todoName => {
    this.setState({
      duties: [
        ...this.state.duties,
        {
          task: todoName,
          id: Date.now(),
          completed: false
        }
      ]
    });
  };

  toggleCompleted = todoId => {
    this.setState({
      duties: this.state.duties.map(todo => {
        if (todo.id === todoId) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  clearCompleted = () => {
    this.setState({
      duties: this.state.duties.filter(todo => {
        return !todo.completed;
      })
    });
  }

  render() {
    return (
      <div className='App'>
        <div className='header'>
          <h2>2020-2021 ToDo List!</h2>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <TodoList
          duties={this.state.duties}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
