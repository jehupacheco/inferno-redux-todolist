import Inferno from 'inferno';
import Todo from 'container/Todo';

const TodoList = ({todos}) => {
  return (
    <ul className="todolist">
      {todos.map((todo, index) => {
        return (
          <li className="todo">
            <Todo {...todo} key={index}/>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
