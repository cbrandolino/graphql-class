import React from 'react';
import { Link } from 'react-router-dom';


const pokedexes = [
  { id: 1, name: 'My pokedex ' },
];

const Home = () =>
  <ul>
    { 
      pokedexes.map(({ name, id }) =>
        <li key={id}>
          <Link to={`/pokedex/${id}`}>
            {name}
          </Link>
        </li>)
    }
  </ul>;

export default Home;