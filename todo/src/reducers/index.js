import { NEW_TODO, TOGGLE_COMPLETE, DELETE_TODO } from "../actions";

const initialState = {
  todos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };

    case TOGGLE_COMPLETE:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
