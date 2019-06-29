const User = use('App/Models/User')

const resolversUsers = {

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

module.exports = resolversUsers
