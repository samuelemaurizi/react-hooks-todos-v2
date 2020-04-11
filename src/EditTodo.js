import React, { useContext } from 'react';
import useInputState from './hooks/useInputState';
import { TodosContext } from './contexts/todos.context';

import TextField from '@material-ui/core/TextField';

// Styles
const formStyle = {
  marginLeft: '1rem',
  width: '50%',
};

const EditTodo = ({ id, task, toggleEditForm }) => {
  const [value, handleChange, reset] = useInputState(task);
  const { editTodo } = useContext(TodosContext);

  return (
    <form
      style={formStyle}
      onSubmit={(e) => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditForm();
      }}
    >
      <TextField
        label={task}
        value={value}
        onChange={handleChange}
        fullWidth
        autoFocus
      />
    </form>
  );
};

export default EditTodo;
