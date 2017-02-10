import Inferno from 'inferno';

const TodoCreator = ({onSubmit}) => {
  let counter = 0;
  let inputNode;
  return (
    <div>
      <input type="text" ref={ (input) => inputNode = input}/>
      <button onClick={() => onSubmit(inputNode.value)}>
        Add Todo
      </button>
    </div>
  );
}

export default TodoCreator;
