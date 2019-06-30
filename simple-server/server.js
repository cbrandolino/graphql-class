const cors = require('cors');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const PokemonAPI = require('./src/PokemonAPI');
const typeDefs = require('./src/typeDefs');
const resolvers = require('./src/resolvers');

const port = 9000;

const app = express();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    pokemonAPI: new PokemonAPI(),
  }),
  playground: {
    endpoint: '/graphql',
  }
});

apolloServer.applyMiddleware({ app });
app.use(cors());
app.listen(port, () => console.log(`server running on port ${port}`));
