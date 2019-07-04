import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

import Container from '@material-ui/core/Container';
import PokedexList from './components/PokedexList';

const query = gql`
  {
    pokedexes {
      name,
      id
    }
  }
  `;


const Home = () =>
  <Container>
    <Query query={query}>
      {
        ({ data, loading, error }) =>
          <PokedexList loading={loading} pokedexes={data.pokedexes} />
      }
    </Query> 
  </Container>;

export default Home;