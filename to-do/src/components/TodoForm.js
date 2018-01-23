import React from 'react';
import { styles } from '../styles/styles';
import leafImage from '../images/leaf.png'

export const TodoForm = ({addTodo}) => {
  // Input Tracker
  let input;
  // Return JSX
  return (
    <form onSubmit={(e) => {
        e.preventDefault();
        addTodo(input.value);
        input.value = '';
      }}>
      <input style={styles.form} ref={node => {
        input = node;
      }} />
      <br />
      <img src={leafImage} style={styles.image}/>
    </form>
  );
};