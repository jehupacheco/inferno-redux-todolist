import todoReducer from './todo';
import deepFreeze from 'deep-freeze';

describe('todoReducer()', () => {
  const actionToogleTodo = {
    type: 'TOGGLE_TODO',
    id: 1,
  }

  deepFreeze(actionToogleTodo);

  it('Should toogle todo when id matches', () => {
    const mockTodo = {
      id: 1,
      description: "Mock Todo",
      completed: false,
    }

    const expectedTodo = {
      id: 1,
      description: "Mock Todo",
      completed: true,
    }

    deepFreeze(mockTodo);
    expect(todoReducer(mockTodo, actionToogleTodo)).toEqual(expectedTodo);
  });

  it('Shouldn\'t toogle todo when id doesn\'t match', () => {
    const mockTodo = {
      id: 2,
      description: "Mock Todo",
      completed: false,
    }

    const expectedTodo = {
      id: 2,
      description: "Mock Todo",
      completed: false,
    }

    deepFreeze(mockTodo);
    expect(todoReducer(mockTodo, actionToogleTodo)).toEqual(expectedTodo);
  });
});
