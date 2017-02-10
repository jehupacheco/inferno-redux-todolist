import { connect } from 'inferno-redux';
import TodoList from 'presentational/TodoList';

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
}

export default connect(mapStateToProps)(TodoList);
