import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import { TodosContext } from './contexts/todos.context';

// Material UI Components
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

// Styles
const formContainer = {
  margin: '1rem 0',
  padding: '0.5rem 1rem',
};

const TodoForm = () => {
  const [value, handleChange, reset] = useInputState('');
  const { addTodo } = useContext(TodosContext);

  return (
    <Paper style={formContainer}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addTodo(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          label='Add New Todo'
          fullWidth
        />
      </form>
    </Paper>
  );
};

export default TodoForm;
