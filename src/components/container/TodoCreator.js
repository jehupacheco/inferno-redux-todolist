import { connect } from 'inferno-redux';
import TodoCreator from 'presentational/TodoCreator';

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit: (id, description) => {
      dispatch({
        type: 'ADD_TODO',
        id,
        description,
      });
    }
  };
}

export default connect(null, mapDispatchToProps)(TodoCreator);
