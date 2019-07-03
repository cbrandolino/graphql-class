import React from 'react';

import Container from '@material-ui/core/Container';

import PokedexList from './components/PokedexList';
import { gql } from 'apollo-boost';

const pokedexes = [
  { id: 1, name: 'My pokedex ' },
];

const Home = () =>
  <Container>
    <PokedexList pokedexes={pokedexes} />
  </Container>;

export default Home;