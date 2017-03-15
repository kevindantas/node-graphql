const {
  graphql,
  GraphQLSchema,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString
} =  require('graphql');
const UserType = require('./UserType');

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      user: {
        type: new GraphQLList(UserType),
        resolve() {
          return [{
            name: 'Kevin dawdaw',
            picture: 'image.png'
          }];
        }
      }
    }
  })
});


module.exports = schema;
