const User = use('App/Models/User')

const userResolver = {
  Query: {

    async allUsers () {
      const users = await User.all()

      return users.toJSON()
    },

    async user (_, { id }) {
      const user = await User.find(id)

      return user.toJSON()
    }
  },

  Mutation: {
    async createUser (_, { username, email, password }) {
      const user = await User.create({ username, email, password })
      return user
    }
  },

  User: {
    async enderecos (userInJson) {
      const user = new User()
      user.newUp(userInJson)

      const enderecos = await user.enderecos().fetch()

      return enderecos.toJSON()
    }
  }

}

module.exports = userResolver
