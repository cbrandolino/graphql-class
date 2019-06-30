const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('./db.json');
const db = low(adapter);

db.defaults({ pokedex: [] })
  .write();

db.get('pokedex')
  .push({ "id": 1, "title": "My Pokedex", "creatures": [1] })
  .write()

const getPokedex = (id) => db.get('pokedex')
    .find({ id: 1 })
    .value()

module.exports = {
    getPokedex,
}