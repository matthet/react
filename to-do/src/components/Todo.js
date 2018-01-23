import React from 'react';
import { styles } from '../styles/styles';

export const Todo = ({todo, index, remove}) => {
  // Each Todo item
  return (
  	<div style={styles.todoItem}>
	  	<span>{index}. </span>
	  	<span style={styles.li} onClick={() => {remove(todo.id)}}>
	      {todo.text}
	  	</span>
  	</div>
  );
}