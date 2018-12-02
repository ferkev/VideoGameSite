const { 
  GraphQLID,
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLInt, 
  GraphQLSchema,
  GraphQLBoolean, 
  GraphQLList, 
  GraphQLNonNull } = require('graphql');

  const CustomerType = new GraphQLObjectType({
    name: "Customer",
    fields: () => ({
      id: { type: GraphQLID },
      firstName: { type: GraphQLString },
      lastName: { type: GraphQLString },
      age: { type: GraphQLInt },
      email: { type: GraphQLString },
      password: { type: GraphQLString }
    })
  })

module.exports = CustomerType;