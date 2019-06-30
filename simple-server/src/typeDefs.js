const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    creatures: [Creature],
    creature(id: ID!): Creature,
    creatureType(id: ID!): CreatureType,
    pokedex(id: ID!): Pokedex,
  }

  type Mutation {
    addCreature(pokedexId: ID!, creatureId: ID!): ID,
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
