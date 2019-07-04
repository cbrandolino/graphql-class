import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import ListItemText from '@material-ui/core/ListItemText';

const PokedexList = ({ pokedexes, loading }) =>
  <Card>
    <CardContent>
      <Typography variant="h5" color="textSecondary">
        pokedexes
      </Typography>
      <List>
        { 
          loading ?
            "Loading" :
            pokedexes.map(({ name, id }) =>
              <ListItem key={id}>
                <ListItemText>
                  <Link component={RouterLink} to={`/pokedex/${id}`}>
                    {name}
                  </Link>
                </ListItemText>
              </ListItem>)
        }
      </List>
    </CardContent>
  </Card>;

export default PokedexList;
