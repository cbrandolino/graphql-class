const { getPokedex } = require('./Pokedex');

const urlToId = url => url.split('/')[6];

const creatureResolver = async (_, { id }, { dataSources }) => {
  const { name, sprites, types } = await dataSources.pokemonAPI.getCreature(id);
  return {
    name,
    sprite: sprites.front_default,
    id,
    creatureTypes: types.map(({ type: { name, url }}) => ({ name, id: urlToId(url)}))
  }
}

const resolvers = {
  Query: {
    creature: creatureResolver,
    creatureType: async (_, { id: typeID }, { dataSources }) => {
      const { name, id, pokemon } = await dataSources.pokemonAPI.getCreatureType(typeID);
      return {
        name,
        id,
        creatures: pokemon.map(({ pokemon: { name, url }}) => ({ name, id: urlToId(url)})),
      }
    },
    pokedex: async (_, { id: pokedexId }) => {
        const pokedex = await getPokedex(pokedexId);
        return pokedex;
    }
  },
  Pokedex: {
      creatures: async ({ creatures }, _, context) => {
          const results = await Promise.all(creatures.map(async id => creatureResolver(null, { id: 1 }, context)));
          return results;
      }
  }
}

module.exports = resolvers;
