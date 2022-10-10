import { should } from 'chai';
import data from '../../src/data';
import { getNavFromRecipes } from '../../src/reducers/recipes';

should();

// Describe les tests de la fonction getNavFromRecipes
describe('getNavFromRecipes function', () => {
  // Devrait être une fonction
  it('should be a function', () => {
    getNavFromRecipes.should.be.a('function');
  });
  // Devrait renvoyer un tableau
  it('should return an array', () => {
    getNavFromRecipes().should.be.an('array');
  });
  // Le tableau devrait contenir des objets
  it('the returned array should contain  only objects or nothing', () => {
    getNavFromRecipes().forEach((elem) => {
      elem.should.be.an('object');
    });
  });
  // Si on lui donne un tableau de 3 éléments on veut un tableau avec trois objets
  // it('should return an object for each array element given in params ', () => {
  //   getNavFromRecipes([{}, {}, {}]).should.deep.equal([{}, {}, {}]);
  // });
  // Si on lui donne un tableau d'objets doit return autant d'objets formattés comme attendu
  it('should format objects according to model', () => {
    const sampleArray = [data[0], data[1]];
    const expectedResult = [
      {
        id: 12345,
        title: 'Crêpes raffinées',
        slug: '/recipe/crepes-raffinees',
      },
      {
        id: 8965,
        title: 'Pizza Margherita',
        slug: '/recipe/pizza-margherita',
      },
    ];
    getNavFromRecipes(sampleArray).should.deep.equal(expectedResult);
  });
});
