// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

function TodoList(props) {
    // console.log(props.todoData)
    return (
        <div>
          {props.todoData.map(item => (
              <Todo item={item} key={item.id} toggleItem={props.toggleItem} />
          ))}
          <button>Clear Completed</button>
        </div>
    )
} 

export default TodoList