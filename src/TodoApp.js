import React from 'react';

import useTodoState from './hooks/useTodosState';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

// Material UI elements
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

// Styles
const bg = {
  minHeight: '100vh',
  backgroundColor: '#fafafa'
};

const navbar = {
  position: 'static',
  color: 'primary',
  backgroundColor: '#03a9f4',
  height: '64px'
};

const title = {
  color: 'inherit'
};

const main = {
  justifyContent: 'center',
  marginTop: '2rem'
};
// End Styles

const TodoApp = () => {
  // const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');
  const initialTodos = [{ id: 1, task: 'Do something..', completed: false }];

  // CRUD Operations from hooks
  const { todos, addTodo, deleteTodo, toggleTodo, editTodo } = useTodoState(
    initialTodos
  );

  // useEffect(() => {
  //   window.localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos]);

  return (
    <Paper style={bg}>
      <AppBar style={navbar}>
        <ToolBar>
          <Typography style={title}>Todos with Hooks</Typography>
        </ToolBar>
      </AppBar>
      <Grid container style={main}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;
