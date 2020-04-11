import React, { createContext } from 'react';
import useTodosState from '../hooks/useTodosState';

const defaultTodos = [
  { id: 1, task: 'Prepare dinner', completed: false },
  { id: 2, task: 'Wash dishes', completed: true },
];

export const TodosContext = createContext();

export function TodosProvider(props) {
  // const {todos, addTodo, deleteTodo, toggleTodo, editTodo } = useTodosState(defaultTodos)
  const todosStuff = useTodosState(defaultTodos);

  return (
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  );
}
