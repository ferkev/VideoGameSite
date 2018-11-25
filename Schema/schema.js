const { 
  GraphQLID,
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLInt, 
  GraphQLSchema,
  GraphQLBoolean, 
  GraphQLList, 
  GraphQLNonNull } = require('graphql');

const _ = require('lodash');

const customers = [
  { id:"1", firstname: "John", lastname: 'Doe', age: 23 }
]

const CustomerType = new GraphQLObjectType({
  name: "Customer",
  fields: () => ({
    id: { type: GraphQLID },
    firstname: { type: GraphQLString },
    lastname: { type: GraphQLString },
    age: { type: GraphQLInt },
  })
})

// Root Query
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    customers: {
      type: new GraphQLList(CustomerType),
      resolve(parent, args){
        return customers
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
});