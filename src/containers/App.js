import { connect } from 'react-redux';
import App from '../components/App';
import { fetchRecipes } from '../actions/recipes';

const mapState = null;

const mapDispatch = (dispatch) => ({
  fetchRecipes: () => {
    console.log('je dois aller chercher les datas');
    // Je veux dispatcher une action fetchData
    dispatch(fetchRecipes());
  },
});

export default connect(mapState, mapDispatch)(App);
