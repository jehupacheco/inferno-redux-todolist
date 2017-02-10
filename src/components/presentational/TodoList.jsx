import Inferno from 'inferno';
import Todo from 'presentational/Todo';

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
