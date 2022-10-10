import { connect } from 'react-redux';
import Home from '../components/Home';
import { getHomeCards } from '../reducers/recipes';

const mapState = (state) => ({
  list: getHomeCards(state.recipes.list),
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Home);
