import React from 'react'
import './Todo.css'

function Todo(props) {
    // console.log(props)
    return (
        <div onClick={() => props.toggleItem(props.item.name)} className={`item${props.item.completed ? ' completed' : ''}`}>
            <h4>{props.item.name}</h4>
        </div>
    )
}

export default Todo