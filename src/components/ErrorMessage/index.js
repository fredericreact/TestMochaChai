import React from 'react';
import './style.scss';

export default Error = ({ message }) => message && (
  <div className="error">
    {message}
  </div>
);
