import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

const Home = ({ list }) => (
  <div className="home">
    <p>Bienvenue sur le site</p>
    <div className="cards-list">
      {
        list.map((cardObject) => (
          <Card key={cardObject.id} className="card" cardObject={cardObject} />
        ))
      }
    </div>
  </div>
);

export const Card = ({ cardObject }) => (
  <div className="card">
    <img className="card-image" alt="illustration" src={cardObject.image} />
    <div className="card-infos">
      <h3 className="card-title">{cardObject.title}</h3>
      <p className="card-difficulty">Difficulté: {cardObject.difficulty}</p>
      <Link to={cardObject.slug} className="active">Lien vers la recette</Link>
    </div>
  </div>
);

Home.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
      difficulty: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Home;
