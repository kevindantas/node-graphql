const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLDatetime,
} = require('graphql');
const UserType = require('./UserType');

const MessageType = new GraphQLObjectType({
  name: 'message',
  fields: {
    id: { type: new GraphQLNonNull(GraphQLString) },
    sender: { type: UserType },
    receiver: { type: UserType },
    message: { type: GraphQLString },
    createdAt: { type: GraphQLDatetime },
  }
});
