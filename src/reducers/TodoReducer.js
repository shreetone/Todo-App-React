export const initialState = {
  todos: []
};

export function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO": {
      const { name, description } = action.payload;
      if (!name?.trim()) return state;

      const newTodo = {
        id: Date.now(),
        name: name.trim(),
        description: (description || "").trim(),
        isComplete: false,
      };

      return { ...state, todos: [newTodo, ...state.todos] };
    }

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, isComplete: !todo.isComplete }
            : todo
        ),
      };

    case "EDIT_TODO": {
      const { id, name, description } = action.payload;
      if (!name?.trim()) return state;

      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === id
            ? { 
                ...todo, 
                name: name.trim(), 
                description: (description || "").trim() 
              }
            : todo
        ),
      };
    }
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.isComplete),
      };

    default:
      return state;
  }
}
