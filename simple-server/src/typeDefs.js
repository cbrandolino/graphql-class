const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    creatures: [Creature],
    creature(id: ID!): Creature,
    creatureType(id: ID!): CreatureType,
  }

  type Creature {
    id: ID!,
    name: String,
    sprite: String,
    creatureTypes: [CreatureType],
  }

  type CreatureType {
    id: ID!,
    name: String,
    creatures: [Creature],
  }
`;

module.exports = typeDefs;
