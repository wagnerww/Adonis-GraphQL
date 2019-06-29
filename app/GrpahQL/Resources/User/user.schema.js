const userTypes = `
# Definição do typo User
  type User {
    id: ID!
    username: String!
    email: String!
    enderecos:[ Endereco ]
  }
`

const UserQueries = `
  allUsers: [User]
  user(id: Int!): User
`

const UserMutations = `
  createUser (username: String!, email: String!, password: String!): User
`

module.exports = { userTypes, UserQueries, UserMutations }
