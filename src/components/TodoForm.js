import React from 'react'
import { TextField, Button }from '@material-ui/core'
import TodoFormContainer from '../styled components/TodoFormContainer'

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
            <TodoFormContainer onSubmit={this.handleSubmit}>
                <div className='input-container'>
                    <TextField 
                    variant='outlined' 
                    type='text' 
                    name='inputText' 
                    value={this.state.inputText} 
                    onChange={this.handleChanges}
                    label='Add To-Do Item' 
                   />
                </div>
                <div className='button-container'>
                    <Button onClick={this.handleSubmit} variant='contained' color='primary'>Add to List</Button>
                </div>
            </TodoFormContainer>
        )
    }
}

export default TodoForm
