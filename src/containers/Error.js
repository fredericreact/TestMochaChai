import { connect } from 'react-redux';
import Error from '../components/ErrorMessage';

const mapState = (state) => ({
  message: state.recipes.error,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Error);
