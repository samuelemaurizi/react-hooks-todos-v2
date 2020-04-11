import React, { Fragment, useContext } from 'react';

import Todo from './Todo';
import { TodosContext } from './contexts/todos.context';

// Material UI Components
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const TodoList = () => {
  const { todos } = useContext(TodosContext);

  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <Fragment key={todo.id}>
              <Todo id={todo.id} {...todo} />
              {i < todo.length - 1 && <Divider />}
            </Fragment>
          ))}
        </List>
      </Paper>
    );

  return null;
};

export default TodoList;
