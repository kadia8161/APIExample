import { ApolloServer, gql } from 'apollo-server';
import { readFileSync } from 'fs';
import { resolvers } from './resolvers';

const typeDefs = gql(readFileSync('./schema.graphql', 'utf8'));



const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 3002 }).then(({ url }) => {
  console.log(`GraphQL API running at ${url}`);
});
