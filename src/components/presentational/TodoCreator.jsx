import Inferno from 'inferno';

const TodoCreator = ({onSubmit}) => {
  let counter = 0;

  const submitHandler = (e) => {
    const inputNode = e.target;
    if (e.key === 'Enter' && inputNode.value !== '') {
      onSubmit(counter++, inputNode.value);
      inputNode.value = '';
    }
  }

  return (
    <div className="todocreator">
      <input
        type="text"
        onKeyUp={submitHandler}
        className="todocreator-input"
        placeholder="What needs to be done?"
      />
    </div>
  );
}

export default TodoCreator;
