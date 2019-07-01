import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider, Query } from "react-apollo";
import Home from './Home.js';
import Pokedex from './Pokedex.js';
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://simple-server.cbrandolino.now.sh/graphql"
});

const App = () =>
  <ApolloProvider client={client}>
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/pokedex/:id" component={Pokedex} />
    </Router>
  </ApolloProvider>;

export default App;
