import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Home from './Home.js';
import Pokedex from './PokedexPage.js';

const client = new ApolloClient({
  uri: "https://simple-server.cbrandolino.now.sh/graphql"
});

const App = () =>
  <div>
    <AppBar position="static">
      <Container>
        <Toolbar>
          <Typography variant="h5" color="inherit">
            Pokemon app example
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
    <ApolloProvider client={client}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/pokedex/:id" component={Pokedex} />
      </Router>
    </ApolloProvider>
  </div>;
export default App;
