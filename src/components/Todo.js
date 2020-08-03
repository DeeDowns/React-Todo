import React from 'react'

function Todo(props) {
    const {todoItem } = props
    return (
        <div>
            <p>{todoItem}</p>
        </div>
    )
}

export default Todo