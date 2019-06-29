const resolversUsers = require('./Users')
const resolversEnderecos = require('./Enderecos')

const Query = {
  Query: {
    ...resolversUsers,
    ...resolversEnderecos
  }
}

const resolvers = Query
module.exports = resolvers
