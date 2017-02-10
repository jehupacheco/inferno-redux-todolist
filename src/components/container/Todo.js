import { connect } from 'inferno-redux';
import Todo from 'presentational/Todo';

// const mapStateToProps = (state, ownProps) => {
//   return ownProps;
// }

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: (id) => {
      dispatch({
        type: 'TOGGLE_TODO',
        id,
      });
    },
    ...ownProps,
  }
}

export default connect(null, mapDispatchToProps)(Todo);
