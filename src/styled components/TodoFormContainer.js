import styled from 'styled-components'

const TodoFormContainer = styled.form `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    border: 3px solid grey;

    .input-container {
        margin: 3%;
    }
    .button-container {
        margin: 3%;
    }

`
export default TodoFormContainer