import React, {useState} from 'react';



const TodoForm = ( props ) => {
      const [input, setInput] = useState("")

      const handleChange = event => {
            setInput( event.target.value);
          };


      const handleSubmit = event => {
            event.preventDefault();
            props.addTodo(input)
            setInput("");
      }  

      
      
     
        return(
              <form onSubmit={handleSubmit}>
              <input 
                  onChange={handleChange}
                  type="text"
                  name="newtodo" 
                  placeholder="add new to do" 
                  value={input}
                  />
                  <button type="submit">
                        add to do
                  </button>
                  <button onClick ={props.filterTodos} > clear component
                  </button>
                  
            </form>
        );
}
        
    
       export default TodoForm;

      