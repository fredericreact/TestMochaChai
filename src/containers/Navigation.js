import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
import { getNavFromRecipes } from '../reducers/recipes';

const mapState = (state, ownProps) => {
  console.log(ownProps);
  return ({
    list: getNavFromRecipes(state.recipes.list),
  });
};
const mapDispatch = null;

export default connect(mapState, mapDispatch)(Navigation);
