import React from 'react';

const Pokemon = ({ name, sprite }) =>
  <div className="Pokemon">
    { name }
    <img alt={name} src={sprite} />
  </div>;

export default Pokemon;
