import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';
import { resolvers } from './resolvers';

const server = new ApolloServer({ typeDefs, resolvers });

server.listen({ port: 3002 }).then(({ url }) => {
  console.log(`GraphQL API running at ${url}`);
});
