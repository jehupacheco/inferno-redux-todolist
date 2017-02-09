import todosReducer from './todos';
import deepFreeze from 'deep-freeze';

describe('todosReducer()', () => {
  it('Adds todo when collection is empty', () => {
    const stateBefore = [];
    const action = {
      type: 'ADD_TODO',
      id: 1,
      description: 'Test Todo',
    };
    const stateAfter = [
      {
        id: 1,
        description: 'Test Todo',
        completed: false,
      },
    ]

    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(todosReducer(stateBefore, action)).toEqual(stateAfter);
  });

  it('Adds todo when collection has data', () => {
    const stateBefore = [
      {
        id: 1,
        description: 'Test Todo',
        completed: false,
      },
    ];
    const action = {
      type: 'ADD_TODO',
      id: 2,
      description: 'Test Todo 2',
    };
    const stateAfter = [
      {
        id: 1,
        description: 'Test Todo',
        completed: false,
      },
      {
        id: 2,
        description: 'Test Todo 2',
        completed: false,
      },
    ]

    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(todosReducer(stateBefore, action)).toEqual(stateAfter);
  });

  it('Toggles todo', () => {
    const stateBefore = [
      {
        id: 1,
        description: 'Test Todo',
        completed: false,
      },
    ];
    const action = {
      type: 'TOGGLE_TODO',
      id: 1,
    };
    const stateAfter = [
      {
        id: 1,
        description: 'Test Todo',
        completed: true,
      },
    ]

    deepFreeze(stateBefore);
    deepFreeze(action);
    expect(todosReducer(stateBefore, action)).toEqual(stateAfter);
  });
});
