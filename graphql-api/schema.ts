import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books(title: String, author: String): [Book]
  }

  type Mutation {
    addBook(title: String!, author: String!): Book
  }
`;
