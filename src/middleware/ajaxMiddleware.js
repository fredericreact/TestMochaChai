import axios from 'axios';
import { FETCH_RECIPES, fetchRecipesSuccess, fetchRecipesError } from '../actions/recipes';

export default (store) => (next) => (action) => {
  next(action);
  const { dispatch } = store;
  console.log('ajaxTime');
  switch (action.type) {
    case FETCH_RECIPES:
      // Lancer ma requête axios
      axios({
        method: 'get',
        url: 'http://localhost:3001/recipes',
      })
        .then((res) => {
          // Si je reçois la liste
          // dispatcher le success avec les data
          const { data } = res;
          console.log(data);
          dispatch(fetchRecipesSuccess(data));
        })
        .catch(() => {
          // Sinon
          // Je veux dispatcher l'erreur
          dispatch(fetchRecipesError());
        });
      break;
    default:
      break;
  }
};
