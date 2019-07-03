import React from 'react';
import Pokedex from './components/Pokedex';

const PokedexPage = ({ match: { params: { id }}}) =>
  <div className="Pokedex">
    <Pokedex />
  </div>;

export default PokedexPage;