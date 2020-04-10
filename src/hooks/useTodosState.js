// import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useLocaStorageState from './useLocalStorageState';

export default initialTodos => {
  const [todos, setTodos] = useLocaStorageState('todos', initialTodos);

  // CRUD Operations
  const addTodo = newTodoText => {
    setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
  };

  const deleteTodo = todoId => {
    const updatedTodos = todos.filter(todo => todo.id !== todoId);

    setTodos(updatedTodos);
  };

  const toggleTodo = todoId => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    );

    setTodos(updatedTodos);
  };

  const editTodo = (todoId, newTask) => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoId ? { ...todo, task: newTask } : todo
    );

    setTodos(updatedTodos);
  };

  return {
    todos,
    addTodo: addTodo,
    deleteTodo: deleteTodo,
    toggleTodo: toggleTodo,
    editTodo: editTodo
  };
};
