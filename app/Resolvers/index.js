const { resolversQueryUsers, resolversMutationUsers } = require('./Users')
const resolversEnderecos = require('./Enderecos')

const Query = {
  Query: {
    ...resolversQueryUsers,
    ...resolversEnderecos
  },

  Mutation: {
    ...resolversMutationUsers
  }
}

const resolvers = Query
module.exports = resolvers
