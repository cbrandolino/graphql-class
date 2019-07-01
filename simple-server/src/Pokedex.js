const low = require('lowdb');
const Memory = require('lowdb/adapters/Memory');

const adapter = new Memory();
const db = low(adapter);

db.defaults({ pokedex: [{ id: '1', name: 'My Pokedex', creatures: []}] })
  .write()

const getPokedex = (id) => db.get('pokedex')
    .find({ id: id })
    .value()

const addPokemon = (pokedexId, pokemonId) => {
    const creatures = getPokedex(pokedexId).creatures;
    return db.get('pokedex')
        .find({ id: pokedexId })
        .assign({ creatures: [ ...creatures, pokemonId ]})
        .write();
}

module.exports = {
    getPokedex,
    addPokemon,
}