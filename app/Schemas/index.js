const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('../Resolvers')
const { UserSchema, UserQuery, UserMutation } = require('./Users')
const { EnderecoSchema, EnderecoQuery } = require('./Enderecos')

const typeDefs = `
  ${UserSchema}
  ${EnderecoSchema}

  type Query {
    ${EnderecoQuery}
    ${UserQuery}
  }

  type Mutation{
    ${UserMutation}
  }
`

module.exports = makeExecutableSchema({ typeDefs, resolvers })
