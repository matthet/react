// Container Component
import React from 'react';
import axios from 'axios';
import { Title } from '../components/Title';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';

// Todo Id
window.id = 0;

class TodoApp extends React.Component{
  constructor(props){
    // Pass props to parent class
    super(props);
    // Set initial state
    this.state = {
      data: []
    }
    this.apiUrl = '//57b1924b46b57d1100a3c3f8.mockapi.io/api/todos';
    this.addTodo = this.addTodo.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount(){
    // Make HTTP reques with Axios
    axios.get(this.apiUrl)
      .then((res) => {
        // Set state with result
        this.setState({data:res.data});
      });
  }

  addTodo(val){
    // Assemble data
    const todo = {text: val}
    // Update data
    axios.post(this.apiUrl, todo)
       .then((res) => {
          this.state.data.push(res.data);
          this.setState({data: this.state.data});
       });
  }

  handleRemove(id){
    // Filter all todos except the one to be removed
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });
    // Update state with filter
    axios.delete(this.apiUrl+'/'+id)
      .then((res) => {
        this.setState({data: remainder});      
      })
  }
 
  render(){
    return (
      <div style={{marginLeft:'25px'}}>
        <Title todoCount={this.state.data.length}/>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList 
          todos={this.state.data} 
          remove={this.handleRemove}
        />
      </div>
    );
  }
}

export default TodoApp;