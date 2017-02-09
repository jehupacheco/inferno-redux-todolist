export default (todo = {}, action) => {
  switch (action.type) {
    case 'TOGGLE_TODO':
      if (todo.id !== action.id) {
        return todo;
      } else {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
    default:
      return todo;
  }
}
