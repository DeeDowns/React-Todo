import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

// const todoData = [
//   {
//     todoItem: 'laundry',
//     id: 1
//   },
//   {
//     todoItem: 'cook dinner',
//     id: 2
//   },
//   {
//     todoItem: 'take out trash',
//     id: 3
//   },
// ]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todoData: [],
      inputText: ''
    }
    console.log(this.state)
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm inputText={this.state.inputText} />
        <TodoList todoData={this.state.todoData} />
      </div>
    );
  }
}

export default App;
