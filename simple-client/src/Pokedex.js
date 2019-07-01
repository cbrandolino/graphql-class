import React from 'react';
import gql from "graphql-tag";
import Pokemon from './components/Pokemon';
import GraphQuery from './GraphQuery';

const query = gql`
  query Pokedex($id: ID!)
  {
    pokedex(id: $id) {
      name,
      id,
      creatures {
        name,
        sprite,
      }
    }
  }
`;

const PokedexComponent = ({ pokedex: {name,  creatures}}) =>
  <div className="PokedexComponent">
    { name }
    {
      creatures.map(props => <Pokemon {...props} />)
    }
  </div>

const Pokedex = ({ match: { params: { id }}}) =>
  <GraphQuery query={query} variables={{id}}>
    <PokedexComponent />
  </GraphQuery>;

export default Pokedex;