export const initialState = {
  list: [
    {
      item: "first to do ",
      completed: false,
      id: 1
    },
    {
      item: "second to do ",
      completed: false,
      id: 2
    },
    {
      item: "third to do ",
      completed: false,
      id: 3
    }
  ]
};

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        list: [
          ...state.list,
          {
            item: action.payload,
            completed: false,
            id: Date.now()
          }
        ]
      };

    case "TOGGLE_COMPLETED":
      return {
        ...state,
        list: state.list.map(todo => {
          if (action.payload === todo.id) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        })
      };

      case "FILTER_COMPLETED":
            return{
                  ...state,
                  list: state.list.filter( todo => {
                        return !todo.completed
                  })
            }
            

    default:

      return state;
  }
}
