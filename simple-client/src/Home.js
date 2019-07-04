import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import Container from '@material-ui/core/Container';
import PokedexList from './components/PokedexList';

const pokedexes = [
  { id: 1, name: 'My pokedex ' },
];

const Home = () =>
  <Container>
    <PokedexList pokedexes={pokedexes} />
  </Container>;

export default Home;