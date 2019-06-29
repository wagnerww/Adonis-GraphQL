const UserSchema = `
  type User {
    id: ID!
    username: String!
    email: String!
  }
`
const UserQuery = `
  allUsers: [User]
  user(id: Int!): User
`

const UserMutation = `
  createUser (username: String!, email: String!, password: String!): User
`

module.exports = { UserSchema, UserQuery, UserMutation }
