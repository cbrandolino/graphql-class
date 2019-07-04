import React from 'react';

import Container from '@material-ui/core/Container';
import Pokedex from './components/Pokedex';

import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const query = gql`
query pokedex($id: ID!){
  pokedex(id: $id) {
    name,
    id,
    creatures {
      name,
      sprite,
      stats {
        name,
        value
      }
    }
  }
}`;

const PokedexPage = ({ match: { params: { id }}}) =>
  <Container>
    <Query query={query} variables={{ id}}>
      {
        ({ data, loading, error }) =>
          loading ?
            "loading" :
             <Pokedex {...data.pokedex}/>
      }
    </Query> 

  </Container>;

export default PokedexPage;