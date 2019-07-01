const { gql } = require('apollo-server-micro');

const typeDefs = gql`
  type Query {
    creatures(from: Int): [BaseCreature],
    creature(id: ID!): Creature,
    creatureType(id: ID!): CreatureType,
    pokedex(id: ID!): Pokedex,
    pokedexes: [Pokedex],
  }

  type Mutation {
    addCreature(pokedexId: ID!, creatureId: ID!): Pokedex,
    addPokedex(name: String): Pokedex,
  }

  type BaseCreature {
    id: ID!,
    name: String,
    creature: Creature,
  }

  type Creature {
    id: ID!,
    name: String,
    sprite: String,
    creatureTypes: [CreatureType],
    weight: Int,
    stats: [Stat]
  }

  type Stat {
    name: String,
    value: Int,
  }

  type CreatureType {
    id: ID!,
    name: String,
    creatures: [Creature],
  }

  type Pokedex {
    id: ID!,
    name: String,
    creatures: [Creature],
  }
`;

module.exports = typeDefs;
