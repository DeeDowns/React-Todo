// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

function TodoList(props) {
    // console.log(props.todoData)
    const clearOnSubmit = event => {
        event.preventDefault()
        props.removeCompleted(event.target.name)
    }
    return (
        <div>
          {props.todoData.map(item => (
              <Todo item={item} key={item.id} toggleItem={props.toggleItem} />
          ))}
          <button onClick={clearOnSubmit}>Clear Completed</button>
        </div>
    )
} 

export default TodoList