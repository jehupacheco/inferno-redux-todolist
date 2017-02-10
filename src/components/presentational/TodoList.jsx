import Inferno from 'inferno';
import Todo from 'container/Todo';

const TodoList = ({todos}) => {
  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <li>
            <Todo {...todo} key={index}/>
          </li>
        );
      })}
    </ul>
  );
}

export default TodoList;
