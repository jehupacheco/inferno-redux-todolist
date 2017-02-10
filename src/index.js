import Inferno from 'inferno';
import { Provider } from 'inferno-redux';
import { createStore, combineReducers } from 'redux';
import todosReducer from './reducers/todos';
import App from './App';
import './index.css';
import 'inferno-devtools';

const store = createStore(combineReducers({todos: todosReducer}));

store.dispatch({
  type: 'ADD_TODO',
  id: 0,
  description: 'Test Todo'
});

store.dispatch({
  type: 'ADD_TODO',
  id: 1,
  description: 'Test Todo 2'
});

Inferno.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app')
);
