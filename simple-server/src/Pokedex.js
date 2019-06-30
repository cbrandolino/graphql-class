const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('./db.json');
const db = low(adapter);

const getPokedex = (id) => db.get('pokedex')
    .find({ id: 1 })
    .value()

const addPokemon = (pokedexId, pokemonId) => {
    const creatures = getPokedex(pokedexId).creatures;
    db.get('pokedex')
        .find({ id: +pokedexId })
        .assign({ creatures: [ ...creatures, +pokemonId ]})
        .write();
    return pokedexId;
}

module.exports = {
    getPokedex,
    addPokemon,
}