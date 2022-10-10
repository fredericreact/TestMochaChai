// == Import npm
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
// == Import
import Recipe from 'src/containers/Recipe';
import Home from 'src/containers/Home';
import Navigation from 'src/containers/Navigation';
import Error from 'src/containers/Error';

import './styles.css';

// == Composant
const App = ({ fetchRecipes }) => {
  // Juste après le premier render de App
  // Je lance ma requête
  useEffect(fetchRecipes, []);

  return (
    <div className="app">
      <Navigation toto="tata" />
      <main className="main">
        <header className="header">oRecipe</header>
        <Error />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/recipe/:slug" component={Recipe} />
      </main>
    </div>
  );
};
// == Export
export default App;
