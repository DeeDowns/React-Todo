import React from 'react'

function TodoForm(props) {
   const  { inputText } = props
    return (
        <form>
            <input type='text' name='inputText' />
            <button>Add to List</button>
        </form>
    )
}

export default TodoForm
