import React from 'react';

export const Todo = ({todo, remove}) => {
  // Each Todo
  return (<li onClick={() => 
      {remove(todo.id)}}>
      {todo.text}</li>);
}