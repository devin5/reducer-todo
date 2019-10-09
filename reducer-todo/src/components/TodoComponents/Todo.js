import React from 'react';
// import './Todo.css'
const Todo = (props) => {
     
      
            return(
                  <div 
                  onClick={() => props.togglecompleted(props.todo.id)}
                  className={props.todo.completed ? "completed" : ""}>
                        {props.todo.item}
                  </div>

            );
            
      }

export default Todo