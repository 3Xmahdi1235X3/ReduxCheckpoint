import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./Actions";

const initialState = {
  todos: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, { id: Date.now(), description: action.payload, isDone: false }],
      };
    case REMOVE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
      case TOGGLE_TODO:
        return {
          ...state,
          todos: state.todos.map((todo) =>
            todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo
          ),
        };
    default:
      return state;
  }
};

export default rootReducer;