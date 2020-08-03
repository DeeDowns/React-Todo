import React from 'react';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'


 const todoData = [
   {
     name: 'take a nap',
     completed: false,
     id: 1528817077286,

   },
 ]


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todoData: todoData,
    }
    // console.log(this.state)
  }

  toggleItem = (name) => {
    this.setState({
      todoData: this.state.todoData.map(item => {
        if(item.name === name) {
          return {
            ...item, 
            completed: !item.completed
          }
        } else {
          return item
        }
      })
    })
  }

  addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: Date.now()
    }
    this.setState({todoData: [...this.state.todoData, newItem]})
  }

  removeCompleted = (itemStatus) => {
    this.setState({todoData: [this.state.todoData.filter(item => item.completed !==itemStatus)]})
  }
  
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm  addItem={this.addItem} />
        <TodoList todoData={this.state.todoData} toggleItem={this.toggleItem} removeCompleted={this.removeCompleted}/>
      </div>
    );
  }
}

export default App;
