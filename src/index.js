import Inferno from 'inferno';
import { Provider } from 'inferno-redux';
import { createStore, combineReducers } from 'redux';
import todosReducer from './reducers/todos';
import App from './App';
import './index.css';
import 'inferno-devtools';

const store = createStore(combineReducers({todos: todosReducer}));

Inferno.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('app')
);
