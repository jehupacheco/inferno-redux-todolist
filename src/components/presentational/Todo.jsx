import Inferno from 'inferno';

const Todo = ({id, description, completed, onClick}) => {
  const completedClass = completed ? 'is-completed' : 'is-not-completed';
  return (
    <div onClick={() => onClick(id)} style={{cursor: 'pointer',}}>
      <span className={completedClass}>
        {description}
      </span>
    </div>
  );
}

export default Todo;
