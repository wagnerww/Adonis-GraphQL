const { makeExecutableSchema } = require('graphql-tools')
const { merge } = require('lodash')
const Query = require('./query')
const Mutation = require('./mutation')

const { userTypes } = require('./User/user.schema')
const userResolvers = require('./User/User.resolvers')

const { EnderecoTypes } = require('./Endereco/Endereco.schema')

const resolvers = merge(
  userResolvers
)

const SchemaDefinition = `
  type Schema {
    query:Query
    mutation:Mutation
  }
`

const typeDefs = [SchemaDefinition, Query, Mutation, userTypes, EnderecoTypes]

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
})
