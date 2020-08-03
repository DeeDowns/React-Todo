import React from 'react'

class TodoForm extends React.Component  {
    constructor() {
        super()
        this.state = {
            inputText: ''
        }
    }

  
   handleChanges = event => {
       this.setState({inputText: event.target.value})
    //    console.log(this.state)
   }

   handleSubmit = event => {
       event.preventDefault()
       this.props.addItem(this.state.inputText)
       this.setState({inputText: ''})
   }
   render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='inputText' value={this.state.inputText} onChange={this.handleChanges} />
                <button>Add to List</button>
            </form>
        )
    }
}

export default TodoForm
