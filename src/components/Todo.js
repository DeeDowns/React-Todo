import React from 'react'

function Todo(props) {
    // console.log(props)
    return (
        <div>
            <h4>{props.item.name}</h4>
        </div>
    )
}

export default Todo