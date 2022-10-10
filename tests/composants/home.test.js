import { expect } from 'chai';
import React from 'react';
import { shallow } from 'enzyme';

// shallow est une méthode qui prend un composant React
// et me return un objet avec des méthodes pour faire
// des vérifications dessus

import Home, { Card } from '../../src/components/Home';

describe('Home Component', () => {
  const recipes = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];
  // Un wrapper c'est ce qui contient le composant "rendu" sous forme d'objet
  const wrapper = (shallow(<Home list={recipes} />));

  it('renders 4 éléments avec la class .card', () => {
    console.log(Card);
    expect(wrapper.find('.card')).to.have.length(4);
  });

  it('contains 4 <Cards />', () => {
    expect(wrapper.find(Card)).to.have.length(4);
  });
});
