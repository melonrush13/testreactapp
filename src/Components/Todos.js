import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {

  render() {
      let todoItems;

      //pass in todos as properties
      if(this.props.todos) {
          
        //want to map through the array
        todoItems = this.props.todos.map(todo => {

          return (
            <TodoItem key = {todo.title} todo = {todo} />
          );
          
      });
    }

    return (
      <div className="Todos">  
      
        <h3>To do list</h3>
        {todoItems}
        
        
      </div>
    );
  }
}


export default Todos;
