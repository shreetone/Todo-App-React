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

    case "LOAD_TODOS":
      return { ...state, todos: action.payload };

    default:
      return state;
  }
}
