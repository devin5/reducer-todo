// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo'

const TodoList = (props) => {

      
     
                  return (
                        <div>
                        {props.state.list.map( todo => {
                              console.log(props.state.list)
                              return(
                              <div>
                                    <Todo 
                                    todo={todo}
                                    togglecompleted={props.togglecompleted} 
                                    key={todo.id}/>
                              </div>
                              )
                              })}
                        </div> 
                        
                        
                  )
            }

            
      

      



export default TodoList