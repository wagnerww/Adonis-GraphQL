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

module.exports = { UserSchema, UserQuery }
