import React, { Fragment } from 'react';
import List from '@material-ui/core/List';

import Pokemon from './Pokemon';

const Pokedex = ({ name, creatures = []}) =>
  <Fragment>
    { name }
    <List>
      {
        creatures.map(props => <Pokemon key={props.id} {...props} />)
      }
    </List>
  </Fragment>

export default Pokedex;