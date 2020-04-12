import React from 'react';

import TodoForm from './TodoForm';
import TodoList from './TodoList';

import { TodosProvider } from './contexts/todos.context';

// Material UI elements
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/ToolBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

// Styles
const bg = {
  minHeight: '100vh',
  backgroundColor: '#fafafa',
};

const navbar = {
  position: 'static',
  color: 'primary',
  backgroundColor: '#03a9f4',
};

const title = {
  color: 'inherit',
  fontSize: '2rem',
  fontWeight: 800,
};

const main = {
  justifyContent: 'center',
  marginTop: '2rem',
};
// End Styles

const TodoApp = () => {
  return (
    <Paper style={bg}>
      <AppBar style={navbar}>
        <ToolBar>
          <Typography style={title}>DoTi</Typography>
        </ToolBar>
      </AppBar>
      <Grid container style={main}>
        <Grid item xs={11} md={8} lg={4}>
          <TodosProvider>
            <TodoForm />
            <TodoList />
          </TodosProvider>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default TodoApp;
