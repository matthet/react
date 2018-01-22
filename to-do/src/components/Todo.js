import React from 'react';

const itemStyle = {
	cursor: 'pointer'
}

export const Todo = ({todo, remove}) => {
  // Each Todo
  return (<li style={itemStyle} onClick={() => 
      {remove(todo.id)}}>
      {todo.text}</li>);
}