// Importer la méthode chai nécessaire
import { expect } from 'chai';
// Créer un fichier math.js dans src
// dans ce fichier export une variable appelée "add" qui contient "null"
// Développer cette fonction add en mode TDD
const add = (num1 = 0, num2 = 0) => num1 + num2;

describe('Maths functions', () => {
  describe('Add math operation', () => {
    // Vérifier que add est une fonction
    it('should be a function', () => {
      expect(add).to.be.a('function');
    });
    // Vérifier que add() return un number
    it('should return a number', () => {
      expect(add()).to.be.a('number');
    });
    // Vérifier que add, si je lui donne 3 et 5 en paramètres
    // me renvoie 8
    it('should return l\'addition de deux nombres donnés en arguments', () => {
      expect(add(5, 3)).to.be.equal(8);
      expect(add(0, -2)).to.be.equal(-2);
      expect(add(10, -20)).to.be.equal(-10);
      expect(add(-2, -2)).to.be.equal(-4);
    });

    // Vérifier que si je ne lui donne aucun paramètre
    // elle me return 0
    it('should return 0 if no params received', () => {
      expect(add()).to.be.equal(0);
    });
    // Si je lui donne un seul paramètre
    // elle me return ce paramètre
    it('should return the number if only one number received', () => {
      expect(add(5)).to.be.equal(5);
    });
  });
});
