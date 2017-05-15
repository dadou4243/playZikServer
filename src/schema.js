/* @flow */

import { makeExecutableSchema } from 'graphql-tools';
import { GraphqlSchema, resolvers } from './collections';
//
// const rootSchema = [`
//   type RootQuery {
//     users: [User]
//   }
//   schema {
//     query: RootQuery
//   }
// `];
//
// const rootResolvers = {
//   RootQuery: {
//     users() {
//       return User.findAll();
//     },
//   },
// };

// Put schema together into one array of schema strings
// and one map of userResolvers, like makeExecutableSchema expects
// const schema = [...rootSchema, ...UserType.schema];
// const resolvers = merge(rootResolvers, UserType.resolvers);
export default makeExecutableSchema({
  typeDefs: GraphqlSchema,
  resolvers,
});
