const { getPokedex } = require('./Pokedex');

const urlToId = url => url.split('/')[6];

const getPokemonIds = pokemon => pokemon.map(({ pokemon: { url }}) => urlToId(url));

const creatureResolver = async (_, { id }, { dataSources }) => {
  const { name, sprites, weight, stats } = await dataSources.pokemonAPI.getCreature(id);
  return {
    name,
    sprite: sprites.front_default,
    id,
    weight,
    stats: stats.map(({ base_stat, stat: { name }}) => ({ name, value: base_stat })) 
  }
}
const creatureTypeResolver = async (_, { id: typeID }, { dataSources }) =>
  await dataSources.pokemonAPI.getCreatureType(typeID);

const creatureTypesResolver = (creatureTypes, context) =>
  Promise.all(creatureTypes.map(async id => creatureTypeResolver(null, { id }, context)));

const creaturesResolver = (creatures, context) =>
  Promise.all(creatures.slice(0, 5).map(async id => creatureResolver(null, { id }, context)));

const resolvers = {
  Query: {
    creature: creatureResolver,
    creatureType: creatureTypeResolver,
    pokedex: async (_, { id: pokedexId }) => {
        const pokedex = await getPokedex(pokedexId);
        return pokedex;
    }
  },
  Pokedex: {
    creatures: async ({ creatures }, _, context) => await creaturesResolver(creatures, context),
  },
  CreatureType: {
    creatures: async ({ pokemon }, _, context) =>
      await creaturesResolver(getPokemonIds(pokemon), context),
  },
  Creature: {
    creatureTypes: async ({ creatureTypes }, _, context) =>
      await creatureTypesResolver(creatureTypes.map(({ id }) => id), context)
  }
}

module.exports = resolvers;
