const User = use('App/Models/User')

const resolversQueryUsers = {
  // Fetch all users
  async allUsers () {
    const users = await User.all()

    return users.toJSON()
  },

  // Get a user by its ID
  async user (_, { id }) {
    const user = await User.find(id)

    return user.toJSON()
  }
}

const resolversMutationUsers = {
  async createUser (_, { username, email, password }) {
    const user = await User.create({ username, email, password })
    return user
  }
}

module.exports = { resolversQueryUsers, resolversMutationUsers }
