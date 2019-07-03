import React, { Fragment } from 'react';
import List from '@material-ui/core/List';
import Pokemon from './Pokemon';

const name = 'My Pokedex';
const creatures = [
  {
    id: 1,
    name: 'bulbasaur',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  {
    id: 3,
    name: 'venusaur',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
  },
  {
    id: 45,
    name: 'vileplume',
    sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png',
  },
];

const Pokedex = () =>
  <Fragment>
    { name }
    <List>
      {
        creatures.map(props => <Pokemon key={props.id} {...props} />)
      }
    </List>
  </Fragment>

export default Pokedex;