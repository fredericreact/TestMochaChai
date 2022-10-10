import { expect } from 'chai';

import { fetchRecipesSuccess, FETCH_RECIPES_SUCCESS } from '../../src/actions/recipes';
import recipeReducer, { initialState } from '../../src/reducers/recipes';

import recipesData from '../../src/data';

// Je décris pour Mocha une suite de tests qui concernent
// une unité (un élément, un composant, une fonction etc.)
describe('Reducer for recipes', () => {
  // Describe one test qui concerne ce que je suis en train de tester
  it('should be a function', () => {
    // Ce qui me permet de faire des assertions (des affirmations)
    // Si ces affirmations ne passent pas, le test est considéré
    // comme échoué. Je fais mes affirmations à l'aide de méthodes
    // fournies par 'chai'
    expect(recipeReducer).to.be.a('function');
  });

  it('should return an object', () => {
    expect(recipeReducer()).to.be.a('object');
  });

  // Essayer de faire des tests sur l'objet return par le reducer
  // Est-ce qu'il conteint telle ou telle "key" (proriété)
  // est-ce qu'il est égal à un objet que tu veux comparer avec
  // it('initialState should be equal to', () => {
  //   expect(initialState).to.deep.equal({
  //     list: [],
  //     error: null,
  //   });
  // });

  it('should return initial state if called with no params', () => {
    expect(recipeReducer()).to.be.deep.equal(initialState);
  });
});

describe('Recipe Success actions', () => {
  it('Should return the proper action object', () => {
    const action = fetchRecipesSuccess(recipesData);
    expect(action).to.deep.equal({
      type: FETCH_RECIPES_SUCCESS,
      payload: [...recipesData],
    });
  });

  it('should return proper state when given fetchRecipeSuccess action', () => {
    // J'ai besoin de fabriquer une action
    const action = fetchRecipesSuccess(recipesData);
    // Tester que si je donne un state intial et une action
    // au reducer recipeReducer, vous obtenez bien un objet
    // formatté comme attendu
    expect(recipeReducer(initialState, action)).to.deep.equal({
      ...initialState,
      list: [...recipesData],
    });
  });
});
