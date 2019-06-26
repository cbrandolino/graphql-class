const cors = require('cors');
const express = require('express');
const { makeExecutableSchema } = require('graphql-tools');
const { ApolloServer, gql } = require('apollo-server-express');

const port = 9000;

const app = express();

const typeDefs = gql`
  type Query {
    greeting: String,
  }
`;

const resolvers = {
  Query: {
    greeting: () => 'Hello world!',
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: '/graphql',
    settings: {
      'editor.theme': 'light'
    }
  }
});

apolloServer.applyMiddleware({ app });
app.use(cors());
app.listen(port, () => console.log(`server running on port ${port}`));
