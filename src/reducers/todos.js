import todoReducer from './todo';

export default (todos = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      const todo = {
        id: action.id,
        description: action.description,
        completed: false,
      };

      return [...todos, todo];
    case 'TOGGLE_TODO':
      return todos.map(todo =>{
        return todoReducer(todo, action);
      });
    default:
      return todos;
  }
}
