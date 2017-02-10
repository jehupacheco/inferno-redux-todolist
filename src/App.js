import Inferno from 'inferno';
import Component from 'inferno-component';
import Logo from './logo';
import './App.css';
import TodoList from 'presentational/TodoList';

const todos = [
  {
    id: 1,
    description: 'Test Todo',
    completed: false,
  },
  {
    id: 2,
    description: 'Test Todo 2',
    completed: true,
  },
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Logo width="80" height="80"/>
          <h2>Welcome to Inferno</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TodoList todos={todos}/>
      </div>
    );
  }
}

export default App;
