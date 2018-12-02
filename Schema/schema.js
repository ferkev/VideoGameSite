const { 
  GraphQLID,
  GraphQLObjectType, 
  GraphQLString, 
  GraphQLInt, 
  GraphQLSchema,
  GraphQLBoolean, 
  GraphQLList, 
  GraphQLNonNull } = require('graphql');

const bcrypt = require('bcrypt');
//models
const customers = require('../models/Customer');
const CustomerType = require('./Type/CustomerType');

//Mutation
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCustomers: {
      type: CustomerType,
      args: {
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        age: { type: GraphQLInt },
        email: { type: GraphQLString },
        password: { type: GraphQLString }
      },
      resolve(parent, args){

          let customer = new customers({
            firstName: args.firstName,
            lastName: args.lastName,
            age: args.age,
            email: args.email,
            password:  args.password
          });

          return customer.save() 
      }
    },
  }
})

// Root Query 
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    customer: {
      type: CustomerType,
      args: { email : { type: GraphQLString }, password: { type: GraphQLString} },
      async resolve(parent, args){
        let user = await customers.findOne({email: args.email})
        let valid = await bcrypt.compare(args.password, user.password)
        if(valid) return user
        else throw new Error('Bad password');
      }
    },
    customers: {
      type: new GraphQLList(CustomerType),
      async resolve(parent, args){
        let list = await customers.find()
        return list
      }
    },
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});