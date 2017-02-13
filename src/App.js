import Inferno from 'inferno';
import Component from 'inferno-component';
import './App.scss';
import TodoList from 'container/TodoList';
import TodoCreator from 'container/TodoCreator';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1 className="app-title">Todos</h1>
        <TodoCreator/>
        <TodoList/>
      </div>
    );
  }
}

export default App;
