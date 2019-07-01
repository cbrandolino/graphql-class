const cors = require('micro-cors')();
const { ApolloServer, gql } = require('apollo-server-micro');
const PokemonAPI = require('./src/PokemonAPI');
const typeDefs = require('./src/typeDefs');
const resolvers = require('./src/resolvers');

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    pokemonAPI: new PokemonAPI(),
  }),
  playground: true,
  introspection: true,
});

module.exports = cors(apolloServer.createHandler()); 
