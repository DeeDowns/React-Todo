// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'
import TodoListContainer from '../styled components/TodoListContainer'
import { Button } from '@material-ui/core'

function TodoList(props) {
    // console.log(props.todoData)
    const clearCompleted = () => {
        props.removeCompleted()
    }
    return (
        <TodoListContainer>
          {props.todoData.map(item => (
              <Todo item={item} key={item.id} toggleItem={props.toggleItem} />
          ))}
          <div className='button-container'>
            <Button className='button' variant='contained' color='primary' onClick={clearCompleted}>Clear Completed
            </Button>
          </div>

        </TodoListContainer>
    )
} 

export default TodoList