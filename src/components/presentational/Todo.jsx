import Inferno from 'inferno';

const Todo = ({id, description, completed}) => {
  const completedClass = completed ? 'is-completed' : 'is-not-completed';
  return (
    <div>
      <span className={completedClass}>
        {description}
      </span>
    </div>
  );
}

export default Todo;
