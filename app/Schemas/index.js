const { makeExecutableSchema } = require('graphql-tools')
const resolvers = require('../Resolvers')
const { UserSchema, UserQuery } = require('./Users')
const { EnderecoSchema, EnderecoQuery } = require('./Enderecos')

const typeDefs = `
${UserSchema}
${EnderecoSchema}
type Query {
  ${EnderecoQuery}
  ${UserQuery}
}
`

module.exports = makeExecutableSchema({ typeDefs, resolvers })
