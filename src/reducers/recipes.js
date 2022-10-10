import slugify from 'slugify';
import { FETCH_RECIPES_SUCCESS, FETCH_RECIPES_ERROR } from '../actions/recipes';

export const initialState = {
  list: [],
  error: null,
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_RECIPES_ERROR:
      return {
        ...state,
        error: 'Impossible de récupérer les recettes, vérifiez votre connexion',
      };
    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        list: [...action.payload],
        error: null,
      };
    default:
      return state;
  }
};

// Selectors
// Une fonction qui reçoit en paramètres
// de la data brute et qui me renvoie
// juste ce dont j'ai besoin à partir de cette data

// const navList = data.map((dataObject) => ({
//   id: dataObject.id,
//   title: dataObject.title,
//   slug: slugifyTitle(dataObject.title),
// }));

const slugifyTitle = (titre) => `/recipe/${slugify(titre, { lower: true })}`;

// export const getNavFromRecipes = (recipes) => recipes.map((dataObject) => ({
//   id: dataObject.id,
//   title: dataObject.title,
//   slug: slugifyTitle(dataObject.title),
// }));

export const getNavFromRecipes = (array = []) => array.map((element) => ({
  id: element.id,
  title: element.title,
  slug: slugifyTitle(element.title),
}));

export const getHomeCards = (recipes) => recipes.map((dataObject) => ({
  id: dataObject.id,
  title: dataObject.title,
  slug: slugifyTitle(dataObject.title),
  image: dataObject.thumbnail,
  difficulty: dataObject.difficulty,
}));

// Trouver le bon objet et le renvoyer
export const findRecipeFromSlug = (recipes, url) => (
  recipes.find((recipeObject) => slugifyTitle(recipeObject.title) === url)
);
export default reducer;
