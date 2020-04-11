import React, { Fragment, useContext } from 'react';

import useToggleState from './hooks/useToggleState';
import EditTodo from './EditTodo';

import { TodosContext } from './contexts/todos.context';

// Material UI Components
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CheckBox from '@material-ui/core/CheckBox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const Todo = ({ id, task, completed }) => {
  const [isEditing, toggle] = useToggleState(false);
  const { toggleTodo, deleteTodo } = useContext(TodosContext);

  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ? (
        <EditTodo id={id} task={task} toggleEditForm={toggle} />
      ) : (
        <Fragment>
          <CheckBox
            checked={completed}
            tabIndex={-1}
            onClick={() => toggleTodo(id)}
          />
          <ListItemText
            style={{ textDecoration: completed ? 'line-through' : 'none' }}
          >
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton arial-label='Edit' onClick={toggle}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={() => deleteTodo(id)} arial-label='Delete'>
              <DeleteIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </Fragment>
      )}
    </ListItem>
  );
};

export default Todo;
