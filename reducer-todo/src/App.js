import React, {useReducer} from 'react';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';
import {initialState, reducer } from './reducers/reducers';
import './App.css'
// const todoData = [
//   {
//     task: 'Organize Garage',
//     id: 1528817077286,
//     completed: false
//   },
//   {
//     task: 'Bake Cookies',
//     id: 1528817084358,
//     completed: false
//   }
// ];
function App () {

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  const [state, dispatch] = useReducer(reducer, initialState);
  
  const filterCompleted = () => {
    // this.setState({
    //   todos: this.state.todos.filter( todo => {
    //     return !todo.completed;

    //   })
    // })
    dispatch({type: "FILTER_COMPLETED"})
  }
  const togglecompleted = (id) => {
    // this.setState({
    //   todos:  this.state.todos.map(todo => {
    //     if(id === todo.id) {
    //       return { ...todo, completed: !todo.completed};
    //     } else{
    //       return todo;
    //     }
        
    //   })
    // });
    dispatch({type: "TOGGLE_COMPLETED", payload: id})
    
  }
  const addTodo = task => {
    // this.setState({
    //   todos: [...this.state.todos, {
    //     task:task,
    //     id: Date.now(),
    //     completed:false
    //   }]
    // })
    dispatch({type: "ADD_TODO", payload: task})
  }
  
    return (
      <div>
        <h1>Welcome to your todo app</h1>
          <TodoList state={state}
          togglecompleted={togglecompleted}/>
        <TodoForm addTodo={addTodo}
        filterTodos={filterCompleted}/>
      </div>
    );
  

    }
export default App;
    