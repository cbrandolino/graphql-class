import React, { Fragment } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const Pokemon = ({ name, sprite, stats }) =>
  <ListItem alignItems="flex-start">
    <ListItemAvatar>
      <Avatar alt={name} src={sprite} />
    </ListItemAvatar>
    <ListItemText
      primary={name}
      secondary={stats.map(({name, value}) => <Fragment><strong>{ name }</strong>: { value }; </Fragment>)}
    />
  </ListItem>;

Pokemon.defaultProps = {
  stats: [],
};

export default Pokemon;
