import React, { Fragment } from 'react';

import Todo from './Todo';

// Material UI Components
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const TodoList = ({ todos, deleteTodo, toggleTodo, editTodo }) => {
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <Fragment key={todo.id}>
              <Todo
                id={todo.id}
                task={todo.task}
                completed={todo.completed}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
              {i < todo.length - 1 && <Divider />}
            </Fragment>
          ))}
        </List>
      </Paper>
    );

  return null;
};

export default TodoList;
