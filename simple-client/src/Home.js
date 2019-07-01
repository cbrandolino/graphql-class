import React from 'react';
import gql from "graphql-tag";
import { Link } from "react-router-dom";
import GraphQuery from './GraphQuery';


const query = gql`
{
  pokedexes {
    name,
    id,
    creatures {
      name
    }
  }
}
`;

const PokedexList = ({ pokedexes }) =>
  <ul>
    { 
      pokedexes.map(({ name, id }) =>
        <li>
          <Link to={`/pokedex/${id}`}>
            {name}
          </Link>
        </li>)}
  </ul>;

const Home = () =>
  <GraphQuery query={query}>
    <PokedexList />
  </GraphQuery>;

export default Home;