import { connect } from 'react-redux';
import Recipe from '../components/Recipe';
import { findRecipeFromSlug } from '../reducers/recipes';

const mapState = (state, ownProps) => {
  const { url } = ownProps.match;
  return ({
    recipe: findRecipeFromSlug(state.recipes.list, url),
  });
};
const mapDispatch = null;

export default connect(mapState, mapDispatch)(Recipe);
