import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLList,
  GraphQLString,
  GraphQLInt,
  GraphQLFloat,
  GraphQLEnumType,
} from 'graphql';

const RoastType = new GraphQLEnumType({
  name: 'Roast',
  values: {
    light: { value: 'light' },
    medium: { value: 'medium' },
    dark: { value: 'dark' }
  }
})

const ProductType = new GraphQLObjectType({
  name: 'Product',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    cost: { type: GraphQLInt },
    weight: { type: GraphQLInt },
    density: { type: GraphQLFloat },
    sweetness: { type: GraphQLFloat },
    acidity: { type: GraphQLFloat },
    roast: { type: RoastType },
  })
});

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString }
  })
});

const Query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    product: {
      type: ProductType,
      args: { id: { type: GraphQLID } },
    },
    products: {
      type: new GraphQLList(ProductType),
      resolve(parent) {
        return parent;
      }
    },
    user: {
      type: UserType,
      resolve(parent) {
        return parent;
      }
    }
  },
});

export const schema = new GraphQLSchema({ query: Query })
