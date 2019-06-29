const { UserMutations } = require('./User/user.schema')

const Mutation = `
  type Mutation {
    ${UserMutations}
  }
`
module.exports = Mutation
