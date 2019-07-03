import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider, Query } from "react-apollo";
import ApolloClient from "apollo-boost";
import Container from '@material-ui/core/Container';
import Home from './Home.js';
import Pokedex from './PokedexPage.js';

const client = new ApolloClient({
  uri: "https://simple-server.cbrandolino.now.sh/graphql"
});

const App = () =>
  <Container>
    <ApolloProvider client={client}>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/pokedex/:id" component={Pokedex} />
      </Router>
    </ApolloProvider>
  </Container>;
export default App;
