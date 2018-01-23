import React from 'react';
import { Todo } from './Todo';
import { styles } from '../styles/styles';

export const TodoList = ({todos, remove}) => {
  let count = 0;
  // Map through the todos
  const todoNode = todos.map((todo) => {
  	count += 1;
    return (<Todo todo={todo} index={count} key={todo.id} remove={remove} />)
  });
  return (<ul style={styles.ul}>{todoNode}</ul>);
}