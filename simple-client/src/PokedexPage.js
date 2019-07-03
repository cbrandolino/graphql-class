import React from 'react';

import Container from '@material-ui/core/Container';
import Pokedex from './components/Pokedex';

const PokedexPage = ({ match: { params: { id }}}) =>
  <Container>
    <Pokedex />
  </Container>;

export default PokedexPage;