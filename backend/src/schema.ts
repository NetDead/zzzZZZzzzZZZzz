import { createSchema } from 'graphql-yoga';

// TODO: add custom scalars from 'graphql-scalars'
// https://the-guild.dev/graphql/tools/docs/scalars
// https://the-guild.dev/graphql/scalars/docs

const typeDefinitions = /* GraphQL */ `
  type Query {
    user: User!,
    product: Product!
    products: [Product!]!
  }

  enum Roast {
    light
    medium
    dark
  }
  
  type User {
    id: ID!
    name: String!
    email: String
  }
  
  type Product {
    id: ID! # Идентификатор продукта
    name: String!
    cost: Int!
    weight: Int!
    density: Float!
    sweetness: Float!
    acidity: Float!
    roast: Roast!
  }
`;

const resolvers = {
  Query: {
    products: (parent: unknown) => parent,
    product: (parent: unknown) => parent,
    user: (parent: unknown) => parent,
  }
};

export const schema = createSchema({
  resolvers: [resolvers],
  typeDefs: [typeDefinitions]
});
