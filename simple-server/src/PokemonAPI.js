const { RESTDataSource } = require('apollo-datasource-rest');

class PokemonAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = 'https://pokeapi.co/api/v2/';
    }

    async getCreature(id = null) {
        return this.get(`pokemon/${id}`);
    }

    async getCreatureType(id) {
        return this.get(`type/${id}`);
    }
}

module.exports = PokemonAPI;