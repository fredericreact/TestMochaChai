import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss';

const Navigation = ({ list }) => (
  <nav className="navigation">
    <NavLink exact className="navigation-link" to="/">Accueil</NavLink>
    {
      list.map((navObject) => (
        <NavLink
          key={navObject.id}
          className="navigation-link"
          to={navObject.slug}
        >
          {navObject.title}
        </NavLink>
      ))
    }
  </nav>
);

Navigation.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      slug: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Navigation;
