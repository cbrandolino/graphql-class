const cors = require('cors');
const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const PokemonAPI = require('./src/PokemonAPI');
const typeDefs = require('./src/typeDefs');

const port = 9000;

const app = express();

const urlToId = url => url.split('/')[6];

const resolvers = {
  Query: {
    creature: async (_, { id }, { dataSources }) => {
      const { name, sprites, types } = await dataSources.pokemonAPI.getCreature(id);
      return {
        name,
        sprite: sprites.front_default,
        id,
        creatureTypes: types.map(({ type: { name, url }}) => ({ name, id: urlToId(url)}))
      }
    },
    creatureType: async (_, { id: typeID }, { dataSources }) => {
      const { name, id, pokemon } = await dataSources.pokemonAPI.getCreatureType(typeID);
      return {
        name,
        id,
        creatures: pokemon.map(({ pokemon: { name, url }}) => ({ name, id: urlToId(url)})),
      }
    }
  }
}

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
